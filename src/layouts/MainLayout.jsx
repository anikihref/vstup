import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'


const MainLayout = () => {
  return (
    <>  
        <Header />
        <main className='main'>
            <div className="container">
                <Outlet />
            </div>
        </main>
    </>
  )
}

export default MainLayout