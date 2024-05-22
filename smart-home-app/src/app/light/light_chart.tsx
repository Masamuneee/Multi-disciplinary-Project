'use client' 

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['0', '1', '2', '3', '4', '5'],
    datasets: [
      {
        label: 'Biểu đồ ánh sáng',
        data: [0, 1, 2, 3, 4, 5],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Biểu đồ ánh sáng',
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'X Axis',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Y Axis',
        },
        min: 0,
        max: 5,
      },
    },
  };

  return (
    <div>
        <h1>Biểu đồ ánh sáng</h1>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
