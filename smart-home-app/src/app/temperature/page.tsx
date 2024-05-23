// export default function TemperaturePage() {
//   return (
//     <div>
//       <p>Implement your page here.</p>
//     </div>
//   );
// }

'use client';

import React, { useEffect, useState } from 'react';
import GaugeChart from 'react-gauge-chart';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface TempData {
  value: string;
  created_at: string;
}

export default function TempPage() {
  const [temp, setTemp] = useState<number | null>(null);
  const [data, setData] = useState<TempData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTemp = async () => {
      try {
        const response = await fetch('https://io.adafruit.com/api/v2/QHUY/feeds/yolo-temp/data', {
          headers: {
            'X-AIO-Key': 'aio_DEtG19QPRqydIhJcFALxsoBSwOG7',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch temp data');
        }
        const data: TempData[] = await response.json();
        setData(data);
        const latestTemp = parseFloat(data[0]?.value);
        if (!isNaN(latestTemp)) {
          setTemp(latestTemp);
        } else {
          setError('Invalid temp value');
        }
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
        setLoading(false);
      }
    };
    fetchTemp();
    const interval = setInterval(fetchTemp, 10000); // Update data every 10 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const gaugeValue = temp !== null ? temp / 100 : 0;

  const chartData = {
    labels: data.slice(0, 9).map(entry => new Date(entry.created_at).toLocaleTimeString()).reverse(),
    datasets: [{
      label: 'Temperature',
      data: data.slice(0, 9).map(entry => parseFloat(entry.value)).reverse(),
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
    }],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Temperature Chart',
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Measurement',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Temperature (°C)',
        },
        min: 25,
        max: 30,
      },
    },
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
  } as React.CSSProperties;

  const blockStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '16px',
  } as React.CSSProperties;

  const gaugeStyle = {
    flex: '1',
    minWidth: '300px',
    height: 'auto',
  } as React.CSSProperties;

  const streamContainerStyle = {
    flex: '1',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: '#f9f9f9',
    height: '300px',
    overflowY: 'scroll',
    minWidth: '300px',
  } as React.CSSProperties;

  const streamItemStyle = {
    borderBottom: '1px solid #eee',
    padding: '8px 0',
    fontFamily: 'Arial, sans-serif',
    fontSize: '1em',
  } as React.CSSProperties;

  return (
    <div style={containerStyle}>
      <div style={blockStyle}>
        <div style={gaugeStyle}>
          <GaugeChart id="gauge-chart" 
            nrOfLevels={100}
            percent={gaugeValue}
            textColor="#000"
            needleColor="#345243"
            needleBaseColor="#345243"
            colors={['#FF0000', '#00FF00', '#FF0000']}
            arcWidth={0.2}
            animate={false}
            formatTextValue={(value: number) => `${(value * 1).toFixed(1)} *C`}
            arcPadding={0.01}
            arcsLength={[
              20 / 100, // Red section
              10 / 100, // Red section to Green transition
              70 / 100  // Green section
            ]}
          />
        </div>
        <div style={streamContainerStyle}>
          <h2>Stream Data</h2>
          <ul>
            {data.map((item, index) => (
              <li key={index} style={streamItemStyle}>
                <div><strong>Feed Name:</strong> Temperature</div>
                <div><strong>Value:</strong> {item.value}</div>
                <div><strong>Timestamp:</strong> {new Date(item.created_at).toLocaleString()}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
