import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { fetchUserAverageSessions } from '../../services/dataService';
import './session.scss';

const Session = ({ userId }) => {
  const [averageSessions, setAverageSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [backgroundPosition, setBackgroundPosition] = useState(0);

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
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };


  const handleMouseMove = (e) => {
    const containerWidth = e.currentTarget.clientWidth;
    const mouseX = e.nativeEvent.offsetX;
    const percentage = (mouseX / containerWidth) * 100;
    setBackgroundPosition(percentage);
  };

  return (
<div className="session-container" onMouseMove={handleMouseMove}   >
  <h2>Durée moyenne des sessions</h2>
  {isLoading ? (
    <p className="loading-text">Loading average sessions...</p>
  ) : (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={averageSessions} className="line-chart-container"  style={{ background: `linear-gradient(90deg, #ff0000 ${backgroundPosition}%, #e60000 ${backgroundPosition}%, #e60000 100%)` }}>     >
        <XAxis dataKey="dayLabel" tickLine={false} axisLine={false} tick={{ fill: "#FFFFFF" }} className="custom-xaxis" />
        <Tooltip content={<CustomTooltip />} />
        <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" className='recharts-line recharts-dot' />
      </LineChart>
    </ResponsiveContainer>
  )}
</div>

  );
};

export default Session;

