// 初始化左侧第一个图表 - 法医学检验技术分类 (原left2)
var myChartLeft1 = echarts.init(document.getElementById('left1'));
var optionLeft1 = {
    title: {
        text: '中国古代法医学检验技术分类统计',
        subtext: '数据来源于《洗冤集录》《无冤录》等法医学典籍',
        left: 'center',
        textStyle: {
            fontSize: 15,
            fontWeight: 'bold',
            color: '#3f7bca'
        },
        subtextStyle: {
            color: '#2b49c6'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}<br/>占比: {d}%<br/>文献记载数: {c}处',
        backgroundColor: '#FFF4E6',
        borderColor: '#44699a',
        textStyle: {
            color: '#2d60ac'
        },
        extraCssText: 'box-shadow: 0 0 8px rgba(255,169,64,0.3);'
    },
    legend: {
        top: 'bottom',
        textStyle: {
            color: '#213d98'
        },
        itemWidth: 20,
        itemHeight: 12,
        itemGap: 10
    },
    series: [{
        name: '法医学检验技术分类',
        type: 'pie',
        radius: [60, 180],
        center: ['50%', '45%'],
        roseType: 'area',
        color: [
            '#528cbc', // 金色 - 尸体检验
            '#366da3', // 橙色 - 活体检验
            '#264d9f', // 棕金 - 物证检验
            '#383593', // 深橙 - 现场勘验
            '#1a2eb3'  // 暗金 - 其他
        ],
        itemStyle: {
            borderRadius: 6,
            borderColor: '#FFFCF5',
            borderWidth: 2,
            emphasis: {
                borderColor: '#37739e',
                borderWidth: 3,
                shadowColor: 'rgba(26,55,89,0.3)',
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0
            }
        },
        label: {
            color: '#34429e',
            formatter: '{b|{b}}\n{d|{d}%}',
            rich: {
                b: {
                    fontSize: 12,
                    lineHeight: 20,
                    color: '#233073'
                },
                d: {
                    fontSize: 14,
                    color: '#1d3777',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            lineStyle: {
                color: '#a8c6fa'
            },
            smooth: 0.2,
            length: 1,
            length2: 5
        },
        data: [
            {
                value: 86,
                name: '\n尸体检验技术\n（蒸骨验伤、四缝验尸等）',
                itemStyle: {
                    color: '#365e80'
                }
            },
            {
                value: 54,
                name: '\n活体检验技术\n（伤痕鉴定）',
                itemStyle: {
                    color: '#456b9c'
                }
            },
            {
                value: 42,
                name: '\n物证检验技术',
                itemStyle: {
                    color: '#3d578f'
                }
            },
            {
                value: 38,
                name: '\n现场勘验方法\n（血迹分析）',
                itemStyle: {
                    color: '#30698c'
                }
            },
            {
                value: 22,
                name: '其他检验技术\n（文书鉴定、心理测试等）',
                itemStyle: {
                    color: '#2e7aa3'
                }
            }
        ]
    }]
};

myChartLeft1.setOption(optionLeft1);

// 添加点击事件
myChartLeft1.on('click', function (params) {
    var techDetails = {
        '尸体检验技术': {
            description: '中国古代最成熟的法医检验技术体系',
            techniques: [
                '• 蒸骨验伤法（宋慈《洗冤集录》记载）',
                '• 四缝验尸法（检查头顶、脚底等隐蔽部位）',
                '• 尸体现象与死亡时间关系判定',
                '• 自缢、勒死与扼死的鉴别方法',
                '• 雷击、烧死、溺死等特殊死亡的检验'
            ],
            source: '《洗冤集录》卷1-3'
        },
        '活体检验技术': {
            description: '主要用于伤害案件和中毒案件的检验',
            techniques: [
                '• "皮破曰伤，肉绽曰创"的伤痕分类',
                '• 生前伤与死后伤的鉴别方法',
                '• 银钗验毒技术（主要用于砒霜检测）',
                '• 各种中毒症状的系统记录',
                '• 保辜制度下的伤情跟踪检验'
            ],
            source: '《洗冤集录》卷4-5'
        },
        '物证检验技术': {
            description: '中国古代物证检验技术相对简单但实用',
            techniques: [
                '• 凶器与伤痕的比对分析',
                '• 毒物检测（银钗、动物实验等）',
                '• 血型检验（滴血验亲，虽不科学但广泛应用）',
                '• 文书笔迹比对技术',
                '• 衣物、凶器上的痕迹检验'
            ],
            source: '《无冤录》《检验合参》'
        },
        '现场勘验方法': {
            description: '强调"狱贵初情"的现场勘验原则',
            techniques: [
                '• "血坠地则凝，溅则散"的血迹分析',
                '• 足迹、车辙等痕迹的测量记录',
                '• 尸体位置与现场环境的关联分析',
                '• 凶案现场重建技术',
                '• 多人协作的勘验流程'
            ],
            source: '《洗冤集录》《折狱龟鉴》'
        }
    };

    if (techDetails[params.name.split('\n')[0]]) {
        var detail = techDetails[params.name.split('\n')[0]];
        console.groupCollapsed(params.name + ' - 技术详情');
        console.log('技术描述:', detail.description);
        console.log('主要技术:');
        detail.techniques.forEach(t => console.log(t));
        console.log('主要来源:', detail.source);
        console.groupEnd();
    }
});

// 初始化左侧第二个图表 - 真实数据版本 (原left1)
var myChartLeft2 = echarts.init(document.getElementById('left2'));
// 定义各朝代的详细信息
var dynastyDetails = {
    '先秦(前221前)': {
        works: ['《封诊式》'],
        events: ['睡虎地秦简案例'],
        systems: ['《秦律》检验规定'],
        description: '中国法医学萌芽时期，已有系统的尸体检验记录'
    },
    '秦汉(前221-220)': {
        works: [],
        events: ['检验制度初步形成'],
        systems: ['汉代"令史"负责验尸'],
        description: '检验制度开始规范化发展'
    },
    '魏晋南北朝(220-589)': {
        works: ['《疑狱集》'],
        events: ['张举焚猪验尸实验'],
        systems: [],
        description: '出现著名检验案例和早期法医学著作'
    },
    '隋唐(581-907)': {
        works: [],
        events: [],
        systems: ['《唐律疏议》检验制度'],
        description: '法律体系完善，检验制度进一步发展'
    },
    '宋元(960-1368)': {
        works: ['《洗冤集录》', '《无冤录》', '《折狱龟鉴》'],
        events: ['蒸骨验伤法', '银钗验毒普及'],
        systems: ['宋代仵作制度'],
        description: '中国法医学鼎盛时期，出现世界首部系统法医学专著'
    },
    '明清(1368-1911)': {
        works: ['《洗冤录汇编》'],
        events: [],
        systems: ['明清检验规范化'],
        description: '法医学发展趋于停滞，但对前人成果进行系统整理'
    }
};


// 定义各朝代的详细信息（需要先定义，因为后面的代码会用到）
var dynastyDetails = {
    '先秦(前221前)': {
        works: ['《封诊式》'],
        events: ['睡虎地秦简案例'],
        systems: ['《秦律》检验规定'],
        description: '中国法医学萌芽时期，已有系统的尸体检验记录'
    },
    '秦汉(前221-220)': {
        works: [],
        events: ['检验制度初步形成'],
        systems: ['汉代"令史"负责验尸'],
        description: '检验制度开始规范化发展'
    },
    '魏晋南北朝(220-589)': {
        works: ['《疑狱集》'],
        events: ['张举焚猪验尸实验'],
        systems: [],
        description: '出现著名检验案例和早期法医学著作'
    },
    '隋唐(581-907)': {
        works: [],
        events: [],
        systems: ['《唐律疏议》检验制度'],
        description: '法律体系完善，检验制度进一步发展'
    },
    '宋元(960-1368)': {
        works: ['《洗冤集录》', '《无冤录》', '《折狱龟鉴》'],
        events: ['蒸骨验伤法', '银钗验毒普及'],
        systems: ['宋代仵作制度'],
        description: '中国法医学鼎盛时期，出现世界首部系统法医学专著'
    },
    '明清(1368-1911)': {
        works: ['《洗冤录汇编》'],
        events: [],
        systems: ['明清检验规范化'],
        description: '法医学发展趋于停滞，但对前人成果进行系统整理'
    }
};

// 定义各朝代的详细信息（需要先定义，因为后面的代码会用到）
var dynastyDetails = {
    '先秦(前221前)': {
        works: ['《封诊式》'],
        events: ['睡虎地秦简案例'],
        systems: ['《秦律》检验规定'],
        description: '中国法医学萌芽时期，已有系统的尸体检验记录'
    },
    '秦汉(前221-220)': {
        works: [],
        events: ['检验制度初步形成'],
        systems: ['汉代"令史"负责验尸'],
        description: '检验制度开始规范化发展'
    },
    '魏晋南北朝(220-589)': {
        works: ['《疑狱集》'],
        events: ['张举焚猪验尸实验'],
        systems: [],
        description: '出现著名检验案例和早期法医学著作'
    },
    '隋唐(581-907)': {
        works: [],
        events: [],
        systems: ['《唐律疏议》检验制度'],
        description: '法律体系完善，检验制度进一步发展'
    },
    '宋元(960-1368)': {
        works: ['《洗冤集录》', '《无冤录》', '《折狱龟鉴》'],
        events: ['蒸骨验伤法', '银钗验毒普及'],
        systems: ['宋代仵作制度'],
        description: '中国法医学鼎盛时期，出现世界首部系统法医学专著'
    },
    '明清(1368-1911)': {
        works: ['《洗冤录汇编》'],
        events: [],
        systems: ['明清检验规范化'],
        description: '法医学发展趋于停滞，但对前人成果进行系统整理'
    }
};

// 初始化左侧第二个图表 - 真实数据版本
var myChartLeft2 = echarts.init(document.getElementById('left2'));
var optionLeft2 = {
    title: {
        text: '中国古代法医学时间发展脉络（1911年之前）',
        left: 'center',
        textStyle: {
            fontSize: 18,
            fontWeight: 'bold'
        },
        subtextStyle: {
            padding: [5, 0]
        },
        top: '2%'  // 标题上移
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: '#FFF4E6',
        borderColor: '#45748e',
        textStyle: { color: '#10529c' },
        formatter: function (params) {
            let tooltipContent = params.map(param => {
                return `${param.name}<br>${param.seriesName}：${param.value}`;
            }).join('<br>');
            return tooltipContent;
        }
    },
    legend: {
        data: ['法医学著作', '法医学实践', '检验制度'],
        textStyle: {
            color: '#2b6eba'
        },
        top: '10%'  // 图例上移
    },
    grid: {
        left: '8%',
        right: '6%',
        bottom: '5%',  // 底部留白减少
        top: '10%',    // 顶部留白减少
        height: '70%', // 调整图表高度
        containLabel: true,
        backgroundColor: '#FFFCF5'
    },
    toolbox: {
        feature: {
            saveAsImage: {
                iconStyle: { color: '#2971a5' }
            }
        },
        top: '10%',    // 工具箱上移
        right: '2%'    // 右侧位置微调
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['先秦(前221前)', '秦汉(前221-220)', '魏晋南北朝(220-589)', '隋唐(581-907)', '宋元(960-1368)', '明清(1368-1911)'],
        axisLine: { lineStyle: { color: '#466b7a' } },
        axisLabel: {
            color: '#29498e',
            interval: 0,
            rotate: 20 // 倾斜角度防止文字重叠
        }
    },
    yAxis: {
        type: 'value',
        axisLine: { lineStyle: { color: '#298caa' } },
        axisLabel: { color: '#253b97' },
        splitLine: { lineStyle: { color: '#496375' } },
        splitNumber: 5  // 减少刻度数量，使得刻度高度变小
    },
    series: [
        {
            name: '法医学著作',
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                color: '#4f80a3',
                borderColor: '#1f6ea6'
            },
            lineStyle: { width: 3 },
            data: [10, 25, 35, 45, 80, 65],
            markPoint: {
                data: [
                    { name: '《封诊式》(秦代)', value: 15, xAxis: 0, yAxis: 15, symbolSize: 20 },
                    { name: '《疑狱集》(五代)', value: 40, xAxis: 2, yAxis: 40, symbolSize: 20 },
                    { name: '《折狱龟鉴》(南宋)', value: 65, xAxis: 4, yAxis: 65, symbolSize: 20 },
                    { name: '《洗冤集录》(南宋1247)', value: 80, xAxis: 4, yAxis: 80, symbolSize: 25 },
                    { name: '《无冤录》(元代)', value: 75, xAxis: 4, yAxis: 75, symbolSize: 20 },
                    { name: '《洗冤录汇编》(清)', value: 60, xAxis: 5, yAxis: 60, symbolSize: 20 }
                ],
                label: {
                    show: true,
                    formatter: function (params) {
                        // 只显示重要著作名称
                        const importantBooks = ['《封诊式》', '《洗冤集录》', '《无冤录》'];
                        return importantBooks.includes(params.data.name) ? params.data.name : '';
                    },
                    position: 'top'
                }
            }
        },
        {
            name: '法医学实践',
            type: 'line',
            symbol: 'rect',
            symbolSize: 8,
            itemStyle: {
                color: '#3d87bc',
                borderColor: '#2c539a'
            },
            lineStyle: { width: 3 },
            data: [8, 20, 30, 40, 70, 60],
            markPoint: {
                data: [
                    { name: '睡虎地秦简案例(秦)', value: 10, xAxis: 0, yAxis: 10 },
                    { name: '张举焚猪验尸(三国)', value: 25, xAxis: 2, yAxis: 25 },
                    { name: '蒸骨验伤法(宋)', value: 65, xAxis: 4, yAxis: 65 },
                    { name: '银钗验毒普及(元)', value: 60, xAxis: 4, yAxis: 60 }
                ]
            }
        },
        {
            name: '检验制度',
            type: 'line',
            symbol: 'triangle',
            symbolSize: 8,
            itemStyle: {
                color: '#476fa5',
                borderColor: '#0d4da1'
            },
            lineStyle: { width: 3 },
            data: [5, 15, 25, 35, 60, 55],
            markPoint: {
                data: [
                    { name: '《秦律》检验规定', value: 8, xAxis: 0, yAxis: 8 },
                    { name: '唐律检验制度', value: 30, xAxis: 3, yAxis: 30 },
                    { name: '宋代仵作制度', value: 55, xAxis: 4, yAxis: 55 },
                    { name: '明清检验规范化', value: 50, xAxis: 5, yAxis: 50 }
                ]
            }
        }
    ],
    // 添加数据缩放功能
    dataZoom: [
        {
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            start: 0,
            end: 100,
            height: 20,
            bottom: '18%',  // 缩放条上移
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#3272a6',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }
    ]
};

myChartLeft2.setOption(optionLeft2);

// 添加点击事件处理
myChartLeft2.on('click', function (params) {
    // 检查是否点击了x轴标签
    if (params.componentType === 'xAxis') {
        var dynasty = params.value;
        var detail = dynastyDetails[dynasty];

        // 创建弹窗内容
        var content = [
            '<div style="padding:10px;max-width:400px;">',
            '<h3 style="color:#4494b6;margin-bottom:10px;">' + dynasty + '法医学发展</h3>',
            '<p style="margin-bottom:10px;">' + detail.description + '</p>',
            '<h4 style="color:#419ba6;margin:5px 0;">代表著作</h4>',
            '<ul style="margin-top:5px;padding-left:20px;">'
        ];

        if (detail.works.length > 0) {
            detail.works.forEach(function (work) {
                content.push('<li>' + work + '</li>');
            });
        } else {
            content.push('<li>无重要著作</li>');
        }

        content.push(
            '</ul>',
            '<h4 style="color:#378fa3;margin:5px 0;">代表事件</h4>',
            '<ul style="margin-top:5px;padding-left:20px;">'
        );

        if (detail.events.length > 0) {
            detail.events.forEach(function (event) {
                content.push('<li>' + event + '</li>');
            });
        } else {
            content.push('<li>无重大事件</li>');
        }

        content.push(
            '</ul>',
            '<h4 style="color:#319a8e;margin:5px 0;">检验制度</h4>',
            '<ul style="margin-top:5px;padding-left:20px;">'
        );

        if (detail.systems.length > 0) {
            detail.systems.forEach(function (system) {
                content.push('<li>' + system + '</li>');
            });
        } else {
            content.push('<li>无重大制度变化</li>');
        }

        content.push('</ul></div>');

        // 使用ECharts自带的tooltip显示弹窗
        myChartLeft2.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: params.dataIndex,
            position: [params.event.offsetX, params.event.offsetY],
            content: content.join('')
        });
    }
});

