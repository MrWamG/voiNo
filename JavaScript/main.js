"use strict";
(function () {
    var F = Event => {
        return typeof Event === "string" ? window.document.querySelectorAll(Event) : window.onload = Event;
    };
    window.$ = F;
})();
$(function () {
    const vx = new Vue({
        el: "#App",
        data: function () {
            return {
                ctx: !this.ctx ? new AudioContext() : this.ctx, // 定义音频
                voiNo_mouse: {x: 0, y: 0, block: false, click: false}, // 鼠标
                sounds: [262, 294, 330, 349, 392, 440, 494, 523, 587, 659, 698, 784, 880, 988, 1046], //发音
            }
        }, methods: {
            __sound(key) { // 发音
                const [duration, g, osc] = [1, this.ctx.createGain(), this.ctx.createOscillator()];
                osc.connect(g);
                osc.type = 'sine';
                osc.frequency.value = this.sounds[key];
                g.connect(this.ctx.destination);
                g.gain.value = 0;
                osc.start();
                g.gain.linearRampToValueAtTime(0.6, this.ctx.currentTime + 0.01);
                osc.stop(this.ctx.currentTime + duration);
                g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);
            },
            _box_mouseover(key) {
                const [i, y] = [
                    this.$refs['box-mouseover-' + key][0],
                    this.$refs['box-mouseover-list-' + key][0]
                ];
                this.__sound(key);
                y.classList.add("colors-block");
                i.classList.add("box-mouseover", `colors-${key + 1}`);
                setTimeout(() => {
                    y.classList.remove("colors-block");
                    i.classList.remove("box-mouseover", `colors-${key + 1}`)
                }, 300);
            }, __keydown(key) {
                if (key >= -1 && key <= 9) key === -1 ? this._box_mouseover(9) : this._box_mouseover(key);
            }
        }, mounted() {
            document.onkeydown = e => this.__keydown(e.keyCode - 49); // 按键监听
            /** 鼠标光标 onmouseout，onmouseup，onmousedown，onmousemove */
            document.onmouseup = () => this.voiNo_mouse.click = false;
            document.onmousedown = () => this.voiNo_mouse.click = true;
            document.onmouseout = () => this.voiNo_mouse.block = false;
            document.onmousemove = e => [this.voiNo_mouse.x, this.voiNo_mouse.y, this.voiNo_mouse.block] = [e.clientX + 'px', e.clientY + 'px', true]; // 鼠标、
        }
    });
    console.log(
        `%c voiNo %c v0.0.1 %c`,
        'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
        'background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
        'background:transparent'
    );
    console.log("该作品美术风格致敬兰空VOEZ");
    console.log("手机上的TapTap平台上也有兰空（VOEZ）的游戏渠道");
    console.log("有兴趣的朋友请上雷亚或者龙渊官网搜索兰空VOEZ相关信息");
    console.log("如果有建议或者我侵犯了您的权益可发送邮件至wangliamgcom@gmail.com或者联系QQ：954879629");
});