import React, { useContext, useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { ThemeContext } from '../../../../context/themeContext';
import axios from 'axios';
import { format } from 'date-fns';
import { datas } from '../../../data';

import useScreenSize from '../../../../hooks/useScreenSize';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export const BarChart = () => {
  const { width, height } = useScreenSize();

  const { theme } = useContext(ThemeContext);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchWalletData = async () => {
      try {
        const res = await axios.get('https://cmw.uax.network/wallets/all');
        const wallets = res.data;

        const grouped = wallets.reduce((acc, wallet) => {
          const date = new Date(wallet.timestamp);
          const key = format(date, 'MMM yyyy');
          acc[key] = (acc[key] || 0) + 1;
          return acc;
        }, {});

        const sortedMonths = Object.keys(grouped).sort(
          (a, b) => new Date(`1 ${a}`) - new Date(`1 ${b}`)
        );

        const counts = sortedMonths.map(month => grouped[month]);

        setChartData({
          labels: sortedMonths,
          datasets: [
            {
              label: 'Addresses Created',
              data: counts,
              backgroundColor: '#D164FF',
              barThickness: 15
            },
          ],
        });
      } catch (error) {
        console.error('Failed to fetch wallet data:', error);
      }
    };

    fetchWalletData();
  }, []);

  return (
    <div
      style={{
        //   overflow: 'hidden',
        position: 'relative',
      }}
      className='sm:text-[16px] text-[12px]'
    >
      <h4
        style={{
          color: theme === 'dark' ? '#fff' : '#000',
          marginBottom: 10,
        }}
      >
        Addresses
      </h4>
      <div style={{ width: '100%', height: '50vh' }}>
        <Bar
          data={chartData}
          options={
            datas.chartData[2].options(theme)
          }
        />
      </div>
    </div>
  );

};
