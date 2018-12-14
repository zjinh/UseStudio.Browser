const url = require('url');
const {ipcRenderer} = require('electron');
let ipc=require('electron').ipcRenderer;
/*注册命名空间*/
let US_Browser=[];
let BrowersWindow=require('electron').remote.getCurrentWindow();
Namespace.register("US_Browser");
/*浏览器函数*/
US_Browser.CreatBrower=function (address,flag) {//创建窗口,url，是否为用户选择文件
    let http = /^(http)/;
    let https = /^(https)/;
    let www=/^(www)/;
    let m=/^(m)/;
    let li=$$("li", {//创建ul下的li
        "className": "BrowerList","draggable":"true"
    }, US_Browser.NavContainer);
    let ListBody=$$("div", {//创建li下的div
        "className": "BrowerListBody","ripple":""
    }, li);
    US_Browser.NavContainer.insertBefore(li,US_Browser.AddButton);//把新建标签页按钮追加到ul的li下
    li.data={//传窗口地址
        "url":address,
        "name":null,
        "favicons":'public/img/tray/logo.png'
    };
    li.data={//传窗口地址
        "url":address,
        "name":null,
        "favicons":'public/img/tray/logo.png'
    };
    ListBody.tag_favicon=$$("img", {//标签页图标
        "className": "tag_favicon", "alt":""
    }, ListBody);
    ListBody.tag_favicon.setAttribute("draggable","false");
    ListBody.tag_favicon.style.display=(address&&address!==null)?"block":"none";
    ListBody.tag_favicon.onerror=function () {//不存在时显示的标签页图标
        this.src='public/img/tray/logo.png';
    };
    ListBody.Webname=$$("p", {//标签页标题
        "className": "Webname","innerHTML":address?"正在加载":"新建标签",
    }, ListBody);
    ListBody.tag_close=$$("i", {//标题页关闭按钮
        "className":"icon-cancel tag_close"
    }, ListBody);
    let BrowerContainer=$$("div", {"className":"BrowerContainer"},$("body")[0]);//装载webview
    let webview=$$("webview", {//创建webview
        "allowpopups":"", "autosize":"on","preload":"./public/js/preload.js"
    }, BrowerContainer);
    li.onmousedown=function(e){
        if(e.button===1){
            ListBody.tag_close.click(0)
        }
    };
    webview.setAttribute('plugins','');
    webview.state=(address&&address!==null)?false:true;
    webview.tag=li;//把li赋给webview标签
    webview.addEventListener("new-window",function (e) {//访客页面尝试打开新的浏览器窗口时触发。
        US_Browser.BrowersTag=$(".BrowerList");//获取选项卡li
        let LIwidth = ((US_Browser.NavContainer.offsetWidth - 120)/US_Browser.BrowersTag.length)-10;//得到每个li标签页宽度
        if(US_Browser.BrowersTag.length>=30){//如果如果li标签页大于35
            confirm("窗口太多，请关闭一些再使用");//弹出提示
            return false;
        }
        const protocol=url.parse(e.url).protocol;
        if(protocol==='http:'||protocol==='https:'||protocol==="about:blank"){
            US_Browser.CreatBrower(e.url);//系统的默认浏览器中打开新的URL
        }
    });
    webview.addEventListener("page-favicon-updated",function (e) {//当页面收到图标网址时触发
        ListBody.tag_favicon.src=e.favicons[0];
        this.tag.data.favicons=e.favicons[0];
    });
    webview.addEventListener('will-navigate',function (e) {//导航跳转时触发
        this.tag.data.url=e.url;
        if(webview===US_Browser.SelecteWebview) {
            US_Browser.Head[5].value=e.url;
        }
    });
    webview.addEventListener('did-navigate',function (e) {//导航完成时触发
        this.tag.data.url=e.url;
        if(webview===US_Browser.SelecteWebview) {
            US_Browser.Head[5].value=e.url;
        }
        ListBody.Webname.innerHTML=this.getTitle();
    });
    webview.addEventListener('did-navigate-in-page',function (e) {//导航完成时触发
        this.tag.data.url=e.url;
        US_Browser.Head[5].value=e.url;
        US_Browser.CheckState(this);
    });
    webview.addEventListener('page-title-updated',function (e) {//导航完成时触发
        this.tag.data.name=e.title;
        ListBody.Webname.innerHTML=e.title;
    });
    webview.addEventListener('dom-ready',function (e) {//加载完成webview后执行
        ListBody.Webname.innerHTML=this.getTitle();//更改webview的title
        this.tag.data.name=this.getTitle();
        US_Browser.CheckState(this);
        this.focus();
        this.getWebContents().focus();
        US_Browser.isready = true
    });
    webview.addEventListener('did-get-response-details',function (e) {
        US_Browser.LoadTips.innerHTML='正在请求:'+e.originalURL;
    });
    webview.addEventListener('did-start-loading',function (e) {
        ListBody.tag_favicon.src='';
        US_Browser.IsLoading(this,true);
    });
    webview.addEventListener('did-finish-load',function (e) {
        US_Browser.IsLoading(this,false);
        US_Browser.LocalStorage(this);
    });
    webview.addEventListener('did-frame-finish-load',function (e) {
        US_Browser.IsLoading(this,false)
    });
    webview.addEventListener('did-stop-loading',function (e) {
        US_Browser.IsLoading(this,false)
    });
    webview.addEventListener('load-commit',function (e) {
        US_Browser.LoadTips.innerHTML=e.url;
        US_Browser.IsLove(e.url)
    });
    webview.addEventListener('found-in-page', function(e) {
        if (e.result.finalUpdate) {
            US_Browser.Elm[1].innerHTML=e.result.activeMatchOrdinal+'/'+e.result.matches;
            US_Browser.Elm[2].onclick=function () {

            };
            US_Browser.Elm[3].onclick=function () {
                US_Browser.SelecteWebview.findInPage(US_Browser.Elm[0].value)
            };
        }
    });
    webview.addEventListener('did-fail-load',function (e) {
        if (e.errorCode === -3) {
            return
        }
        US_Browser.SelecteWebview.src = './blank.html'
    });
    /*webview.addEventListener('did-fail-load',function (e) {
        if(webview.state) {
            let msg = e.errorDescription;
            let old_url = US_Browser.Head[5].value;
            US_Browser.SelecteWebview.src = 'error.html?msg=' + msg + '&url=' + this.src;
            US_Browser.Head[5].value = old_url;
        }
    });*/
    webview.fullSrceen=false;
    webview.FindKey=false;
    webview.onmousedown=function (e) {//webview鼠标事件
        US_Browser.US_OpenLinkInNew.style.display=US_Browser.US_OpenImgInNew.style.display='none';
        ipcRenderer.on('elm',function (e,msg) {
            US_Browser.MouseData=msg;
            if(US_Browser.MouseData) {
                let tag = US_Browser.MouseData.tag;
                if (tag === 'A') {
                    US_Browser.US_OpenLinkInNew.style.display = 'block';
                    US_Browser.US_OpenLinkInNew.onclick = function () {
                        US_Browser.CreatBrower(US_Browser.MouseData.href)
                    };
                } else if (tag === 'IMG') {
                    US_Browser.US_OpenImgInNew.style.display = 'block';
                    US_Browser.US_OpenImgInNew.onclick = function () {
                        US_Browser.CreatBrower(US_Browser.MouseData.src)
                    };
                } else {
                    US_Browser.US_OpenLinkInNew.style.display = US_Browser.US_OpenImgInNew.style.display = 'none';
                }
            }
        });
        US_Browser.MouseMenu(US_Browser.MouseMenuMain,this,e);//右键显示创建应用菜单
    };
    ListBody.tag_close.onclick=function () {//点击标题页关闭按钮
        event.stopPropagation();
        let closeArr = $(".tag_close");
        closeArr[0].index = 0;//设置li下第一个关闭图标的index
        if(ListBody.tag_close.index === 0){
            webview.tag.nextSibling.onclick();//点击当前li下一个
        }else{
            webview.tag.previousSibling.onclick();//点击当前li上一个
        }
        if(ListBody.offsetWidth<50){
            ListBody.Webname.style.display = "none";
        }else{
            ListBody.Webname.style.display = "block";
        }
        US_Browser.NavContainer.removeChild(webview.tag);//移除当前li
        document.body.removeChild(BrowerContainer);//移除当前webview
    };
    // 标签页右键‘关闭标签’
    li.onmousedown = function (e) {
        if(e.button == 2 ){
            US_Browser.MouseMenu($("#US_TagSet")[0],this,event);
            $("#DelectTags")[0].onclick = function(){
                ListBody.tag_close.click(0)
            }
        }
    }
    webview.src=address;//给webview的src传值
    US_Browser.Bind();
    ListBody.click();//点击li下的包裹节点
    if(flag){
        let pattern  = new RegExp("^[a-zA-Z]:/[a-zA-Z_0-9//]*");
        if(pattern.test(address)){
            webview.src = "file:///"+address;
        }else {
            if (address.match(http) || address.match(https)) {//判断是否存在http或https
                webview.src = address;//给webview的src传值
            } else if (this.value.match(www) || this.value.match(m)) {
                webview.src = 'http://' + this.value;//给webview的src传值
            } else {
                webview.src = 'https://www.baidu.com/s?cl=3&wd=' + this.value;//给webview的src传值
            }
        }
        webview.tag.getElementsByTagName('img')[0].style.display = "block";//标签页图标显示
    }
    US_Browser.BrowerList.drag();
};//创建一个新的浏览器选项卡
US_Browser.MouseMenu=function (menu_main,data,e,flag) {//右键菜单事件
    let createNode=document.body;//获取第一和参数父元素
    let MouseMenuMain=$('.MouseMenuMain');//获取右键菜单事件的ul元素
    US_Browser.MouseMenuMainer.style.display='none';
    for(let i=0;i<MouseMenuMain.length;i++){//隐藏右键菜单事件所有
        MouseMenuMain[i].style.display='none';
    }
    document.onmouseup=function () {//鼠标事件后触发
        if (e.button === 2||flag) {
            menu_main.style.display = 'block';//显示菜单
            if (!flag) {
                menu_main.style.left = e.pageX + -parseFloat(createNode.getBoundingClientRect().left) + createNode.offsetLeft + 'px';//菜单定位横坐标
                menu_main.style.top = e.pageY + -parseFloat(createNode.getBoundingClientRect().top) + createNode.offsetTop + 'px';//菜单定位纵坐标
                if (menu_main.getBoundingClientRect().left + menu_main.offsetWidth > createNode.offsetWidth) {//判断距左位置
                    menu_main.style.left = menu_main.style.left.split('px')[0] - menu_main.offsetWidth -30+ 'px';//距左多少
                }
                if (menu_main.getBoundingClientRect().top + menu_main.offsetHeight> createNode.offsetHeight) {//判断距上位置
                    menu_main.style.top = menu_main.style.top.split('px')[0] - menu_main.offsetHeight + 'px';//距上多少
                }
            }
            document.onmouseup = null;//清空
        }
    };
    menu_main.onclick=createNode.onmousewheel=function () {//执行右键菜单隐藏
        for(let i=0;i<MouseMenuMain.length;i++){
            MouseMenuMain[i].style.display='none';//隐藏
        }
    };
};//右键菜单函数
US_Browser.CheckState=function(webview){
    if(webview.canGoBack()){//判断是否可以后退
        US_Browser.Head[0].style.color = '#5a5a5a';
        US_Browser.MenuBack.removeAttribute('style');
    }else{
        US_Browser.Head[0].style.color = '#d3d3d3';
        US_Browser.MenuBack.style.color='#adadad';
    }
    if(webview.canGoForward()){//判断是否可以前进
        US_Browser.Head[1].style.color = '#5a5a5a';
        US_Browser.MenuGo.removeAttribute('style');
    }else{
        US_Browser.Head[1].style.color = '#d3d3d3';
        US_Browser.MenuGo.style.color='#adadad';
    }
    if(!US_Browser.Head[5].value.length){
        US_Browser.Head[2].style.color = '#d3d3d3';
    }else{
        US_Browser.Head[2].style.color = '#5a5a5a';
    }
};//检查标签是否可后退前进
US_Browser.LocalStorage=function(webview){
    let time = (new Date()).valueOf();
    let today = new Date().toLocaleDateString();
    let datas={
        url:webview.src,
        title:webview.tag.data.name,
        favicons:webview.tag.data.favicons,
        data:new Date().toLocaleString()+' 星期'+'日一二三四五六'.charAt(new Date().getDay()),
        time:new Date().toLocaleTimeString(),
        key:time
    };
    if(localStorage[today]){
        let aa = JSON.parse(localStorage[today]);
        let bb = JSON.parse(JSON.stringify(datas));
        aa.push(bb);
        let Storage = JSON.stringify(aa);
        localStorage.removeItem(today);
        localStorage.setItem(today, Storage);
    }else{
        localStorage.setItem(today,[]);
        localStorage[today]="["+JSON.stringify(datas)+"]";
    }
};//本地存储操作
US_Browser.IconLock = function(){//判断是否为https
    if(US_Browser.Head[5].value.indexOf('https')>-1){//判断搜索框是否有https
        US_Browser.LockIcon.style.color = '#035816';
    }else {
        US_Browser.LockIcon.style.color = '#d3d3d3';
    }
};
/*浏览器按钮函数*/
US_Browser.about=function () {
    ipc.send('AboutUsW-show');
};
US_Browser.ShowHistory=function(){
    ipc.send('BrowserHistory-show');
};
US_Browser.Feedback=function(){
    ipc.send('BrowserFeedback-show');
};
US_Browser.ClearCache=function(){
    localStorage.clear();
};
US_Browser.CreatBrowerWindow=function(){
    ipc.send('newBrowersWindow')
};
US_Browser.Print=function(){
    US_Browser.SelecteWebview.print();
};
US_Browser.DevTools=function(){
    if(US_Browser.SelecteWebview.isDevToolsOpened()){//判断是否存在
        US_Browser.SelecteWebview.closeDevTools();//关闭开发者工具
    }
    US_Browser.SelecteWebview.openDevTools();//打开开发者工具
};
US_Browser.SourceCode = function () {//查看源代码
    US_Browser.CreatBrower("view-source:"+US_Browser.Head[5].value);
};
US_Browser.Exit=function(){
    BrowersWindow.close();
};
US_Browser.goBack = function(){//执行后退
    US_Browser.SelecteWebview.goBack();
};
US_Browser.goForward = function(){//执行前进
    US_Browser.SelecteWebview.goForward();
};
US_Browser.CampusInfo=function(){
    ipc.send('CampusInfo')
};
US_Browser.reFresh = function(){//执行刷洗
    if(US_Browser.SelecteWebview.state) {
        US_Browser.SelecteWebview.reload();
    }
};
US_Browser.Stop=function(){
    US_Browser.SelecteWebview.stop();
};
US_Browser.IsLoading=function(webview,flag){
    if(flag) {
        if (webview === US_Browser.SelecteWebview) {
            US_Browser.Head[2].className = 'icon-cancel';
            webview.state=false;
        } else {
            US_Browser.Head[2].className = 'icon-cw';
            webview.state=true;
        }
        US_Browser.LoadTips.style.display='block';
    }else {
        if(webview===US_Browser.SelecteWebview) {
            US_Browser.Head[2].className='icon-cw';
            webview.state=true;
        }else{
            US_Browser.Head[2].className='icon-cancel';
            webview.state=false;
        }
        US_Browser.LoadTips.innerHTML='';
        US_Browser.LoadTips.style.display='none';
    }
};
/*浏览器初始化*/
US_Browser.IpcBind=function(){
    ipcRenderer.on('flag', function(event, message){//接收用户指定的文件
        if(message==='-1'){
            US_Browser.CreatBrower('http://client.1473.cn/homepage.html');//开始进入一个页面
        }
    });
    ipcRenderer.on('url', function(event, message){//接收用户指定的文件
        if(message){
            US_Browser.CreatBrower(message,true);//打开用户请求的页面
        }
    });
    ipcRenderer.on('open-history', function(event, message){//接收历史记录地址
        if(message){
            US_Browser.CreatBrower(message,true);//打开用户请求的页面
        }
    });
    ipcRenderer.on('download-progress',function (event,message) {
        console.log(message)
    });
    ipcRenderer.on('geturl',function (event,message) {
        US_Browser.CreatBrower(message);//开始进入一个页面
    });
    ipcRenderer.on('size',function (event,message) {
        if(message>0){
            US_Browser.ControlButton[1].className='icon-window-restore';
            US_Browser.NavContainer.style.padding = "5px 0 0";
            US_Browser.RightMenu.style.top='71px';
            US_Browser.BrowerContainer.each(function (index,elm) {
                elm.style.top='106px';
                elm.style.height='calc(100% - 106px)';
            })
        }else {
            US_Browser.ControlButton[1].className='icon-window-maximize';
            US_Browser.NavContainer.style.padding = "15px 0 0";
            US_Browser.RightMenu.style.top='81px';
            US_Browser.BrowerContainer.each(function (index,elm) {
                elm.style.top='116px';
                elm.style.height='calc(100% - 117px)';
            })
        }
    })
};//ipc通信绑定
US_Browser.Bind=function(){//绑定
    US_Browser.BrowerListBody = $(".BrowerListBody");
    US_Browser.BrowersTag=$(".BrowerList");//获取选项卡li
    US_Browser.BrowerContainer=$(".BrowerContainer");//获取webview
    US_Browser.SelecteWebview=US_Browser.BrowerContainer[0].children[0];
    US_Browser.US_OpenLinkInNew=$(".US_OpenLinkInNew")[0];
    US_Browser.US_OpenImgInNew=$(".US_OpenImgInNew")[0];
    for(let i=0;i<US_Browser.BrowersTag.length;i++){//对选项卡及webview进行操作
        (function (i) {
            US_Browser.BrowersTag[i].onclick=function () {
                for(let j=0;j<US_Browser.BrowersTag.length;j++){
                    US_Browser.BrowersTag[j].className='BrowerList';
                    US_Browser.BrowersTag[0].className='BrowerList Listindex';
                    US_Browser.BrowerContainer[j].style.opacity='0';
                    US_Browser.BrowerContainer[j].style.zIndex='1';
                    US_Browser.BrowerContainer[j].style.left='-100%';
                }
                US_Browser.BrowersTag[i].className+=' BrowerActive';
                US_Browser.BrowerContainer[i].style.opacity='1';
                US_Browser.BrowerContainer[i].style.zIndex='1';
                US_Browser.BrowerContainer[i].style.left='0';
                US_Browser.Head[5].value=this.data.url;
                US_Browser.SelecteWebview=US_Browser.BrowerContainer[i].children[0];
                if(US_Browser.SelecteWebview.FindKey){
                    US_Browser.FindContainer.style.display='block';
                    US_Browser.Elm[0].value=US_Browser.SelecteWebview.FindKey;
                    US_Browser.SelecteWebview.findInPage(US_Browser.Elm[0].value);
                }else{
                    US_Browser.Elm[4].click();
                }
                if(US_Browser.SelecteWebview.state){
                    US_Browser.Head[2].className='icon-cw';
                    if(US_Browser.SelecteWebview.src) {
                        US_Browser.CheckState(US_Browser.SelecteWebview);
                    }else{
                        US_Browser.Head[0].style.color = '#d3d3d3';
                        US_Browser.Head[1].style.color = '#d3d3d3';
                        US_Browser.Head[2].style.color = '#d3d3d3';
                        US_Browser.MenuBack.style.color='#adadad';
                        US_Browser.MenuGo.style.color='#adadad';
                    }
                }else{
                    US_Browser.Head[2].className='icon-cancel';
                }
                US_Browser.RightMenu.style.display='none';
                US_Browser.IconLock();//判断是否为https
            }
        })(i);
    }
};//标签页事件绑定
US_Browser.Find=function(){
    if(US_Browser.FindContainer.offsetWidth) {
        US_Browser.FindContainer.style.display = 'none';
        US_Browser.Elm[0].blur();
    }else {
        US_Browser.FindContainer.style.display = 'block';
        US_Browser.Elm[0].value = '';
        US_Browser.Elm[1].innerHTML = '0/0';
        US_Browser.Elm[0].focus();
    }
};//开启关闭查找函数;
US_Browser.SaveAs=function(){
    US_Browser.SelecteWebview.getWebContents().savePage(US_Browser.Head[5].value,'HTMLComplete',function () {

    })
};//另存为喊
US_Browser.HeadBind=function(){
    let http = /^(http)/;
    let https = /^(https)/;
    let www=/^(www)/;
    let m=/^(m)/;
    let isBig=true;//窗口放大还原标示
    US_Browser.AddButton=$(".BrowwerAdd")[0];//获取新建标签页按钮
    US_Browser.ControlButton=$(".browerHeaderControl button");
    US_Browser.ControlButton[0].onclick=function(){//最小化
        BrowersWindow.minimize();
    };
    US_Browser.ControlButton[1].onclick=function(){//最大化
        if(isBig){
            BrowersWindow.maximize();
            this.className='icon-window-restore';
            US_Browser.NavContainer.style.padding = "5px 0 0";
            US_Browser.RightMenu.style.top='106px';
            US_Browser.BrowerContainer.each(function (index,elm) {
                elm.style.top='106px';
                elm.style.height='calc(100% - 106px)';
            })
        }else{
            BrowersWindow.restore();
            this.className='icon-window-maximize';
            US_Browser.NavContainer.style.padding = "15px 0 0";
            US_Browser.RightMenu.style.top='81px';
            US_Browser.BrowerContainer.each(function (index,elm) {
                elm.style.top='116px';
                elm.style.height='calc(100% - 117px)';
            })
        }
        isBig=!isBig;
    };
    US_Browser.ControlButton[2].onclick=function(){//关闭窗口
        US_Browser.Exit();
    };
    US_Browser.Head=$(".BrowerHead *");
    US_Browser.Head[0].onclick=function () {
        US_Browser.goBack()
    };
    US_Browser.Head[1].onclick=function () {
        US_Browser.goForward()
    };
    US_Browser.Head[2].onclick=function () {
        if(this.className==='icon-cw') {
            US_Browser.reFresh()
        }else{
            US_Browser.Stop();
            this.className='icon-cw';
        }
    };
    US_Browser.LockIcon=US_Browser.Head[4];
    US_Browser.Head[5].tabIndex=-1;
    US_Browser.Head[5].onkeydown=function (e) {//获取搜索框值
        if(e.keyCode===13){//keycode为13
            let secondary = /([a-z0-9--]{1,200})\.([a-z]{2,10})(\.[a-z]{2,10})?/
            let file = /^(file|ftp)/
            if(this.value.length){//如果存在值
                if(this.value.match(http) || this.value.match(https)){//判断是否存在http或https
                    US_Browser.SelecteWebview.src=this.value;//给webview的src传值
                }else if(this.value.match(www)||this.value.match(m)){
                    US_Browser.SelecteWebview.src='http://'+this.value;//给webview的src传值
                }else if (file.test(this.value)) {
                    US_Browser.SelecteWebview.src = this.value
                } else if (secondary.test(this.value)) {
                    US_Browser.SelecteWebview.src = 'http://' + this.value
                } else {
                    US_Browser.SelecteWebview.src='https://www.baidu.com/s?cl=3&wd='+this.value;//给webview的src传值
                }
                US_Browser.SelecteWebview.tag.getElementsByTagName('img')[0].style.display = "block";//标签页图标显示
            }
            this.blur();
        }
    };
    US_Browser.Head[5].onfocus=function(e){
        this.select();
    };
    US_Browser.Head[6].onmousedown=function (event) {//点击菜单
        US_Browser.MouseMenu(US_Browser.RightMenu,this,event,true);//右键显示创建应用菜单
    };
    US_Browser.AddButton.onclick= function (){//点击新建标签页
        US_Browser.BrowersTag=$(".BrowerList");//获取选项卡li
        if(US_Browser.BrowersTag.length>=30){//如果如果li标签页大于35
            alert("窗口太多，请关闭一些再使用");//弹出提示
            return false;
        }
        US_Browser.CreatBrower('./new.html');
        US_Browser.Head[5].focus();
        US_Browser.RightMenu.style.display='none';
        US_Browser.MouseMenuMainer.style.display='none';
    };
    US_Browser.RightMenubtn.onclick = function () {
        if (window.localStorage.getItem('arr') === null) {
            window.localStorage.setItem('arr', `[{"url": "${US_Browser.SelecteWebview.src}","icon": "${$('.BrowerActive')[0].children[0].children[0].src}", "title": "${US_Browser.SelecteWebview.getTitle()}"}]`)
        } else if (window.localStorage.getItem('arr').indexOf(US_Browser.SelecteWebview.src) != -1) {
            let b = JSON.parse(window.localStorage.getItem('arr'))
            b.map((i, j) => {
                if (i.url === US_Browser.SelecteWebview.src) {
                    let arr = JSON.parse(window.localStorage.getItem('arr'))
                    arr.splice(j, 1);
                    window.localStorage.setItem('arr', JSON.stringify(arr))
                    $('#LoveWebSize')[0].className = 'fa fa-heart-o'
                    $('.MouseMenuMainer')[0].removeChild($('.MouseMenuMainer')[0].children[j])
                    $('#FavoritesUl')[0].removeChild($('#FavoritesUl')[0].children[j])
                }
            })
            return
        } else {
            let c = JSON.parse(window.localStorage.getItem('arr'))
            c.push({
                "url": US_Browser.SelecteWebview.src,
                "icon": $('.BrowerActive')[0].children[0].children[0].src,
                "title": US_Browser.SelecteWebview.getTitle()
            })
            window.localStorage.setItem('arr', JSON.stringify(c))
        }
        US_Browser.xuanrang(US_Browser.SelecteWebview.src, $('.BrowerActive')[0].children[0].children[0].src, US_Browser.SelecteWebview.getTitle())
        $('#LoveWebSize')[0].className = 'fa fa-heart'
        US_Browser.drag()
    }
    US_Browser.Loveitem = () => {
        if (window.localStorage.getItem('arr') === null){
            let data = [
                {
                    "url":"http://www.1473.cn/",
                    "icon":"./public/img/tray/logo.png",
                    "title":"云端 - 1473.cn"
                }
            ]
            data.map((i, j) => {
                US_Browser.xuanrang(i.url, i.icon, i.title)
                window.localStorage.setItem('arr', `[{"url": "${i.url}","icon": "${i.icon}", "title": "${i.title}"}]`)
            })
            return
        }
        JSON.parse(window.localStorage.getItem('arr')).map((i, j) => {
            US_Browser.xuanrang(i.url, i.icon, i.title)
        })
    }
    US_Browser.IsLove = (msg) => {
        if (window.localStorage.getItem('arr') === null){ return }
        if (window.localStorage.getItem('arr').indexOf(msg) != -1) {
            $('#LoveWebSize')[0].className = 'fa fa-heart'
        } else {
            $('#LoveWebSize')[0].className = 'fa fa-heart-o'
        }
    }
    US_Browser.gotoLove = (msg) => {
        US_Browser.SelecteWebview.src = msg
        US_Browser.MouseMenuMainer.style.display = 'none'
    }
    US_Browser.xuanrang = (url, icon, title) => {
        $('#FavoritesUl')[0].innerHTML += `<li class="column" draggable="true" data='${url}'>
                <div onclick="US_Browser.gotoLove('${url}')">
                    <img class="tag_favicon" draggable="true" style="display: block;" src=${icon}>
                    <p class="Webname" draggable="true"><nobr>${title}</nobr></p>
                </div>
            </li>`
        $('.MouseMenuMainer')[0].innerHTML += `<li class="column" draggable="true" data='${url}'>
                <div onclick="US_Browser.gotoLove('${url}')">
                    <img class="tag_favicon" draggable="true" style="display: block;" src=${icon}>
                    <p class="Webname" draggable="true">${title}</p>
                </div>
            </li>`
    }
    US_Browser.FavoritesMore.onclick = () => {
        US_Browser.MouseMenuMainer.style.display = 'block'
    }
    window.addEventListener('dragleave',function (e) {
        e.preventDefault();
        return false;
    });
    window.addEventListener('dragover',function (e) {
        e.preventDefault();
        return false;
    });
    window.addEventListener('dragenter',function (e) {
        e.preventDefault();
        return false;
    });
    window.addEventListener( "drop", function (e) {
        e.preventDefault();
        return false;
    }, false );
    document.body.onkeydown=function(evt){
        evt = (evt) ? evt : window.event;
        if(evt.keyCode===112 ){
            US_Browser.about();
        }else if(evt.keyCode===114||((evt.ctrlKey)&&(evt.keyCode===70))||((evt.ctrlKey)&&(evt.keyCode===71))) {//查找
            US_Browser.Find();
        }else if((evt.keyCode===116)||((evt.ctrlKey)&&(evt.keyCode===82))){//重新加载、刷新
            if(US_Browser.Head[2].className==='icon-cw') {
                US_Browser.reFresh()
            }else{
                US_Browser.Stop();
                US_Browser.Head[2].className='icon-cw';
            }
        }else if((evt.ctrlKey)&&(evt.keyCode===72)){//历史记录
            US_Browser.ShowHistory();
        }else if((evt.ctrlKey)&&(evt.keyCode===80)){//打印
            US_Browser.Print();
        }else if((evt.ctrlKey)&&(evt.keyCode===84)){//打开一个新标签页
            US_Browser.CreatBrower(null);
        }else if((evt.ctrlKey)&&(evt.keyCode===78)){//打开一个新的窗口
            US_Browser.CreatBrowerWindow('');
        }else if((evt.ctrlKey)&&(evt.keyCode===85)){//查看网页源代码
            US_Browser.SourceCode();
        }else if((evt.altKey)&&(evt.keyCode===39)){//前进
            US_Browser.goForward();
        }else if((evt.altKey)&&(evt.keyCode===37)){//后退
            US_Browser.goBack();
        }else if(evt.keyCode===117){//选择地址栏
            if(document.activeElement.id===US_Browser.Head[5].id){
                US_Browser.Head[5].blur();
            }else{
                US_Browser.Head[5].focus();
                US_Browser.Head[5].select();
            }
        }else if(evt.keyCode===121){//F10菜单
            US_Browser.RightMenu.style.display=US_Browser.RightMenu.offsetWidth?'none':'block';
        }else if(evt.keyCode===122){//F11全屏
            if(US_Browser.SelecteWebview.fullSrceen){
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
                else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                }
                else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                }
                else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
                US_Browser.SelecteWebview.fullSrceen=false;
            }else{
                US_Browser.SelecteWebview.webkitRequestFullscreen();
                US_Browser.SelecteWebview.fullSrceen=true
            }
        }else if (evt.keyCode===123||((evt.ctrlKey)&&(evt.shiftKey)&&(evt.keyCode===73))) {//F12、ctrl+shift+i
            US_Browser.DevTools();
        }else if((evt.ctrlKey)&&(evt.keyCode===87)) {//关闭标签页
            if ($(".BrowerContainer").length > 0) {
                US_Browser.SelecteWebview.tag.children[0].tag_close.click();
            }
        }else if(((evt.ctrlKey)&&(evt.shiftKey)&&(evt.keyCode===81))){//退出浏览器
            US_Browser.Exit();
        }else if(((evt.ctrlKey)&&(evt.shiftKey)&&(evt.keyCode===46))){
            US_Browser.ClearCache();
        }else if(((evt.altKey)&&(evt.shiftKey)&&(evt.keyCode===73))){
            US_Browser.Feedback();
        }else if(((evt.altKey)&&(evt.shiftKey)&&(evt.keyCode===83))){
            US_Browser.CampusInfo();
        }
    };
    US_Browser.drag = function() {
        US_Browser.columns = document.querySelectorAll('#FavoritesUl .column');
        US_Browser.columnser = document.querySelectorAll('.MouseMenuMainer .column');
        US_Browser.dragEl = null;
        [].forEach.call(US_Browser.columns,function(column){
            column.addEventListener("dragstart",US_Browser.domdrugstart,false);
            column.addEventListener('dragenter', US_Browser.domdrugenter, false);
            column.addEventListener('dragover', US_Browser.domdrugover, false);
            column.addEventListener('dragleave', US_Browser.domdrugleave, false);
            column.addEventListener('drop', US_Browser.domdrop, false);
            column.addEventListener('dragend', US_Browser.domdrapend, false);
            column.addEventListener('mousedown', US_Browser.onmousedown, false);
        });
        [].forEach.call(US_Browser.columnser,function(column){
            column.addEventListener('mousedown', US_Browser.onmousedown, false);
        });
    }
    US_Browser.onmousedown = function(e){
        let btnNum = e.button;
        let BookmarkSet = document.querySelector('#US_BookmarkSet')
        if(btnNum==2){
            BookmarkSet.style.display = 'block'
            BookmarkSet.style.top = `${e.clientY}px`
            BookmarkSet.style.left = `${e.clientX}px`
            US_Browser.DelectBookmarktar = this
        }
    }
    US_Browser.domdrugstart = function(e) {

        US_Browser.dragEl = this;

        e.dataTransfer.setData("text/html",this.innerHTML);
    }
    US_Browser.domdrugenter = function(e) {
    }
    US_Browser.domdrugover = function(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }

        e.dataTransfer.dropEffect = 'move';

        return false;
    }
    US_Browser.domdrugleave = function(e) {
    }
    US_Browser.domdrop = function(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        }

        if (US_Browser.dragEl != this) {
            US_Browser.dragEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }
        let arr = JSON.parse(window.localStorage.getItem('arr'));
        let thiser = US_Browser.getchild(this)
        let laster = US_Browser.getchild(US_Browser.dragEl)
        let car = arr[thiser]
        arr[thiser] = arr[laster]
        arr[laster] = car
        window.localStorage.setItem('arr', JSON.stringify(arr))
        return false;
    }
    US_Browser.domdrapend = function(e) {
        [].forEach.call(US_Browser.columns, function (column) {
        });
    }
    US_Browser.getchild = function(msg){
        var i=0;
        while(msg = msg.previousSibling){
            i++;
        }
        return i - 1
    }
    US_Browser.DelectBookmark.onclick = function(){
        let BookmarkSet = document.querySelector('#US_BookmarkSet')
        BookmarkSet.style.display = 'none'
        let b = JSON.parse(window.localStorage.getItem('arr'))
        b.map((i, j) => {
            if (i.url === US_Browser.DelectBookmarktar.getAttribute('data')) {
                let arr = JSON.parse(window.localStorage.getItem('arr'))
                arr.splice(j, 1);
                window.localStorage.setItem('arr', JSON.stringify(arr))
                $('#FavoritesUl')[0].removeChild($('#FavoritesUl')[0].children[j])
                $('.MouseMenuMainer')[0].removeChild($('.MouseMenuMainer')[0].children[j])
                US_Browser.DelectBookmarktar.style.display = 'none';
                if(i.url === US_Browser.SelecteWebview.src){
                    $('#LoveWebSize')[0].className = 'fa fa-heart'
                }
            }
        })
    }
    US_Browser.OpenBookmark.onclick = function(){
        US_Browser.CreatBrower(US_Browser.DelectBookmarktar.getAttribute('data'))
        document.querySelector('.US_BookmarkSet').style.display = 'none'
    }
    US_Browser.OpenBookmarker.onclick = function(){
        ipc.send('openlove', US_Browser.DelectBookmarktar.getAttribute('data'))
        $('#US_BookmarkSet')[0].style.display = 'none';
    }
    // 标签页拖动、右键单击事件
    US_Browser.BrowerList.drag = function () {
        US_Browser.tags = document.querySelectorAll('.bowerCreaterWindow .BrowerList');
        US_Browser.tagEL = null;
        US_Browser.stScreenX = null;
        [].forEach.call(US_Browser.tags,function(BrowerList){
            // 用户开始拖动元素或文本选择时会触发该事件
            BrowerList.addEventListener('dragstart',US_Browser.tagdragstart,false)
            // 当拖动的元素或文本选择进入有效的放置目标时，将触发该事件
            BrowerList.addEventListener('dragenter',US_Browser.tagdragenter,false)
            // 当在有效放置目标上拖动元素或文本选择时（每几百毫秒），将触发该事件。
            // 该事件在放置目标上触发。
            BrowerList.addEventListener('dragover',US_Browser.tagdragover,false)
            // 当拖动的元素或文本选择留下有效的放置目标时，将触发该事件
            BrowerList.addEventListener('dragleave',US_Browser.tagdragleave,false)
            // 在有效放置目标上删除元素或文本选择时会触发该事件
            BrowerList.addEventListener('drop',US_Browser.tagdrop,false)
            // 当拖动操作结束时（通过释放鼠标按钮或按下转义键）将触发该事件
            BrowerList.addEventListener('dragend',US_Browser.tagdragend,false)
            // 标签页右键单击事件
            BrowerList.addEventListener('mousedown',US_Browser.tagmousedown,false)
        })
    }
    US_Browser.tagdragstart = function(e) {
        tagEL = e.target;
        stScreenX = e.screenX;
    }
    US_Browser.tagdragenter = function(e) {

    }
    US_Browser.tagdragover = function(e) {
        // 防止默认行为
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }
    US_Browser.tagdragleave = function(e) {
        tagELf=false;
    }
    US_Browser.tagdrop = function(e) {
        e.preventDefault();
        if (tagEL.nextSibling == this) {
            US_Browser.NavContainer.insertBefore(this,tagEL);
        } else if (tagEL.previousSibling == this) {
            US_Browser.NavContainer.insertBefore(tagEL,this);
        } else if (stScreenX < e.screenX) {
            US_Browser.NavContainer.insertBefore(tagEL,this.nextSibling)
        } else if (stScreenX > e.screenX) {
            US_Browser.NavContainer.insertBefore(tagEL,this)
        }
        tagELf=false;
    }
    US_Browser.tagdragend = function(e) {
        [].forEach.call(US_Browser.tags,function(BrowerList){});
    }
    US_Browser.tagmousedown = function(e) {
        let TagSet = document.getElementById("US_TagSet");
        US_Browser.MouseMenu(TagSet,this,event);
    }
    US_Browser.Head[0].style.color = '#d3d3d3';
    US_Browser.Head[1].style.color = '#d3d3d3';
    US_Browser.Head[2].style.color = '#d3d3d3';
    US_Browser.MenuBack.style.color='#adadad';
    US_Browser.MenuGo.style.color='#adadad';
};//浏览器头部事件绑定
US_Browser.Init=function () {//初始化
    US_Browser.isready = false
    US_Browser.Love = window.localStorage.getItem('arr')
    US_Browser.NavContainer=$(".bowerCreaterWindow")[0];//获取标签页ul
    US_Browser.BrowerList = $(".BrowerList");// 获取标签页li
    US_Browser.MouseMenuMain=$("#webviewBrowserMenu")[0];//获取网页右键菜单
    US_Browser.RightMenu=$("#CampusInfoBrowserOnclickMenu")[0];//获取浏览器菜单
    US_Browser.RightMenubtn=$("#MouseMenuMainerBtn")[0];//获取浏览器菜单
    US_Browser.LoadTips=$(".BrowerTips")[0];
    US_Browser.FindContainer=$(".BrowerFind")[0];//查找菜单主题
    US_Browser.Elm=$(".BrowerFind *");//查找菜单的子级
    US_Browser.MenuBack= $(".US_Browers_Back")[0];
    US_Browser.MenuGo=$(".US_Browers_go")[0];
    US_Browser.FavoritesMore = $('.FavoritesMore')[0]
    US_Browser.MouseMenuMainer = $('.MouseMenuMainer')[0]
    US_Browser.DelectBookmark = $('#DelectBookmark')[0]
    US_Browser.OpenBookmark = $('#OpenBookmark')[0]
    US_Browser.OpenBookmarker = $('#OpenBookmarker')[0]
    US_Browser.DelectBookmarktar = ''
    US_Browser.Elm[0].onkeyup=function (e) {//查找的input
        if(this.value.length&&e.keyCode!==8){//如果存在值
            US_Browser.SelecteWebview.findInPage(this.value);
            US_Browser.SelecteWebview.FindKey=this.value;
        }else{
            US_Browser.SelecteWebview.stopFindInPage("keepSelection");
            US_Browser.SelecteWebview.FindKey=false;
        }
    };
    US_Browser.Elm[4].onclick=function () {
        US_Browser.Elm[2].onclick=US_Browser.Elm[3].onclick=null;
        US_Browser.SelecteWebview.FindKey?US_Browser.SelecteWebview.stopFindInPage("keepSelection"):'';
        US_Browser.FindContainer.style.display='none';
    };
    US_Browser.HeadBind();
    US_Browser.IpcBind();
    US_Browser.Loveitem();
}();
window.onload = function () {
    US_Browser.drag();
    US_Browser.BrowerList.drag();
}