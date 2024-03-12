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
import { useToast } from "@/components/ui/use-toast"
import axios from "@/api/axios"
import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"


const FormSchema = z.object({
    leavetype: z
        .string()
        .min(1, {message: "Please select Leave Type"})
        .max(10),
    start: z
        .date({
            required_error: "Leave start date is required.",
          }),
    end: z
        .date({
            required_error: "Leave end date is required.",
          }),
    daystaken: z
        .string()
        .min(1),
    reliever: z
        .string()
        .min(1, {message: "Please select Reliever"})
        .max(10),
    pendingjobs: z
        .string()
        .min(1, {message: "Please list pending jobs"})
        .max(255, {message: "Exeeded word limit"}),
    linemanager: z
        .string()
        .min(1, {message: "Please select Line Manager"})
        .max(10),
    approver: z
        .string()
        .min(1, {message: "Please select Approver"})
        .max(10),
}).refine((data) => data.end >= data.start, {
    message: "End date cannot be earlier than start date.",
    path: ["end"]
})

export function CategoryModal() {
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            leavetype: "",
            start: "",
            end: "",
            daystaken: "0",
            reliever: "",
            pendingjobs: "",
            linemanager: "",
            approver: "",
        },
    })

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

    const { toast } = useToast()

    const onSubmit = async (data) => {
        const token = localStorage.getItem('token');
        let timeDifference = data.end.getTime() - data.start.getTime();
        let differenceInDays = Math.round(timeDifference / (1000 * 3600 * 24));
        data.daystaken = differenceInDays + 1;
        
        // type cast string values to integer
        data.leavetype = +data.leavetype
        data.reliever = +data.reliever
        data.linemanager = +data.linemanager
        data.approver = +data.approver
        console.log(data)
        
        const response = await axios.post('/leave/addleaverequest', 
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        console.log(response.data)
        if(response.errors) {
            toast({
                variant: "destructive",
                title: "Error submitting values"
            })
        } else{
            toast({
                title: "Your leave was posted successfully!",
                decription: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                    </pre>
                ),
            })
        }
    }
    
    return (
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Employee Broadcast</DialogTitle>
                <DialogDescription>
                    Add details to your broadcast here. Click submit when you're done.
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="grid grid-rows-4 gap-4">
                            <FormField
                                control={form.control}
                                name="leavetype"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Branch</FormLabel>
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
                                            
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="leavetype"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Department</FormLabel>
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
                                            
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="leavetype"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Section</FormLabel>
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
                                            
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="leavetype"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Position</FormLabel>
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
                                            
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="daystaken"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Input  placeholder="Message" {...field} />
                                        </FormControl>
                                        <FormDescription>.</FormDescription>
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
