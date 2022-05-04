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
const TestGraph = ({date1, date2, date3, date4, data1, data2, data3, data4}) => {
    return (
      <div>
      <h1>Resultados tamizaje MOCA</h1>
      <div className='BarBox'>
        <Bar
          data={{
            labels: {date1, date2, date3, date4},
            datasets: [
              {
                label: "total de puntos por prueba",
                data: {data1, data2, data3, data4},
                backgroundColor: ["aqua", "green", "red", "yellow"],
                borderColor: ["aqua", "green", "red", "yellow"],
                borderWidth: 0.5,
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