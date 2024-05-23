// export default function HumidityPage() {
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

interface HumidData {
  value: string;
  created_at: string;
}

export default function HumidPage() {
  const [humid, setHumid] = useState<number | null>(null);
  const [data, setData] = useState<HumidData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHumid = async () => {
      try {
        const response = await fetch('https://io.adafruit.com/api/v2/QHUY/feeds/dht20-humi/data', {
          headers: {
            'X-AIO-Key': 'aio_DEtG19QPRqydIhJcFALxsoBSwOG7',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch humid data');
        }
        const data: HumidData[] = await response.json();
        setData(data);
        const latestHumid = parseFloat(data[0]?.value);
        if (!isNaN(latestHumid)) {
          setHumid(latestHumid);
        } else {
          setError('Invalid humid value');
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
    fetchHumid();
    const interval = setInterval(fetchHumid, 10000); // Update data every 10 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const gaugeValue = humid !== null ? humid / 100 : 0;

  const chartData = {
    labels: data.slice(0, 9).map(entry => new Date(entry.created_at).toLocaleTimeString()).reverse(),
    datasets: [{
      label: 'Humiderature',
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
        text: 'Humiderature Chart',
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
          text: 'Humiderature (°C)',
        },
        min: 25,
        max: 100,
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
            formatTextValue={(value: number) => `${(value * 1).toFixed(1)} %`}
            arcPadding={0.01}
            arcsLength={[
              40 / 100, // Red section
              30 / 100, // Red section to Green transition
              30 / 100  // Green section
            ]}
          />
        </div>
        <div style={streamContainerStyle}>
          <h2>Stream Data</h2>
          <ul>
            {data.map((item, index) => (
              <li key={index} style={streamItemStyle}>
                <div><strong>Feed Name:</strong> Humiderature</div>
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
