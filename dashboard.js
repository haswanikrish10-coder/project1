var sidenav=document.querySelector(".side-navbar")
function shownavbar(){
    sidenav.style.left="0"
}
function closenavbar(){
    sidenav.style.left="-80%"
}
//sales line chart
const saleschart=document.getElementById("saleschart")
new Chart(saleschart,{
    type:"line",
    data:{
        labels:["Jan","Feb","Mar","Apr","May","Jun"],
        datasets:[{
            label:"Monthly sales",
            data:[120,190,300,250,400,500],
            borderColor: "blue",
            backgroundColor:"lightblue",
            fill:false,
            tension:0.4
        }]
    },
    options:{
        responsive: true
    }
});
// Revenue Pie Chart
const revenueChart = document.getElementById("revenuechart");

new Chart(revenueChart, {
    type: "pie",
    data: {
        labels: ["Electronics", "Clothing", "Groceries", "Others"],
        datasets: [{
            data: [35, 25, 20, 20],
            backgroundColor: [
                "#6A11CB",
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
    },
    options: {
        responsive: true
    }
});
function updateTime(){

    const now = new Date();

    document.getElementById("datetime").innerHTML =
        now.toLocaleDateString() + " | " +
        now.toLocaleTimeString();
}

updateTime();

setInterval(updateTime,1000);