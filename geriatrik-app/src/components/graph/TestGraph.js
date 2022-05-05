import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

import { Chart, registerables } from 'chart.js'

import './TestGraph.css' 
import React from 'react'
import { Bar } from "react-chartjs-2";

Chart.register(...registerables)
const TestGraph = (props) => {
    return (
      <div>
      <h1>Resultados tamizaje MOCA</h1>
      <div className='BarBox'>
        <Bar
          data={{
            labels: props.graphDates,
            datasets: [
              {
                label: "total de puntos por prueba",
                data: props.graphResults,
                backgroundColor: ["#E494D3", "#957DAD", "#88BBE4", "#87DCC0"],
                borderColor: ["#E494D3", "#957DAD", "#88BBE4", "#87DCC0"],
                borderWidth: "2px",
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default TestGraph