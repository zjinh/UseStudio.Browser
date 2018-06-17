Namespace.register('CampusInfo');
const {ipcRenderer} = require('electron');
CampusInfo.LoadAdvert = function () {
    for (var i = 0; i < CampusInfo.Advert.length; i++) {
        var a=$$("img", {
            "draggable":false,
            "src": CampusInfo.AdvertData[i].img
        }, CampusInfo.Advert[i]);
        a.href=CampusInfo.AdvertData[i].script;
        a.onclick=function () {
            CampusInfo.OpenWeb(this.href)
        }
    }
};//加载广告
CampusInfo.OpenWeb=function(url){
    ipcRenderer.send('open-browers',url);
};//打开网页
CampusInfo.LoadData = function (navMain) {
    var data = navMain.resource;//取出数组里定义好的传参
    var Tag = navMain.tag;//查看是什么标签
    var LeftArea = navMain.Left;//左侧内容容器
    var CenterArea = navMain.Center;//中间内容容器
    var ContentLength = navMain.dataLength;//中间内容有多少个
    var LeftContentArr = [];//记录左侧数据
    var CenterTitleArr = [];//记录特殊的蓝色标题数据
    var CenterContentArr = [];//记录输出内容
    CenterContentArr[0] = [];//三个数组分别用来记录三块内容，内容长度为8或者4
    CenterContentArr[1] = [];
    CenterContentArr[2] = [];
    if (typeof data === 'string') {
        CampusInfo.NewsData = [];
        CampusInfo.LoadNews = function () {
            var url = data + "iid=" + CampusInfo.randomNum(10) + "&device_id=" + CampusInfo.randomNum(11);
            U.A.Request(url, null, function (rs) {
                rs = rs.value.data;
                for (var i = 0; i < rs.length; i++) {
                    var list = JSON.parse(rs[i].content);
                    var arr = [];
                    var falg = true;
                    CampusInfo.NewsData.forEach(function (value) {
                        if (value.UserFilesName === list.title) {
                            falg = false;
                            return false;
                        }
                    });
                    if (falg && list.image_list&&list.title.length>15) {
                        arr.UserFilesName = list.title;
                        arr.UserFilesServerName = list.image_list[0].url;
                        arr.Action_url = list.url;
                        CampusInfo.NewsData.push(arr);
                    }
                }
                if (CampusInfo.NewsData.length < 19) {
                    CampusInfo.LoadNews();
                } else {
                    CampusInfo.DealData(ContentLength, LeftContentArr, CenterTitleArr, CenterContentArr, CampusInfo.NewsData);//处理数据
                    CampusInfo.PrintDataLocal(LeftContentArr, CenterTitleArr, CenterContentArr, LeftArea, CenterArea, Tag);//打印数据（本地数据）
                    CampusInfo.Loading.remove();//移除loading
                    CampusInfo.AutoSlider();//开始自动切换
                    CampusInfo.Bind();//绑定事件
                }
            });
        };
        CampusInfo.LoadNews();
    }else if(typeof data === 'object'&&CampusInfo.Fliter(data)) {
        U.A.Request(US.ADMINAUTH, (data), function (rs) {
            rs = rs.value;
            CampusInfo.DealData(ContentLength,LeftContentArr,CenterTitleArr,CenterContentArr,rs);//处理数据
            CampusInfo.PrintData(LeftContentArr,CenterTitleArr,CenterContentArr,LeftArea,CenterArea,Tag)//打印数据（获取的数据）
        });
        //注释的这里是有用的 是请求返回数据的操作
    }else{
        CampusInfo.DealData(ContentLength,LeftContentArr,CenterTitleArr,CenterContentArr,data);
        CampusInfo.PrintDataLocal(LeftContentArr,CenterTitleArr,CenterContentArr,LeftArea,CenterArea,Tag)
    }
};//加载数据
CampusInfo.Fliter=function (data) {
    for(var i=0;i<CampusInfo.FliterData.length;i++){
        if(CampusInfo.FliterData[i]===data){
            return false;
        }
    }
    return true;
};//用于辨别本地数据
CampusInfo.DealData=function (ContentLength,LeftContentArr,CenterTitleArr,CenterContentArr,rs) {/*中间内容多少条，左侧内容数组，中间标题数组，中间内容数组，获取的所有数据*/
    for (var i = 0; i < rs.length; i++) {
        if (i < 3) {
            LeftContentArr.push(rs[i]);
        } else {
            if (ContentLength === 4) {
                if (i === 3 || i === 8 || i === 13) {
                    CenterTitleArr.push(rs[i]);
                }
                if (i > 3 && i < 8) {
                    CenterContentArr[0].push(rs[i]);
                }
                if (i > 8 && i < 13) {
                    CenterContentArr[1].push(rs[i]);
                }
                if (i > 13 && i < 18) {
                    CenterContentArr[2].push(rs[i]);
                }
            } else {
                if (i === 3 || i === 12 || i === 21) {
                    CenterTitleArr.push(rs[i]);
                }
                if (i > 3 && i < 12) {
                    CenterContentArr[0].push(rs[i]);
                }
                if (i > 12 && i < 21) {
                    CenterContentArr[1].push(rs[i]);
                }
                if (i > 21 && i < 30) {
                    CenterContentArr[2].push(rs[i]);
                }
            }
        }
    }
};
CampusInfo.PrintDataLocal=function (LeftContentArr,CenterTitleArr,CenterContentArr,LeftArea,CenterArea,Tag) {/*左侧内容数组，中间标题数组，中间内容数组，左侧内容区域，中间内容区域,在CampusInfo.NavData定义的标签名*/
    for (var j = 0; j < CenterTitleArr.length; j++) {
        CenterArea[j].TitleArea.innerHTML = CenterTitleArr[j].UserFilesName;
        CenterArea[j].TitleArea.href = CenterTitleArr[j].Action_url;
        CenterArea[j].TitleArea.onclick = function () {
            CampusInfo.OpenWeb(this.href)
        };
        for (var k = 0; k < CenterContentArr[j].length; k++) {
            CenterArea[j].ContentArea[k].innerHTML = CenterContentArr[j][k].UserFilesName;
            CenterArea[j].ContentArea[k].href = CenterContentArr[j][k].Action_url;
            CenterArea[j].ContentArea[k].onclick = function () {
                CampusInfo.OpenWeb(this.href)
            };
        }
    }
    for (var kk = 0; kk < LeftContentArr.length; kk++) {
        LeftArea[kk].ImgArea.src = LeftContentArr[kk].UserFilesServerName;
        LeftArea[kk].TitleArea.innerHTML = LeftContentArr[kk].UserFilesName;
        LeftArea[kk].ImgArea.href = LeftContentArr[kk].Action_url;
        LeftArea[kk].ImgArea.onclick = function () {
            CampusInfo.OpenWeb(this.href)
        }
    }
};//打印本地数据
CampusInfo.PrintData=function (LeftContentArr,CenterTitleArr,CenterContentArr,LeftArea,CenterArea,Tag) {/*左侧内容数组，中间标题数组，中间内容数组，左侧内容区域，中间内容区域，在CampusInfo.NavData定义的标签名*/
    for (var j = 0; j < CenterTitleArr.length; j++) {
        CenterArea[j].TitleArea.innerHTML = CenterTitleArr[j].UserFilesName;
        if (Tag === 'graduation') {
            CenterArea[j].TitleArea.href = CampusInfo.ResourceUrl + CenterTitleArr[j].UserFilesServerName;
        } else {
            CenterArea[j].TitleArea.href = CenterTitleArr[j].Action_url;
        }
        CenterArea[j].TitleArea.onclick = function () {
            CampusInfo.OpenWeb(this.href)
        };
        for (var k = 0; k < CenterContentArr[j].length; k++) {
            CenterArea[j].ContentArea[k].innerHTML = CenterContentArr[j][k].UserFilesName;
            if (Tag === 'graduation') {
                CenterArea[j].ContentArea[k].href = CampusInfo.ResourceUrl + CenterContentArr[j][k].UserFilesServerName;
            } else {
                CenterArea[j].ContentArea[k].href = CenterContentArr[j][k].Action_url;
            }
            CenterArea[j].ContentArea[k].onclick = function () {
                CampusInfo.OpenWeb(this.href)
            };
        }
    }
    for (var kk = 0; kk < LeftContentArr.length; kk++) {
        LeftArea[kk].ImgArea.src = CampusInfo.ResourceUrl + LeftContentArr[kk].UserFilesServerName;//将图片地址添加进img标签
        LeftArea[kk].TitleArea.innerHTML = LeftContentArr[kk].UserFilesName;//将数据标题写入标题容器
        if (Tag === 'graduation') {//如果是毕业季数据
            LeftArea[kk].ImgArea.href = CampusInfo.ResourceUrl + LeftContentArr[kk].UserFilesServerName;//在图片前加上资源地址
        } else {
            LeftArea[kk].ImgArea.href = LeftContentArr[kk].Action_url;//否则直接放图片地址，这个href是用来点开链接的
        }
        LeftArea[kk].ImgArea.onclick = function () {
            CampusInfo.OpenWeb(this.href)//打开广告链接
        }
    }
};//打印网络数据
CampusInfo.randomNum = function (n) {
    var t = '';
    for (var i = 0; i < n; i++) {
        t += Math.floor(Math.random() * 10);
    }
    return t;//返回一个n长度的随机数
};//随机数传参为随机数的长度
CampusInfo.Bind = function () {
    CampusInfo.Nav[0].className = 'CampusInfoHeadNavActive';//默认第一个选中
    CampusInfo.Main[0].style.display = 'block';//默认第一个内容显示
    CampusInfo.Head.onclick=function () {
        CampusInfo.OpenWeb('http://seo.1473.cn')
    };//校内版点击跳转
    for (var i = 0; i < CampusInfo.Nav.length; i++) {//循环所有导航元素添加绑定事件
        (function (i) {
            CampusInfo.Nav[i].onclick = function () {//添加点击事件
                CampusInfo.AutoState=false;//如果点击了就取消自动切换，将自动切换禁用
                for (var j = 0; j < CampusInfo.Nav.length; j++) {//循环改变所有导航为未选中状态，所有内容为隐藏
                    CampusInfo.Nav[j].className = '';
                    CampusInfo.Main[j].style.display = 'none';
                }
                CampusInfo.Nav[i].className = 'CampusInfoHeadNavActive';//给指定的导航添加选中
                CampusInfo.Main[i].style.display = 'block';//给指定的内容添加显示
            }
        })(i)
    }
};//绑定事件
CampusInfo.AutoSlider = function () {
    if (CampusInfo.AutoState) {//如果自动切换模式打开
        CampusInfo.NowShow++;//默认为-1，切换对应CampusInfo.Main显示
        if (CampusInfo.NowShow === CampusInfo.Nav.length) {//如果是最后一个则返回第一个
            CampusInfo.NowShow  = 0;
        }
        for (var i = 0; i < CampusInfo.Nav.length; i++) {//循环改变所有导航为未选中状态，所有内容为隐藏
            CampusInfo.Nav[i].className = '';
            CampusInfo.Main[i].style.display = 'none';
        }
        CampusInfo.Nav[CampusInfo.NowShow].className = 'CampusInfoHeadNavActive';//给指定的导航添加选中
        CampusInfo.Main[CampusInfo.NowShow].style.display = 'block';//给指定的内容添加显示
        setTimeout(function () {
            CampusInfo.AutoSlider();//开始自动切换
        }, 5000);//5秒切换一次
    }
};//自动切换
CampusInfo.LoadWeather=function (location) {
    if(!location){//如果没有传地址就默认为深圳
        location='深圳'
    }
    U.A.Request("http://api.map.baidu.com/telematics/v3/weather?location="+location+"&output=json&ak=v4Wf3i6LQtNU0CvL3fScxzIx", null, function (rs) {
        rs = rs.value.results[0].weather_data[0];
        var temperature=rs.temperature;
        var weather=rs.weather;
        CampusInfo.WeatherPanel.innerHTML=location+' '+weather+' '+temperature;//将返回信息输出到对应元素内
    });
};//获取天气
CampusInfo.Init = function () {
    CampusInfo.AutoState=true;//默认为true自动切换，false不切换
    CampusInfo.NowShow=-1;//默认显示第几个-1是为了加载完成不会直接跳过第一个
    CampusInfo.ResourceUrl = 'http://fs.1473.cn/';//资源地址
    CampusInfo.Loading=$(".CampusInfoLoading")[0];
    CampusInfo.WeatherPanel=$(".CampusInfoHeadWeather")[0];
    CampusInfo.NavContainer = $(".CampusInfoHeadNav")[0];//导航元素主容器
    CampusInfo.MainContainer = $(".CampusInfoMain")[0];//内容元素住容器
    CampusInfo.Nav = [];//记录导航元素
    CampusInfo.Main = [];//记录内容元素
    CampusInfo.Advert = [];//记录广告区域
    CampusInfo.Head=$(".CampusInfoHeadTitle span")[0];//获取头部的校内版元素
    for (var i = 0; i < CampusInfo.NavData.length; i++) {//循环导航数组创建元素
        var area = [];//初始化area数组
        var leftContent = [];//初始化左侧内容数组
        var li = $$("li", {
            "innerHTML": CampusInfo.NavData[i].name
        }, CampusInfo.NavContainer);//创建一个导航元素在导航容器内
        var container = $$("div", {
            "className": "CampusInfoContainer",
        }, CampusInfo.MainContainer);//创建一个主内容容器在内容容器内
        var left_container = $$("div", {
            "className": "CampusInfoContLeft",
        }, container);//创建一个左侧内容区域在主容器里
        var center_container = $$("div", {
            "className": "CampusInfoContCenter",
        }, container);//创建一个中心内容区域在主容器里
        var right_container = $$("div", {
            "className": "CampusInfoContRight",
        }, container);//传建一个右侧内容容器在数组里
        CampusInfo.Nav[i] = li;//将导航元素丢进数组里
        CampusInfo.Main[i] = container;//将页面元素丢进数组里
        CampusInfo.Main[i].tag = CampusInfo.NavData[i].tag;//获取导航数组的内容标签
        CampusInfo.Main[i].dataLength = CampusInfo.NavData[i].dataLength;//获取导航数组规定的下方内容数据个数4或者8
        CampusInfo.Main[i].resource = CampusInfo.NavData[i].resource;//获取导航数组中的数据来源
        for (var j = 0; j < 3; j++) {
            area[j] = $$("div", {
                "className": "CampusInfoContCenterContent",
            }, center_container);//创建一个用来放置内容的元素，因为有三栏内容 所以创建三个并记录到ara数组
            area[j].TitleArea = $$("p", {
                "className": "CampusInfoContCenterTitle",
            }, area[j]);//创建放置标题的元素，同样三个 丢进area下的TitleArr数组
            for (var k = 0; k < CampusInfo.NavData[i].dataLength; k++) {
                $$("span", {
                    "className": "CampusInfoContCenterCArea" + CampusInfo.NavData[i].dataLength
                }, area[j]);//这里根据之前取出的数据长度创建元素，丢进area里的ContentArea
                area[j].ContentArea = area[j].getElementsByTagName('span');//记录创建的span数组
            }
            CampusInfo.Main[i].Center = area;//将area丢回内容元素下的中间部分
            leftContent[j] = $$("div", {
                "className": "CampusInfoContLeftContent"
            }, left_container);//创建三个放置左侧内容的元素
            leftContent[j].ImgArea = $$("img", {"draggable":false}, leftContent[j]);//对应三个内容的img标签 丢回leftContent下的ImgArea数组
            leftContent[j].TitleArea = $$("p", {}, leftContent[j]);//对应三个内容的标题，丢回leftContent下的TitleArea数组
            CampusInfo.Main[i].Left = leftContent//将leftContent丢进主容器下的左侧数组
        }
        for (var k = 0; k < 2; k++) {
            var advert = $$("div", {
                "className": "CampusInfoContRightContent",
            }, right_container);//在每个右侧版块创建两个放置广告的元素
            CampusInfo.Advert.push(advert)//将创建的广告容器元素丢进数组里
        }
    }
    for(var i=0;i<CampusInfo.Main.length;i++){
        CampusInfo.LoadData(CampusInfo.Main[i]);//加载数据，传入要加载的主容器
    }
    CampusInfo.LoadAdvert();//加载广告
    CampusInfo.LoadWeather();//加载天气
}();//初始化