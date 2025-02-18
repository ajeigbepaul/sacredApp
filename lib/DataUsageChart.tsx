// DataUsageChart.js
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type DataPoint =
  | { day: string; usage: number }
  | { month: string; usage: number }
  | { year: string; usage: number };

const DataUsageChart = () => {
  // Sample data for daily, monthly, and yearly usage
  const dailyData = [
    { day: "2023-10-01", usage: 200 },
    { day: "2023-10-02", usage: 300 },
    { day: "2023-10-03", usage: 150 },
    { day: "2023-10-04", usage: 400 },
    { day: "2023-10-05", usage: 250 },
  ];

  const monthlyData = [
    { month: "2023-01", usage: 5000 },
    { month: "2023-02", usage: 4500 },
    { month: "2023-03", usage: 6000 },
    { month: "2023-04", usage: 5500 },
  ];

  const yearlyData = [
    { year: "2020", usage: 60000 },
    { year: "2021", usage: 75000 },
    { year: "2022", usage: 80000 },
    { year: "2023", usage: 90000 },
  ];

  const [duration, setDuration] = useState("day");
  const [data, setData] = useState<DataPoint[]>(dailyData);

  const handleDurationChange = (event) => {
    const selectedDuration = event.target.value;
    setDuration(selectedDuration);

    // Update data based on selected duration
    switch (selectedDuration) {
      case "day":
        setData(dailyData);
        break;
      case "month":
        setData(monthlyData);
        break;
      case "year":
        setData(yearlyData);
        break;
      default:
        setData(dailyData);
    }
  };

  return (
    <div>
      <h1>Data Usage</h1>
      <select value={duration} onChange={handleDurationChange}>
        <option value="day">Daily</option>
        <option value="month">Monthly</option>
        <option value="year">Yearly</option>
      </select>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey={
              duration === "day"
                ? "day"
                : duration === "month"
                ? "month"
                : "year"
            }
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="usage"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DataUsageChart;
