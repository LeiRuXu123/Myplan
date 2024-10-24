let labels = [
  "January 2024",
  "February 2024",
  "March 2024",
  "April 2024",
  "May 2024",
];
let data = [1500000, 2000000, 2500000, 1500000, 2500000];
let data2 = [1300000, 1800000, 1200000, 1500000, 1000000];

// Creating line chart
let ctx = document.getElementById("myLineChart").getContext("2d");
let myLineChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Income",
        data: data,
        borderColor: "rgb(64, 114, 238)",
        borderWidth: 2,
        fill: false,
        tension: 0.5,
      },
      {
        label: "Spending",
        data: data2,
        borderColor: "rgb(229, 233, 242)",
        borderWidth: 2,
        fill: false,
        tension: 0.5,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false,
        scaleLabel: {
          display: true,
        },
      },
    },
  },
});
