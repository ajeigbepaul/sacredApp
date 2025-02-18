// components/DataUsageHistogram.tsx
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Define the data structure
interface DataPoint {
  range: string;
  count: number;
}

const DataUsageHistogram: React.FC = () => {
  // Sample data for daily, monthly, and yearly usage (binned for histogram)
  const dailyData: DataPoint[] = [
    { range: '0-100', count: 5 },
    { range: '101-200', count: 10 },
    { range: '201-300', count: 7 },
    { range: '301-400', count: 3 },
    { range: '401-500', count: 2 },
  ];

  const monthlyData: DataPoint[] = [
    { range: '0-1000', count: 2 },
    { range: '1001-2000', count: 5 },
    { range: '2001-3000', count: 8 },
    { range: '3001-4000', count: 4 },
    { range: '4001-5000', count: 1 },
  ];

  const yearlyData: DataPoint[] = [
    { range: '0-20000', count: 1 },
    { range: '20001-40000', count: 3 },
    { range: '40001-60000', count: 5 },
    { range: '60001-80000', count: 4 },
    { range: '80001-100000', count: 2 },
  ];

  const [duration, setDuration] = useState<'day' | 'month' | 'year'>('day');
  const [data, setData] = useState<DataPoint[]>(dailyData);

  const handleDurationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDuration = event.target.value as 'day' | 'month' | 'year';
    setDuration(selectedDuration);

    // Update data based on selected duration
    switch (selectedDuration) {
      case 'day':
        setData(dailyData);
        break;
      case 'month':
        setData(monthlyData);
        break;
      case 'year':
        setData(yearlyData);
        break;
      default:
        setData(dailyData);
    }
  };

  return (
    <div>
      <h1>Data Usage Histogram</h1>
      <select value={duration} onChange={handleDurationChange}>
        <option value="day">Daily</option>
        <option value="month">Monthly</option>
        <option value="year">Yearly</option>
      </select>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="range" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DataUsageHistogram;