// 点击空白处关闭弹窗
myChartLeft2.getZr().on('click', function (params) {
    if (!params.target) {
        myChartLeft2.dispatchAction({
            type: 'hideTip'
        });
    }
});
// 初始化中心图表 - 法医学检验制度与人员（蓝色系）
var myChartCenter = echarts.init(document.getElementById('map'));
var optionCenter = {
    title: {
        text: '中国古代法医学检验制度发展（1911年前）',
        subtext: '数据来源于《洗冤集录》《唐律疏议》《睡虎地秦简》等文献',
        left: 'center',
        textStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#1a3b5d'
        },
        subtextStyle: {
            fontSize: 12,
            color: '#5a7ea3'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            var dynastyDetails = {
                '先秦': '• 检验人员：地方官员兼任<br>• 制度特点：《封诊式》记载检验程序<br>• 重要文献：睡虎地秦简',
                '秦汉': '• 检验人员："令史"专职检验<br>• 制度特点：《秦律》规定检验责任<br>• 重要文献：张家山汉简',
                '魏晋南北朝': '• 检验人员：增设"检验吏"<br>• 制度特点：检验报告规范化<br>• 重要案例：张举焚猪验尸',
                '隋唐': '• 检验人员："作作"专业检验<br>• 制度特点：《唐律》规定检验程序<br>• 处罚：检验失误杖六十',
                '宋元': '• 检验人员：专业"仵作"制度<br>• 制度特点：《洗冤集录》标准<br>• 发展：世界最早法医体系',
                '明清': '• 检验人员：仵作考试认证<br>• 制度特点：检验程序高度规范化<br>• 文献：《律例馆校正洗冤录》'
            };
            return `
                <div style="font-weight:bold;color:#1a3b5d;margin-bottom:5px;">${params.name}时期</div>
                <div>检验制度完善度: <span style="font-weight:bold;">${params.value}</span></div>
                <hr style="margin:5px 0;border-color:#5a7ea3;opacity:0.3">
                <div style="line-height:1.6;">${dynastyDetails[params.name]}</div>
            `;
        },
        backgroundColor: '#f0f6ff',
        borderColor: '#5a7ea3',
        textStyle: {
            color: '#1a3b5d'
        },
        extraCssText: 'box-shadow: 0 0 8px rgba(90,126,163,0.3);'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        top: '22%',
        textStyle: {
            color: '#1a3b5d'
        },
        formatter: function (name) {
            var periodNames = {
                '先秦': '先秦（奠基期）',
                '秦汉': '秦汉（制度化）',
                '魏晋南北朝': '魏晋南北朝（发展期）',
                '隋唐': '隋唐（系统化）',
                '宋元': '宋元（鼎盛期）',
                '明清': '明清（规范化）'
            };
            return periodNames[name];
        }
    },
    color: ['#a8c6fa', '#7facf0', '#5a90e6', '#3a75d1', '#1e5cb8', '#0d429c'],
    series: [{
        name: '检验制度完善度',
        type: 'pie',
        radius: ['35%', '70%'],
        center: ['50%', '55%'],
        data: [
            {
                value: 15,
                name: '先秦',
                itemStyle: {
                    color: '#a8c6fa',
                    borderWidth: 2,
                    borderColor: '#e6f0ff'
                }
            },
            {
                value: 30,
                name: '秦汉',
                itemStyle: {
                    color: '#7facf0',
                    borderWidth: 2,
                    borderColor: '#e6f0ff'
                }
            },
            {
                value: 45,
                name: '魏晋南北朝',
                itemStyle: {
                    color: '#5a90e6',
                    borderWidth: 2,
                    borderColor: '#e6f0ff'
                }
            },
            {
                value: 65,
                name: '隋唐',
                itemStyle: {
                    color: '#3a75d1',
                    borderWidth: 2,
                    borderColor: '#e6f0ff'
                }
            },
            {
                value: 90,
                name: '宋元',
                itemStyle: {
                    color: '#1e5cb8',
                    borderWidth: 2,
                    borderColor: '#e6f0ff'
                }
            },
            {
                value: 80,
                name: '明清',
                itemStyle: {
                    color: '#0d429c',
                    borderWidth: 2,
                    borderColor: '#e6f0ff'
                }
            }
        ],
        itemStyle: {
            borderRadius: 8,
            borderWidth: 2,
            borderColor: '#f0f6ff'
        },
        label: {
            formatter: '{b|{b}}\n{d|{d}%}',
            rich: {
                b: {
                    fontSize: 12,
                    color: '#1a3b5d',
                    padding: [0, 0, 2, 0]
                },
                d: {
                    fontSize: 14,
                    color: '#1e5cb8',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            lineStyle: {
                color: '#a8c6fa'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(26,59,93,0.5)'
            },
            label: {
                show: true,
                fontWeight: 'bold'
            }
        }
    }],
    graphic: [{
        type: 'text',
        left: 'center',
        top: '85%',
        style: {
            text: '中国法医学检验制度发展指数（0-100）',
            fill: '#5a7ea3',
            fontSize: 12,
            fontWeight: 'normal'
        }
    }]
};

// 响应式调整
window.addEventListener('resize', function () {
    myChartCenter.resize();
});

myChartCenter.setOption(optionCenter);

// 添加点击事件
myChartCenter.on('click', function (params) {
    var dynastyData = {
        '先秦': {
            title: '先秦法医检验制度（前221年前）',
            content: [
                '• 检验人员：由地方行政官员兼任',
                '• 制度特点：《封诊式》记载了系统的尸体检验程序',
                '• 重要文献：睡虎地秦简记载23个检验案例',
                '• 技术方法："瞻伤、察创、视折、审断"四步检验法',
                '• 历史地位：世界最早的系统法医检验记录'
            ],
            score: 15
        },
        // 其他朝代数据...
        '宋元': {
            title: '宋元法医检验制度（960-1368年）',
            content: [
                '• 检验人员：专业"仵作"制度成熟，需经培训考核',
                '• 制度特点：《洗冤集录》确立检验标准（共53项）',
                '• 法律规定：检验不实将受严厉处罚',
                '• 技术体系：蒸骨验伤、银钗验毒等方法系统化',
                '• 历史地位：形成世界最早的法医检验体系',
                '• 国际影响：《无冤录》传入朝鲜、日本'
            ],
            score: 90
        }
    };

    if (dynastyData[params.name]) {
        console.groupCollapsed(params.name + '时期法医检验制度详情');
        console.log('发展指数:', dynastyData[params.name].score);
        console.log('主要特点:');
        dynastyData[params.name].content.forEach(item => console.log(item));
        console.groupEnd();

        /* 实际项目中可显示模态框
        showModal({
            title: dynastyData[params.name].title,
            content: `
                <div style="color:#1a3b5d;">
                    <div style="margin-bottom:10px;">
                        <span style="font-weight:bold;">发展指数:</span>
                        ${dynastyData[params.name].score}/100
                    </div>
                    <ul style="padding-left:20px;">
                        ${dynastyData[params.name].content.map(item =>
                            `<li style="margin-bottom:5px;">${item}</li>`
                        ).join('')}
                    </ul>
                </div>
            `
        });
        */
    }
});

// 初始化右侧第一个图表 - 法医学检验技术发展（蓝色系）
var myChartRight1 = echarts.init(document.getElementById('right1'));
var optionRight1 = {
    title: {
        text: '中国古代法医学检验工具发展（1911年前）',
        subtext: '数据来源于《洗冤集录》《无冤录》等法医学典籍',
        left: 'center',
        textStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#1a3b5d'
        },
        subtextStyle: {
            color: '#5a7ea3',
            padding: [5, 0]
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                color: 'rgba(90,126,163,0.1)'
            }
        },
        backgroundColor: '#f0f6ff',
        borderColor: '#5a7ea3',
        textStyle: {
            color: '#1a3b5d'
        },
        formatter: function (params) {
            var dynastyTools = {
                '先秦(前221前)': '• 主要工具：青铜刀具、测量绳\n• 特点：简单实用，多用途',
                '秦汉(前221-220)': '• 主要工具：标准量尺、记录竹简\n• 特点：开始专业化',
                '魏晋南北朝(220-589)': '• 主要工具：银针、检验图谱\n• 特点：毒物检测工具出现',
                '隋唐(581-907)': '• 主要工具：专业验尸工具包\n• 特点：成套化、规范化',
                '宋元(960-1368)': '• 主要工具：蒸骨器具、银钗\n• 特点：专用工具系统化',
                '明清(1368-1911)': '• 主要工具：精细测量工具、图谱\n• 特点：工具精密化'
            };
            return `<div style="font-weight:bold;color:#1a3b5d;">${params[0].name}</div>
                    <div>工具完善度: <span style="font-weight:bold;">${params[0].value}</span></div>
                    <hr style="margin:5px 0;border-color:#5a7ea3;opacity:0.3">
                    <div style="line-height:1.6;">${dynastyTools[params[0].name]}</div>`;
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '20%',
        containLabel: true,
        backgroundColor: '#f9fbff'
    },
    xAxis: [{
        type: 'category',
        data: ['先秦(前221前)', '秦汉(前221-220)', '魏晋南北朝(220-589)', '隋唐(581-907)', '宋元(960-1368)', '明清(1368-1911)'],
        axisLine: {
            lineStyle: {
                color: '#5a7ea3',
                width: 2
            }
        },
        axisLabel: {
            rotate: 30,
            margin: 10,
            color: '#1a3b5d',
            fontSize: 12
        },
        axisTick: {
            alignWithLabel: true,
            lineStyle: {
                color: '#5a7ea3'
            }
        }
    }],
    yAxis: [{
        type: 'value',
        name: '工具完善度指数',
        nameTextStyle: {
            color: '#5a7ea3',
            padding: [0, 0, 0, 40]
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#5a7ea3',
                width: 2
            }
        },
        axisLabel: {
            color: '#5a7ea3'
        },
        splitLine: {
            lineStyle: {
                color: '#e6f0ff'
            }
        }
    }],
    series: [{
        name: '检验工具发展',
        type: 'bar',
        barWidth: '40%',
        itemStyle: {
            color: {
                type: 'linear',
                x: 0, y: 0, x2: 0, y2: 1,
                colorStops: [
                    { offset: 0, color: '#7db8da' },  // 浅蓝
                    { offset: 0.5, color: '#3a8bc8' }, // 中蓝
                    { offset: 1, color: '#1a5d9e' }   // 深蓝
                ]
            },
            borderRadius: [4, 4, 0, 0],
            borderWidth: 0
        },
        data: [20, 35, 50, 65, 85, 75],
        label: {
            show: true,
            position: 'top',
            color: '#1a3b5d',
            fontWeight: 'bold',
            formatter: '{c}'
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(26,59,93,0.5)'
            }
        }
    }],
    graphic: [{
        type: 'text',
        left: 'center',
        top: 60,
        style: {
            text: '中国法医学检验工具发展历程（0-100指数）',
            fill: '#5a7ea3',
            fontSize: 14,
            fontWeight: 'normal'
        }
    }]
};

