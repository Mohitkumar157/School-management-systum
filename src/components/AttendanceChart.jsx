"use client";
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const data = [
  {
    name: "Mon",
    present: 60,
    absent: 40,
  },
  {
    name: "Tue",
    present: 70,
    absent: 60,
  },
  {
    name: "Wed",
    present: 90,
    absent: 75,
  },
  {
    name: "Thu",
    present: 90,
    absent: 75,
  },
  {
    name: "Fri",
    present: 65,
    absent: 55,
  },
];



function AttendanceChart() {
  return (
    <div>
      Attendance chart
    </div>
  )
}

export default AttendanceChart
