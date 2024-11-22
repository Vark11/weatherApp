import { ReactElement } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const HOURS = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];

interface ChartTemparatureProps {
  data: number[];
}

export function ChartTemperature({
  data,
}: ChartTemparatureProps): ReactElement {
  return (
    <div className="chart-temperature">
      <ChartTemp data={data} />
    </div>
  );
}

function ChartTemp({ data }: ChartTemparatureProps): ReactElement {
  return (
    <div className="chart-temperature-chart">
      <Line
        data={{
          labels: HOURS,
          datasets: [
            {
              data: data,
              label: "temperature",
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              backgroundColor: "rgb(255, 255, 255)",
              tension: 0.1,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              ticks: {
                color: "aliceblue",
              },
            },
            y: {
              ticks: {
                color: "aliceblue",
              },
            },
          },
        }}
      />
    </div>
  );
}
