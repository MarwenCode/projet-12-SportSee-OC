import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { fetchUserActivity } from "../../services/dataService";
import "./activity.scss";

const Activity = ({ userId }) => {
  const [activityData, setActivityData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserActivity(userId);
        setActivityData(
          data.sessions.map((session, index) => ({
            ...session,
            day: index + 1,
          }))
        );
      } catch (error) {
        console.error("Error fetching activity data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

//   const CustomTooltip = ({ active, payload }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="custom-tooltip">
//           <p className="label">{`Poids: ${payload[0].value} kg`}</p>
//           <p className="label">{`Calories brûlées: ${payload[1].value} KCal`}</p>
//         </div>
//       );
//     }

//     return null;
//   };

  const CustomLegend = () => (
    <div className="custom-legend">
      <div className="legend-item">
        <div className="circle black" />
        Poids (kg)
      </div>
      <div className="legend-item">
        <div className="circle red" />
        Calories brûlées (KCal)
      </div>
    </div>
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="activity">
      <h2 className="chart-title">Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={activityData}>
          <CartesianGrid horizontal={true} vertical={false} />
          <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
          <YAxis orientation="right" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} stroke="grey" />
          {/* <Tooltip content={<CustomTooltip />} /> */}
          <Tooltip/>
          <Legend content={<CustomLegend />} verticalAlign="top" align="right" />
          <Bar dataKey="kilogram" fill="#000" radius={[5, 5, 0, 0]} barSize={10} />
          <Bar dataKey="calories" fill="#ff0000" radius={[5, 5, 0, 0]} barSize={10} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Activity;