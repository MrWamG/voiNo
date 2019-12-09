let keyBigBox = document.getElementsByClassName('keyBigBox');
let keyBox = document.getElementsByClassName('keyBox');
let keyboardGuide = document.getElementsByClassName('keyboardGuide')[0];
let keyRowBox = document.getElementsByClassName('keyRowBox')[0];
let vPianoEnd = document.getElementsByClassName('vPianoEnd')[0];
let audioViewsLine = document.getElementsByClassName('audioViewsLine');
let ctx;
// let sounds = [130, 147, 165, 175, 196, 220, 246, 262, 294, 330, 349, 392, 440, 494, 523, 587, 659, 698, 784, 880, 988, 1047];
let sounds = [262, 294, 330, 349, 392, 440, 494, 523, 587, 659, 698, 784, 880, 988, 1046];
let oColors = ["#2fe1bd", "#dd5578", "#9d71d4", "#6b6c9a", "#6cacf5", "#6cf5c9", "#f5da47", "#f58947", "#ffcaad", "#47f5da","#47f5da"];
let publicPassWord = [4,5,4,3,2,3,4];
let passwordInpu = [];
window.onerror=function(){return true;}

console.log("该作品美术风格致敬兰空VOEZ");
console.log("有兴趣的朋友请上雷亚或者龙渊官网搜索兰空VOEZ相关信息");
console.log("手机上的TapTap平台上也有兰空（VOEZ）的游戏渠道");
// console.log("个人建议购买典藏版（因为普通版的消费对我个人而言确实有些高）TapTap链接：https://www.taptap.com/app/7092");
console.log("如果有建议或者我侵犯了您的权益可发送邮件至wangliamgcom@gmail.com或者联系QQ：954879629");

function keyOnPress(index) {
    index = index - 49;
    makeSound(index);
    keyBox[index].style.background = oColors[index];
    keyBigBox[index].style.width = "100px";
    keyBigBox[index].style.height = "100px";
    timeOut = setTimeout(function () {
        keyBigBox[index].style.width = ""
        keyBigBox[index].style.height = ""
        keyBox[index].style.background = "";
    }, 300);
    audioViews(index,oColors[index]);
}

for(let i = 0;i<keyBox.length;++i){
    keyBigBox[i].onmouseenter = () =>{
        makeSound(i);
        voCursorRelativeBox.style.width = "30px";
        voCursorRelativeBox.style.height = "30px";
        keyBox[i].style.background = oColors[i];
        keyBigBox[i].style.width = "100px"
        keyBigBox[i].style.height = "100px"
        timeOut = setTimeout(function () {
            keyBigBox[i].style.width = ""
            keyBigBox[i].style.height = ""
            keyBox[i].style.background = "";
        }, 300)
        audioViews(i,oColors[i]);
    }
    keyBigBox[i].onmouseout = () =>{
        voCursorRelativeBox.style.width = "";
        voCursorRelativeBox.style.height = "";
    }
}

document.onkeydown = (event) => {
    keyboardGuide.style.opacity = "0";
    setTimeout(function(){
        keyboardGuide.style.zIndex = "-1";
    },500)
    let e = event || window.event || arguments.callee.caller.arguments[0];
    for (let j = 47; j < 58; ++j) {
        switch (event.keyCode) {
            case j:
                keyOnPress(j)
                break;
            case 48:
                keyOnPress(58)
                break;

            default:
                break;
        }
    }
    if(passwordInpu.toString() == publicPassWord.toString()){
        window.parent.parentWrapBtn.style.opacity = "0";
        vPianoEnd1.style.left = "0%";
        vPianoEnd1.addEventListener("transitionend",vP2);
        function vP2(){
            vPianoEnd2.style.left = "0%";
            vPianoEnd2.addEventListener("transitionend",vP3)
        }
        function vP3(){
            vPianoEnd3.style.left = "0%";
            vPianoEnd3.addEventListener("transitionend",vPianoEndHref)
        }
        function vPianoEndHref(){
            parent.window.location.href="lundonBridge.html";
        }
    }
}

function setContent() {
    if (!ctx) {
        ctx = new AudioContext()
    }
}

function makeSound(index) {
    // 获得音频上下文
    setContent();
    //得到音频振荡器
    var osc = ctx.createOscillator();
    //得到音量控制对象
    var g = ctx.createGain();
    // 连接振荡器和音量控制对象
    osc.connect(g);
    osc.type = 'sine';
    osc.frequency.value = sounds[index];
    var duration = 1;

    g.connect(ctx.destination);
    g.gain.value = 0;
    osc.start();
    g.gain.linearRampToValueAtTime(0.6, ctx.currentTime + 0.01)

    osc.stop(ctx.currentTime + duration);
    g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
    passwordInpu.push(index);
}

setTimeout(function(){
    keyboardGuide.style.opacity = "1";
},1)
keyboardGuide.style.zIndex = "2";
keyboardGuide.onclick = () =>{
    keyboardGuide.style.opacity = "0";
    setTimeout(function(){
        keyboardGuide.style.zIndex = "-1";
    },500)
}

// 开始频谱可视化
function audioViews(index,bgColor) {
    let oIndex = (index * 18) + 15;
    for (let i = 0; i < 16; i++) {
        // audioViewsLine[oIndex+i].style.height = 100/i+"%";
        audioViewsLine[oIndex + i].style.height = 80 / i + "%";
        audioViewsLine[oIndex].style.height = 100 + "%";
        audioViewsLine[oIndex - i].style.height = 80 / i + "%";
        audioViewsLine[oIndex + i].style.backgroundColor = bgColor;
        audioViewsLine[oIndex].style.backgroundColor = bgColor;
        audioViewsLine[oIndex - i].style.backgroundColor = bgColor;
        setTimeout(function () {
            audioViewsLine[oIndex + i].style.height = "";
            audioViewsLine[oIndex].style.height = "";
            audioViewsLine[oIndex - i].style.height = "";
            audioViewsLine[oIndex + i].style.backgroundColor = "";
            audioViewsLine[oIndex].style.backgroundColor = "";
            audioViewsLine[oIndex - i].style.backgroundColor = "";
        }, 200)
    }
}
// 结束频谱可视化
