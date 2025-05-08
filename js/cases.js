// 初始化图表
var myChartLeft1 = echarts.init(document.getElementById('left1'));

// 定义图表配置
var optionLeft1 = {
  title: {
    text: '药材使用频率排行（前15）',
    left: 'center',
    top: '3%',
    textStyle: {
      fontSize: 18,
      color: '#333'
    }
  },
  tooltip: {
    trigger: 'axis',
    formatter: '{b} : {c} 次'
  },
  xAxis: {
    type: 'value',
    name: '使用\n频率',
    nameTextStyle: {
      color: '#666',
      fontSize: 14
    },
    position: 'bottom', // 将X轴标签放在底部
    axisLabel: {
      fontSize: 12
    }
  },
  yAxis: {
    type: 'category',
    data: [
      '人参', '黄芪', '当归', '白术', '茯苓',
      '甘草', '地黄', '川芎', '白芍', '黄芩',
      '半夏', '陈皮', '柴胡', '枳实', '桔梗'
    ],
    axisLabel: {
      fontSize: 12
    }
  },
  series: [{
    name: '使用频率',
    data: [71, 68, 60, 55, 50, 48, 45, 42, 40, 38, 35, 32, 30, 28, 25],
    type: 'bar',
    barWidth: '60%',
    showBackground: true,
    backgroundStyle: {
      color: 'rgba(255,215,215,0.2)'
    },
    itemStyle: {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#ff6b6b' },
        { offset: 0.7, color: '#ff3838' },
        { offset: 1, color: '#c23616' }
      ])
    },
    label: {
      show: true,
      position: 'right',
      color: '#c23616',
      fontWeight: 'bold'
    }
  }],
  grid: {
    containLabel: true,
    left: '3%',  // 减少左侧间距，使图表向左移动
    right: '7%', // 增加右侧间距以平衡
    top: '20%',
    bottom: '20%'
  }
};

// 设置图表选项
myChartLeft1.setOption(optionLeft1);

var myChartLeft2 = echarts.init(document.getElementById('left2'));

// 准备数据 - 药性与对应药材
var medicineData = {
  '温': ['当归', '黄芪', '党参', '白术', '甘草'],
  '寒': ['黄连', '黄柏', '栀子', '知母', '石膏'],
  '平': ['茯苓', '山药', '枸杞', '大枣', '灵芝'],
  '微寒': ['菊花', '桑叶', '金银花', '连翘', '板蓝根'],
  '凉': ['薄荷', '牛蒡子', '葛根', '柴胡', '淡竹叶'],
  '有毒': ['附子', '乌头', '半夏', '天南星', '巴豆'],
  '有小毒': ['吴茱萸', '苦杏仁', '桃仁', '白果', '苍耳子'],
  '微温': ['陈皮', '砂仁', '木香', '香附', '川芎'],
  '热': ['肉桂', '干姜', '花椒', '胡椒', '高良姜'],
  '有大毒': ['马钱子', '砒霜', '斑蝥', '蟾酥', '雄黄'],
  '大寒': ['石膏', '寒水石', '玄参', '羚羊角', '犀角']
};

// 颜色映射
var colorMap = {
  '温': '#ff8f8f',
  '寒': '#ff6b6b',
  '平': '#ffb3b3',
  '微寒': '#ff4444',
  '凉': '#ff6b6b',
  '有毒': '#c21807',
  '有小毒': '#8b0000',
  '微温': '#ffdada',
  '热': '#ff2400',
  '有大毒': '#660000',
  '大寒': '#ff4444'
};

// 初始选项 - 显示药性分布
var initialOption = {
  title: {
    text: '药材药性分布',
    subtext: '点击药性查看对应药材',
    left: 'center',
    textStyle: {
      fontSize: 18,
      fontWeight: 'bold'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c}种药材',
    backgroundColor: '#fff5f5',
    borderColor: '#ff6b6b'
  },
  legend: {
    top: '18%',
    left: 'center',
    orient: 'horizontal',
    textStyle: {
      color: '#8b0000'
    }
  },
  series: [{
    name: '药性分布',
    type: 'pie',
    radius: ['30%', '60%'],
    center: ['50%', '55%'],
    data: Object.keys(medicineData).map(function(key) {
      return {
        name: key,
        value: medicineData[key].length,
        itemStyle: { color: colorMap[key] },
        label: {
          show: true,
          formatter: '{b}: {c}种'
        }
      };
    }),
    itemStyle: {
      borderRadius: 8,
      borderColor: '#fff',
      borderWidth: 2
    },
    emphasis: {
      scale: true,
      scaleSize: 8
    }
  }]
};

