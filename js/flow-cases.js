// 简讯数据
const newsData = [
  {
    title: "吐血病",
    time: "患者反复吐血，面色萎黄，神疲乏力，心悸气短，大便色黑，舌淡苔白，脉细弱。",
    summary: "归脾汤加减：党参18克，黄芪15克，白术12克，茯苓12克，当归9克，炒地榆15克，白及10克，阿胶12克（烊化），血余炭10克。"
  },
  {
    title: "便血病",
    time: "患者大便发黑，伴上腹部不适，头晕、乏力，食欲尚可，近期体重下降，舌淡苔白，脉细弱。",
    summary: "归脾汤：党参、黄芪、白术、茯苓、当归、酸枣仁、龙眼肉、木香、炙甘草、大枣、生姜。"
  },
  {
    title: "紫癜病",
    time: "患者皮肤青紫斑点，神疲乏力，头晕头昏时作，心慌时作，气短，舌淡，脉细。",
    summary: "归脾汤加减：党参、黄芪、白术、茯苓、当归、炒地榆、白及、阿胶。"
  },
  {
    title: "中风病",
    time: "患者肢体无力，头晕，行走不稳，言语欠利，舌暗红，苔薄白，脉弦涩。",
    summary: "补阳还五汤：黄芪、当归尾、赤芍、地龙、川芎、桃仁、红花。"
  },
  {
    title: "心衰病",
    time: "患者胸闷憋喘，倦怠乏力，心慌乏力，双下肢浮肿，舌淡，脉弦细。",
    summary: "生脉散合补阳还五汤：人参、麦冬、五味子、黄芪、当归尾、赤芍、川芎、桃仁、红花。"
  },
  {
    title: "胸痹心痛病",
    time: "患者胸闷隐痛，连及胁肋，畏寒怕冷，手脚冰凉，舌淡，脉弦细。",
    summary: "瓜蒌薤白半夏汤合当归四逆汤：瓜蒌、薤白、半夏、当归、桂枝、芍药、细辛、甘草、木通、大枣。"
  },
  {
    title: "中风病",
    time: "患者头晕、头痛，肢体麻木无力，舌暗，苔白腻，脉弦。",
    summary: "涤痰汤：半夏、茯苓、橘红、竹茹、枳实、石菖蒲、胆南星、人参、甘草、生姜、大枣。"
  },
  {
    title: "妊娠腹痛病",
    time: "患者下腹疼痛隐隐，舌淡红，苔白，脉弦涩。",
    summary: "胎元饮：人参、白术、熟地、当归、杜仲、白芍、陈皮、炙甘草。"
  },
  {
    title: "胎动不安病",
    time: "患者腰部酸痛，偶有下腹隐痛，舌淡红，苔薄白，脉沉滑尺脉弱。",
    summary: "寿胎丸：菟丝子、桑寄生、续断、阿胶。"
  },
  {
    title: "胎死不下病",
    time: "患者无恶寒发热，无阴道出血，无腹痛腰酸，舌红，苔薄白，脉沉滑尺弱。",
    summary: "保阴煎：生地、熟地、黄芩、黄柏、白芍、山药、续断、甘草。"
  },
  {
    title: "胃脘痛病",
    time: "患者上腹疼痛，食纳欠佳，舌淡红苔薄黄，脉弦。",
    summary: "黄芪建中汤：黄芪、桂枝、白芍、生姜、大枣、炙甘草、饴糖。"
  },
  {
    title: "胃痞病",
    time: "患者上腹疼痛不适，食纳欠佳，夜寐差，舌质淡，苔薄白，脉细弱。",
    summary: "补中益气汤：黄芪、人参、白术、当归、陈皮、升麻、柴胡、炙甘草。"
  },
  {
    title: "虚劳病",
    time: "患者大便次数增多，食纳欠佳，舌红苔黄，脉细弦。",
    summary: "参苓白术散：人参、茯苓、白术、山药、莲子肉、薏苡仁、砂仁、桔梗、白扁豆、炙甘草。"
  },
  {
    title: "眩晕病",
    time: "患者头晕、昏沉间作，行走欠利，舌淡，苔白，脉弦。",
    summary: "半夏白术天麻汤：半夏、白术、天麻、茯苓、橘红、甘草、生姜、大枣。"
  },
  {
    title: "痈病",
    time: "患者局部肿物破溃流脓，疼痛难忍，舌红，苔黄，脉数。",
    summary: "仙方活命饮：金银花、防风、白芷、当归尾、赤芍、乳香、没药、贝母、天花粉、陈皮、穿山甲、皂角刺、甘草。"
  },
  {
    title: "蝼蛄疖病",
    time: "患者头部脓肿渐增多、增大，胀痛、压痛明显，舌红，苔黄，脉数。",
    summary: "仙方活命饮：金银花、防风、白芷、当归尾、赤芍、乳香、没药、贝母、天花粉、陈皮、穿山甲、皂角刺、甘草。"
  },
  {
    title: "疖病",
    time: "患者臀部肿物增大，疼痛加重，舌红，苔黄，脉数。",
    summary: "仙方活命饮：金银花、防风、白芷、当归尾、赤芍、乳香、没药、贝母、天花粉、陈皮、穿山甲、皂角刺、甘草。"
  },
  {
    title: "混合痔",
    time: "患者肛内肿物脱出，便血，肛门疼痛，舌红，苔黄，脉滑数。",
    summary: "凉血地黄汤：生地黄、黄芩、黄连、槐花、地榆、枳壳、当归、防风。"
  },
  {
    title: "肛裂",
    time: "患者肛缘肿痛，便血，舌红，苔黄，脉滑数。",
    summary: "凉血地黄汤：生地黄、黄芩、黄连、槐花、地榆、枳壳、当归、防风。"
  },
  {
    title: "肛肠病（内痔病）",
    time: "患者肛旁肿痛，脓液外溢，舌红，苔白，脉弦滑。",
    summary: "凉血地黄汤：生地黄、黄芩、黄连、槐花、地榆、枳壳、当归、防风。"
  },
  {
    title: "血栓性外痔",
    time: "患者肛缘皮肤隆起并疼痛，舌红，苔黄，脉滑数。",
    summary: "凉血地黄汤：生地黄、黄芩、黄连、槐花、地榆、枳壳、当归、防风。"
  }
];
    
  // 更新简讯列表的函数  
