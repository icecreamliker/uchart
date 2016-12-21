var Chart = require('../index');

var c = new Chart.LineChart(document.getElementById('container'));

c.setOption({
  unit: 'TB',
  title: '单位(GB), 时间间隔300s',
  xAxis: {
    color: '#f2f3f4',
    data: ['12:00', '12:15', '12:30', '12:45', '13:00', '13:15', '13:30', '13:45', '14:00', '14:15']
  },
  yAxis: {
    color: '#f2f3f4',
    tickPeriod: 10,
    tickColor: '#939ba3',
    data: ['12:00', '12:15', '12:30', '12:45', '13:00', '13:15', '13:30', '13:45', '14:00', '14:15']
  },
  series: [{
    color: '#1797c6',
    data: [-2, -1, 22, 14, -11, 8, 22, -11, 13, 4],
    opacity: 0.05
  }, {
    color: '#42b9e5',
    data: [-17, -29, -27, -1, 28, -25, -8, 4, 4, 40],
    opacity: 0.05
  }, {
    color: '#ff5a67',
    data: [32, 15, -13, -21, -12, 47, -7, 24, -2, -27],
    opacity: 0.05
  }],
  period: 1600,
  easing: 'easeOutCubic'
});

setTimeout(function() {
  c.setOption({
    unit: 'TB',
    title: '单位(GB), 时间间隔300s',
    xAxis: {
      color: '#f2f3f4',
      data: ['12:00', '12:15', '12:30', '12:45', '13:00', '13:15', '13:30', '13:45', '14:00', '14:15']
    },
    yAxis: {
      color: '#f2f3f4',
      tickPeriod: 10,
      tickColor: '#939ba3',
      data: ['12:00', '12:15', '12:30', '12:45', '13:00', '13:15', '13:30', '13:45', '14:00', '14:15']
    },
    series: [{
      color: '#1797c6',
      data: [-2, -1, -22, 14, -11, 8, 22, -11, 13, 4],
      opacity: 0.05
    }, {
      color: '#42b9e5',
      data: [-17, -29, -27, -1, -28, -25, -8, 4, 4, 40],
      opacity: 0.05
    }, {
      color: '#ff5a67',
      data: [32, 15, -13, 21, 12, 47, -7, 24, -2, -27],
      opacity: 0.05
    }],
    period: 1600,
    easing: 'easeOutCubic'
  });
}, 2000);
