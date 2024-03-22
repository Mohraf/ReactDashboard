import React from 'react'
import SideBar from '@/components/layout/SideBar'
import ContentWrapper from '@/components/layout/ContentWrapper'

const Clients = () => {
  return (
    <>
      <div className="flex h-screen bg-gray-200 dark:bg-gray-900">
        <SideBar></SideBar>
        <ContentWrapper>
          <h3>Marketing Clients</h3>
        </ContentWrapper>
      </div>
    </>
  )
}

export default Clients