myChartRight1.setOption(optionRight1);

// 添加点击事件
myChartRight1.on('click', function (params) {
    var dynastyToolDetails = {
        '先秦(前221前)': {
            title: '先秦法医检验工具',
            tools: [
                '• 青铜刀具：用于尸体表面检查',
                '• 测量绳：测量伤口尺寸和尸体长度',
                '• 骨针：用于探查伤口深度',
                '• 陶罐：盛装检验样本'
            ],
            image: 'C:\\Users\\王佳茵\\Pictures\\Screenshots\\111.png',
            score: 20
        },
        '秦汉(前221-220)': {
            title: '秦汉法医检验工具',
            tools: [
                '• 标准量尺：统一尺寸测量',
                '• 记录竹简：详细记录检验结果',
                '• 铜镜：观察细微伤痕',
                '• 专用刀具：更精细的解剖工具'
            ],
            image: 'images/qin_han_tools.jpg',
            score: 35
        },
        '魏晋南北朝(220-589)': {
            title: '魏晋南北朝法医工具',
            tools: [
                '• 银针：毒物检测（银钗验毒雏形）',
                '• 检验图谱：标准伤痕记录',
                '• 专用量具：角度、深度测量',
                '• 熏蒸器具：初步蒸骨技术'
            ],
            image: 'images/wei_jin_tools.jpg',
            score: 50
        },
        '隋唐(581-907)': {
            title: '隋唐法医检验工具',
            tools: [
                '• 专业验尸工具包：成套化工具',
                '• 精密量具：带刻度测量',
                '• 蒸煮器具：用于骨骼检验',
                '• 检验记录板：标准化表格'
            ],
            image: 'images/sui_tang_tools.jpg',
            score: 65
        },
        '宋元(960-1368)': {
            title: '宋元法医检验工具（鼎盛）',
            tools: [
                '• 银钗：标准毒物检测工具',
                '• 蒸骨器具：专用骨骼检验设备',
                '• 精细刀具：多种解剖用途',
                '• 测量仪器：带精密刻度',
                '• 检验图谱：标准化伤痕记录'
            ],
            image: 'images/song_yuan_tools.jpg',
            score: 85
        },
        '明清(1368-1911)': {
            title: '明清法医检验工具',
            tools: [
                '• 精密测量工具：游标卡尺雏形',
                '• 标准化检验箱：全套工具',
                '• 放大镜：观察细微痕迹',
                '• 专用图谱：印刷版标准图谱',
                '• 检验记录册：格式化文书'
            ],
            image: 'images/ming_qing_tools.jpg',
            score: 75
        }
    };

    if (dynastyToolDetails[params.name]) {
        showModal({
            title: dynastyToolDetails[params.name].title,
            content: `
                <div style="color:#1a3b5d;">
                    <div style="margin-bottom:10px;font-weight:bold;">
                        工具完善度指数: ${dynastyToolDetails[params.name].score}/100
                    </div>
                    <img src="${dynastyToolDetails[params.name].image}" style="max-width:100%;margin-bottom:10px;border:1px solid #e6f0ff;">
                    <ul style="padding-left:20px;">
                        ${dynastyToolDetails[params.name].tools.map(item =>
                `<li style="margin-bottom:5px;">${item}</li>`
            ).join('')}
                    </ul>
                </div>
            `,
            style: {
                backgroundColor: '#f0f6ff',
                borderColor: '#5a7ea3',
                maxWidth: '500px'
            }
        });
    }
});
// 初始化右侧第二个图表 - 法医学检验工具展示
var myChartRight2 = echarts.init(document.getElementById('right2'));