// 设置初始选项
myChartLeft2.setOption(initialOption);

// 点击事件处理
myChartLeft2.on('click', function(params) {
  var property = params.name;
  var herbs = medicineData[property];

  // 创建药材列表选项
  var herbOption = {
    title: {
      text: property + '性药材',
      subtext: '共' + herbs.length + '种',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}'
    },
    series: [{
      name: '药材列表',
      type: 'pie',
      radius: ['30%', '60%'],
      center: ['50%', '55%'],
      data: herbs.map(function(herb) {
        return {
          name: herb,
          value: 1,
          itemStyle: { color: colorMap[property] }
        };
      }),
      itemStyle: {
        borderRadius: 8,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: true,
        formatter: '{b}'
      }
    }],
    graphic: [{
      type: 'text',
      left: '20%',
      top: '90%',
      style: {
        text: '← 返回药性分布',
        fontSize: 14,
        fill: '#8b0000',
        fontWeight: 'bold'
      },
      onclick: function() {
        myChartLeft2.setOption(initialOption);
      }
    }]
  };

  // 应用药材列表选项
  myChartLeft2.setOption(herbOption);
});

var myChartCenter = echarts.init(document.getElementById('map'));

// 真实数据
var herbNames = ['黄芪', '人参', '当归', '甘草', '白术', '茯苓', '熟地黄', '白芍', '川芎', '桂枝'];
var meridianNames = ['三焦', '肝', '大肠', '小肠', '心', '心包', '肺', '肾', '胃', '胆', '脾', '膀胱'];
var propertyData = {
  '黄芪': '温', '人参': '微温', '当归': '温', '甘草': '平',
  '白术': '温', '茯苓': '平', '熟地黄': '微温', '白芍': '微寒',
  '川芎': '温', '桂枝': '温'
};

// 真实药材归经影响度数据 (1-5分制)
var impactData = [
  // 黄芪
  [1, 3, 1, 1, 4, 1, 5, 3, 2, 1, 5, 2],
  // 人参
  [2, 3, 1, 1, 5, 2, 5, 4, 3, 1, 5, 2],
  // 当归
  [1, 5, 2, 1, 4, 1, 2, 3, 2, 2, 4, 1],
  // 甘草
  [2, 2, 2, 1, 4, 2, 4, 2, 4, 1, 4, 2],
  // 白术
  [1, 2, 3, 1, 2, 1, 2, 2, 5, 1, 5, 2],
  // 茯苓
  [2, 2, 2, 2, 4, 2, 3, 4, 2, 1, 4, 5],
  // 熟地黄
  [1, 4, 1, 1, 2, 1, 1, 5, 1, 1, 2, 2],
  // 白芍
  [1, 5, 1, 1, 3, 1, 1, 2, 2, 1, 4, 1],
  // 川芎
  [2, 5, 2, 1, 3, 4, 2, 2, 2, 4, 2, 2],
  // 桂枝
  [3, 3, 2, 2, 5, 3, 4, 2, 2, 2, 3, 5]
];

// 准备热力图数据
var heatmapData = [];
for (var i = 0; i < herbNames.length; i++) {
  for (var j = 0; j < meridianNames.length; j++) {
    heatmapData.push([j, i, impactData[i][j]]);
  }
}

