'use client'

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {

  const [light, setLight] = useState<number[]>([]);

  useEffect(() => {
    axios.get('https://io.adafruit.com/api/v2/Masamunee/feeds/yolo-led/data', {
      headers: {
        'X-AIO-Key': 'aio_nEoS85ZuthPjqcecub7GFhvgpCcS'
      }
    }).then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        const value = response.data[i].value;

        if (!isNaN(Number(value))) {
          setLight((prev) => [...prev, Number(value)]);
        }
      }
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const len = [];
  for (let i = 0; i < light.length; i++) {
    len.push(i + 1);
  }
  console.log(light);
  const data = {
    labels: len,
    datasets: [
      {
        label: 'Biểu đồ ánh sáng',
        data: light,
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
          text: 'Lần đo',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Giá trị ánh sáng (%)',
        },
        min: 0,
        max: 100,
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