"use client";

import React, { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

/* ---------- SAFE PARSER ---------- */
function parseTradeValue(raw = "") {
  const cleaned = raw.replace(/[^0-9.]/g, "");
  const num = parseFloat(cleaned);

  if (raw.includes("M")) return num / 1000; // convert M → B
  return num; // already in B
}

export default function WhatChartClient({ data }) {
  const chartData = useMemo(
    () =>
      data.map((item) => ({
        name: item.product,
        value: parseTradeValue(item.value),
      })),
    [data]
  );

  return (
    <div className="bg-white border rounded-xl shadow-lg p-4">
      <h3 className="text-xl font-semibold text-black mb-4">
        Value in Billion USD
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
            tick={{ fontSize: 12 }}
            angle={-45}
            textAnchor="end"
          />

          <YAxis tickFormatter={(v) => `${v}B`} />

          <Tooltip formatter={(v) => `${v} Billion USD`} />

          <Bar
            dataKey="value"
            fill="#0067b8"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}