var myChartLeft1 = echarts.init(document.getElementById('left1'));

var optionLeft1 = {
    title: {
        text: '中国古代内科学各朝代内科病症研究深度',
        subtext: '数据来源于中医古籍文献',
        left: 'center',
        textStyle: {
            fontSize: 18
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: '{b}：{c}次'
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '15%',  // 为长名称留出更多空间
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: [
            '先秦', '汉代', '魏晋南北朝', '隋唐', '宋元', '明清'
        ],
        axisLabel: {
            rotate: 45,  // 倾斜45度防止重叠
            fontSize: 10,
            margin: 15
        },
        axisTick: {
            alignWithLabel: true
        }
    },
    yAxis: {
        type: 'value',
        name: '研究深度',
        nameLocation: 'end',
        axisLabel: {
            formatter: '{value}'
        }
    },
    series: [
        {
            type: 'bar',
            barWidth: '70%',
            data: [
                10, 35, 50, 75, 120, 180  // 调整后的数据
            ],
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#d1f2e6' },  // 浅青瓷
                    { offset: 0.5, color: '#76d7c4' },// 中青瓷
                    { offset: 1, color: '#48c9b0' }   // 深青瓷
                ])
            },
            emphasis: {
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#2378f7' },
                        { offset: 0.7, color: '#2378f7' },
                        { offset: 1, color: '#83bff6' }
                    ])
                }
            },
            label: {
                show: true,
                position: 'top',
                formatter: '{c}',
                fontSize: 10
            }
        }
    ]
};

myChartLeft1.setOption(optionLeft1);

var myChartLeft2 = echarts.init(document.getElementById('left2'));

// 中医内科疾病谱数据
const diseases = [
    { name: '外感病', value: 50, modern: '呼吸系统疾病' },
    { name: '内伤病（脏腑经络病证）', value: 80, modern: '心脑血管系统疾病' },
    { name: '脾胃肠病', value: 40, modern: '消化系统疾病' },
    { name: '肺系病', value: 30, modern: '呼吸系统疾病' },
    { name: '肝胆病', value: 20, modern: '消化系统疾病' },
    { name: '肾膀胱病', value: 15, modern: '泌尿系统疾病' },
    { name: '心系病', value: 25, modern: '心脑血管系统疾病' },
    { name: '气血津液病', value: 10, modern: '内分泌和代谢性疾病' },
    { name: '肢体经络病', value: 12, modern: '肌肉骨骼系统疾病' }
];

var optionLeft2 = {
    title: {
        text: '中医内科疾病谱（古代分类与现代对照）',
        subtext: '数据来源：中医古籍文献及现代研究',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            return `
                <strong>${params.name}</strong><br/>
                古代分类：${params.name}<br/>
                现代对照：${params.data.modern}<br/>
               
            `;
        }
    },
    legend: {
        data: ['古代分类', '现代对照'],
        top: 'bottom'
    },
    series: [
        {
            name: '  ',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '16',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: diseases.map(item => ({
                value: item.value,
                name: item.name,
                modern: item.modern,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#a5d6a7' }, // 浅绿色
                        { offset: 1, color: '#43a047' }  // 深绿色
                    ])
                }
            }))
        }
    ]
};

myChartLeft2.setOption(optionLeft2);
var myChartCenter = echarts.init(document.getElementById('map'));

// 省份列表保持不变
var provinces = ['shanghai', 'hebei', 'shanxi', 'neimenggu', 'liaoning', 'jilin', 'heilongjiang', 'jiangsu', 'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong', 'henan', 'hubei', 'hunan', 'guangdong', 'guangxi', 'hainan', 'sichuan', 'guizhou', 'yunnan', 'xizang', 'shanxi1', 'gansu', 'qinghai', 'ningxia', 'xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen'];
var provincesText = ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门'];

