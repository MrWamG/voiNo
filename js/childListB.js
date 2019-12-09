let html = document.getElementsByTagName('html')[0];
let ListShowCircular = document.getElementsByClassName('ListShowCircular')[0];
let wrapBtnShowLineBox = document.getElementsByClassName('wrapBtnShowLineBox');
let wrapBtnSHowLine = document.getElementsByClassName('wrapBtnSHowLine');
let ListShowCircularDiv = document.querySelectorAll('.ListShowCircular>div')[0];
let ListBox = document.getElementsByClassName('ListBox');
let ListTitle = document.getElementsByClassName('ListTitle');
let wrapBtnShowLineLtBox = document.getElementsByClassName('wrapBtnShowLineLtBox');
let moreFunCirularBox = document.getElementsByClassName('moreFunCirularBox')[0];
let moreFunCircular = document.getElementsByClassName('moreFunCircular');
let showOffMoreFun = document.getElementsByClassName('showOffMoreFun')[0];
let moreFunRelativeCircular = document.getElementsByClassName('moreFunRelativeCircular');

let moreFunIsOff = true;
let allowListShowOnMouseOut = true;

// console.log("请注意，该桌面时钟并非由我本人开发");
// console.log("如果有建议或者我侵犯了您的权益可发送邮件至wangliamgcom@gmail.com或者联系QQ：954879629");

function btnUnShow(){
    wrapBtnShowLineBox[0].style.top = "";
    wrapBtnShowLineBox[1].style.left = "";
    wrapBtnShowLineBox[2].style.top = "";
    wrapBtnShowLineBox[3].style.left = ""; //关键帧
    wrapBtnShowLineLtBox[3].style.top = "";
    wrapBtnShowLineBox[3].style.pointerEvents = ""; //关键帧
    wrapBtnShowLineBox[3].style.cursor = ""; //关键帧

    wrapBtnSHowLine[6].style.right = "";
    wrapBtnSHowLine[7].style.left = "";
    wrapBtnSHowLine[6].style.top = "";
    wrapBtnSHowLine[7].style.top = "";
    for(let i = 0;i<wrapBtnSHowLine.length;++i){
        wrapBtnSHowLine[i].style.background = "";
    }
    // wrapBtnShowLineBox[3].style.transform = ""; //关键帧
    ListShowCircular.style.width = "";
    ListShowCircular.style.height = "";
    ListShowCircular.style.top = "";
    ListShowCircular.style.left = "";
    ListShowCircular.style.background = "";
    ListShowCircular.style.color = "";
    ListShowCircularDiv.style.transform = "";
    ListShowCircularDiv.style.fontSize = "";
    ListBox[0].style.zIndex = "-1";
    for(let ListBoxNum = 0;ListBoxNum < ListBox.length;ListBoxNum++){
        ListBox[ListBoxNum].style.top = "";
        ListBox[ListBoxNum].style.width = "";
        ListBox[ListBoxNum].style.height = "";
        ListBox[ListBoxNum].style.opacity = "0";
        ListTitle[ListBoxNum].style.opacity = "";
        ListBox[ListBoxNum].style.left = "";
    }
    allowListShowOnMouseOut = true;

    for(let moreFunNum = 0;moreFunNum<moreFunCircular.length;moreFunNum++) {//更多功能关闭
        moreFunCircular[moreFunNum].style.width = "";
        moreFunCircular[moreFunNum].style.height = "";
        moreFunCircular[moreFunNum].style.background = "";
        moreFunCircular[moreFunNum].style.left = "";
        moreFunCircular[moreFunNum].style.top = "";
    }
    //开始funIco初始结束透明度
    for(let funIcoNum = 0;funIcoNum<moreFunRelativeCircular.length;++funIcoNum){
        moreFunRelativeCircular[funIcoNum].style.opacity = "";
    }
    //结束funIco初始结束透明度
    moreFunIsOff = true;
    showOffMoreFun.style.top = "";
}