// 法医学检验工具数据
var toolData = [
    {
        name: '银钗',
        era: '宋元时期',
        desc: '用于毒物检测，特别是砒霜等含硫毒物',
        usage: '插入尸体口腔或肛门，变黑则示有毒',
        img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBkPSJNMjAsNTBMNTAsMjBMODAsNTBMNTAsODBaIiBmaWxsPSIjM2E3NWQxIi8+PHBhdGggZD0iTTUwLDIwTDUwLDgwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==',
        value: 85
    },
    {
        name: '蒸骨器具',
        era: '宋元时期',
        desc: '用于骨骼检验的专用设备',
        usage: '用醋和酒蒸煮骨骼，观察骨折和伤痕',
        img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cmVjdCB4PSIxMCIgeT0iMjAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzVhOTBlNiIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNDAiIHI9IjIwIiBmaWxsPSIjZTYwZjBmZiIvPjwvc3ZnPg==',
        value: 80
    },
    {
        name: '检验刀具',
        era: '隋唐时期',
        desc: '专业验尸工具包中的解剖刀具',
        usage: '用于尸体解剖和伤痕检查',
        img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBkPSJNMjAsNzBMNTAsMzBMODAsNzAiIHN0cm9rZT0iIzNhNzVkMSIgc3Ryb2tlLXdpZHRoPSI2IiBmaWxsPSJub25lIi8+PC9zdmc+',
        value: 75
    },
    {
        name: '标准量尺',
        era: '秦汉时期',
        desc: '统一尺寸的测量工具',
        usage: '测量伤口尺寸和尸体长度',
        img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cmVjdCB4PSIyMCIgeT0iNDAiIHdpZHRoPSI2MCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzVhOTBlNiIvPjxwYXRoIGQ9Ik0yMCw1MEw4MCw1MCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=',
        value: 70
    },
    {
        name: '检验图谱',
        era: '明清时期',
        desc: '标准化伤痕记录图谱',
        usage: '对照图谱记录伤痕特征',
        img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cmVjdCB4PSIyMCIgeT0iMjAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2U2MGYwZmYiIHN0cm9rZT0iIzVhOTBlNiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+',
        value: 65
    },
    {
        name: '青铜刀具',
        era: '先秦时期',
        desc: '早期尸体检查工具',
        usage: '用于尸体表面检查',
        img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBkPSJNMjAsNjBMNTAsMzBMODAsNjAiIHN0cm9rZT0iIzc0YjRlZSIgc3Ryb2tlLXdpZHRoPSI2IiBmaWxsPSJub25lIi8+PC9zdmc+',
        value: 60
    }
];

