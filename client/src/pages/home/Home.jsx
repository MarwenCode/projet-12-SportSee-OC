import React from "react";
import Dashboard from "../../components/dashboard/Dashboard";
import Session from "../../components/session/Session";
import Performance from "../../components/performance/Performance";
import Score from "../../components/score/Score";

import "./home.scss";

const Home = () => {
  // const userId = import.meta.env.VITE_APP_USER_ID;
  const userId = parseInt(import.meta.env.VITE_APP_USER_ID, 10);

  return (
    <div className="home">
      <Dashboard userId={userId} />

      <div className="down">
        <div className="session">
          <Session userId={userId} />
        </div>
        <div className="performance">
          <Performance userId={userId} />
        </div>

        <div className="score">
          <Score userId={userId} />
        </div>
      </div>
    </div>
  );
};

export default Home;
