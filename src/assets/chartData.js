export const mockChartData = [
  {
    type: 'line',
    data: {
      labels: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
      datasets: [
        {
          label: 'Planet Mass (x1,000 km)',
          lineTension: 0,
          data: [4.8, 12.1, 12.7, 6.7, 139.8, 116.4, 50.7, 49.2],
          backgroundColor: [
            '#A77DF2'
          ],
          borderColor: [
            'rgba(0,0,0,.1)'
          ],
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false,
            padding: 16
          }
        }]
      }
    }
  },
  {
    type: 'line',
    data: {
      labels: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
      datasets: [
        { // one line graph
          label: 'Number of Moons',
          data: [0, 0, 1, 2, 67, 62, 27, 14],
          lineTension: 0.1,
          backgroundColor: [
            '#9100f8'
          ],
          borderColor: [
            'rgba(0,0,0,.1)'
          ],
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false,
            padding: 16
          }
        }]
      }
    }
  }
]

export default mockChartData
