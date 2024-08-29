import React from 'react'
import { LineChart, XAxis, Tooltip, ResponsiveContainer, YAxis,Legend, Label,
   Line, CartesianGrid } from 'recharts'


const data = [
  { date: '6/30/2024', orders: 1.6, sales: 1.4 },
  { date: '7/6/2024', orders: 1.2, sales: 1.2 },
  { date: '7/7/2024', orders: 0.8, sales: 0.8 },
  { date: '7/13/2024', orders: 0.8, sales: 0.6 },
  { date: '7/21/2024', orders: 0.8, sales: 0.4 },
  { date: '7/27/2024', orders: 0.8, sales: 0.2 },
];


const Reports = () => {
  return (
    <div>
      <h2>Reports Page</h2>
        <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="orders" stroke="#FF8A8A" activeDot={{ r: 8 }} />
                <Line yAxisId="right" type="monotone" dataKey="sales" stroke="#54D2D2" />
                {/* Adding label */}
                <Label
                  content={<text textAnchor="middle" dominantBaseline="middle">Orders-4</text>}
                  position="top"
                />
                <p>orders-4</p>
              </LineChart>
            </ResponsiveContainer>

    </div>
  )
}

export default Reports