// 修改为内科学流派数据
var seriesData = [
    { name: '河南', value: 5, // 伤寒学派
        info: {
            school: "伤寒学派",
            founder: "张仲景",
            works: "《伤寒杂病论》",
            theory: "六经辨证体系",
            period: "东汉"
        }
    },
    { name: '浙江', value: 4, // 温病学派
        info: {
            school: "温病学派",
            founders: "叶天士、吴鞠通",
            works: "《温热论》《温病条辨》",
            theory: "卫气营血辨证、三焦辨证",
            period: "明清"
        }
    },
    { name: '河北', value: 3, // 易水学派
        info: {
            school: "易水学派",
            founder: "张元素",
            works: "《医学启源》",
            theory: "脏腑辨证论",
            period: "金元"
        }
    },
    { name: '江西', value: 3, // 滋阴学派
        info: {
            school: "滋阴学派",
            founder: "朱丹溪",
            works: "《格致余论》",
            theory: "阳常有余，阴常不足",
            period: "元代"
        }
    },
    { name: '四川', value: 2, // 火神派
        info: {
            school: "火神派",
            founder: "郑钦安",
            works: "《医理真传》",
            theory: "重视扶阳",
            period: "清代"
        }
    },
    { name: '江苏', value: 2, // 孟河医派
        info: {
            school: "孟河医派",
            founders: "费伯雄、马培之",
            works: "《医醇賸义》",
            theory: "和缓平稳",
            period: "清代"
        }
    },
    { name: '安徽', value: 2, // 新安医学
        info: {
            school: "新安医学",
            founders: "汪机、孙一奎",
            works: "《石山医案》",
            theory: "固本培元",
            period: "明清"
        }
    },
    // 其他省份设为0或低值
    { name: '上海', value: 0 },
    { name: '山西', value: 0 },
    { name: '内蒙古', value: 0 },
    { name: '辽宁', value: 0 },
    { name: '吉林', value: 0 },
    { name: '黑龙江', value: 0 },
    { name: '福建', value: 0 },
    { name: '山东', value: 0 },
    { name: '湖北', value: 0 },
    { name: '湖南', value: 0 },
    { name: '广东', value: 0 },
    { name: '广西', value: 0 },
    { name: '海南', value: 0 },
    { name: '贵州', value: 0 },
    { name: '云南', value: 0 },
    { name: '西藏', value: 0 },
    { name: '陕西', value: 0 },
    { name: '甘肃', value: 0 },
    { name: '青海', value: 0 },
    { name: '宁夏', value: 0 },
    { name: '新疆', value: 0 },
    { name: '北京', value: 0 },
    { name: '天津', value: 0 },
    { name: '重庆', value: 0 },
    { name: '香港', value: 0 },
    { name: '澳门', value: 0 }
];

// 初始化地图
initEcharts("china", "中国古代内科学流派发源地(1911年前)");
function initEcharts(pName, Chinese_) {
    var optionCenter = {
        title: {
            text: Chinese_,
            subtext: '数据来源于：《中国医学通史》《中医各家学说》',
            left: 'center',
            textStyle: {
                fontSize: 18,
                fontWeight: 'bold'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                if(params.data.info) {
                    return `
                    <strong>${params.name}</strong><br/>
                    学派：${params.data.info.school}<br/>
                    代表人物：${params.data.info.founder || params.data.info.founders}<br/>
                    代表著作：${params.data.info.works}<br/>
                    核心理论：${params.data.info.theory}<br/>
                    形成时期：${params.data.info.period}
                    `;
                } else {
                    return `${params.name}<br/>暂无主要内科学流派发源`;
                }
            }
        },
        visualMap: {
            min: 0,
            max: 5,
            pieces: [
                {gt: 3, label: '核心发源地', color: '#c23531'},
                {gt: 1, lte: 3, label: '重要发源地', color: '#dd6b66'},
                {value: 1, label: '发源地', color: '#e6b8b7'},
                {value: 0, label: '无数据', color: '#8fcbb4'}
            ],
            type: 'piecewise',
            orient: 'horizontal',
            left: 'center',
            bottom: 10,
            textStyle: {
                color: '#333'
            }
        },
        series: [ {
            name: Chinese_,
            type: 'map',
            mapType: pName,
            roam: true,
            data: seriesData,
            label: {
                show: true,
                formatter: function(params) {
                    return params.name;
                },
                fontSize: 10
            },
            emphasis: {
                label: {
                    show: true
                },
                itemStyle: {
                    areaColor: '#f4cccc'
                }
            },
            itemStyle: {
                borderColor: '#787a43',
                borderWidth: 1
            },
            select: {
                itemStyle: {
                    areaColor: '#f4cccc'
                },
                label: {
                    show: true,
                    color: '#c23531'
                }
            }
        } ],
        // 添加审图号文本
        graphic: {
            type: 'text',
            left: '10',
            bottom: '10',
            z: 100,
            style: {
                fill: '#0a0808',
                text: '审图号：GS(2020)3180号',
                font: '12px Microsoft YaHei'
            }
        }
    };

    myChartCenter.setOption(optionCenter);


    // 添加点击事件
    myChartCenter.on('click', function(params) {
        if(params.data.info) {
            // 可以在这里添加更详细的弹窗信息
            console.log(params.data.info);
        }
    });
}

var myChartRight1 = echarts.init(document.getElementById('right1'));

