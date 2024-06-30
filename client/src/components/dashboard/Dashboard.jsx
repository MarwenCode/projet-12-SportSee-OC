import React, { useEffect, useState } from "react";
import { fetchUserData } from "../../services/dataService.js";
import Infos from "../infos/Infos.jsx";
import Activity from "../activity/Activity.jsx";
import "./dashboard.scss";

const Dashboard = ({ userId }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await fetchUserData(userId);
        console.log(data);
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);



  console.log(user);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Error: User data not found</div>;
  }

  return (
    <div className="dashboard">
      <div className="left">
        <div className="welcome-section">
          <h3 className="welcome-message">
            Bonjour
            <span className="username">{user.data.userInfos.firstName}</span>,
          </h3>
          <p className="congratulations">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>

        <div className="activity">
          <Activity userId={userId} />
        </div>
      </div>

      <div className="right">
        <Infos user={user} />
      </div>
    </div>
  );
};

export default Dashboard;
