Namespace.register('CampusInfo');
/*广告数组*/
//script是跳转链接
//img是广告图
CampusInfo.AdvertData = [
    {"script": "https://s.click.taobao.com/t?e=m%3D2%26s%3DeMsL0DwlQy0cQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMast%2FSizVf4vxq3IhSJN6GRpkZoesg6H2DLkWy%2FWNDI6sdwMgRUmm337nHIqm%2F0cxY7LAa3DUrM2zt5vEinufIVAFEHVckI7b5%2FNZpdQjSxu1vgFTVPz8OPAUxBJ7QMuvA2AEy2uNjNbuUkUAFP1bjM9%2Fll%2FA4rvrNhpbzUCDFdhJulCK2sDOhWBRFZM4sePqRmKlkKnYX5eFXyq8ODlIZ267%2F5dYMoTBsYMXU3NNCg%2F", "img": "public/img/advert/advert1.jpg"},
    {"script": "https://s.click.taobao.com/t?e=m%3D2%26s%3DgIQtEJDHntwcQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMXRrp%2B9SIbhF79%2FTFaMDK6RpkZoesg6H2DLkWy%2FWNDI6PQdzPochedth9nNW2%2FUf2Y7LAa3DUrM2zt5vEinufIVAFEHVckI7b5%2FNZpdQjSxu1vgFTVPz8OPAUxBJ7QMuvA2AEy2uNjNbuUkUAFP1bjM9%2Fll%2FA4rvrNhpbzUCDFdhsFyWdjKIsSlxHxCWmf4D0BmKlkKnYX5eFXyq8ODlIZ267%2F5dYMoTBsYMXU3NNCg%2F", "img":"public/img/advert/advert2.jpg"},
    {"script": "https://s.click.taobao.com/t?e=m%3D2%26s%3DY0HHvVouGE8cQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMXdfaHqtrHTiJ1gyddu7kN9pkZoesg6H2DLkWy%2FWNDI6pt9Wn0DMuNxaYhkqsJPzTY7LAa3DUrM2zt5vEinufIVAFEHVckI7b5%2FNZpdQjSxu1vgFTVPz8OPAUxBJ7QMuvA2AEy2uNjNbuUkUAFP1bjOzZ%2F6WUT9P1MIjCZoVGoLXl1KDh%2FVeLzkbxDo0p59w1mBiH6buM6UD6yiYwQfONoA%3D", "img": "public/img/advert/advert3.jpg"},
    {"script": "https://s.click.taobao.com/t?e=m%3D2%26s%3DrgPZzrYZkSYcQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMd23AQFFsZwFRitN3%2FurF3xpkZoesg6H2DLkWy%2FWNDI6MCnDXViGck0uvqf9o4zAJY7LAa3DUrM2zt5vEinufIVAFEHVckI7b5%2FNZpdQjSxu1vgFTVPz8OPAUxBJ7QMuvA2AEy2uNjNbuUkUAFP1bjM9%2Fll%2FA4rvrNhpbzUCDFdhDNi1GkkhYwsnpXr20YH2FDY0FENWvJCGnc8sjvQiJFV6b9katRPZocYOae24fhW0", "img": "public/img/advert/advert4.jpg"},
    {"script": "https://s.click.taobao.com/t?e=m%3D2%26s%3DeMsL0DwlQy0cQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMast%2FSizVf4vxq3IhSJN6GRpkZoesg6H2DLkWy%2FWNDI6sdwMgRUmm337nHIqm%2F0cxY7LAa3DUrM2zt5vEinufIVAFEHVckI7b5%2FNZpdQjSxu1vgFTVPz8OPAUxBJ7QMuvA2AEy2uNjNbuUkUAFP1bjM9%2Fll%2FA4rvrNhpbzUCDFdhJulCK2sDOhWBRFZM4sePqRmKlkKnYX5eFXyq8ODlIZ267%2F5dYMoTBsYMXU3NNCg%2F", "img": "public/img/advert/advert1.jpg"},
    {"script": "https://s.click.taobao.com/t?e=m%3D2%26s%3DgIQtEJDHntwcQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMXRrp%2B9SIbhF79%2FTFaMDK6RpkZoesg6H2DLkWy%2FWNDI6PQdzPochedth9nNW2%2FUf2Y7LAa3DUrM2zt5vEinufIVAFEHVckI7b5%2FNZpdQjSxu1vgFTVPz8OPAUxBJ7QMuvA2AEy2uNjNbuUkUAFP1bjM9%2Fll%2FA4rvrNhpbzUCDFdhsFyWdjKIsSlxHxCWmf4D0BmKlkKnYX5eFXyq8ODlIZ267%2F5dYMoTBsYMXU3NNCg%2F", "img":"public/img/advert/advert2.jpg"},
    {"script": "https://s.click.taobao.com/t?e=m%3D2%26s%3DY0HHvVouGE8cQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMXdfaHqtrHTiJ1gyddu7kN9pkZoesg6H2DLkWy%2FWNDI6pt9Wn0DMuNxaYhkqsJPzTY7LAa3DUrM2zt5vEinufIVAFEHVckI7b5%2FNZpdQjSxu1vgFTVPz8OPAUxBJ7QMuvA2AEy2uNjNbuUkUAFP1bjOzZ%2F6WUT9P1MIjCZoVGoLXl1KDh%2FVeLzkbxDo0p59w1mBiH6buM6UD6yiYwQfONoA%3D", "img": "public/img/advert/advert3.jpg"},
    {"script": "https://s.click.taobao.com/t?e=m%3D2%26s%3DrgPZzrYZkSYcQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMd23AQFFsZwFRitN3%2FurF3xpkZoesg6H2DLkWy%2FWNDI6MCnDXViGck0uvqf9o4zAJY7LAa3DUrM2zt5vEinufIVAFEHVckI7b5%2FNZpdQjSxu1vgFTVPz8OPAUxBJ7QMuvA2AEy2uNjNbuUkUAFP1bjM9%2Fll%2FA4rvrNhpbzUCDFdhDNi1GkkhYwsnpXr20YH2FDY0FENWvJCGnc8sjvQiJFV6b9katRPZocYOae24fhW0", "img": "public/img/advert/advert4.jpg"},
    {"script": "https://s.click.taobao.com/t?e=m%3D2%26s%3DeMsL0DwlQy0cQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMast%2FSizVf4vxq3IhSJN6GRpkZoesg6H2DLkWy%2FWNDI6sdwMgRUmm337nHIqm%2F0cxY7LAa3DUrM2zt5vEinufIVAFEHVckI7b5%2FNZpdQjSxu1vgFTVPz8OPAUxBJ7QMuvA2AEy2uNjNbuUkUAFP1bjM9%2Fll%2FA4rvrNhpbzUCDFdhJulCK2sDOhWBRFZM4sePqRmKlkKnYX5eFXyq8ODlIZ267%2F5dYMoTBsYMXU3NNCg%2F", "img": "public/img/advert/advert1.jpg"},
    {"script": "https://s.click.taobao.com/t?e=m%3D2%26s%3DgIQtEJDHntwcQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMXRrp%2B9SIbhF79%2FTFaMDK6RpkZoesg6H2DLkWy%2FWNDI6PQdzPochedth9nNW2%2FUf2Y7LAa3DUrM2zt5vEinufIVAFEHVckI7b5%2FNZpdQjSxu1vgFTVPz8OPAUxBJ7QMuvA2AEy2uNjNbuUkUAFP1bjM9%2Fll%2FA4rvrNhpbzUCDFdhsFyWdjKIsSlxHxCWmf4D0BmKlkKnYX5eFXyq8ODlIZ267%2F5dYMoTBsYMXU3NNCg%2F", "img":"public/img/advert/advert2.jpg"},
    {"script": "https://s.click.taobao.com/t?e=m%3D2%26s%3DY0HHvVouGE8cQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMXdfaHqtrHTiJ1gyddu7kN9pkZoesg6H2DLkWy%2FWNDI6pt9Wn0DMuNxaYhkqsJPzTY7LAa3DUrM2zt5vEinufIVAFEHVckI7b5%2FNZpdQjSxu1vgFTVPz8OPAUxBJ7QMuvA2AEy2uNjNbuUkUAFP1bjOzZ%2F6WUT9P1MIjCZoVGoLXl1KDh%2FVeLzkbxDo0p59w1mBiH6buM6UD6yiYwQfONoA%3D", "img": "public/img/advert/advert3.jpg"},
    {"script": "https://s.click.taobao.com/t?e=m%3D2%26s%3DrgPZzrYZkSYcQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMd23AQFFsZwFRitN3%2FurF3xpkZoesg6H2DLkWy%2FWNDI6MCnDXViGck0uvqf9o4zAJY7LAa3DUrM2zt5vEinufIVAFEHVckI7b5%2FNZpdQjSxu1vgFTVPz8OPAUxBJ7QMuvA2AEy2uNjNbuUkUAFP1bjM9%2Fll%2FA4rvrNhpbzUCDFdhDNi1GkkhYwsnpXr20YH2FDY0FENWvJCGnc8sjvQiJFV6b9katRPZocYOae24fhW0", "img": "public/img/advert/advert4.jpg"},
];
/*视频教学*/
//UserFilesName是标题
//UserFilesServerName是显示图片
//Action_url是跳转链接
CampusInfo.VideoTeach=[
    {"UserFilesName":"有思课堂-JavaScript第一讲变量循环函数及div","UserFilesServerName":"public/img/VideoTeach/VideoTeach1.png","Action_url":"https://v.qq.com/x/page/i0510ky3tjm.html"},
    {"UserFilesName":"有思课堂-JavaScript第二讲判断循环调试基础知识","UserFilesServerName":"public/img/VideoTeach/VideoTeach2.png","Action_url":"https://v.qq.com/x/page/p0510lztld2.html"},
    {"UserFilesName":"有思课堂-JavaScript第三讲 游戏布局","UserFilesServerName":"public/img/VideoTeach/VideoTeach3.png","Action_url":"https://v.qq.com/x/page/f05086f8xa6.html"},
    {"UserFilesName":"有思课堂-JavaScript第四讲元素之间的关系","UserFilesServerName":null,"Action_url":"https://v.qq.com/x/page/p0508biafx2.html"},
    {"UserFilesName":"有思课堂-JavaScript第五讲_双循环的讲解","UserFilesServerName":null,"Action_url":"https://v.qq.com/x/page/o0511smspoq.html"},
    {"UserFilesName":"有思课堂-JavaScript第六讲 二维数组","UserFilesServerName":null,"Action_url":"https://v.qq.com/x/page/h05115m98xe.html"},
    {"UserFilesName":"有思课堂-第八讲 错误调试以及添加人物","UserFilesServerName":null,"Action_url":"https://v.qq.com/x/page/x05149dlpke.html"},
    {"UserFilesName":"有思课堂-JavaScript第九讲 键盘事件","UserFilesServerName":null,"Action_url":"https://v.qq.com/x/page/z0518f8nbf7.html"},
    {"UserFilesName":"有思课堂-JavaScript第十讲人物与数组关系及行走","UserFilesServerName":null,"Action_url":"https://v.qq.com/x/page/x0518x0r465.html"},
    {"UserFilesName":"有思课堂-JavaScript第十一讲 二维数组与调试","UserFilesServerName":null,"Action_url":"https://v.qq.com/x/page/t0521aro02e.html"},
    {"UserFilesName":"有思课堂JavaScript第十二讲 代码格式及添加箱子","UserFilesServerName":null,"Action_url":"https://v.qq.com/x/page/d05214r4jcy.html"},
    {"UserFilesName":"有思课堂-第十三讲 代码格式化及监视人物行走的坐标","UserFilesServerName":null,"Action_url":"https://v.qq.com/x/page/c05289f716s.html"},
    {"UserFilesName":"有思课堂-第十四讲 人物向下行走及错误处理","UserFilesServerName":null,"Action_url":"https://v.qq.com/x/page/g0527q5r6kj.html"},
    {"UserFilesName":"有思课堂-第十五讲 上下左右四个方向推动箱子 ","UserFilesServerName":null,"Action_url":"https://v.qq.com/x/page/v0531apqn4d.html"},
    {"UserFilesName":"有思课堂-第十六讲 把箱子推到出口及函数的概念","UserFilesServerName":null,"Action_url":"https://v.qq.com/x/page/s0531begsm2.html"},
    {"UserFilesName":"有思课堂-第十七讲 通关界面的制作及调试","UserFilesServerName":null,"Action_url":"https://v.qq.com/x/page/i0539kf03ws.html"},
    {"UserFilesName":"有思课堂-第十八讲 下一关及重玩本关按钮制作","UserFilesServerName":null,"Action_url":"https://v.qq.com/x/page/n0539r6ju7h.html"},
    {"UserFilesName":"有思课堂-第十九讲 三维数组，把游戏扩大到两关","UserFilesServerName":null,"Action_url":"https://v.qq.com/x/page/i0544jghc03.html"},
];
/*程序教学*/
//UserFilesName是标题
//UserFilesServerName是显示图片
//Action_url是跳转链接
CampusInfo.program=[
    {"UserFilesName":"js字符串处理函数讲解","UserFilesServerName":"public/img/Code/字符串处理函数.jpg","Action_url":"http://api.1473.cn/uform/String/index.aspx"},
    {"UserFilesName":"数字处理函数过程讲解","UserFilesServerName":"public/img/Code/数字处理函数.jpg","Action_url":"http://api.1473.cn/uform/Number/index.aspx"},
    {"UserFilesName":"Array数组函数数据类型讲解","UserFilesServerName":"public/img/Code/Array数据类型.jpg","Action_url":"http://api.1473.cn/uform/Array/index.aspx"},
    {"UserFilesName":"uform框架-Guid数据类型补全课程讲解","UserFilesServerName":null,"Action_url":"http://api.1473.cn/uform/guid.aspx"},
    {"UserFilesName":"uform框架-Date数据类型","UserFilesServerName":null,"Action_url":"http://api.1473.cn/uform/Date/index.aspx"},
    {"UserFilesName":"uform框架-json处理类","UserFilesServerName":null,"Action_url":"http://api.1473.cn/Uform/Json/index.aspx"},
    {"UserFilesName":"uform框架-ajax类U.A","UserFilesServerName":null,"Action_url":"http://api.1473.cn/uform/6%E3%80%81ajax%E7%B1%BB_U.A.aspx"},
    {"UserFilesName":"uform框架-跨域方法U.UF.CD","UserFilesServerName":null,"Action_url":"http://api.1473.cn/uform/7%E3%80%81%E8%B7%A8%E5%9F%9F%E6%96%B9%E6%B3%95_U.CD.aspx"},
    {"UserFilesName":"客户端信息U.UF.CI解析","UserFilesServerName":null,"Action_url":"http://api.1473.cn/uform/8%E3%80%81%E5%AE%A2%E6%88%B7%E7%AB%AF%E4%BF%A1%E6%81%AF_U.CI.aspx"},
    {"UserFilesName":"兼容函数列表讲解说明","UserFilesServerName":null,"Action_url":"http://api.1473.cn/uform/Compatible/index.aspx"},
    {"UserFilesName":"预加载处理区域讲解说明","UserFilesServerName":null,"Action_url":"http://api.1473.cn/uform/DynamicLoad/index.aspx"},
    {"UserFilesName":"Cookie缓存处理说明","UserFilesServerName":null,"Action_url":"http://api.1473.cn/uform/Cookie/index.aspx"},
    {"UserFilesName":"uform框架-辅助函数U.Util讲解","UserFilesServerName":null,"Action_url":"http://api.1473.cn/uform/utility/11%E3%80%81%E8%BE%85%E5%8A%A9%E5%87%BD%E6%95%B0_U.Util.aspx"},
    {"UserFilesName":"前进后退接口函数U.UF.N","UserFilesServerName":null,"Action_url":"http://api.1473.cn/uform/13%E3%80%81%E5%89%8D%E8%BF%9B%E5%90%8E%E9%80%80%E6%8E%A5%E5%8F%A3%E5%87%BD%E6%95%B0_U.AFB.aspx"},
    {"UserFilesName":"UI界面控件简介与说明","UserFilesServerName":null,"Action_url":"http://api.1473.cn/uform/uformcontrols/index.aspx"},
    {"UserFilesName":"Confirm窗体的调用U.UI.Confirm","UserFilesServerName":null,"Action_url":"http://api.1473.cn/uform/uformcontrols/ModalForm.aspx"},
    {"UserFilesName":"图片控件U.UF.IMG","UserFilesServerName":null,"Action_url":"http://api.1473.cn/uform/pccontrols/image.aspx"},
    {"UserFilesName":"图片控件U.MD.UI.Picture","UserFilesServerName":null,"Action_url":"http://api.1473.cn/uform/pccontrols/picture.aspx"},
    {"UserFilesName":"手机端UI控件简介说明","UserFilesServerName":null,"Action_url":"http://api.1473.cn/uform/telephoecontrols/index.aspx"},
    {"UserFilesName":"RadioList列表说明解析","UserFilesServerName":null,"Action_url":"http://api.1473.cn/uform/telephoecontrols/radiolist.aspx"},
    {"UserFilesName":"UForm登录注册中文调用文档API","UserFilesServerName":null,"Action_url":"http://api.1473.cn/uform/application/1%E3%80%81UForm%E7%99%BB%E5%BD%95%E6%B3%A8%E5%86%8C%E4%B8%AD%E6%96%87%E8%B0%83%E7%94%A8%E6%96%87%E6%A1%A3api.aspx"},
    {"UserFilesName":"1473好友处理模块接口使用说明文档","UserFilesServerName":null,"Action_url":"http://api.1473.cn/uform/application/7%E3%80%81%E5%A5%BD%E5%8F%8B%E5%A4%84%E7%90%86%E6%A8%A1%E5%9D%97%E6%8E%A5%E5%8F%A3.aspx"},
    {"UserFilesName":"office处理模块接口调用","UserFilesServerName":null,"Action_url":"http://api.1473.cn/uform/8%E3%80%81office%E5%A4%84%E7%90%86%E6%A8%A1%E5%9D%97%E6%8E%A5%E5%8F%A3%E8%B0%83%E7%94%A8.aspx"},
    {"UserFilesName":"图片拖拽兼容ie8的方法","UserFilesServerName":null,"Action_url":"http://api.1473.cn/uform/other/ImageSelect.aspx"},
    {"UserFilesName":"从编程框架看系统结构","UserFilesServerName":null,"Action_url":"http://api.1473.cn/uform/1%E3%80%81%E4%BB%8E%E7%BC%96%E7%A8%8B%E6%A1%86%E6%9E%B6%E7%9C%8B%E7%B3%BB%E7%BB%9F.aspx"},
    {"UserFilesName":"安装Internet服务器（IIS）管理器","UserFilesServerName":null,"Action_url":"http://api.1473.cn/uform/ProjectConfiguration/2%E3%80%81%E5%AE%89%E8%A3%85Internet%E6%9C%8D%E5%8A%A1%E5%99%A8(IIS)%E7%AE%A1%E7%90%86%E5%99%A8.aspx"},
    {"UserFilesName":"Cookie增删查改讲解说明","UserFilesServerName":null,"Action_url":"http://api.1473.cn/uform/12%E3%80%81Cookie.aspx"},
    {"UserFilesName":"修改电脑用户为Administrator","UserFilesServerName":null,"Action_url":"http://api.1473.cn/uform/ProjectConfiguration/7%E3%80%81%E4%BF%AE%E6%94%B9%E7%94%B5%E8%84%91%E7%94%A8%E6%88%B7%E4%B8%BAAdministrator.aspx"},
    {"UserFilesName":"从应用和系统看操作系统构成","UserFilesServerName":null,"Action_url":"http://api.1473.cn/uform/2%E3%80%81%E4%BB%8E%E5%BA%94%E7%94%A8%E5%92%8C%E7%B3%BB%E7%BB%9F%E7%9C%8B%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E6%9E%84%E6%88%90.aspx"},
    {"UserFilesName":"理解整个系统需要额外掌握的知识","UserFilesServerName":null,"Action_url":"http://api.1473.cn/uform/4%E3%80%81%E7%90%86%E8%A7%A3%E6%95%B4%E4%B8%AA%E7%B3%BB%E7%BB%9F%E9%9C%80%E8%A6%81%E9%A2%9D%E5%A4%96%E6%8E%8C%E6%8F%A1%E7%9A%84%E7%9F%A5%E8%AF%86.aspx"}
];
/*产品教学*/
//UserFilesName是标题
//UserFilesServerName是显示图片
//Action_url是跳转链接
CampusInfo.ProductData=[
    {"UserFilesName":"Axure原型图策划解析","UserFilesServerName":"public/img/ProductData/Axure原型图策划.jpg","Action_url":"http://api.1473.cn/product/Learning/Prototypingplanning.aspx"},
    {"UserFilesName":"UI界面设计图绘制说明","UserFilesServerName":"public/img/ProductData/UI设计图绘制.jpg","Action_url":"http://api.1473.cn/product/Learning/DrawingofUIdesigndiagram.aspx"},
    {"UserFilesName":"使用AI绘制icon图标讲解","UserFilesServerName":"public/img/ProductData/AI制作绘制icon.jpg","Action_url":"http://api.1473.cn/product/Learning/AImakingAndDrawingicon.aspx"},
    {"UserFilesName":"有思俱乐部美工部设计作品集汇总","UserFilesServerName":null,"Action_url":"http://api.1473.cn/product/Learning/DesignWorksset.aspx"},
    {"UserFilesName":"Axure原型认识与制作讲解","UserFilesServerName":null,"Action_url":"http://api.1473.cn/network/cloud/VMware_cloud.aspx"},
    {"UserFilesName":"界面UI美工设计速成说明","UserFilesServerName":null,"Action_url":"http://api.1473.cn/product/Courses/InterfaceAestheticDesignSpeed.aspx"},
    {"UserFilesName":"PS基础工具使用讲解说明","UserFilesServerName":null,"Action_url":"http://api.1473.cn/product/Courses/PSBasic.aspx"},
    {"UserFilesName":"淘宝首页美工界面临摹（一）","UserFilesServerName":null,"Action_url":"http://api.1473.cn/product/Courses/WebCopyTB1.aspx"},
    {"UserFilesName":"淘宝首页美工界面临摹（二）","UserFilesServerName":null,"Action_url":"http://api.1473.cn/product/Courses/WebCopyTB2.aspx"},
    {"UserFilesName":"网页配色速成讲解文档","UserFilesServerName":null,"Action_url":"http://api.1473.cn/product/Courses/WebPageColor.aspx"},
    {"UserFilesName":"临摹美工界面-移动端（一）","UserFilesServerName":null,"Action_url":"http://api.1473.cn/product/Courses/MobileCopyWeb1.aspx"},
    {"UserFilesName":"临摹美工界面-移动端（二）","UserFilesServerName":null,"Action_url":"http://api.1473.cn/product/Courses/MobileCopyWeb2.aspx"},
    {"UserFilesName":"有思俱乐部产品Axure设计与详解","UserFilesServerName":null,"Action_url":"http://api.1473.cn/product/Courses/ProductAxureDesignAndDetailedSolution.aspx"},
    {"UserFilesName":"美工运用AI临摹icon","UserFilesServerName":null,"Action_url":"http://api.1473.cn/product/Courses/AICopyIcon.aspx"},
    {"UserFilesName":"产品交互设计能力讲解","UserFilesServerName":null,"Action_url":"http://api.1473.cn/product/Courses/ProductInteractionDesign.aspx"},
    {"UserFilesName":"产品经理能力模型解析","UserFilesServerName":null,"Action_url":"http://api.1473.cn/product/Courses/ProductManagerCapabilityModel.aspx"},
    {"UserFilesName":"临摹网页界面讲解说明","UserFilesServerName":null,"Action_url":"http://api.1473.cn/product/Courses/CopyWeb.aspx"},
    {"UserFilesName":"产品经理竞品分析文档","UserFilesServerName":null,"Action_url":"http://api.1473.cn/product/Courses/AnalysisOfProductCompetition.aspx"},
    {"UserFilesName":"HTML基础课程教学（一）","UserFilesServerName":null,"Action_url":"http://api.1473.cn/product/Courses/WebBasic1.aspx"},
    {"UserFilesName":"产品用户手册范本编写","UserFilesServerName":null,"Action_url":"http://api.1473.cn/product/Courses/UserProduct.aspx"},
    {"UserFilesName":"HTML基础课程教学（二）","UserFilesServerName":null,"Action_url":"http://api.1473.cn/product/Courses/WebBasic2.aspx"},
    {"UserFilesName":"产品项目计划书编写要点及说明","UserFilesServerName":null,"Action_url":"http://api.1473.cn/product/Courses/ProductProjectPlan.aspx"},
    {"UserFilesName":"AE动画制作UI界面解析说明","UserFilesServerName":null,"Action_url":"http://api.1473.cn/product/Courses/AECartoon.aspx"},
    {"UserFilesName":"数据解析优化产品讲解","UserFilesServerName":null,"Action_url":"http://api.1473.cn/product/Courses/DataOptimizationProducts.aspx"},
    {"UserFilesName":"项目计划书（含目的、意义）","UserFilesServerName":null,"Action_url":"http://api.1473.cn/product/Learning/ProjectpLanningpaper.aspx"},
    {"UserFilesName":"测试用例文档制作说明","UserFilesServerName":null,"Action_url":"http://api.1473.cn/product/Learning/TestcaseProduction.aspx"},
    {"UserFilesName":"用户使用说明书编写规范","UserFilesServerName":null,"Action_url":"http://api.1473.cn/product/Learning/UsersInstructions.aspx"},
    {"UserFilesName":"利用html制作网页说明讲解","UserFilesServerName":null,"Action_url":"http://api.1473.cn/product/Learning/HtmlProduction.aspx"},
    {"UserFilesName":"网站制作技巧全面讲解","UserFilesServerName":null,"Action_url":"http://api.1473.cn/product/Learning/WebmakingAndDrawing.aspx"},
    {"UserFilesName":"Axure网站原型策划说明","UserFilesServerName":null,"Action_url":"http://api.1473.cn/product/Learning/WebsitePrototype.aspx"},
    {"UserFilesName":"美工海报宣传制作规范说明","UserFilesServerName":null,"Action_url":"http://api.1473.cn/product/Learning/PosterPublicity.aspx"}
];
/*网络教学*/
//UserFilesName是标题
//UserFilesServerName是显示图片
//Action_url是跳转链接
CampusInfo.NetWorkData=[
    {"UserFilesName":"制作磁盘阵列课程说明解析","UserFilesServerName":"public/img/NetWorkData/制作磁盘阵列.jpg","Action_url":"http://api.1473.cn/network/raid/index.aspx"},
    { "UserFilesName":"VMware esxi安装步骤说明", "UserFilesServerName": "public/img/NetWorkData/VMware-esxi安装.jpg", "Action_url": "http://api.1473.cn/network/esxi/esxi_install.aspx" },
    {"UserFilesName":"VMware esxi配置步骤说明","UserFilesServerName":"public/img/NetWorkData/VMware-esxi配置.jpg","Action_url":"http://api.1473.cn/network/esxi/esxi_config.aspx"},
    {"UserFilesName":"window上登录VMware esxi说明解析","UserFilesServerName":null,"Action_url":"http://api.1473.cn/network/esxi/login_esxi.aspx"},
    {"UserFilesName":"华为虚拟化系统安装与配置","UserFilesServerName":null,"Action_url":"http://api.1473.cn/network/install_OS/install_huawei.aspx"},
    {"UserFilesName":"Ubuntu操作系统安装教程","UserFilesServerName":null,"Action_url":"http://api.1473.cn/network/UbuntuInstall/index.aspx"},
    {"UserFilesName":"PHP集成开发环境安装说明","UserFilesServerName":null,"Action_url":"http://api.1473.cn/network/php/index.aspx"},
    {"UserFilesName":"JAVA环境配置步骤说明","UserFilesServerName":null,"Action_url":"http://api.1473.cn/network/java/index.aspx"},
    {"UserFilesName":"安装mysql数据库说明解析","UserFilesServerName":null,"Action_url":"http://api.1473.cn/network/mysql/index.aspx"},
    {"UserFilesName":"mongodb数据库配置说明","UserFilesServerName":null,"Action_url":"http://api.1473.cn/network/mongodb/index.aspx"},
    {"UserFilesName":"在Ubuntu里搭建DNS讲解","UserFilesServerName":null,"Action_url":"http://api.1473.cn/network/DNS/index.aspx"},
    {"UserFilesName":"安装DHCP网络协议服务讲解","UserFilesServerName":null,"Action_url":"http://api.1473.cn/network/DHCP/index.aspx"},
    {"UserFilesName":"window上安装nginx反向代理服务讲解","UserFilesServerName":null,"Action_url":"http://api.1473.cn/network/nginx/index.aspx"},
    {"UserFilesName":"安装moosefs分布式服务讲解","UserFilesServerName":null,"Action_url":"http://api.1473.cn/network/moosefs/index.aspx"},
    {"UserFilesName":"mysql-cluster配置说明文","UserFilesServerName":null,"Action_url":"http://api.1473.cn/network/mysql/cluster.aspx"},
    {"UserFilesName":"如何配置dmz安装说明讲解","UserFilesServerName":null,"Action_url":"http://api.1473.cn/network/dmz/dmz.aspx"},
    {"UserFilesName":"rsync传输服务配置同步","UserFilesServerName":null,"Action_url":"http://api.1473.cn/network/rsync/rsync.aspx"},
    {"UserFilesName":"创建虚拟机并安装操作系统","UserFilesServerName":null,"Action_url":"http://api.1473.cn/network/ftp/ftp.aspx"},
    {"UserFilesName":"如何配置FTP协议服务说明","UserFilesServerName":null,"Action_url":"http://api.1473.cn/network/ftp/ftp.aspx"},
    {"UserFilesName":"如何配置SVN服务解析说明","UserFilesServerName":null,"Action_url":"http://api.1473.cn/network/svn/svn.aspx"},
    {"UserFilesName":"DHCP主机配置协议安装说明","UserFilesServerName":null,"Action_url":"http://api.1473.cn/network/windows_config/DHCP.aspx"},
    {"UserFilesName":"window上DNS域名系统安装步骤讲解","UserFilesServerName":null,"Action_url":"http://api.1473.cn/network/windows_config/DNS.aspx"},
    {"UserFilesName":"配置FTP服务步骤说明文档","UserFilesServerName":null,"Action_url":"http://api.1473.cn/network/ftp/ftp_install.aspx"},
    {"UserFilesName":"配置IIS服务安装说明文档","UserFilesServerName":null,"Action_url":"http://api.1473.cn/network/iis/iis.aspx"},
    {"UserFilesName":"配置IIS（Windows7）说明","UserFilesServerName":null,"Action_url":"http://api.1473.cn/network/iis/iis_windows7.aspx"},
    {"UserFilesName":"路由器交换基础解析说明","UserFilesServerName":null,"Action_url":"http://api.1473.cn/network/router_switch/switch.aspx"},
    {"UserFilesName":"路由器路由基础解析说明","UserFilesServerName":null,"Action_url":"http://api.1473.cn/network/router_switch/router.aspx"},
    {"UserFilesName":"VMware桌面云配置教学","UserFilesServerName":null,"Action_url":"http://api.1473.cn/network/cloud/VMware_cloud.aspx"},
    {"UserFilesName":"华为云桌面配置教学说明","UserFilesServerName":null,"Action_url":"http://api.1473.cn/network/cloud/huawei_cloud.aspx"},
    {"UserFilesName":"网络部门网络总图查看","UserFilesServerName":null,"Action_url":"http://api.1473.cn/network/cloud/VMware_cloud.aspx"}
];
/*毕业季数据*/
//UserFilesName是标题
//UserFilesServerName是显示图片
//Action_url是跳转链接
CampusInfo.graduationData=[
    {"UserFilesName":"设计系12营销G5毕业照2","UserFilesServerName":"http://fs.1473.cn/af594976-b0fd-47e9-b65c-89b591b577d8.jpg","Action_url":"http://fs.1473.cn/af594976-b0fd-47e9-b65c-89b591b577d8.jpg"},
    {"UserFilesName":"设计系12营销G5毕业照","UserFilesServerName":"http://fs.1473.cn/8db6512f-8e99-4d43-aabe-c13027e91465.jpg","Action_url":"http://fs.1473.cn/8db6512f-8e99-4d43-aabe-c13027e91465.jpg"},
    {"UserFilesName":"机电系14光电子G3毕业照3","UserFilesServerName":"http://fs.1473.cn/fc0f29dc-9933-42b6-86aa-1cba7c66c668.jpg","Action_url":"http://fs.1473.cn/fc0f29dc-9933-42b6-86aa-1cba7c66c668.jpg"},
    {"UserFilesName":"深圳技师学院机电系14光电子G3毕业照2","UserFilesServerName":"http://fs.1473.cn/5e89e6bd-46b6-447f-811f-3ca4568546a2.jpg","Action_url":"http://fs.1473.cn/5e89e6bd-46b6-447f-811f-3ca4568546a2.jpg"},
    {"UserFilesName":"机电系14光电子G3毕业照","UserFilesServerName":"http://fs.1473.cn/81ac6766-2ebd-431e-9020-ad7b1f17767d.jpg","Action_url":"http://fs.1473.cn/81ac6766-2ebd-431e-9020-ad7b1f17767d.jpg"},
    {"UserFilesName":"电信系12电子J4毕业照","UserFilesServerName":"http://fs.1473.cn/30bcd316-3b25-4850-b68c-0b158d9d2628.jpg","Action_url":"http://fs.1473.cn/30bcd316-3b25-4850-b68c-0b158d9d2628.jpg"},
    {"UserFilesName":"电信系11电子商务G5毕业照","UserFilesServerName":"http://fs.1473.cn/9999238c-d1cd-4275-89a8-042befceed8e.jpg","Action_url":"http://fs.1473.cn/9999238c-d1cd-4275-89a8-042befceed8e.jpg"},
    {"UserFilesName":"神秘系未知班毕业照","UserFilesServerName":"http://fs.1473.cn/2f769382-ecd1-4661-b6c8-5077d6f23955.jpg","Action_url":"http://fs.1473.cn/2f769382-ecd1-4661-b6c8-5077d6f23955.jpg"},
    {"UserFilesName":"神秘系未知班毕业照(2)","UserFilesServerName":"http://fs.1473.cn/7fd027cf-1b11-48f2-bbb3-5825a9c7b0b8.jpg","Action_url":"http://fs.1473.cn/7fd027cf-1b11-48f2-bbb3-5825a9c7b0b8.jpg"},
    {"UserFilesName":"设计系13高起营销毕业照","UserFilesServerName":"http://fs.1473.cn/16d44639-fef5-484b-aee9-18fa7d603f06.jpg","Action_url":"http://fs.1473.cn/16d44639-fef5-484b-aee9-18fa7d603f06.jpg"},
    {"UserFilesName":"设计系13高起营销毕业照","UserFilesServerName":"http://fs.1473.cn/517c9c1d-63b4-4c8d-bcba-7a76058c13ba.jpg","Action_url":"http://fs.1473.cn/517c9c1d-63b4-4c8d-bcba-7a76058c13ba.jpg"},
    {"UserFilesName":"设计13高起营销毕业照","UserFilesServerName":"http://fs.1473.cn/6ad8a083-a0ec-4e0b-b0c4-a791227c1497.jpg","Action_url":"http://fs.1473.cn/6ad8a083-a0ec-4e0b-b0c4-a791227c1497.jpg"},
    {"UserFilesName":"深圳技师学院汽车系12汽修G5毕业照","UserFilesServerName":"http://fs.1473.cn/9ea937ee-c294-42f5-9dc3-8d7c6707971f.jpg","Action_url":"http://fs.1473.cn/9ea937ee-c294-42f5-9dc3-8d7c6707971f.jpg"},
    {"UserFilesName":"汽车系12汽修G5毕业照","UserFilesServerName":"http://fs.1473.cn/855b8343-05d9-4213-9486-f790977ece84.jpg","Action_url":"http://fs.1473.cn/855b8343-05d9-4213-9486-f790977ece84.jpg"},
    {"UserFilesName":"生物系11生物毕业照","UserFilesServerName":"http://fs.1473.cn/831356f9-5737-4007-83b5-626a332f3984.jpg","Action_url":"http://fs.1473.cn/831356f9-5737-4007-83b5-626a332f3984.jpg"},
    {"UserFilesName":"生物系11生物G5毕业照","UserFilesServerName":"http://fs.1473.cn/d057c910-8bc1-4ffa-a9c5-4b2abda695e8.jpg","Action_url":"http://fs.1473.cn/d057c910-8bc1-4ffa-a9c5-4b2abda695e8.jpg"},
    {"UserFilesName":"生物系11生物G5毕业证","UserFilesServerName":"http://fs.1473.cn/a69a1072-3ac8-4d24-a838-62c01e308e79.jpg","Action_url":"http://fs.1473.cn/a69a1072-3ac8-4d24-a838-62c01e308e79.jpg"},
    {"UserFilesName":"珠宝系10首饰G5毕业照","UserFilesServerName":"http://fs.1473.cn/08ebaaa0-83e0-4297-af40-16fb9356992c.jpg","Action_url":"http://fs.1473.cn/08ebaaa0-83e0-4297-af40-16fb9356992c.jpg"},
    {"UserFilesName":"电信系11电商大合照","UserFilesServerName":"http://fs.1473.cn/9c3d8ed9-2b38-4e3c-bc7f-786b8ebe5cc4.jpg","Action_url":"http://fs.1473.cn/9c3d8ed9-2b38-4e3c-bc7f-786b8ebe5cc4.jpg"},
    {"UserFilesName":"电信系11电商G5毕业证","UserFilesServerName":"http://fs.1473.cn/0398407d-fcf6-48ef-8d93-bf5105079d97.jpg","Action_url":"http://fs.1473.cn/0398407d-fcf6-48ef-8d93-bf5105079d97.jpg"},
    {"UserFilesName":"电信系11电商G5毕业证","UserFilesServerName":"http://fs.1473.cn/ccbfb021-222c-4eb5-9200-beb3b3b189cc.jpg","Action_url":"http://fs.1473.cn/ccbfb021-222c-4eb5-9200-beb3b3b189cc.jpg"},
    {"UserFilesName":"深圳技师学院电信系11软件G5毕业照","UserFilesServerName":"http://fs.1473.cn/3678b7c6-4cc7-4cba-af52-4837a0d53774.jpg","Action_url":"http://fs.1473.cn/3678b7c6-4cc7-4cba-af52-4837a0d53774.jpg"},
    {"UserFilesName":"电信系11软件G5毕业照","UserFilesServerName":"http://fs.1473.cn/6aeea1fa-d9f7-443e-ba04-1f13b740c1d4.jpg","Action_url":"http://fs.1473.cn/6aeea1fa-d9f7-443e-ba04-1f13b740c1d4.jpg"},
    {"UserFilesName":"电信系11软件G5毕业照","UserFilesServerName":"http://fs.1473.cn/fb708b96-db9c-4b3c-902d-f1f12e1aa789.jpg","Action_url":"http://fs.1473.cn/fb708b96-db9c-4b3c-902d-f1f12e1aa789.jpg"},
    {"UserFilesName":"电信系11软件G5毕业照","UserFilesServerName":"http://fs.1473.cn/7959d613-e9f2-4910-90f2-e14cced72dce.jpg","Action_url":"http://fs.1473.cn/7959d613-e9f2-4910-90f2-e14cced72dce.jpg"},
    {"UserFilesName":"电信系11软件G5毕业照","UserFilesServerName":"http://fs.1473.cn/00acd02c-b16f-467d-9a5f-1461cd425b2c.jpg","Action_url":"http://fs.1473.cn/00acd02c-b16f-467d-9a5f-1461cd425b2c.jpg"},
    {"UserFilesName":"电信系11软件G5毕业照","UserFilesServerName":"http://fs.1473.cn/7444df51-8620-432c-a126-9e52ae5557b6.jpg","Action_url":"http://fs.1473.cn/7444df51-8620-432c-a126-9e52ae5557b6.jpg"},
    {"UserFilesName":"电信系11软件G5毕业照","UserFilesServerName":"http://fs.1473.cn/e0f281b3-c79e-4259-91cb-98dd670d8808.jpg","Action_url":"http://fs.1473.cn/e0f281b3-c79e-4259-91cb-98dd670d8808.jpg"},
    {"UserFilesName":"电信系11软件G5毕业照","UserFilesServerName":"http://fs.1473.cn/53b581b0-0a09-4426-a02e-cb6935ef3d67.jpg","Action_url":"http://fs.1473.cn/53b581b0-0a09-4426-a02e-cb6935ef3d67.jpg"},
    {"UserFilesName":"电信系11软件G5毕业照","UserFilesServerName":"http://fs.1473.cn/d55c43ba-32b9-4a91-a14a-94745f4c10a1.jpg","Action_url":"http://fs.1473.cn/d55c43ba-32b9-4a91-a14a-94745f4c10a1.jpg"},
    {"UserFilesName":"电信系11软件G5毕业照","UserFilesServerName":"http://fs.1473.cn/3678b7c6-4cc7-4cba-af52-4837a0d53774.jpg","Action_url":"http://fs.1473.cn/3678b7c6-4cc7-4cba-af52-4837a0d53774.jpg"},
    {"UserFilesName":"电信系11软件G5毕业照","UserFilesServerName":"http://fs.1473.cn/9b8d7654-ef5a-4b5d-94c7-5dd75ead6ff2.jpg","Action_url":"http://fs.1473.cn/9b8d7654-ef5a-4b5d-94c7-5dd75ead6ff2.jpg"},
    {"UserFilesName":"电信系11软件G5毕业照","UserFilesServerName":"http://fs.1473.cn/67a96c9c-08b1-4af7-8d35-2465eb7d9dd2.jpg","Action_url":"http://fs.1473.cn/67a96c9c-08b1-4af7-8d35-2465eb7d9dd2.jpg"},
    {"UserFilesName":"电信系11软件G5毕业照","UserFilesServerName":"http://fs.1473.cn/66480f98-1940-488b-9f0e-996f640b084e.jpg","Action_url":"http://fs.1473.cn/66480f98-1940-488b-9f0e-996f640b084e.jpg"}
];
/*导航数组*/
//name是导航名字
//tag是导航标签
//dataLength是中间数据板块有多少条数据4或者8
//resource是数据资源，外网填写url，存储过程填写参数['GetFileByid','1','2','3']，本地填写上面的数组名称CampusInfo.graduationData
CampusInfo.NavData = [
    {"name": "要闻", "tag": "news", "dataLength": 4, "resource": "http://is.snssdk.com/api/news/feed/v51/?category=news_society&"},
    {"name": "视频教学", "tag": "video-teaching", "dataLength": 4, "resource": CampusInfo.VideoTeach},
    {"name": "毕业季", "tag": "graduation", "dataLength": 8, "resource": CampusInfo.graduationData},
    {"name": "程序教学", "tag": "program-teaching","dataLength": 8, "resource": CampusInfo.program},
    {"name": "产品教学", "tag": "product-teaching","dataLength": 8, "resource": CampusInfo.ProductData},
    {"name": "网络教学", "tag": "network-teaching", "dataLength": 8, "resource": CampusInfo.NetWorkData}
];
/*过滤数组*/
/*将除了导航数组、广告数组以外的数组的名称都添加到这里面，如产品的数组 CampusInfo.ProductData 就添加为CampusInfo.ProductData， */
CampusInfo.FliterData=[
    CampusInfo.VideoTeach,CampusInfo.program,CampusInfo.ProductData,CampusInfo.NetWorkData,CampusInfo.graduationData
];