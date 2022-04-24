import React from 'react'
import { Bar } from "react-chartjs-2";



const TestGraph = ({
    /*fecha1, fecha2, fecha3, fecha4,
    data1, data2, data3, data4,*/
}) => {
    return (
    <div>
      <h1>GEEKSFORGEEKS BAR CHART REACTJS</h1>
      <div style={{ maxWidth: "650px" }}>
        <Bar
          const data={{
            // Name of the variables on x-axies for each bar
            labels: ["1st bar", "2nd bar", "3rd bar", "4th bar"],
            datasets: [
              {
                // Label for bars
                label: "total count/value",
                // Data or value of your each variable
                data: [1552, 1319, 613, 1400],
                // Color of each bar
                backgroundColor: ["aqua", "green", "red", "yellow"],
                // Border color of each bar
                borderColor: ["aqua", "green", "red", "yellow"],
                borderWidth: 0.5,
              },
            ],
          }}
        />
      </div>
    </div>
  );


        /*<div>
          <h1>Resultados tamizaje MOCA</h1>
          <div style={{ maxWidth: "650px" }}>
            <Bar
              data={{
                labels: ["22-09-2020", "22-03-2021", "22-09-2021", "22-03-2022"],
                datasets: [
                  {
                    label: "total de puntos por pruegba",
                    data: ["28", "27", "27", "25"],
                    backgroundColor: ["aqua", "green", "red", "yellow"],
                    borderColor: ["aqua", "green", "red", "yellow"],
                    borderWidth: 0.5,
                  },
                ],
              }}
              height={400}
              options={{
                maintainAspectRatio: false,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
                legend: {
                  labels: {
                    fontSize: 15,
                  },
                },
              }}
            />
          </div>
        </div>
      );*/
}

export default TestGraph