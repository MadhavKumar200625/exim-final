"use client";

import React, { useMemo } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";

/* ---------- SAFE VALUE PARSER ---------- */
function parseTradeValue(raw = "") {
  const cleaned = raw.replace(/[^0-9.]/g, "");
  const num = parseFloat(cleaned);

  if (raw.includes("M")) return num / 1000; // M → B
  return num;
}

export default function WhoChartClient({ data }) {
  const chartData = useMemo(
    () =>
      data.map((item) => ({
        country: item.country,
        value: parseTradeValue(item.value),
      })),
    [data]
  );

  return (
    <div className="bg-white border rounded-xl shadow-lg p-4">
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart data={chartData}>
          <PolarGrid />

          <Radar
            name="Value in Billion USD"
            dataKey="value"
            stroke="#0ea5e9"
            fill="#0ea5e9"
            fillOpacity={0.5}
          />

          <PolarAngleAxis
            dataKey="country"
            tick={{ fill: "#000", fontSize: 12 }}
            tickMargin={20}
          />

          <PolarRadiusAxis
            angle={90}
            domain={[0, "auto"]}
            tick={{ fill: "#000", fontSize: 12 }}
            tickFormatter={(v) => `${v.toFixed(1)}B`}
          />

          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}