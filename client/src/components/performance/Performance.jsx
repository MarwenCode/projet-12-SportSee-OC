import React, { useState, useEffect } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { fetchUserPerformance } from "../../services/dataService";
import "./performance.scss"; 

const Performance = ({ userId }) => {
  const [userPerformance, setUserPerformance] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPerformanceData = async () => {
      try {
        const performanceData = await fetchUserPerformance(userId);
        if (performanceData) {
          setUserPerformance(performanceData.data.data);
          console.log(userPerformance);
        } else {
          console.error(`User performance data not found for userId ${userId}`);
        }
      } catch (error) {
        console.error("Error fetching performance data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPerformanceData();
  }, [userId]);

  if (isLoading) {
    return <p>Loading performance data...</p>;
  }

  // Mapper les kind aux libellés correspondants
  const kindLabels = {
    1: "intensité",
    2: "Vitesse",
    3: "Force",
    4: "Endurance",
    5: "Energie",
    6: "Cardio",
  };

  // Mapper les données pour inclure les libellés de kind
  const mappedPerformance = userPerformance.map((item) => ({
    ...item,
    kindLabel: kindLabels[item.kind],
  }));

  return (
    <div className="radarChart">
      <ResponsiveContainer width="85%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="80%"
          data={mappedPerformance}
          >
            <PolarGrid radialLines={false} stroke="#FFF" />
          <PolarAngleAxis
            dataKey="kindLabel"
            tick={{ fill: "white" }}
            tickMargin={20}
          />
          <Radar
           
            dataKey="value"
            stroke="#FF0000"
            fill="#FF0000"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Performance;