var optionRight1 = {
    title: {
        text: '中医内科疾病症状（1911年之前）',
        subtext: '数据来源于中医古籍文献',
        left: 'center',
        textStyle: {
            fontSize: 18
        }
    },
    tooltip: {
        trigger: 'item',
        backgroundColor: '#f5fff5',
        borderColor: '#66bb6a',
        borderWidth: 1,
        textStyle: {
            color: '#2e7d32',
            fontSize: 14
        },
        formatter: '{b}：<span style="color:#388e3c;font-weight:bold">{c}</span>'
    },
    legend: {
        top: 'bottom',
        textStyle: {
            color: '#666'
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowColor: '#66bb6a'
            }
        }
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    series: [
        {
            name: '中医内科疾病症状',
            type: 'pie',
            radius: [25, 150],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 8,
                borderWidth: 1,
                borderColor: '#fff'
            },
            label: {
                show: true,
                formatter: '{b|{b}}',
                rich: {
                    b: {
                        fontSize: 12,
                        color: '#2e7d32',
                        padding: [5, 0, 0, 0]
                    }
                }
            },
            data: [
                {
                    value: 120,
                    name: '伤寒',
                    symptom: '发热、恶寒、头痛、身痛',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#a5d6a7' }, // 青色，对应肝胆疾病
                            { offset: 1, color: '#4caf50' }  // 绿色，对应热证
                        ])
                    }
                },
                {
                    value: 90,
                    name: '咳嗽',
                    symptom: '咳而上气、喘息、痰多',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#c8e6c9' }, // 白色，对应肺病
                            { offset: 1, color: '#81c784' }  // 浅绿色，对应痰湿
                        ])
                    }
                },
                {
                    value: 80,
                    name: '中风',
                    symptom: '突然昏仆、半身不遂、口眼歪斜',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#e8f5e9' }, // 红色，对应热证
                            { offset: 1, color: '#66bb6a' }  // 深绿色，对应肝肾亏损
                        ])
                    }
                },
                {
                    value: 70,
                    name: '心腹胀满',
                    symptom: '腹部胀满、气滞、疼痛',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#f5f5f5' }, // 黄色，对应脾胃疾病
                            { offset: 1, color: '#e0e0e0' }  // 浅灰色，对应湿证
                        ])
                    }
                },
                {
                    value: 60,
                    name: '脾胃虚弱',
                    symptom: '食欲不振、腹胀便溏、神疲乏力',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#fff3e0' }, // 黄色，对应脾胃疾病
                            { offset: 1, color: '#ffe0b2' }  // 浅黄色，对应虚证
                        ])
                    }
                },
                {
                    value: 50,
                    name: '虚劳',
                    symptom: '身体虚弱、乏力、消瘦',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#e0e0e0' }, // 灰色，对应虚证
                            { offset: 1, color: '#bdbdbd' }  // 深灰色，对应寒证
                        ])
                    }
                },
                {
                    value: 40,
                    name: '头痛',
                    symptom: '头部疼痛、眩晕',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#e8f5e9' }, // 红色，对应热证
                            { offset: 1, color: '#c8e6c9' }  // 浅绿色，对应肝胆疾病
                        ])
                    }
                },
                {
                    value: 30,
                    name: '水肿',
                    symptom: '身体浮肿、小便不利',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#e0f7fa' }, // 白色，对应肺病
                            { offset: 1, color: '#b2ebf2' }  // 浅蓝色，对应寒证
                        ])
                    }
                },
                {
                    value: 20,
                    name: '消渴',
                    symptom: '多饮、多食、多尿、消瘦',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#f5f5f5' }, // 黄色，对应脾胃疾病
                            { offset: 1, color: '#e0e0e0' }  // 浅灰色，对应湿证
                        ])
                    }
                },
                {
                    value: 10,
                    name: '脚气',
                    symptom: '下肢麻木、疼痛、无力',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#e0f7fa' }, // 白色，对应肺病
                            { offset: 1, color: '#b2ebf2' }  // 浅蓝色，对应寒证
                        ])
                    }
                }
            ]
        }
    ]
};

myChartRight1.setOption(optionRight1);

// 添加悬浮事件
myChartRight1.on('mouseover', function (params) {
    if (params.componentType === 'series') {
        const symptom = params.data.symptom;
        myChartRight1.setOption({
            tooltip: {
                formatter: function (params) {
                    return `
                        <strong>${params.name}</strong><br/>
                        症状：${symptom}
                    `;
                }
            }
        });
    }
});

  var myChartRight2 = echarts.init(document.getElementById('right2'));
  var optionRight2 = {
    title: {
        text: '中药方法使用方式词云图',
        subtext: '数据来源：中医方剂数据库',
        left: 'center',
        textStyle: {
          fontSize: 18
        }
      },
      graphic: {
        type: 'image',
        z: 0,
        style: {
          image: 'web-code\images\herb_usage_wordcloud.png', // 相对路径
          width: '100%',
          height: '100%'
        },
        left: 'center',
        top: 'middle'
      },
      // 隐藏所有坐标轴和辅助元素
      xAxis: { show: false },
      yAxis: { show: false },
      tooltip: { show: false },
      legend: { show: false }
};

      myChartRight2.setOption(optionRight2);

    // const chart = echarts.init(document.getElementById('wordcloud'));
    // chart.setOption(option);
    myChartRight2.setOption(optionRight2);
