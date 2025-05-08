// 初始化左侧第一个图表
var myChartLeft1 = echarts.init(document.getElementById('left1'));
var optionLeft1 = {
    title: {
        text: '中国古代医疗外科发展大事件分朝代统计（1911年之前）',
        subtext: '数据来源于古代医学典籍及历史文献',
        left: 'center',
        textStyle: {
            fontSize: 25,
        },
        subtextStyle: {
            padding: [5, 0]    // 增加上下间距
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
        backgroundColor: '#FFF4E6',  // 浅橙底色
        borderColor: '#FFA940',       // 橙色边框
        textStyle: { color: '#613400' } // 深棕文字
    },
    grid: {
        left: '3%',    // 调整左侧空间
        right: '4%',
        bottom: '3%', // 调整底部空间
        top: '15%',   // 调整顶部空间
        containLabel: true,
        backgroundColor: '#FFFCF5'  // 浅黄背景
    },
    xAxis: [{
        type: 'category',
        data: ['远古 - 公元前21世纪', '公元前1700 - 1100年', '周 (公元前1100 - 221年)', '秦、汉 (公元前221 - 公元220年)', '三国、魏晋及南北朝 (公元220年 - 581年)', '隋、唐 (公元 618 - 907年)', '宋 (公元960 - 1279年)', '金、元 (公元1115 - 1368年)', '明 (公元1368 - 1644年)', '清 (公元1644 - 1911年)'],
        axisLine: { lineStyle: { color: '#FFA940' } }, // 橙色轴线
        axisLabel: {
            rotate: 45,
            margin: 10,  // 调整标签与轴线间距
            color: '#874c0f'  // 深棕标签
        }
    }],
    yAxis: [{
        type: 'value',
        axisLine: { show: true, lineStyle: { color: '#FFA940' } }, // 橙色轴线
        axisLabel: { color: '#874c0f' } // 深棕标签
    }],
    series: [{
        name: '大事件数量',
        type: 'bar',
        barWidth: '40%', // 增加柱状图宽度
        itemStyle: {
            color: {
                type: 'linear',
                x: 0, y: 0, x2: 0, y2: 1,
                colorStops: [{
                    offset: 0, color: '#FFD700' // 亮黄色
                }, {
                    offset: 1, color: '#FFA500' // 橙色
                }]
            }
        },
        data: [2, 3, 5, 8, 7, 10, 12, 9, 15, 18],
        label: {
            show: true,
            formatter: function (params) {
                return params.value;
            },
            position: 'top',
            color: '#613400'
        },
        emphasis: {
            focus: 'label',
            label: {
                show: true,
                formatter: function (params) {
                    switch (params.name) {
                        case '远古 - 公元前21世纪':
                            return '重大事件：砭石用于外科手术';
                        case '公元前1700 - 1100年':
                            return '重大事件：甲骨文记载外科疾病';
                        case '周 (公元前1100 - 221年)':
                            return '重大事件：扁鹊使用麻醉进行手术';
                        case '秦、汉 (公元前221 - 公元220年)':
                            return '重大事件：华佗发明麻沸散，进行剖腹手术';
                        case '三国、魏晋及南北朝 (公元220年 - 581年)':
                            return '重大事件：《刘涓子鬼遗方》问世';
                        case '隋、唐 (公元 618 - 907年)':
                            return '重大事件：《外台秘要》记录多种外科手术';
                        case '宋 (公元960 - 1279年)':
                            return '重大事件：《欧希范五脏图》绘制人体解剖图';
                        case '金、元 (公元1115 - 1368年)':
                            return '重大事件：《世医得效方》记载复杂骨折手术';
                        case '明 (公元1368 - 1644年)':
                            return '重大事件：《外科正宗》出版';
                        case '清 (公元1644 - 1911年)':
                            return '重大事件：外科手术技术逐渐衰落';
                        default:
                            return '';
                    }
                }
            }
        }
    }]
};

myChartLeft1.setOption(optionLeft1);

// 初始化左侧第二个图表
var myChartLeft2 = echarts.init(document.getElementById('left2'));
var optionLeft2 = {
    title: {
        text: '中国古代医疗外科发展大事件类别统计（件）',
        subtext: '数据来源于古代医学典籍及历史文献',
        left: 'center',
        textStyle: {
            fontSize: 18,
        }
    },
    tooltip: {  // 新增tooltip配置
        trigger: 'item',
        formatter: '{b}<br/>事件数量: {c}件',  // 自定义显示格式
        backgroundColor: '#FFFCF5',  // 浅黄底色
        borderColor: '#FFA940',  // 橙色边框
        textStyle: {
            color: '#613400'  // 深棕色文字
        }
    },
    legend: {
        top: 'bottom',
        textStyle: {
            color: '#874c0f'
        }
    },
    toolbox: {
        show: true,
        iconStyle: {
            color: '#FFA940'
        },
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    series: [ {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [40, 200],
        center: ['50%', '50%'],
        roseType: 'area',
        color: [  // 定义橙黄色系颜色组
            {type: 'linear', x: 0, y: 0, x2: 1, y2: 0,
                colorStops: [{offset: 0, color: '#FFD700'}, {offset: 1, color: '#FFA500'}]},  // 黄-橙渐变
            {type: 'linear', x: 0, y: 0, x2: 1, y2: 0,
                colorStops: [{offset: 0, color: '#FFA500'}, {offset: 1, color: '#FF8C00'}]},  // 橙-深橙渐变
            {type: 'linear', x: 0, y: 0, x2: 1, y2: 0,
                colorStops: [{offset: 0, color: '#FFF3B0'}, {offset: 1, color: '#FFD700'}]},  // 浅黄-金渐变
            {type: 'linear', x: 0, y: 0, x2: 1, y2: 0,
                colorStops: [{offset: 0, color: '#FFE4B5'}, {offset: 1, color: '#DAA520'}]}  // 米白-棕黄渐变
        ],
        itemStyle: {
            borderRadius: 8,
            borderColor: '#FFFCF5',
            borderWidth: 2,
            emphasis: {  // 修改高亮样式
                borderColor: '#FFA940',  // 橙色边框
                borderWidth: 3,
                shadowColor: 'rgba(255,169,64,0.3)',  // 橙色阴影
                shadowBlur: 10
            }
        },
        label: {
            color: '#613400'
        },
        data: [
            {
                value: 55,
                name: '外科手术技术（如华佗的麻沸散麻醉手术等）',
                itemStyle: {
                    color: 0  // 使用color数组第一个渐变
                }
            },
            {
                value: 78,
                name: '外科著作（如《刘涓子鬼遗方》等）',
                itemStyle: {
                    color: 1  // 使用color数组第二个渐变
                }
            },
            {
                value: 32,
                name: '外科器械发明（如古代针灸针等）',
                itemStyle: {
                    color: 2  // 使用color数组第三个渐变
                }
            },
            {
                value: 40,
                name: '外科治疗理念（如外科疮疡理论等）',
                itemStyle: {
                    color: 3  // 使用color数组第四个渐变
                }
            }
        ]
    } ]
};
myChartLeft2.setOption(optionLeft2);

// 初始化中心图表
var myChartCenter = echarts.init(document.getElementById('map'));
var optionCenter = {
    title: {
        text: '各朝代医疗外科典籍数量占比统计',
        subtext: '数据来源：TCM Ancient Books 中医药古籍数据集',
        left: 'center',
        textStyle: {
            fontSize: 18,
        },
        subtextStyle: {
            fontSize: 12,
            color: '#8c8c8c'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} 部 ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        top: '22%',  // 图例同步下移
        textStyle: {
            color: '#613400'
        }
    },
    color: ['#ffd666', '#ffc069', '#ff9c6e', '#ff9a6e', '#ff7a45', '#fa541c', '#d4380d', '#ad2102', '#871400', '#610b00', '#3d0b00'],
    series: [{
        name: '典籍数量',
        type: 'pie',
        radius: ['40%', '65%'],
        center: ['50%', '58%'],
        data: [
            { value: 258, name: '清' },
            { value: 102, name: '明' },
            { value: 75, name: '其他' },
            { value: 60, name: '宋/金' },
            { value: 30, name: '元' },
            { value: 17, name: '隋唐' },
            { value: 8, name: '汉' },
            { value: 5, name: '魏晋' },
            { value: 5, name: '南北朝' },
            { value: 4, name: '民国' },
            { value: 1, name: '五代' }
        ],
        itemStyle: {
            borderRadius: 5,
            borderWidth: 2,
            borderColor: '#fff'
        },
        label: {
            formatter: '{b|{b}}\n{d}%',
            rich: {
                b: {
                    fontSize: 12,
                    color: '#613400',
                    padding: [0, 0, 2, 0]
                }
            }
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};

if (optionCenter && typeof optionCenter === 'object') {
    myChartCenter.setOption(optionCenter);
}

window.addEventListener('resize', myChartCenter.resize);
myChartCenter.setOption(optionCenter);

// 初始化右侧第一个图表
var myChartRight1 = echarts.init(document.getElementById('right1'));
var app = {};

var optionRight1;

optionRight1 = {
    title: {
        text: '中国古代医疗外科时间发展脉络（1911年之前）',
        subtext: '数据来源于古代医学典籍及历史文献',
        left: 'center',
        textStyle: {
            fontSize: 18,
            fontWeight: 'bold'
        },
        subtextStyle: {
            padding: [5, 0]    // 增加主副标题间距
        },
        top: '5%'  // 增加标题与图表间距
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: '#FFF4E6',  // 浅橙底色
        borderColor: '#FFA940',      // 橙色边框
        textStyle: { color: '#613400' } // 深棕文字
    },
    legend: {
        data: ['外科技术', '外科著作', '外科实践'],
        textStyle: {
            color: '#874c0f'  // 图例深棕色
        },
        top: '15%'  // 下移图例位置
    },
    grid: {
        left: '8%',
        right: '6%',
        bottom: '12%',
        top: '25%',  // 增加图表顶部间距
        containLabel: true,
        backgroundColor: '#FFFCF5'  // 浅黄背景
    },
    toolbox: {
        feature: {
            saveAsImage: {
                iconStyle: { color: '#FFA940' }  // 橙色图标
            }
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['先秦', '汉代', '魏晋南北朝', '隋唐', '宋元', '明清'],
        axisLine: { lineStyle: { color: '#FFA940' } },  // 橙色轴线
        axisLabel: { color: '#874c0f' }  // 深棕标签
    },
    yAxis: {
        type: 'value',
        axisLine: { lineStyle: { color: '#FFA940' } },  // 橙色轴线
        axisLabel: { color: '#874c0f' },  // 深棕标签
        splitLine: { lineStyle: { color: '#FFE4B5' } } // 浅黄辅助线
    },
    series: [
        {
            name: '外科技术',
            type: 'line',
            stack: 'Total',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                color: '#FFD700',
                borderColor: '#FFA500'
            },
            lineStyle: { width: 3 },
            data: [10, 25, 40, 65, 80, 95]
        },
        {
            name: '外科著作',
            type: 'line',
            stack: 'Total',
            symbol: 'rect',
            symbolSize: 8,
            itemStyle: {
                color: '#FFA500',
                borderColor: '#FF8C00'
            },
            lineStyle: { width: 3 },
            data: [5, 15, 30, 50, 70, 90]
        },
        {
            name: '外科实践',
            type: 'line',
            stack: 'Total',
            symbol: 'triangle',
            symbolSize: 8,
            itemStyle: {
                color: '#DAA520',
                borderColor: '#B8860B'
            },
            lineStyle: { width: 3 },
            data: [8, 20, 35, 55, 75, 85]
        }
    ]
};

myChartRight1.setOption(optionRight1);
// 初始化右侧第二个图表
var myChartRight2 = echarts.init(document.getElementById('right2'));
var optionRight2 = {
    title: {
        text: '中国古代医疗外科死亡率/成功率对比（1911年之前）',
        subtext: '数据来源于古代医学典籍及历史文献',
        left: 'center',
        textStyle: {
            fontSize: 18
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['成功', '死亡', '感染并发症'],
        top: 'bottom'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: [
                '先秦', '汉代', '魏晋南北朝', '隋唐', '宋元', '明清'
            ],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                interval: 0,
                rotate: 45,
                margin: 15
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '成功',
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
                position: 'insideTop'
            },
            emphasis: {
                focus: 'series'
            },
            itemStyle: {
                color: '#91cc75' // 成功-绿色
            },
            data: [15, 35, 45, 60, 70, 80] // 成功率(%)
        },
        {
            name: '死亡',
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
                position: 'insideTop'
            },
            emphasis: {
                focus: 'series'
            },
            itemStyle: {
                color: '#ee6666' // 死亡-红色
            },
            data: [30, 25, 20, 15, 10, 8] // 死亡率(%)
        },
        {
            name: '感染并发症',
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
                position: 'insideTop'
            },
            emphasis: {
                focus: 'series'
            },
            itemStyle: {
                color: '#fac858' // 并发症-黄色
            },
            data: [55, 40, 35, 25, 20, 12] // 并发症率(%)
        }
    ]
};

myChartRight2.setOption(optionRight2);

// 添加点击事件监听器
myChartCenter.on('click', function (params) {
    let booksListHtml = '';
    let books = getBooksByPeriod(params.name);
    books.forEach(book => {
        booksListHtml += '<li>' + book + '</li>';
    });

    document.getElementById('modalTitle').textContent = params.name + ' 时期书籍列表';
    document.getElementById('modalList').innerHTML = booksListHtml;

    document.getElementById('bookModal').style.display = 'block';
});

// 获取指定时期的书籍列表
function getBooksByPeriod(period) {
    let books = {
        '清': ['《外科传薪集》', '《外科证治全生集》', '《疡科心得集》', '《疡科会粹》'],
        '明': ['《外科正宗》', '《外科启玄》', '《外科理例》'],
        '宋/金': ['《圣济总录》'],
        '元': ['《外科精义》'],
        '隋唐': ['《千金要方》'],
        '汉': ['《肘后备急方》'],
        '魏晋': ['《刘涓子鬼遗方》'],
        '南北朝': ['《五十二病方》'],
        '五代': ['《备急千金要方》'],
        '民国': ['《中国医学史》'],
        '其他': ['《黄帝内经》', '《伤寒杂病论》']
    };
    return books[period] || ['暂无详细书籍信息'];
}

// 获取关闭按钮并添加点击事件
var closeBtn = document.getElementsByClassName("close")[0];
if (closeBtn) {
    closeBtn.onclick = function() {
        document.getElementById('bookModal').style.display = 'none';
    }
}

// 点击其他地方关闭弹出框
window.onclick = function(event) {
    if (event.target == document.getElementById('bookModal')) {
        document.getElementById('bookModal').style.display = 'none';
    }
}