optionCenter = {
  title: {
    text: '药材与归经关系矩阵',
    left: 'center',
    textStyle: {
      fontSize: 18,
    },
    subtext: '颜色深浅表示药材对归经的影响程度(1-5分)',
    subtextStyle: {
      fontSize: 12,
      color: '#666'
    }
  },
  tooltip: {
    position: 'top',
    formatter: function(params) {
      var herb = herbNames[params.value[1]];
      var meridian = meridianNames[params.value[0]];
      var impact = params.value[2];
      var property = propertyData[herb] || '未知';

      return [
        '<div style="font-weight:bold">药材-归经关系</div>',
        '<div style="margin:5px 0">药材: <span style="color:#c21807">' + herb + '</span></div>',
        '<div style="margin:5px 0">药性: <span style="color:#8b0000">' + property + '</span></div>',
        '<div style="margin:5px 0">归经: <span style="color:#8b0000">' + meridian + '</span></div>',
        '<div style="margin:5px 0">影响度: <span style="font-weight:bold">' + impact + '/5</span></div>'
      ].join('');
    },
    backgroundColor: '#fff5f5',
    borderColor: '#ff6b6b',
    textStyle: {
      color: '#333'
    }
  },
  grid: {
    height: '70%',
    top: '18%'
  },
  xAxis: {
    type: 'category',
    data: meridianNames,
    splitArea: { show: true },
    axisLabel: {
      rotate: 45,
      interval: 0
    }
  },
  yAxis: {
    type: 'category',
    data: herbNames,
    splitArea: { show: true }
  },
  visualMap: {
    min: 1,
    max: 5,
    calculable: true,
    orient: 'horizontal',
    left: 'center',
    bottom: '5%',
    inRange: {
      color: ['#f4d1d1', '#f8a5a5', '#f46d6d', '#f33a3a', '#FF0000', '#CC0000']
    },
    textStyle: {
      color: '#333'
    }
  },
  series: [{
    name: '影响度',
    type: 'heatmap',
    data: heatmapData,
    label: {
      show: true,
      formatter: function (params) {
        return params.value[2] >= 3 ? params.value[2] : ''; // 只显示3分及以上的数值
      },
      color: '#fff'
    },
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  }]
};

if (optionCenter && typeof optionCenter === 'object') {
  myChartCenter.setOption(optionCenter);
}

window.addEventListener('resize', myChartCenter.resize);

// 中药材数据
const herbData = {
  '人参': {
    properties: [0.1, 0.9, 0.8, 0.1], // 寒、热、温、凉
    flavors: [0.1, 0.2, 0.9, 0.3, 0.1], // 酸、苦、甘、辛、咸
    meridians: [0.8, 0.6, 0.7], // 心经、肝经、脾经
    effects: [0.2, 0.3, 0.9] // 清热解毒、活血化瘀、补气养血
  },
  '黄连': {
    properties: [0.9, 0.1, 0.2, 0.8],
    flavors: [0.1, 0.9, 0.1, 0.2, 0.1],
    meridians: [0.9, 0.7, 0.5],
    effects: [0.9, 0.4, 0.1]
  },
  '当归': {
    properties: [0.2, 0.7, 0.8, 0.2],
    flavors: [0.3, 0.5, 0.7, 0.6, 0.1],
    meridians: [0.7, 0.9, 0.6],
    effects: [0.3, 0.8, 0.7]
  },
  '黄芪': {
    properties: [0.1, 0.6, 0.8, 0.2],
    flavors: [0.1, 0.2, 0.9, 0.3, 0.1],
    meridians: [0.8, 0.5, 0.9],
    effects: [0.2, 0.4, 0.9]
  },
  '金银花': {
    properties: [0.8, 0.1, 0.2, 0.7],
    flavors: [0.1, 0.7, 0.5, 0.3, 0.1],
    meridians: [0.8, 0.6, 0.5],
    effects: [0.9, 0.3, 0.2]
  },
  '甘草': {
    properties: [0.2, 0.1, 0.7, 0.3],
    flavors: [0.2, 0.3, 0.9, 0.4, 0.1],
    meridians: [0.8, 0.7, 0.8],
    effects: [0.4, 0.3, 0.8]
  },
  '白术': {
    properties: [0.1, 0.3, 0.9, 0.2],
    flavors: [0.2, 0.4, 0.8, 0.5, 0.1],
    meridians: [0.7, 0.6, 0.9],
    effects: [0.3, 0.5, 0.9]
  },
  '茯苓': {
    properties: [0.5, 0.1, 0.6, 0.4],
    flavors: [0.3, 0.4, 0.7, 0.2, 0.1],
    meridians: [0.8, 0.6, 0.9],
    effects: [0.6, 0.4, 0.7]
  },
  '川芎': {
    properties: [0.2, 0.5, 0.8, 0.3],
    flavors: [0.3, 0.4, 0.5, 0.9, 0.1],
    meridians: [0.8, 0.9, 0.7],
    effects: [0.3, 0.9, 0.6]
  }
};

