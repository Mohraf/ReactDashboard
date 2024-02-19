import React, { useState } from 'react'
import SideBar from '@/components/layout/SideBar';
import ContentWrapper from '@/components/layout/ContentWrapper';
import { useQuery } from "@tanstack/react-query"

const LeaveType = () => {
  const { data: leaveTypes, isLoading, error } = useQuery({
    queryFn: () =>
        fetch('http://localhost:8000/api/portal/leave/getleavetype').then(
            (res) => {
              console.log(res);
              if(res.ok){
                console.log(res.json())
              }
            }
        ),
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
          Leave Type Page

          <table className='table-auto'>
            <thead>
              <th>Name</th>
              <th>Description</th>
              <th>Created By</th>
              <th>Date Created</th>
              <th>Date Modified</th>
              <th>Modified By</th>
              <th>Action</th>
            </thead>
            <tbody>
              {/* {console.log(leaveTypes.mtype)} */}
              {/* {leaveTypes.map((LeaveType) => { */}
                <tr>
                  <td>{LeaveType.mytype}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              {/* })} */}
            </tbody>
          </table>
        </ContentWrapper>
    </div>
  )
}

export default LeaveType;