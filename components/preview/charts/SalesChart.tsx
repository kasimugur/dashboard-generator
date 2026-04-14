"use client";

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { useEditorStore } from "@/store/useEditorStore";

const data = [
  { name: "Oca", total: 1200 },
  { name: "Şub", total: 2100 },
  { name: "Mar", total: 1800 },
  { name: "Nis", total: 2400 },
  { name: "May", total: 1700 },
  { name: "Haz", total: 3100 },
];

export default function SalesChart() {
  const { config } = useEditorStore();

  return (
    <div className="h-75 w-full pt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={config.themeColor} stopOpacity={0.3} />
              <stop offset="95%" stopColor={config.themeColor} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke={config.themeColor}
            fillOpacity={1}
            fill="url(#colorTotal)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}