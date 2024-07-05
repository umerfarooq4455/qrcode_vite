import React, { useEffect, useState } from "react";
import ApexCharts from "apexcharts";

interface ChartData {
  labels: string[];
  data: { x: string; y: number }[];
}

const MyChartComponent: React.FC = () => {
  const [timeframe, setTimeframe] = useState<string>("daily");
  const [chartData, setChartData] = useState<ChartData>({ labels: [], data: [] });

  const generateDailyData = (): ChartData => {
    const labels: string[] = [];
    const data: { x: string; y: number }[] = [];
    const currentDate = new Date();

    for (let i = 0; i < 30; i++) {
      const date = new Date(currentDate.getTime() - i * 24 * 60 * 60 * 1000);
      labels.unshift(
        `${date.getDate()} ${date.toLocaleString("default", {
          month: "short",
        })}`
      );
      data.unshift({
        x: `${date.getDate()} ${date.toLocaleString("default", {
          month: "short",
        })}`,
        y: Math.floor(Math.random() * 100), // Replace with real data
      });
    }

    return { labels, data };
  };

  const generateMonthlyData = (): ChartData => {
    const labels: string[] = [];
    const data: { x: string; y: number }[] = [];
    const currentDate = new Date();

    for (let i = 0; i < 12; i++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - i,
        1
      );
      labels.unshift(
        date.toLocaleString("default", { month: "short", year: "numeric" })
      );
      data.unshift({
        x: date.toLocaleString("default", { month: "short", year: "numeric" }),
        y: Math.floor(Math.random() * 3000), // Replace with real data
      });
    }

    return { labels, data };
  };

  const generateYearlyData = (): ChartData => {
    const labels: string[] = [];
    const data: { x: string; y: number }[] = [];
    const currentDate = new Date();

    for (let i = 0; i < 5; i++) {
      const year = currentDate.getFullYear() - i;
      labels.unshift(year.toString());
      data.unshift({
        x: year.toString(),
        y: Math.floor(Math.random() * 50000), // Replace with real data
      });
    }

    return { labels, data };
  };

  useEffect(() => {
    let labels: string[] = [];
    let data: { x: string; y: number }[] = [];
    switch (timeframe) {
      case "daily":
        ({ labels, data } = generateDailyData());
        break;
      case "monthly":
        ({ labels, data } = generateMonthlyData());
        break;
      case "yearly":
        ({ labels, data } = generateYearlyData());
        break;
      default:
        break;
    }
    setChartData({ labels, data });

    const buildChart = (selector: string, options: any) => {
      const chart = new ApexCharts(document.querySelector(selector), options);
      chart.render();
    };

    const chartOptions = {
      chart: {
        height: 250,
        type: "line",
        toolbar: {
          show: false,
        },
        style: {
          colors: "#5D5FEF",
          fontSize: "12px",
          fontFamily: "Inter, ui-sans-serif",
          fontWeight: 400,
        },
        zoom: {
          enabled: false,
        },
      },
      series: [
        {
          name: "Scans",
          data: chartData.data,
        },
      ],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 4,
      },
      title: {
        show: false,
      },
      legend: {
        show: false,
      },
      grid: {
        strokeDashArray: 0,
        borderColor: "#5D5FEF",
        padding: {
          top: -20,
          right: 0,
        },
      },
      xaxis: {
        type: "category",
        categories: chartData.labels,
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
        labels: {
          offsetY: 5,
          style: {
            colors: "#5D5FEF",
            fontSize: "13px",
            fontFamily: "Inter, ui-sans-serif",
            fontWeight: 400,
          },
        },
      },
      yaxis: {
        min: 0,
        tickAmount: 4,
        labels: {
          align: "left",
          minWidth: 0,
          maxWidth: 140,
          style: {
            colors: "#5D5FEF",
            fontSize: "12px",
            fontFamily: "Inter, ui-sans-serif",
            fontWeight: 400,
          },
          formatter: (value: number) => (value >= 1000 ? `${value / 1000}k` : value.toString()),
        },
      },
      markers: {
        size: 5,
        colors: ["#5D5FEF"],
        strokeColor: "#5D5FEF",
        strokeWidth: 2,
        hover: {
          size: 7,
        },
      },
      tooltip: {
        custom: function (props: any) {
          const { categories } = props.ctx.opts.xaxis;
          const { dataPointIndex } = props;
          const title = categories[dataPointIndex];

          return `<div class="min-w-28"><span>${title}: ${
            props.series[props.seriesIndex][props.dataPointIndex]
          }</span></div>`;
        },
      },
    };

    buildChart("#chart", chartOptions);
  }, [timeframe, chartData]);

  return (
    <>
      <div className="w-full p-4">
        {/* <div className="flex justify-around mb-4">
          <button onClick={() => setTimeframe('daily')} className="px-4 py-2 bg-blue-500 text-white rounded">Daily</button>
          <button onClick={() => setTimeframe('monthly')} className="px-4 py-2 bg-blue-500 text-white rounded">Monthly</button>
          <button onClick={() => setTimeframe('yearly')} className="px-4 py-2 bg-blue-500 text-white rounded">Yearly</button>
        </div> */}
        <div id="chart"></div>
      </div>
    </>
  );
};

export default MyChartComponent;
