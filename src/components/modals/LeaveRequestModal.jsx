"use client"

import { useState } from "react"
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
import axios from "@/api/axios"
import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"


const FormSchema = z.object({
    leave_type: z
        .string({
            required_error: "Please select Leave Type.",
        }).min(1),
    leave_start: z
        .date(),
    leave_end: z
        .date(),
})

export function LeaveRequestModal() {
    const form = useForm({
        resolver: zodResolver(FormSchema),
    })
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Set time to midnight

    const [leaveType, setLeaveType] = useState({})
    const [leaveStart, setLeaveStart] = useState(new Date())
    const [leaveEnd, setLeaveEnd] = useState(currentDate)
    const [daysRequested, setDaysRequested] = useState(0)
    const [reliever, setReliever] = useState()
    const [pendingJobs, setPendingJobs] = useState("")
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

    const handleLineManagerChange = (selectedValue) => {
        setLineManager(selectedValue)
    }

    const handleApproverChange = (selectedValue) => {
        setApprover(selectedValue)
    }

    const onSubmit = () => {
        console.log("form submit")
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
                        <FormField
                            control={form.control}
                            name="leave_type"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Leave Type</FormLabel>
                                    <Select onValueChange={handleLeaveTypeChange} >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select leave type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {leaveTypes.map((leave) => (
                                                <SelectItem key={leave.id} value={String(leave.id)} defaultValue={String(leave.id)}>{leave.name}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormDescription>
                                        You have selected {leaveType}
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
                                                selected={leaveStart}
                                                onSelect={setLeaveStart}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormDescription>
                                        Your selected leave starting date is {format(leaveStart, "PPP")}.
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
                                                selected={leaveEnd}
                                                onSelect={setLeaveEnd}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormDescription>
                                        Your selected leave ending date is {format(leaveEnd, "PPP")}.
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
                                        <Input value={daysRequested} placeholder="Days Applied" {...field} disabled />
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
                                    <Select onValueChange={handleRelieverChange} >
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
                                        You have selected {reliever}
                                    </FormDescription>
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
                                    <Select onValueChange={handleLineManagerChange} >
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
                                        You have selected {lineManager}
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
                                    <Select onValueChange={handleApproverChange} >
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
                                        You have selected {approver}
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <Button type="submit">Submit</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </div>
        </DialogContent>
    )
}
