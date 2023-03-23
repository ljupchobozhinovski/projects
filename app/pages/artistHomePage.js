let myChart;


function initArtistHomePage() {
  const totalItemsSoldParagraph = document.querySelector("#totalItemsSold");
  const totalItemsParagraph = document.querySelector("#totalItems");
  const liveAuctioningDiv = document.querySelector("#liveAuctioningDiv");

  const artist = JSON.parse(localStorage.getItem("artist"));
  const itemsByArtist = items.filter((item) => item.artist === artist.name);

  if(itemsByArtist.find(item => item.isAuctioning)) {
    liveAuctioningDiv.classList.remove("d-none");
    document.querySelector("#currentBidValue").innerHTML = `$ ${highestCurrentBid}`
  } else {
    liveAuctioningDiv.classList.add("d-none");
  }
  const totalIncome = itemsByArtist.reduce(
    (accumulator, currentValue) => accumulator + currentValue.priceSold,
    0
  );

  const totalIncomeSpan = document.querySelector("#totalIncome");
  totalIncomeSpan.innerHTML = totalIncome;

  const itemsSoldByArtist = itemsByArtist.filter((item) =>
    Boolean(item.priceSold)
  );

  totalItemsSoldParagraph.innerHTML = itemsSoldByArtist.length;
  totalItemsParagraph.innerHTML = itemsByArtist.length;

  const ctx = document.getElementById("myChart");

  let data = {
    labels: [],
    datasets: [
      {
        label: "Amount in $",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        borderColor: "#fcebd5",
        backgroundColor: "#a16a5e",
        hoverBackgroundColor: "#d44c2e",
        maxBarThickness: "10",
      },
    ],
  };

  if (myChart) myChart.destroy();

  myChart = new Chart(ctx, {
    type: "bar",
    data: data,
    options: {
      maintainAspectRatio: false,
      responsive: true,
      indexAxis: "y",
      scales: {
        y: {
          fullSize: true,
          ticks: {
            autoSkip: false,
            beginAtZero: true,
            fullSize: true,
          },
        },
      },
    },
  });

  const last7 = document.querySelector("#last7");
  const last14 = document.querySelector("#last14");
  const last30 = document.querySelector("#last30");

  last7.addEventListener("click", () => generateChart(7));
  last14.addEventListener("click", () => generateChart(14));
  last30.addEventListener("click", () => generateChart(30));

  generateChart(14);

  function generateChart(days) {
    const labels = generateDates(days);
    myChart.data.labels = labels;

    const newData = labels.map((label) => {
      let sum = 0;
      itemsSoldByArtist.forEach((item) => {
        if (formatDate(item.dateSold) === label) {
          sum += item.priceSold;
        }
      });
      return sum;
    });

    myChart.data.datasets[0].data = newData;

    myChart.update();
  }

  function generateDates(daysAgo) {
    const arr = [];

    for (let i = 0; i < daysAgo; i++) {
      const start = new Date();
      const startDate = start.getDate();
      const currentDate = start.setDate(startDate - i);
      const formatted = formatDate(currentDate);

      arr.push(formatted);
    }

    return arr;
  }

}
