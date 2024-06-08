import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { fetchUserAverageSessions } from '../../services/dataService';
import './session.scss';

const Session = ({ userId }) => {
  const [averageSessions, setAverageSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dayLabels = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchUserAverageSessions(userId);
        const data = response.data; 
        const transformedData = data.sessions.map((session) => ({
          ...session,
          dayLabel: dayLabels[session.day - 1] 
        }));
        setAverageSessions(transformedData);
      } catch (error) {
        console.error("Error fetching average sessions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  



  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p>{`Jour: ${payload[0].payload.dayLabel}`}</p>
          <p>{`Durée de la session: ${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="session-container">
      <h2>Activité quotidienne</h2>
      {isLoading ? (
        <p className="loading-text">Loading average sessions...</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={averageSessions} className="line-chart-container">
            <XAxis dataKey="dayLabel" tickLine={false} axisLine={false} />
            {/* <YAxis tickLine={false} axisLine={false} /> */}
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="sessionLength" stroke="#007bff" />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default Session;

