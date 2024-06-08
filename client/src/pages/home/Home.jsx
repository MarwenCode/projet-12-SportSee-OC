import React from 'react'
import Dashboard from '../../components/dashboard/Dashboard'
import Session from '../../components/session/Session';
import "./home.scss";

const Home = () => {
    const userId = 18;
  return (
    <div className='home'>
        <Dashboard userId={userId} />

        <div className="down">

          <div className="session">
          <Session userId={userId} />

          </div>
          <div className="performance">

          </div>

          <div className="score">
            
          </div>
     

        </div>
      

    </div>
  )
}

export default Home