var optionRight2 = {
    title: {
        text: '中国古代法医学检验工具展示',
        subtext: '点击工具可查看详细信息，拖动可平移视图',
        left: 'center',
        textStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#1a3b5d'
        },
        subtextStyle: {
            color: '#5a7ea3',
            padding: [5, 0]
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            return `
                <div style="font-weight:bold;color:#1a3b5d;">${params.data.name}</div>
                <div style="color:#5a7ea3;">${params.data.era}</div>
                <hr style="margin:5px 0;border-color:#5a7ea3;opacity:0.3">
                <div>${params.data.desc}</div>
            `;
        },
        backgroundColor: '#f0f6ff',
        borderColor: '#5a7ea3',
        textStyle: {
            color: '#1a3b5d'
        }
    },
    grid: {
        containLabel: true,
        backgroundColor: '#f9fbff'
    },
    xAxis: {
        type: 'value',
        show: false
    },
    yAxis: {
        type: 'category',
        data: toolData.map(item => item.name),
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
            color: '#1a3b5d',
            fontSize: 14
        }
    },
    series: [
        {
            name: '工具重要性',
            type: 'bar',
            barWidth: 20,
            data: toolData.map(item => ({
                value: item.value,
                name: item.name,
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0, y: 0, x2: 1, y2: 0,
                        colorStops: [
                            { offset: 0, color: '#7db8da' },
                            { offset: 1, color: '#1a5d9e' }
                        ]
                    },
                    borderRadius: [0, 10, 10, 0]
                }
            })),
            label: {
                show: true,
                position: 'right',
                formatter: '{c}%',
                color: '#1a3b5d'
            }
        },
        {
            type: 'scatter',
            symbolSize: 40,
            data: toolData.map((item, index) => ({
                value: [15, index],
                name: item.name,
                symbol: `image://${item.img}`,
                tooltip: {
                    formatter: function () {
                        return `
                            <div style="font-weight:bold;color:#1a3b5d;">${item.name}</div>
                            <div style="color:#5a7ea3;">${item.era}</div>
                            <hr style="margin:5px 0;border-color:#5a7ea3;opacity:0.3">
                            <div><strong>用途：</strong>${item.usage}</div>
                            <div><strong>描述：</strong>${item.desc}</div>
                        `;
                    }
                }
            })),
            emphasis: {
                scale: 1.5
            }
        }
    ],
    graphic: [
        {
            type: 'text',
            left: 'center',
            top: 60,
            style: {
                text: '中国法医学检验工具重要性指数（0-100）',
                fill: '#5a7ea3',
                fontSize: 14,
                fontWeight: 'normal'
            }
        }
    ]
};

