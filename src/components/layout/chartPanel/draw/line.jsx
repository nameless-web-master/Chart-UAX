import React, { useState, useEffect, useRef, useContext } from "react";
import { Line } from "react-chartjs-2";
import { format } from "date-fns";
import { datas } from "../../../data";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { ThemeContext } from "../../../../context/themeContext";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

const socketUrl = "wss://websocket.uax.network/ws";

const LineChart = () => {
  const [transactions, setTransactions] = useState([]);
  const [timeRange, setTimeRange] = useState("all");
  const bufferedTransactions = useRef([]);
  const lastHash = useRef("");
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const socket = new WebSocket(socketUrl);
    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (Array.isArray(data)) {
          bufferedTransactions.current = data;
        }
      } catch (err) {
        console.error("WebSocket error:", err);
      }
    };
    return () => socket.close();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = bufferedTransactions.current;
      const newHash = JSON.stringify(newData.map(tx => `${tx.timestamp}-${tx.amount}`));
      if (newHash !== lastHash.current) {
        setTransactions([...newData]);
        lastHash.current = newHash;
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getFilteredData = () => {
    const now = Date.now();
    let timeLimit = 0;
    if (timeRange === "week") timeLimit = now - 7 * 24 * 60 * 60 * 1000;
    else if (timeRange === "month") timeLimit = now - 30 * 24 * 60 * 60 * 1000;
    else if (timeRange === "24H") timeLimit = now - 1 * 24 * 60 * 60 * 1000;

    const filtered = timeRange === "all"
      ? transactions
      : transactions.filter((tx) => tx.timestamp >= timeLimit);

    const grouped = filtered.reduce((acc, tx) => {
      const date = new Date(tx.timestamp);
      date.setHours(0, 0, 0, 0);
      const key = date.getTime();
      if (!acc[key]) acc[key] = { timestamp: key, count: 0 };
      acc[key].count += 1;
      return acc;
    }, {});

    return Object.values(grouped).sort((a, b) => a.timestamp - b.timestamp);
  };

  const chartData = getFilteredData();

  const chartJsData = {
    labels: chartData.map((item) => format(new Date(item.timestamp), "do MMM")),
    datasets: [
      {
        label: "Transactions",
        data: chartData.map((item) => item.count),
        fill: true,
        backgroundColor: "rgba(192, 6, 222, 0.2)",
        borderColor: "#C006DE",
        tension: 0.2,
        pointRadius: 0,
        borderColor: '#CE2A96',
        backgroundColor: 'transparent',
        borderWidth: 1,
        pointHoverRadius: 0,

      },
    ],
  };

  return (
    <div className="chart-state-field">
      <div className="flex justify-between mb-[10px]">
        <h4 className="text-white sm:text-[16px] text-[12px]">Transaction Volume</h4>
        <div
          className="flex min-w-[148px] justify-center py-[5px] px-[8px] sm:gap-[16px] gap-[4px] state"
        >
          {["24H", "week", "month", "all"].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              // style={{
              //   padding: "5px 12px",
              //   borderRadius: 8,
              //   border: "1px solid #ccc",
              //   backgroundColor: timeRange === range ? "#C006DE" : "#fff",
              //   color: timeRange === range ? "#fff" : "#000",
              //   fontWeight: timeRange === range ? "bold" : "normal",
              //   cursor: "pointer",
              // }}
              className={timeRange === range ? 'active' : ''}

            >
              {range === "week"
                ? "7D"
                : range === "month"
                  ? "1M"
                  : range === "24H"
                    ? "1D"
                    : "All Time"}
            </button>
          ))}
        </div>
      </div>


      <div>
        <div style={{ width: '100%', height: '38vh' }}>
          <Line
            data={chartJsData}
            options={{ ...datas.chartData[1].options(theme) }}
          />
        </div>
      </div>
    </div>
  );
};

export default LineChart;
