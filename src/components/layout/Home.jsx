import React from 'react'
import SideBar from './SideBar'
import ContentWrapper from './ContentWrapper'
import AdminDashboard from '../dashboard/AdminDashboard'

const Home = () => {
  return (
    <>
      <div className="flex h-screen bg-gray-200 dark:bg-gray-900">
        <SideBar></SideBar>
        <ContentWrapper>
          <AdminDashboard />
        </ContentWrapper>
      </div>
    </>
  )
}

export default Home