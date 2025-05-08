const newsData = [
    {
        title: '伤寒表实证（《伤寒论》麻黄汤）',
        summary: '麻黄三两（去节），桂枝二两（去皮），甘草一两（炙），杏仁七十个（去皮尖）。上四味，以水九升，先煮麻黄减二升，去上沫，纳诸药煮取二升半，去滓，温服八合。覆取微似汗。'
    },
    {
        title: '太阳中风证（《伤寒论》桂枝汤）',
        summary: '桂枝三两（去皮），芍药三两，甘草二两（炙），生姜三两（切），大枣十二枚（擘）。上五味，㕮咀三味，以水七升，微火煮取三升，去滓，适寒温，服一升。服已须臾，啜热稀粥一升余，以助药力。'
    },
    {
        title: '少阳病证（《伤寒论》小柴胡汤）',
        summary: '柴胡半斤，黄芩三两，人参三两，半夏半升（洗），甘草（炙）、生姜（切）各三两，大枣十二枚（擘）。上七味，以水一斗二升，煮取六升，去滓，再煎取三升，温服一升，日三服。'
    },
    {
        title: '阳明腑实证（《伤寒论》大承气汤）',
        summary: '大黄四两（酒洗），厚朴半斤（炙，去皮），枳实五枚（炙），芒硝三合。上四味，以水一斗，先煮二物取五升，去滓，纳大黄更煮取二升，去滓，纳芒硝，更上微火一两沸，分温再服。得下，余勿服。'
    },
    {
        title: '太阴病腹痛（《伤寒论》理中汤）',
        summary: '人参、干姜、甘草（炙）、白术各三两。上四味，捣筛，蜜和为丸如鸡子黄许大。以沸汤数合和一丸，研碎，温服之。日三四、夜二服。腹中未热，益至三四丸。'
    },
    {
        title: '少阴病寒化证（《伤寒论》四逆汤）',
        summary: '甘草二两（炙），干姜一两半，附子一枚（生用，去皮，破八片）。上三味，以水三升，煮取一升二合，去滓，分温再服。强人可大附子一枚，干姜三两。'
    },
    {
        title: '虚劳腰痛（《金匮要略》肾气丸）',
        summary: '干地黄八两，山药四两，山茱萸四两，泽泻三两，茯苓三两，牡丹皮三两，桂枝一两，附子（炮）一两。上八味末之，炼蜜和丸梧子大。酒下十五丸，加至二十五丸，日再服。'
    },
    {
        title: '痰饮咳嗽（《金匮要略》苓甘五味姜辛汤）',
        summary: '茯苓四两，甘草三两，干姜三两，细辛三两，五味子半升。上五味，以水八升，煮取三升，去滓，温服半升，日三服。'
    },
    {
        title: '黄疸病（《金匮要略》茵陈蒿汤）',
        summary: '茵陈蒿六两，栀子十四枚（擘），大黄二两（去皮）。上三味，以水一斗二升，先煮茵陈减六升，纳二味，煮取三升，去滓，分三服。小便当利，尿如皂角汁状。'
    },
    {
        title: '血痹虚劳（《金匮要略》黄芪桂枝五物汤）',
        summary: '黄芪三两，芍药三两，桂枝三两，生姜六两，大枣十二枚。上五味，以水六升，煮取二升，温服七合，日三服。'
    },
    {
        title: '温病初起（《温病条辨》银翘散）',
        summary: '连翘一两，银花一两，苦桔梗六钱，薄荷六钱，竹叶四钱，生甘草五钱，芥穗四钱，淡豆豉五钱，牛蒡子六钱。上杵为散，每服六钱，鲜苇根汤煎，香气大出即取服。'
    },
    {
        title: '暑温夹湿（《温病条辨》三仁汤）',
        summary: '杏仁五钱，飞滑石六钱，白通草二钱，白蔻仁二钱，竹叶二钱，厚朴二钱，生薏仁六钱，半夏五钱。甘澜水八碗，煮取三碗，每服一碗，日三服。'
    },
    {
        title: '湿热痢疾（《医学心悟》芍药汤）',
        summary: '芍药一两，当归半两，黄连半两，槟榔二钱，木香二钱，甘草二钱（炙），大黄三钱，黄芩半两，官桂二钱半。上细切，每服半两，水二盏煎至一盏，食后温服。'
    },
    {
        title: '中风不语（《医林改错》补阳还五汤）',
        summary: '黄芪四两（生），归尾二钱，赤芍一钱半，地龙一钱（去土），川芎一钱，桃仁一钱，红花一钱。水煎服。初得半量，渐加至全量。'
    },
    {
        title: '肺痨咳嗽（《医学入门》百合固金汤）',
        summary: '百合一钱半，熟地三钱，生地二钱，当归身三钱，白芍一钱，甘草一钱，桔梗八分，贝母一钱半，麦冬一钱半，玄参八分。水二盅，煎八分，食远服。'
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
  