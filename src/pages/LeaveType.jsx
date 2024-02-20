import React, { useState } from 'react'
import SideBar from '@/components/layout/SideBar';
import ContentWrapper from '@/components/layout/ContentWrapper';
import { useQuery } from "@tanstack/react-query"
import axios from '@/api/axios';

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

  if (isLoading) {
    return <h2>Loading...</h2>
}

  // To handle error
  if (error) {
      return <div className="error">Error: error fetching</div>
  }

  return (
    <div className="flex h-screen bg-gray-200 dark:bg-gray-900">
        <SideBar></SideBar>
        <ContentWrapper>
          <h3>Leave Type Page</h3>
          <div>
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
                {leaveTypes.mtype.map((leaveType) => (
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