// Dashboard.js
import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const data = [
  { date: '6/30/2024', orders: 1.6, sales: 1.4 },
  { date: '7/6/2024', orders: 1.2, sales: 1.2 },
  { date: '7/7/2024', orders: 0.8, sales: 0.8 },
  { date: '7/13/2024', orders: 0.8, sales: 0.6 },
  { date: '7/21/2024', orders: 0.8, sales: 0.4 },
  { date: '7/27/2024', orders: 0.8, sales: 0.2 },
];

const pieData = [
  { name: 'WooCommerce Store', value: 55.8 },
  { name: 'Shopify Store', value: 44.2 },
];

const COLORS = ['#FF8A8A', '#54D2D2'];

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gray-100 dashboard">
      <div className="flex-shrink-0">
        <h1 className="text-2xl font-semibold mb-5 main">Dashboard</h1>
      </div>

      {/* Sidebar */}
      <div className={`fixed md:static md:w-64 bg-white shadow-md transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600 focus:outline-none focus:bg-gray-200"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 md:p-10">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Sales vs Orders Chart */}
          <div className="bg-white p-4 rounded-lg shadow sub">
            <h2 className="text-lg font-semibold mb-2">Sales vs Orders <span className="text-gray-400">ⓘ</span></h2>
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
                <Label
                  value="Orders - 4"
                  position="insideLeft"
                  style={{ textAnchor: 'middle' }}
                  offset={90}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Portion of Sales Chart */}
          <div className="bg-white p-4 rounded-lg shadow sub">
            <h2 className="text-lg font-semibold mb-2">Portion of Sales <span className="text-gray-400">ⓘ</span></h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Label
                  value="Total"
                  position="center"
                  style={{ fontSize: '16px', fill: '#000' }}
                />
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