function updateNewsList() {  
  const newsList = document.getElementById('news-list');  
  const newsContainer = document.getElementById('news-container'); // 假设这是包含新闻列表的容器  
  
  newsList.innerHTML = ''; // 清空旧的简讯内容  
  
  
  
  newsData.forEach(news => {  
    const li = document.createElement('li');  
    li.innerHTML = `  
      <h3 class="news-title">${news.title}</h3>  
      <p class="news-info">${news.time}</p>  
      <p class="news-info">${news.summary}</p>  
    `;  
    newsList.appendChild(li);  
  }); 

  // 滚动到最新添加的新闻项  
  scrollToLatestNews(newsContainer);  
}  

  // 滚动到最新新闻的函数  
  function scrollToLatestNews(container) {  
    const latestNews = container.querySelector('li:last-child');  
    if (!latestNews) return; // 如果没有最新新闻，直接返回  

    const scrollDuration = 10000; // 滚动总时长
    const scrollStep = 1; // 每次滚动的步长  
    const start = container.scrollTop;  
    const end = latestNews.offsetTop - container.offsetTop; // 要滚动到的目标位置  
    const totalNewsHeight = Array.from(newsList.children).reduce((sum, li) => sum + li.offsetHeight, 0);  
    const containerHeight = container.offsetHeight;  
    let isContinuousScroll = false; // 标记是否连续滚动  
    
    function step(currentTime) {  
      const timeElapsed = currentTime - startTime;  
      const progress = Math.min(timeElapsed / scrollDuration, 1);  
      const scrollPosition = start + (end - start) * progress;  
      container.scrollTop = scrollPosition;  
    
      if (timeElapsed < scrollDuration) {  
        window.requestAnimationFrame(step);  
      } else {  
        container.scrollTop = end; // 确保最终滚动到位  
          
        // 检查是否应该连续滚动  
        if (container.scrollTop + containerHeight >= totalNewsHeight) {  
          isContinuousScroll = true;  
          container.scrollTop = 0; // 滚动到第一个新闻项  
        }  
    
        // 如果需要连续滚动，则重新调用滚动函数  
        if (isContinuousScroll) {  
          setTimeout(() => {  
            scrollToLatestNews(container); // 递归调用
          }); 
        }  
      }  
    }  
    
    window.requestAnimationFrame(step);  
  }  
    
  // 初始化简讯列表  
  updateNewsList();
  