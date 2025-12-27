"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function WhoChart({ data }) {
  const chartData = data.map((item) => ({
    country: item.country,
    value: Number(item.value.replace(/[^0-9.]/g, "")),
  }));

  return (
    <div className="bg-white border rounded-xl shadow-lg p-4">
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart data={chartData}>
          <PolarGrid />

          <Radar
            name="Import Value"
            dataKey="value"
            stroke="#0ea5e9"
            fill="#0ea5e9"
            fillOpacity={0.5}
          />

          <PolarAngleAxis
            dataKey="country"
            tick={{ fill: "#000", fontSize: 12 }}
            tickMargin={12}
          />

          <PolarRadiusAxis
            angle={90}
            tick={{ fill: "#000", fontSize: 11 }}
          />

          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}