// 添加点击和平移交互
myChartRight2.on('click', function (params) {
    if (params.componentType === 'series' && params.seriesType === 'scatter') {
        var tool = toolData.find(item => item.name === params.name);
        showModal({
            title: tool.name + ' - ' + tool.era,
            content: `
                <div style="color:#1a3b5d;">
                    <img src="${tool.img}" style="float:left;margin-right:15px;width:80px;height:80px;">
                    <div style="margin-bottom:10px;"><strong>重要性指数：</strong>${tool.value}%</div>
                    <div style="margin-bottom:10px;"><strong>主要用途：</strong>${tool.usage}</div>
                    <div style="clear:both;margin-top:10px;">${tool.desc}</div>
                </div>
            `,
            style: {
                backgroundColor: '#f0f6ff',
                borderColor: '#5a7ea3',
                maxWidth: '500px'
            }
        });
    }
});

// 启用数据区域缩放
optionRight2.dataZoom = [
    {
        type: 'slider',
        yAxisIndex: 0,
        filterMode: 'filter',
        width: 10,
        height: '80%',
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#5a7ea3',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        },
        brushSelect: false,
        fillerColor: 'rgba(90,126,163,0.2)',
        borderColor: '#e6f0ff',
        backgroundColor: '#e6f0ff'
    }
];