// 获取right1容器
const right1Container = document.getElementById('right1');
right1Container.style.position = 'relative';

// 创建下拉选择框容器
const selectContainer = document.createElement('div');
selectContainer.style.position = 'absolute';
selectContainer.style.top = '10px';
selectContainer.style.left = '0';
selectContainer.style.right = '0';
selectContainer.style.textAlign = 'center';
selectContainer.style.zIndex = '100';

// 创建下拉选择框
const selectLabel = document.createElement('label');
selectLabel.textContent = '选择中药材: ';
selectLabel.style.marginRight = '10px';
selectLabel.style.color = '#8b0000';
selectLabel.style.fontWeight = 'bold';

const herbSelect = document.createElement('select');
herbSelect.id = 'herb-select';
herbSelect.style.padding = '5px 10px';
herbSelect.style.borderRadius = '4px';
herbSelect.style.border = '1px solid #8b0000';
herbSelect.style.backgroundColor = '#fff';
herbSelect.style.color = '#8b0000';
herbSelect.style.cursor = 'pointer';

// 添加选项
Object.keys(herbData).forEach(herb => {
  const option = document.createElement('option');
  option.value = herb;
  option.textContent = herb;
  herbSelect.appendChild(option);
});

// 将下拉框添加到容器
selectContainer.appendChild(selectLabel);
selectContainer.appendChild(herbSelect);
right1Container.appendChild(selectContainer);

// 调整图表容器高度，确保下拉框不会遮挡
const chartContainer = document.createElement('div');
chartContainer.id = 'chart-container';
chartContainer.style.width = '100%';
chartContainer.style.height = 'calc(100% - 40px)'; // 留出下拉框空间
right1Container.appendChild(chartContainer);

// 初始化图表
const myChartRight1 = echarts.init(chartContainer);

// 图表配置
const optionRight1 = {
  title: {
    text: '中药特征雷达图',
    left: 'center',
    top: '95%', // 调整标题位置，避免与下拉框重叠
    textStyle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#8b0000'
    },
    subtextStyle: {
      fontSize: 12,
      color: '#666'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}<br/>值: {c}',
    backgroundColor: '#FFEBEE',
    borderColor: '#B71C1C',
    borderWidth: 1,
    textStyle: {
      color: '#4A148C',
      fontSize: 14
    }
  },
  legend: {
    top: 'bottom',
    show: false
  },
  color: [
    '#ffcccc', '#ff9999', '#ff6666', '#ff3333',
    '#cc0000', '#990000', '#660000', '#4d0000',
    '#330000', '#290000', '#1f0000', '#140000',
    '#0a0000', '#050000', '#000000'
  ],
  radar: {
    indicator: [
      { name: '药性（寒）', max: 1 },
      { name: '药性（热）', max: 1 },
      { name: '药性（温）', max: 1 },
      { name: '药性（凉）', max: 1 },
      { name: '药味（酸）', max: 1 },
      { name: '药味（苦）', max: 1 },
      { name: '药味（甘）', max: 1 },
      { name: '药味（辛）', max: 1 },
      { name: '药味（咸）', max: 1 },
      { name: '归经（心经）', max: 1 },
      { name: '归经（肝经）', max: 1 },
      { name: '归经（脾经）', max: 1 },
      { name: '功效（清热解毒）', max: 1 },
      { name: '功效（活血化瘀）', max: 1 },
      { name: '功效（补气养血）', max: 1 }
    ],
    shape: 'circle',
    splitNumber: 5,
    textStyle: {
      color: '#666',
      fontSize: 12
    },
    splitLine: {
      lineStyle: {
        color: '#8b0000',
        opacity: 0.3
      }
    },
    splitArea: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: '#8b0000',
        opacity: 0.5
      }
    }
  },
  series: [
    {
      name: '中药特征',
      type: 'radar',
      data: []
    }
  ]
};

