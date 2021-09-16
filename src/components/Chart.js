import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const Chart = () => {
  const data = [
    { name: "Redesigning", value: 4750 },
    { name: "Copywriting", value: 3750 },
    { name: "Redeveloping", value: 4750 },
  ];
  const COLORS = ['#9494cb', '#2ac9c9', '#f0176480',];

  return (
    <div>
      <PieChart width={210} height={215} style >
        <Pie
          data={data}
          cx={120}
          cy={120}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default Chart;
