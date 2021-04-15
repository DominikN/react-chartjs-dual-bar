import React, { Component } from "react";
import { Bar, Chart } from "react-chartjs-2";

const data = {
  labels: ["5 dev", "10", "100", "1000", "10000"],

  datasets: [
    {
      label: "Product A",
      type: "bar",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,0,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [40, 80, 800, 8000, 80000]
    },
    {
      label: "Product B",
      type: "bar",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [0, 10, 82, 622, 4222]
    }
  ]
};

const options = {
  scales: {
    xAxes: [
      {
        scaleLabel: {
          labelString: '',
          display: true
        } 
      }
    ],
    yAxes: [
      {
        type: 'logarithmic',
        position: 'bottom',
        ticks: {
          userCallback: function(tick) {
            var remain =
              tick / Math.pow(10, Math.floor(Chart.helpers.log10(tick)));
            if (remain === 1 || remain === 5) {
              return '$ ' + tick.toString();
            }
            return '';
          }
        },
        scaleLabel: {
          labelString: '',
          display: true
        }
      }
    ]
  }
};

export default class LineDemo extends Component {
  render() {
    return (
      <div>
        <Bar ref="chart" data={data} options={options}/>
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data;
    console.log(datasets[0].data);
  }
}