ListShowCircular.onclick = function(){
    if(allowListShowOnMouseOut == true){
        wrapBtnShowLineBox[0].style.top = "-10px";
        wrapBtnShowLineBox[1].style.left = "10px";
        wrapBtnShowLineBox[2].style.top = "10px";
        wrapBtnShowLineBox[3].style.left = "-450px"; //关键帧
        wrapBtnShowLineBox[3].style.pointerEvents = "all"; //关键帧
        wrapBtnShowLineBox[3].style.cursor = "pointer"; //关键帧
        wrapBtnShowLineLtBox[3].style.top = "0px";
        

        wrapBtnSHowLine[6].style.right = "1px";
        wrapBtnSHowLine[7].style.left = "10px";
        // wrapBtnSHowLine[6].style.top = "101.1px";
        // wrapBtnSHowLine[7].style.top = "101.1px";
        // wrapBtnShowLineBox[3].style.transform = "rotate(90deg)"; //关键帧
        ListShowCircular.style.width = "50px";
        ListShowCircular.style.height = "50px";
        ListShowCircular.style.top = "38px";
        ListShowCircular.style.left = "38px";
        ListShowCircularDiv.style.transform = "rotate(45deg)";
        ListShowCircularDiv.style.fontSize = "50px";
        for(let ListBoxNum = 0;ListBoxNum < ListBox.length;ListBoxNum++){
            ListBox[ListBoxNum].style.top = "38px";
            ListBox[ListBoxNum].style.width = "50px";
            ListBox[ListBoxNum].style.height = "50px";
            ListBox[ListBoxNum].style.opacity = "1";
            ListTitle[ListBoxNum].style.opacity = "1";
        }
        for(let i = 0;i<ListBox.length;++i){
            let ListBoxLeftNum = i*70;
            ListBox[i].style.left = "-"+(ListBoxLeftNum+30)+"px";
            ListBox[0].style.left = "-"+(100 - ListBoxLeftNum)+"px";
            ListBox[0].style.zIndex = "1";
        }
        for (let i = 0; i < 8; i++) {
            wrapBtnSHowLine[i].style.background = "#1e9fff";
        }
        ListShowCircular.style.background = "#1e9fff";
        ListShowCircular.style.color = "#fff";
        allowListShowOnMouseOut = false;
    }else{
        btnUnShow();
    }


    wrapBtnShowLineBox[3].onclick = function(){ //左侧关闭清空网页
        wrapBtnShowLineBox[0].style.top = "";
        wrapBtnShowLineBox[1].style.left = "";
        wrapBtnShowLineBox[2].style.top = "";
        wrapBtnShowLineBox[3].style.left = ""; //关键帧
        wrapBtnShowLineBox[3].style.pointerEvents = ""; //关键帧
        wrapBtnShowLineBox[3].style.cursor = ""; //关键帧

        wrapBtnShowLineLtBox[3].style.top = "";

        wrapBtnSHowLine[6].style.right = "";
        wrapBtnSHowLine[7].style.left = "";
        wrapBtnSHowLine[6].style.top = "";
        wrapBtnSHowLine[7].style.top = "";
        // wrapBtnShowLineBox[3].style.transform = ""; //关键帧
        ListShowCircular.style.width = "";
        ListShowCircular.style.height = "";
        ListShowCircular.style.top = "";
        ListShowCircular.style.left = "";
        ListShowCircularDiv.style.transform = "";
        ListShowCircularDiv.style.fontSize = "";
        ListBox[0].style.zIndex = "-1";
        for(let ListBoxNum = 0;ListBoxNum < ListBox.length;ListBoxNum++){
            ListBox[ListBoxNum].style.top = "";
            ListBox[ListBoxNum].style.width = "";
            ListBox[ListBoxNum].style.height = "";
            ListBox[ListBoxNum].style.opacity = "0";
            ListTitle[ListBoxNum].style.opacity = "";
        }
        for(let ListBoxNum = 0;ListBoxNum<ListBox.length;ListBoxNum++){
            ListBox[ListBoxNum].style.left = "";
        }
        for(let i = 0;i<8;i++) {
            wrapBtnSHowLine[i].style.background = "#fff";
        }
        ListShowCircular.style.background = "#fff";
        ListShowCircular.style.color = "#1e9fff";
        allowListShowOnMouseOut = true;
        wrapIframe.src = "";
        for(let moreFunNum = 0;moreFunNum<moreFunCircular.length;moreFunNum++) {//更多功能关闭
            moreFunCircular[moreFunNum].style.width = "";
            moreFunCircular[moreFunNum].style.height = "";
            moreFunCircular[moreFunNum].style.background = "";
            moreFunCircular[moreFunNum].style.left = "";
            moreFunCircular[moreFunNum].style.top = "";
        }

        //开始funIco初始结束透明度
        for(let funIcoNum = 0;funIcoNum<moreFunRelativeCircular.length;++funIcoNum){
            moreFunRelativeCircular[funIcoNum].style.opacity = "";
        }
        //结束funIco初始结束透明度

        wrapIframeBox.style.pointerEvents = "none";//使iframe不再能被点击

        moreFunIsOff = true;
        showOffMoreFun.style.top = "";
    }
}

