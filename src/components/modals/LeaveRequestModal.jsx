"use client"

import { useRef, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"
import axios from "@/api/axios"
import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"

let leave_type_ids = []

const FormSchema = z.object({
    leave_type: z
        .string()
        .min(1, {message: "Please select Leave Type"})
        .max(10),
    leave_start: z
        .date({
            required_error: "Leave start date is required.",
          }),
    leave_end: z
        .date({
            required_error: "Leave end date is required.",
          }),
    days_applied: z
        .string()
        .min(1),
    reliever: z
        .string()
        .min(1, {message: "Please select Reliever"})
        .max(10),
    pending_jobs: z
        .string()
        .min(1, {message: "Please list pending jobs"})
        .max(255, {message: "Exeeded word limit"}),
    line_manager:
        z.string()
        .min(1),
    approver: z
        .string()
        .min(1, {message: "Please select Approver"})
        .max(10),
    
})

export function LeaveRequestModal() {
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            leave_type: "",
            line_manager: "",
            leave_start: "",
            leave_end: "",
            days_applied: "0",
            reliever: "",
            pending_jobs: "",
            line_manager: "",
            approver: "",
        },
    })
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Set time to midnight

    const [leaveType, setLeaveType] = useState()
    const [leaveStart, setLeaveStart] = useState(new Date())
    const [leaveEnd, setLeaveEnd] = useState(currentDate)
    const [daysRequested, setDaysRequested] = useState(0)
    const [reliever, setReliever] = useState()
    // const [pendingJobs, setPendingJobs] = useState()
    // const pendingJobsRef = useRef()
    const [lineManager, setLineManager] = useState()
    const [approver, setApprover] = useState()

    const [leaveTypes, setLeaveTypes] = useState([])
    const [employees, setEmployees] = useState([])
    const [approvers, setApprovers] = useState([])

    const { data: leaveRequestInfo, isLoading, error } = useQuery({
        queryFn: async () => {
            try {
                const token = localStorage.getItem('token')

                if (!token) {
                    throw new Error('Token not found');
                }

                const response = await axios.get('/leave/getleaverequest', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                return response.data;
            } catch (error) {
                throw new Error('Error fetching data: ' + error.message)
            }
        },
        queryKey: ['leaveRequestInfo'],
    })

    useEffect(() => {
        if (leaveRequestInfo) {
            const types = leaveRequestInfo.type.map((type) => {
                let id = type.id
                let name = type.name
                leave_type_ids.push(String(id))
                console.log(leave_type_ids)
                return {
                    id: id,
                    name: name,
                }
            })
            setLeaveTypes(types)

            const employees = leaveRequestInfo.employees.map((employee) => {
                let id = employee.user_id
                let name = employee.user_fname + " " + employee.user_lname
                return {
                    id: id,
                    name: name,
                }
            })
            setEmployees(employees)
            
            const approvers = leaveRequestInfo.approvers.map((approver) => {
                let id = approver.user_id
                let name = approver.user_fname + " " + approver.user_lname
                return {
                    id: id,
                    name: name,
                }
            })
            setApprovers(approvers)
        }
    }, [leaveRequestInfo])

    useEffect(() => {
        let timeDifference = leaveEnd.getTime() - leaveStart.getTime();
        let differenceInDays = Math.round(timeDifference / (1000 * 3600 * 24));
        setDaysRequested(differenceInDays + 1);
    }, [leaveStart, leaveEnd])

    const handleLeaveTypeChange = (selectedValue) => {
        setLeaveType(selectedValue)
    }

    const handleRelieverChange = (selectedValue) => {
        setReliever(selectedValue)
    }

    const handlePendingJobsChange = (e) => {
        setPendingJobs(e)
    }

    const handleLineManagerChange = (selectedValue) => {
        setLineManager(selectedValue)
    }

    const handleApproverChange = (selectedValue) => {
        setApprover(selectedValue)
    }

    const onSubmit = (data) => {
        toast({
            title: "You submitted the following values:",
            decription: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
        console.log(data.leave_start)
    }

    return (
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Leave Request</DialogTitle>
                <DialogDescription>
                    Add details to your leave request here. Click submit when you're done.
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="grid grid-rows-4 grid-flow-col gap-4">
                            <FormField
                                control={form.control}
                                name="leave_type"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Leave Type</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value} >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select leave type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {leaveTypes.map((leave) => (
                                                    <SelectItem key={leave.id} value={String(leave.id)} >{leave.name}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            You have selected {field.value}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="leave_start"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col mt-2">
                                        <FormLabel>Leave Start</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "pl-3 text-left font-normal",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(field.value, "PPP")
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormDescription>
                                            {/* Your selected leave starting date is {format(field.value, "PPP")}. */}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="leave_end"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col mt-2">
                                        <FormLabel>Leave End</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "pl-3 text-left font-normal",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(field.value, "PPP")
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormDescription>
                                            {/* Your selected leave ending date is {format(field.value, "PPP")}. */}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="days_applied"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>No. of days</FormLabel>
                                        <FormControl>
                                            <Input  placeholder="Days Applied" {...field} disabled />
                                        </FormControl>
                                        <FormDescription>You will be on leave for {daysRequested} days.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="reliever"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Reliever</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value} >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select reliever" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {employees.map((reliever) => (
                                                    <SelectItem key={reliever.id} value={String(reliever.id)} defaultValue={String(reliever.id)}>{reliever.name}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            {/* You have selected {reliever} */}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="pending_jobs"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Pending Jobs</FormLabel>
                                        <FormControl>
                                            <Input 
                                                type="text" 
                                                // ref={(element) => {
                                                //     pendingJobsRef.current = element
                                                // }}
                                                // onChangeCapture={e => setPendingJobs(e.currentTarget.value)} 
                                                placeholder="Pending Jobs" 
                                                {...field} 
                                            />
                                        </FormControl>
                                        {/* <FormDescription>Pending jobs are {field.value} .</FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="line_manager"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Line Manager</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value} >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select line manager" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {employees.map((lineManager) => (
                                                    <SelectItem key={lineManager.id} value={String(lineManager.id)} defaultValue={String(lineManager.id)}>{lineManager.name}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            {/* You have selected {lineManager} */}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="approver"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Approver</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value} >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select approver" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {approvers.map((approver) => (
                                                    <SelectItem key={approver.id} value={String(approver.id)} defaultValue={String(approver.id)}>{approver.name}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            You have selected {field.value}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <DialogFooter>
                            <Button type="submit">Submit</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </div>
        </DialogContent>
    )
}
