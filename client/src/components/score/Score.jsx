import React, { useEffect, useState } from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import { fetchUserData } from "../../services/dataService";
import "./score.scss";

const Score = ({ userId }) => {
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserScore = async () => {
      try {
        const userData = await fetchUserData(userId);
        console.log(userData);
        setScore(userData.data.score);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getUserScore();
  }, [userId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  if (score === null) {
    return <p>No data available</p>;
  }

  const data = [
    {
      name: "Score",
      value: score * 100,
      fill: "#ff0000",
    },
  ];

  const backgroundColor = "red";

  return (
    <div className="container" style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="70%"
          outerRadius="80%"
          data={data}
          startAngle={80}
          endAngle={540}
          background={{
            fill: "#f2f2f2",
          }}>
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />

          <RadialBar
            clockWise={true}
            dataKey="value"
            cornerRadius={10}
        
       
          />

          <circle cx="50%" cy="50%" fill="white" r="95"></circle>

          <text
            x={window.innerWidth <= 1200 ? 35 : 70}
            y={window.innerWidth <= 1200 ? 25 : 50}
            fontSize={window.innerWidth <= 1200 ? "15" : "22"}
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle">
            Score
          </text>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="40"
            fontWeight="bold">
            {score * 100}%
          </text>
          <text
            x="50%"
            y="60%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="19"
            fontWeight="bold"
            fill="grey">
            de votre
          </text>
          <text
            x="50%"
            y="65%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="19"
            fontWeight="bold"
            fill="grey">
            objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Score;