myChartRight2.setOption(optionRight2);

// 响应式调整
window.addEventListener('resize', function () {
    myChartRight2.resize();
});

// 模拟showModal函数（实际项目中替换为真实实现）
function showModal(options) {
    console.group('工具详情弹窗');
    console.log('标题:', options.title);
    console.log('内容:', options.content.replace(/<[^>]+>/g, ''));
    console.groupEnd();

    /* 实际项目中实现模态框显示
    var modal = document.createElement('div');
    modal.style = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
                  background:${options.style.backgroundColor};border:1px solid ${options.style.borderColor};
                  padding:20px;border-radius:5px;z-index:1000;max-width:${options.style.maxWidth};
                  box-shadow:0 0 10px rgba(0,0,0,0.2)`;
    modal.innerHTML = `
        <h3 style="color:#1a3b5d;margin-top:0;">${options.title}</h3>
        ${options.content}
        <button style="margin-top:15px;background:#5a7ea3;color:white;border:none;padding:5px 10px;border-radius:3px;">关闭</button>
    `;
    modal.querySelector('button').onclick = function() {
        document.body.removeChild(modal);
    };
    document.body.appendChild(modal);
    */
}

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


// 获取关闭按钮并添加点击事件
var closeBtn = document.getElementsByClassName("close")[0];
if (closeBtn) {
    closeBtn.onclick = function () {
        document.getElementById('bookModal').style.display = 'none';
    }
}

// 点击其他地方关闭弹出框
window.onclick = function (event) {
    if (event.target == document.getElementById('bookModal')) {
        document.getElementById('bookModal').style.display = 'none';
    }
}
