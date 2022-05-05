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
const TestGraph = (props) => {
    return (
      <div>
      <h1>Resultados tamizaje MOCA</h1>
      <div className='BarBox'>
        <Bar
          data={{
            labels: props.graphsDates,
            datasets: [
              {
                label: "total de puntos por prueba",
                data: props.GraphData,
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