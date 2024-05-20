import React from 'react'
import Dashboard from '../../components/dashboard/Dashboard'

const Home = () => {
    const userId = 12;
  return (
    <div>
        <Dashboard userId={userId} />

    </div>
  )
}

export default Home