const langgananCanvasElement = document.getElementById("langgananChart")
new Chart(langgananCanvasElement, {
  type: 'bar',
    data: {
      labels: ['Januari', 'Februari', 'Maret ', 'April', 'Mei', 'Juni'],
      datasets: [{
        label: 'Jumlah Pelanggan',
        data: [5,10,12,8,9,10],
        borderWidth: 1
      }]
    }
})