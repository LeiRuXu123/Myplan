const labelsName = ["Shopping: ", "Food & Drink: ", "Transportasi: ", "Skincare: "];

const coursesData = {
  datasets: [
    {
      data: [300000, 200000, 150000, 100000],
      backgroundColor: ["#0C65BE", "#BEA9F8", "#2A5184", "#D4C8F7"],
    },
  ],
};



const config = {
  type: "doughnut",
  data: coursesData,
  options: {
    plugins: {
        tooltip: {
            callbacks: {
                label: function(context) {
                  console.log(context.dataIndex)
                    let label = context.dataset.label || '';
                        label += labelsName[context.dataIndex] + 'Rp ' + context.parsed;
                    
                    // if (context.parsed.y !== null) {
                    //     label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                    // }
                    return label;
                }
            }
        }
    }
}
};
const ctxDoughnut = document
  .getElementById("coursesDoughnutChart")
  .getContext("2d");

new Chart(ctxDoughnut, config);
