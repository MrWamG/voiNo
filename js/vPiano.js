"use strict";

// 控制台输出
console.log("该作品美术风格致敬兰空VOEZ");
console.log("有兴趣的朋友请上雷亚或者龙渊官网搜索兰空VOEZ相关信息");
console.log("手机上的TapTap平台上也有兰空（VOEZ）的游戏渠道");
// console.log("个人建议购买典藏版（因为普通版的消费对我个人而言确实有些高）TapTap链接：https://www.taptap.com/app/7092");
console.log("如果有建议或者我侵犯了您的权益可发送邮件至wangliamgcom@gmail.com或者联系QQ：954879629");

// 伪jq定义
const $ = element => {
    return document.querySelectorAll(element);
};

// DOM定义
let [keyBox, keyBigBox, keyRowBox, vPianoEnd, audioViewsLine, keyboardGuide] = [
    $('.keyBox'), $('.keyBigBox'), $('.keyRowBox')[0], $('.vPianoEnd')[0], $('.audioViewsLine'), $('.keyboardGuide')[0]
];

// 数据定义
let [passwordInpu, publicPassWord, sounds, oColors] = [[],
    [4, 5, 4, 3, 2, 3, 4],
    [262, 294, 330, 349, 392, 440, 494, 523, 587, 659, 698, 784, 880, 988, 1046],
    ["#2fe1bd", "#dd5578", "#9d71d4", "#6b6c9a", "#6cacf5", "#6cf5c9", "#f5da47", "#f58947", "#ffcaad", "#47f5da", "#47f5da"]
];

// 真的捞，初始化罩层
keyboardGuide.style.zIndex = "2";
setTimeout(() => keyboardGuide.style.opacity = "1", 1);
keyboardGuide.onclick = function () {
    keyboardGuide.style.opacity = "0";
    setTimeout(() => keyboardGuide.style.zIndex = "-1", 500);
};

// 开始循环不知道做什么
for (let i = 0; i < keyBox.length; ++i) {
    keyBigBox[i].onmouseenter = () => {
        makeSound(i);
        voCursorRelativeBox.style.cssText = "width: '30px'; height: '30px';";
        _style(i);
    };
    keyBigBox[i].onmouseout = () => voCursorRelativeBox.style.cssText = "width: ''; height: '';";
}

document.onkeydown = (event) => {
    keyboardGuide.style.opacity = "0";
    setTimeout(() => keyboardGuide.style.zIndex = "-1", 500);
    // -------
    let e = event || window.event || arguments.callee.caller.arguments[0];

    if (47 <= event.keyCode && event.keyCode <= 58) keyOnPress(event.keyCode === 48 ? 58 : event.keyCode);

    // if (passwordInpu.toString() === publicPassWord.toString()) {
    //     window.parent.parentWrapBtn.style.opacity = "0";
    //     vPianoEnd1.style.left = "0%";
    //     vPianoEnd1.addEventListener("transitionend", vP2);
    //
    //     function vP2() {
    //         vPianoEnd2.style.left = "0%";
    //         vPianoEnd2.addEventListener("transitionend", vP3)
    //     }
    //
    //     function vP3() {
    //         vPianoEnd3.style.left = "0%";
    //         vPianoEnd3.addEventListener("transitionend", vPianoEndHref)
    //     }
    //
    //     function vPianoEndHref() {
    //         parent.window.location.href = "lundonBridge.html";
    //     }
    // }
};

// 应该是初始化api接口
let ctx = null;
let setContent = () => ctx = !ctx ? new AudioContext() : ctx;

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
    g.gain.linearRampToValueAtTime(0.6, ctx.currentTime + 0.01);
    osc.stop(ctx.currentTime + duration);
    g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
    passwordInpu.push(index);
}

// 辅助样式
function _style(i) {
    keyBox[i].style.background = oColors[i];
    keyBigBox[i].style.cssText = "width: '100px'; height: '100px';";
    setTimeout(function () {
        keyBox[i].style.background = "";
        keyBigBox[i].style.cssText = "width: ''; height: '';";
    }, 300);
    audioViews(i, oColors[i]);
}

// 不知道在计算什么
function keyOnPress(index) {
    index = index - 49;
    makeSound(index);
    _style(index);
}

// 开始频谱可视化
function audioViews(index, bgColor) {
    let oIndex = (index * 18) + 15;

    function style_(em, ls, i, is = false) {
        em.style.backgroundColor = is ? '' : bgColor;
        em.style.height = is ? '' : ls === 1 ? 80 / i + "%" : 100 + "%";
    }

    for (let i = 0; i < 16; i++) {
        style_(audioViewsLine[oIndex], 0, i);
        style_(audioViewsLine[oIndex + i], 1, i);
        style_(audioViewsLine[oIndex - i], 1, i);
        setTimeout(function () {
            style_(audioViewsLine[oIndex], 0, i, true);
            style_(audioViewsLine[oIndex + i], 1, i, true);
            style_(audioViewsLine[oIndex - i], 1, i, true);
        }, 200)
    }
}

// 监控报错
// window.onerror = null;