// GRÁFICO PIZZA
new Chart(document.getElementById("pizzaChart"), {
    type: "pie",
    data: {
        labels: ["Carboidratos", "Lipídios", "Proteínas", "Fibras"],
        datasets: [{
            data: [40, 35, 17, 8],
            backgroundColor: ["#004d26", "#000", "#2f6f44", "#9ccc9c"]
        }]
    }
});

// DONUT (CALORIAS)
new Chart(document.getElementById("donutChart"), {
    type: "doughnut",
    data: {
        labels: ["Consumido", "Restante"],
        datasets: [{
            data: [3532, 1000],
            backgroundColor: ["#0b5d2a", "#dcdcdc"]
        }]
    },
    options: {
        plugins: {
            legend: { display: false }
        }
    }
});

// GRÁFICO DE LINHA
new Chart(document.getElementById("linhaChart"), {
    type: "line",
    data: {
        labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"],
        datasets: [
            {
                label: "Saudáveis",
                data: [35, 30, 20, 60, 45, 70, 20],
                borderColor: "#3fb181ea",
                fill: false
            },
            {
                label: "Ultraprocessados",
                data: [65, 70, 80, 40, 55, 30, 80],
                borderColor: "#ffff00",
                fill: false
            }
        ]
    }
});