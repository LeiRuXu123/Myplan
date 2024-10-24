const chartData = {
    labels: ["Rental Cost", "Food and Beverages", "Subscription","Transportation", "Apartment Maintenance", "Other"],
    data: [30, 15, 5, 20, 10, 20],
}

const myChart = document.querySelector(".my-chart").getContext('2d')
const ul =document.querySelector(".expenses-type .details ul")

new Chart(myChart,{
    type: "doughnut",
    data: {
        labels: chartData.labels,
        datasets: [{
            label:`This take`,
            data: chartData.data,
            
        }]
    },
    options:{
        borderWidth: 10,
        borderRadius: 2,
        hoverBorderWidth: 0,
        plugins: {
            legend: {
                display: false,
            }
        }
    }
})

const expensesUl = () => {
    chartData.labels.forEach((l, i) => {
        let li = document.createElement("li");
        li.innerHTML = `${l}: <span class='percentages'>${chartData.data[i]}%</span>`;
        ul.appendChild(li);
    })
}

expensesUl();