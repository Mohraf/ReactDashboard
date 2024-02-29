import React, { useState } from 'react'
import SideBar from '@/components/layout/SideBar';
import ContentWrapper from '@/components/layout/ContentWrapper';
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useQuery } from "@tanstack/react-query"
import axios from '@/api/axios';

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "Description",
    header: "Description",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("description")}</div>
    ),
  },
  {
    accessorKey: "created_by",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created By
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("created_by")}</div>,
  },
  {
    accessorKey: "date_created",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date Created
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("date_created")}</div>,
  },
  {
    accessorKey: "date_modified",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date Modified
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("date_modified")}</div>,
  },
  {
    accessorKey: "modified_by",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Modified By
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("modified_by")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

const LeaveType = () => {
  const { data: leaveTypes, isLoading, error } = useQuery({
    queryFn: async () => {
      const token = localStorage.getItem('token'); // Retrieve token from storage
      if (!token) {
        throw new Error('Token not found'); // Handle case where token is not found
      }

      // Make GET request with token in headers
      const response = await axios.get('/leave/getleavetype', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    },
    queryKey: ['leaveTypes'],
  });

  return (
    <div className="flex h-screen bg-gray-200 dark:bg-gray-900">
      <SideBar></SideBar>
      <ContentWrapper>
        <h3>Leave Type Page</h3>
        <div className='shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
          <table className='table-fixed border-separate border-spacing-1 border border-slate-500 mt-4 rounded-sm'>
            <thead>
              <tr>
                <th className='border border-slate-600'>Name</th>
                <th className='border border-slate-600'>Description</th>
                <th className='border border-slate-600'>Created By</th>
                <th className='border border-slate-600'>Date Created</th>
                <th className='border border-slate-600'>Date Modified</th>
                <th className='border border-slate-600'>Modified By</th>
                <th className='border border-slate-600'>Action</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? <h2>Loading...</h2> : error ? <div className="error">Error: error fetching</div> :
                leaveTypes.mtype.map((leaveType) => (
                  <tr key={leaveType.id}>
                    <td className='border border-slate-600 text-center rounded-sm p-2'>{leaveType.name}</td>
                    <td className='border border-slate-600 rounded-sm p-5'>{leaveType.description}</td>
                    <td className='border border-slate-600 text-center rounded-sm'>{leaveType.created_by}</td>
                    <td className='border border-slate-600 text-center rounded-sm'>{leaveType.date_created}</td>
                    <td className='border border-slate-600 text-center rounded-sm'>{leaveType.date_modified}</td>
                    <td className='border border-slate-600 text-center rounded-sm'>{leaveType.modified_by}</td>
                    <td className='border border-slate-600 text-center rounded-sm p-2'>Action</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default LeaveType;