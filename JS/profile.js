document.addEventListener("DOMContentLoaded", () => {
  const co2PointsElement = document.getElementById("co2-points");
  const redeemPointsButton = document.getElementById("redeem-points");

  // Simulating points and chart data
  let co2Points = 1200;
  const pointsHistory = [100, 300, 500, 800, 1000, 1200];

  // Initialize Chart.js
  const ctx = document.getElementById("co2-chart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "CO2 Points",
          data: pointsHistory,
          borderColor: "#28a745",
          backgroundColor: "rgba(40, 167, 69, 0.2)",
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
      },
    },
  });

  // Redeem points functionality
  redeemPointsButton.addEventListener("click", () => {
    if (co2Points >= 100) {
      co2Points -= 100;
      co2PointsElement.textContent = co2Points;
      alert("You redeemed 100 points! Keep going green!");
    } else {
      alert("Not enough points to redeem!");
    }
  });
});
