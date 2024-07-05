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

  const CustomTooltip = ({ payload }) => {
    if (payload.length) {
      return (
        <div
          style={{
            backgroundColor: "#ff0000",
            color: "#fff",
            padding: "15px",
            fontSize: "12px",
            margin: "6px",
            height: "100px",
            width: "70px",
          }}>
          <p style={{ marginBottom: "20px" }}>{` ${payload[0].value}kg`}</p>
          <p>{`${payload[1].value}KCal`}</p>
        </div>
      );
    }

    return null;
  };

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
      <h4 className="chart-title">Activité quotidienne</h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={activityData}>
          <CartesianGrid
            horizontal={true}
            vertical={false}
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
          />
          <YAxis
            dataKey="kilogram"
            yAxisId="calories"
            width={60}
            height={0}
            orientation="right"
            type="number"
            domain={["dataMin-1", "dataMax+1"]}
            allowDecimals={false}
            axisLine={false}
            tickLine={false}
            ticks={{ fill: "#9B9EAC", fontWeight: 500, fontSize: 14 }}
            interval={0}
            dx={40}
          />
          <YAxis hide={true} dataKey="calories" domain={[0, "dataMax+50"]} />

          <Tooltip content={<CustomTooltip />} />
          <Legend
            content={<CustomLegend />}
            verticalAlign="top"
            align="right"
          />
          <Bar
            dataKey="kilogram"
            fill="#000"
            radius={[5, 5, 0, 0]}
            barSize={10}
          />
          <Bar
            dataKey="calories"
            fill="#ff0000"
            radius={[5, 5, 0, 0]}
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Activity;