// 更新图表函数
function updateChart(herbName) {
  const herb = herbData[herbName];
  const values = [
    ...herb.properties,
    ...herb.flavors,
    ...herb.meridians,
    ...herb.effects
  ];

  optionRight1.series[0].data = [{
    value: values,
    name: herbName,
    itemStyle: {
      color: function (params) {
        return optionRight1.color[params.dataIndex];
      },
      borderColor: '#fff',
      borderWidth: 2
    },
    label: {
      show: true,
      formatter: '{c}',
      fontSize: 12,
      color: '#8b0000',
      opacity: 1
    },
    areaStyle: {
      opacity: 0.1
    }
  }];

  // 更新标题显示当前选择的中药材
  optionRight1.title.subtext = `当前选择: ${herbName}`;

  myChartRight1.setOption(optionRight1, true);
}

// 初始加载默认第一个药材
updateChart(Object.keys(herbData)[0]);

// 监听下拉选择变化
herbSelect.addEventListener('change', function() {
  updateChart(this.value);
});

// 响应窗口大小变化
window.addEventListener('resize', function() {
  myChartRight1.resize();
});


// var myChartRight2 = echarts.init(document.getElementById('right2'));
// var optionRight2 = {
//   title: {
//     text: '中医病症频次排行（前10）',
//     left: 'center',
//     top: '3%',
//     textStyle: {
//       fontSize: 18,
//       fontWeight: 'bold',
//       color: '#000'
//     }
//   },
//   tooltip: {
//     trigger: 'item',
//     formatter: '{b}<br/>频次：{c}',
//     backgroundColor: 'rgba(255, 235, 238, 0.9)',
//     borderColor: '#FF6B6B',
//     borderWidth: 1,
//     textStyle: { color: '#4A148C' }
//   },
//   legend: { show: false },
//   xAxis: {
//     type: 'value',
//     axisLine: { show: false },
//     axisTick: { show: false },
//     splitLine: { show: true, lineStyle: { color: '#F5F5F5' } }
//   },
//   yAxis: {
//     type: 'category',
//     data: [
//       '气虚血瘀症', '肝胃郁热证',
//       '痰湿蕴肺症', '热毒蕴结症', '脾肾两虚证', '肝肾亏虚',
//       '气阴两虚症', '湿热瘀阻症', '肝肾不足', '肝胃不和'
//     ],
//     axisLabel: {
//       color: '#333',
//       fontSize: 12,
//       margin: 10
//     }
//   },
//   color: [
//     '#ffcccc', '#ff9999', '#ff6666', '#ff3333',
//     '#cc0000', '#990000', '#660000', '#4d0000',
//     '#330000', '#290000', '#1f0000', '#140000',
//     '#0a0000', '#050000', '#000000'
//   ],
//   series: [{
//     name: '病症频次',
//     type: 'bar',
//     data: [5379, 4160, 2976, 1785, 1661, 1524, 1146, 881, 798, 527],
//     barWidth: '60%',
//     itemStyle: {
//       color: function (params) {
//         return optionRight2.color[params.dataIndex];
//       },
//       borderRadius: 8,
//       borderColor: '#fff',
//       borderWidth: 2
//     },
//     label: {
//       show: true,
//       position: 'right',
//       formatter: '{c}',
//       color: '#8b0000',
//       fontWeight: 'bold',
//       fontSize: 12
//     }
//   }],
//   grid: {
//     left: '10%',
//     right: '5%',
//     top: '20%',
//     bottom: '5%',
//     containLabel: true
//   }
// };

// myChartRight2.setOption(optionRight2);


// const chart = echarts.init(document.getElementById('wordcloud'));
// chart.setOption(option);
// myChartRight2.setOption(optionRight2);
