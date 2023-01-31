/*-----Gráfica de líneas-----*/

const grafica_lineas = document.getElementById('grafica_lineas');

new Chart(grafica_lineas, {
  type: 'line',
  data: {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
              'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    datasets: [{
      label: '€ por Mes',
      data: [45897, 37989, 41789, 39912, 48912, 50956, 41955, 32978, 51023, 47765, 42998, 39923],
      borderWidth: 4,
      borderColor: 'rgb(12, 197, 149)'
    }]
  },
  options: {
      scales: {
          y: {
          beginAtZero: true
          }
      },

      plugins: {
          title: {
              display: true,
              text: 'Gráfica de Ingresos del año 2022',
              padding: {
                  top:10,
                  bottom:10
              }
          },
          subtitle: {
              display: true,
              text: 'Cantidad en € por meses'
          }
      }
  }
});

/*-----Gráfica de dos series-----*/

const grafica_multiple = document.getElementById('grafica_multiple');

new Chart(grafica_multiple, {
type: 'bar',
data: {
  datasets: [{
    label: 'Inscritos por mes',
    data: [65343,57098,63854,59094,70912,76933,44987,39876,64222,63091,62987,58434],
    order:2,
    backgroundColor: [
        'rgb(247,200,136)'
      ],
      borderColor: 'rgb(243,136,8)',
      borderWidth: 3
  },
  {
      label: "Media de inscritos por mes",
      data: [65343,61220,62098,61347,63260,65539,62603,59762,60257,60541,60763,60569],
      type: 'line',
      order:1,
      backgroundColor: [
        'rgb(136,171,247)',
      ],
      borderWidth: 3,
      borderColor: 'rgb(8,83,243)',
      
  }
  ],
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
          'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
},
options: {
    scales: {
        y: {
        beginAtZero: true
        }
    },

    plugins: {
        title: {
            display: true,
            text: 'Gráfica de Inscritos y media por mes',
            padding: {
                top:10,
                bottom:10,
            }
        },
        subtitle: {
            display: true,
            text: 'Inscritos'
        }
    }
}
});


/*-----Grafica de Quesitos-----*/

const grafica_quesitos = document.getElementById('grafica_quesitos');

new Chart(grafica_quesitos, {
type: 'pie',
data: {
  labels: ['5k', '10k', '21k', '42k'],
  datasets: [{
    label: 'Inscritos',
    data: [60043, 37880, 24543, 12734],
    borderWidth: 1,
    backgroundColor: [
    'rgb(21,31,232)',
    'rgb(89,96,246',
    'rgb(247,5,42)',
    'rgb(247,108,129)'
    ] ,
    borderWidth:2,
  }]
},
options: {
    scales: {
        y: {
        beginAtZero: true
        }
    },

    plugins: {
        title: {
            display: true,
            text: 'Gráfica de Inscritos por categoría',
            padding: {
                top:10,
                bottom:10,
            }
        },
        subtitle: {
            display: true,
            text: 'Inscritos por categorías'
        }
    }
}
});

/*-----Gráfica de barras horizontales----*/

const grafica_horizontal = document.getElementById('grafica_horizontal');

new Chart(grafica_horizontal, {
type: 'bar',
data: {
  labels: ['Junio','Mayo','Enero','Septiembre','Marzo','Octubre','Noviembre','Abril','Diciembre','Febrero','Julio','Agosto'],
  datasets: [{
    axis: 'y',
    label: 'Número de inscritos por mes',
    data: [76933,70912,65343,64222,63854,63091,62987,59094,58434,57098,44987,39876],
    fill: false,
    backgroundColor: [
        'rgb(111,247,5)',
        'rgb(118,247,17)',
        'rgb(133,246,46)',
        'rgb(156,243,88)',
        'rgb(168,239,113)',
        'rgb(183,237,141)',
        'rgb(238,136,136)',
        'rgb(241,108,108)',
        'rgb(241,75,75)',
        'rgb(240,51,51)',
        'rgb(240,37,37)',
        'rgb(243,8,8)',
    ],
    borderWidth:1,
    borderColor: 'rgb(0,0,0)',
    
  }]
},
options: {
    indexAxis: 'y',

    plugins: {
        title: {
            display: true,
            text: 'Ranking de Inscritos por mes',
            padding: {
                top:10,
                bottom:10,
            }
        },
        subtitle: {
            display: true,
            text: 'Inscritos por mes'
        }
    }
}
});