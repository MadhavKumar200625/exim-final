"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function WhatChart({ data }) {
  const chartData = data.map((item) => ({
    name: item.product,
    value: Number(item.value.replace(/[^0-9.]/g, "")),
  }));

  return (
    <div className="bg-white border rounded-xl shadow-lg p-4">
      <h3 className="text-xl font-semibold mb-4">
        Import Value (Billion USD)
      </h3>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            interval={0}
            angle={-45}
            textAnchor="end"
            tick={{ fontSize: 12 }}
          />
          <YAxis tickFormatter={(v) => `${v}B`} />
          <Tooltip formatter={(v) => `${v} Billion USD`} />
          <Bar dataKey="value" fill="#0067b8" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}