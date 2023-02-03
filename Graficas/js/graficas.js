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
      borderColor: 'rgb(208,8,8)'
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
      },
      responsive: true,
      maintainAspectRatio: false
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
      borderWidth: 4,
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
    },
    responsive: true,
    maintainAspectRatio: false
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
    'rgb(150,202,45)',
    'rgb(255,153,51)',
    'rgb(102,102,255)',
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
    },
    responsive: true,
    maintainAspectRatio: false
}
});

/*-----Gráfica de barras horizontales----*/

const grafica_horizontal = document.getElementById('grafica_horizontal');

new Chart(grafica_horizontal, {
type: 'bar',
data: {
  labels: ['M. Sevillana','C. Valencia','C. Málaga',
          'M. Madrileña','M.M. Murcia','C. Barcelona','M. Getafe',
          'M.M. Parla'],
  datasets: [{
    axis: 'y',
    label: 'Número de inscritos por evento',
    data: [76933,70912,65343,61888,59094,56434,44987,39876],
    fill: false,
    backgroundColor: [
        'rgb(40,125,125)',
        'rgb(0,150,136)',
        'rgb(38,166,154)',
        'rgb(27,188,155)',
        'rgb(103,204,142)',
        'rgb(150,237,137)',
        'rgb(177,255,145)',
        'rgb(190,235,159)'
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
            text: 'Ranking de Inscritos por evento',
            padding: {
                top:10,
                bottom:10,
            }
        },
        subtitle: {
            display: true,
            text: 'Inscritos por evento'
        }
    },
    responsive: true,
    maintainAspectRatio: false
}
});

/*-----Gráfica de barras horizontales acordeon----*/

const grafica_menos = document.getElementById('grafica_menos');

new Chart(grafica_menos, {
type: 'bar',
data: {
  labels: ['C. Huévar', 'M.M Sanlucar', 'C. San Juan', 'C. Sotillo', 'C. Avilés'],
  datasets: [{
    axis: 'y',
    label: 'Número de inscritos por evento',
    data: [123, 345, 564, 776, 887],
    fill: false,
    backgroundColor: [
        'rgb(255,153,153)',
        'rgb(255,102,102)',
        'rgb(255,51,51)',
        'rgb(204,0,0)',
        'rgb(153,0,0)',
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
            text: 'Ranking de Inscritos por evento',
            padding: {
                top:10,
                bottom:10,
            }
        },
        subtitle: {
            display: true,
            text: 'Inscritos por evento'
        }
    },
    responsive: true,
    maintainAspectRatio: false
}
});

/*-----Gráfica de lineas acordeón-----*/

const grafica_anios = document.getElementById('grafica_anios');

new Chart(grafica_anios, {
    type: 'line',
  data: {
    labels: ['2017','2018','2019','2020','2021','2022'],
    datasets: [{
      label: 'Eventos por año',
      data: [89,140,165,200, 250, 270],
      borderWidth: 4,
      borderColor: 'rgb(102,0,51)'
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
              text: 'Gráfica de Eventos por años',
              padding: {
                  top:10,
                  bottom:10
              }
          },
          subtitle: {
              display: true,
              text: 'Eventos por año'
          }
      },
      responsive: true,
      maintainAspectRatio: false
  }
});

/*-----Gráfica hexagonal acordeón-----*/

const grafica_hexagonal = document.getElementById('grafica_hexagonal');

new Chart(grafica_hexagonal, {
    type: 'radar',
  data: {
    labels: ['Carrera General', 'Media Maratón', 'Maratón', 'Carrera Benéfica', 'Carrera Nocturna', 'Carrera Popular'],
    datasets: [{
      label: 'Eventos por tipo',
      data: [34,46,62,35,53,40],
      borderWidth: 3,
      borderColor: 'rgb(40, 122, 223)',
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
              text: 'Gráfica de Eventos por tipo',
              padding: {
                  top:10,
                  bottom:10
              }
          },
          subtitle: {
              display: true,
              text: 'Tipo de Eventos'
          }
      },
      responsive: true,
      maintainAspectRatio: false
  }
});

/*-----Gráfica bancaria-----*/

const grafica_banco = document.getElementById('grafica_banco');

new Chart(grafica_banco, {
    type: 'polarArea',
  data: {
    labels: ['Ing Direct', 'Santander', 'La Caixa', 'CajaRural'],
    datasets: [{
      label: 'Eventos por tipo',
      data: [6765,23123,11345,17456],
      backgroundColor: [
        'rgba(255,98,0,255)',
        'rgba(236,0,0,255)',
        'rgba(0,126,174,255)',
        'rgba(0,122,83,255)'
      ]
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
              text: 'Gráfica de cuentas Bancarias',
              padding: {
                  top:10,
                  bottom:10
              }
          },
          subtitle: {
              display: true,
              text: '€ en cuentas'
          }
      },
      responsive: true,
      maintainAspectRatio: false
  }
});

/*-----Botón-----*/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // Para safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}