ListShowCircular.onmouseenter = function(){
   for(let i = 0;i<8;i++) {
        wrapBtnSHowLine[i].style.background = "#1e9fff";
    }
    ListShowCircular.style.background = "#1e9fff";
    ListShowCircular.style.color = "#fff";
}
ListShowCircular.onmouseleave = function(){
    if(allowListShowOnMouseOut == true){
        for(let i = 0;i<8;i++) {
            wrapBtnSHowLine[i].style.background = "#fff";
        }
        ListShowCircular.style.background = "#fff";
        ListShowCircular.style.color = "#1e9fff";
    }
}

//开始改变iframe中的地址
let wrapIframe = document.getElementsByClassName('wrapIframe')[0];
let moreFun = document.getElementById('moreFun');
let baiduSearch = document.getElementById('baiduSearch');
let baiduFanyi = document.getElementById('baiduFanyi');
let bilibili = document.getElementById('bilibili');
let flower = document.getElementById('flower');
let GitHub = document.getElementById('GitHub');
let wrapIframeBox = document.getElementsByClassName('wrapIframeBox')[0];
bilibili.onclick = function(){
    wrapIframe.src = "https://www.bilibili.com/";
    wrapIframeBox.style.pointerEvents = "all";
    btnUnShow();
}
baiduSearch.onclick = function(){
    wrapIframe.src = "https://www.baidu.com/";
    wrapIframeBox.style.pointerEvents = "all";
    btnUnShow();
}
baiduFanyi.onclick = function(){
    wrapIframe.src = "https://fanyi.baidu.com/?aldtype=16047#auto/zh";
    wrapIframeBox.style.pointerEvents = "all";
    btnUnShow();
}
flower.onclick = function(){
    wrapIframe.src = "https://huaban.com/";
    wrapIframeBox.style.pointerEvents = "all";
    btnUnShow();
}
GitHub.onclick = function(){
    wrapIframe.src = "https://github.com/";
    wrapIframeBox.style.pointerEvents = "all";
    btnUnShow();
}
vPanioPlay.onclick = function(){
    wrapIframe.src = "./vPiano.html";
    wrapIframeBox.style.pointerEvents = "all";
    btnUnShow();
}

//结束改变iframe中的地址

// 开始点击展开更多功能
moreFun.onclick = function(){
    let moreFunCircularTop = 0;
    if(moreFunIsOff){
        for(let moreFunNum = 0;moreFunNum<moreFunCircular.length;moreFunNum++) {
            moreFunCircular[moreFunNum].style.width = "50px";
            moreFunCircular[moreFunNum].style.height = "50px";
            // moreFunCircular[moreFunNum].style.background = "#1e9fff";
            moreFunCircular[moreFunNum].style.left = "-25px";
            moreFunCircularTop -= 60;
            moreFunCircular[moreFunNum].style.top = -25 + moreFunCircularTop + "px";
        }

        showOffMoreFun.style.top = "0px";

        //开始moreFunRelativeCircular初始结束透明度
        for(let funIcoNum = 0;funIcoNum<moreFunRelativeCircular.length;++funIcoNum){
            moreFunRelativeCircular[funIcoNum].style.opacity = "1";
        }
        //结束funIco初始结束透明度
        
        moreFunIsOff = false;
    }else{
        for(let moreFunNum = 0;moreFunNum<moreFunCircular.length;moreFunNum++) {
            moreFunCircular[moreFunNum].style.width = "";
            moreFunCircular[moreFunNum].style.height = "";
            moreFunCircular[moreFunNum].style.background = "";
            moreFunCircular[moreFunNum].style.left = "";
            moreFunCircular[moreFunNum].style.top = "";
        }
        showOffMoreFun.style.top = "";

        //开始funIco初始结束透明度
        for(let funIcoNum = 0;funIcoNum<moreFunRelativeCircular.length;++funIcoNum){
            moreFunRelativeCircular[funIcoNum].style.opacity = "";
        }
        //结束funIco初始结束透明度

        moreFunIsOff = true;
    }
}

for(let moreFunNum = 0;moreFunNum<moreFunCircular.length;moreFunNum++) {//取消更多功能中子元素冒泡
    moreFunCircular[moreFunNum].onclick = function(e){
        e = e||window.event;
        e.stopPropagation();
    }
}

// 结束点击展开更多功能

