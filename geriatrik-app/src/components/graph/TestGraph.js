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
    /*fecha1, fecha2, fecha3, fecha4,
    data1, data2, data3, data4,*/
const TestGraph = () => {
    return (
      <div>
      <h1>Resultados tamizaje MOCA</h1>
      <div className='BarBox'>
        <Bar
          data={{
            labels: ["22-09-2020", "22-03-2021", "22-09-2021", "22-03-2022"],
            datasets: [
              {
                label: "total de puntos por prueba",
                data: ["28", "27", "27", "25"],
                backgroundColor: ["aqua", "green", "red", "yellow"],
                borderColor: ["aqua", "green", "red", "yellow"],
                borderWidth: 0.5,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            // scales: {
            //   yAxes: [
            //     {
            //       ticks: {
            //         beginAtZero: true,
            //       },
            //     },
            //   ],
            // }, REVISAR COMO POONER SCALES CORRECTO O BORRAR AL FINAL
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