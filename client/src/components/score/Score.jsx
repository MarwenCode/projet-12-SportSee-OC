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
    <div className="container" style={{ width: "100%", height: 300, }}>
      <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
      innerRadius="70%"
      outerRadius="80%"
      data={data}
      startAngle={80}
      endAngle={540}
      background={{
        fill: "#f2f2f2", 
      }}

    >
      <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />

      <RadialBar
  clockWise={true}
  dataKey="value"
  // fill="#ff0000"
  // background={{ fill: "#ffffff" }} 
  cornerRadius={10}
/>

<circle cx="50%" cy="50%" fill="white" r="95"></circle>


          <text
            x={window.innerWidth <= 1200 ? 35 : 70}
            y={window.innerWidth <= 1200 ? 25 : 50}
            fontSize={window.innerWidth <= 1200 ? "15" : "22"}
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            Score
          </text>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="40"
            fontWeight="bold"
          >
            {score * 100}%
          </text>
          <text
            x="50%"
            y="60%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="19"
            fontWeight="bold"
            fill="grey"
          >
            de votre
          </text>
          <text
            x="50%"
            y="65%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="19"
            fontWeight="bold"
            fill="grey"
          >
            objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Score;


{
  /* <RadialBarChart
          innerRadius={200}
          outerRadius={100}
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar
            background
            dataKey="value"
            fill="#ff0000"
            cornerRadius={20}
          />
          <text
            x={window.innerWidth <= 1200 ? 35 : 70}
            y={window.innerWidth <= 1200 ? 25 : 50}
            fontSize={window.innerWidth <= 1200 ? "15" : "22"}
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            Score
          </text>
          <text
            x={window.innerWidth <= 1200 ? 130 : 192}
            y={window.innerWidth <= 1200 ? 110 : 155}
            fontSize="40"
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {score * 100}%
          </text>
          <text
            x={window.innerWidth <= 1200 ? 130 : 190}
            y={window.innerWidth <= 1200 ? 145 : 185}
            fontSize="19"
            fontWeight="bold"
            fill="grey"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            de votre
          </text>
          <text
            x={window.innerWidth <= 1200 ? 130 : 190}
            y={window.innerWidth <= 1200 ? 165 : 205}
            fontSize="19"
            fontWeight="bold"
            fill="grey"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            objectif
          </text>
        </RadialBarChart> */
}
