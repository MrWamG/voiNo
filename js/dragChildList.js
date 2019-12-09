//获取元素
let wrapBtnListBigBox = document.getElementsByClassName('wrapBtnListBigBox')[0];
let x = 0;
let y = 0;
let l = 0;
let t = 0;
let isDown = false;
//鼠标按下事件
wrapBtnListBigBox.onmousedown = function(e) {
    //获取x坐标和y坐标
    x = e.clientX;
    y = e.clientY;

    //获取左部和顶部的偏移量
    l = wrapBtnListBigBox.offsetLeft;
    t = wrapBtnListBigBox.offsetTop;
    //开关打开
    isDown = true;
    //设置样式  
    wrapBtnListBigBox.style.cursor = 'move';
}
//鼠标移动
window.onmousemove = function(e) {
    if (isDown == false) {
        return;
    }
    //获取x和y
    let nx = e.clientX;
    let ny = e.clientY;
    //计算移动后的左偏移量和顶部的偏移量
    let nl = nx - (x - l);
    let nt = ny - (y - t);

    wrapBtnListBigBox.style.left = nl + 'px';
    wrapBtnListBigBox.style.top = nt + 'px';
}
//鼠标抬起事件
wrapBtnListBigBox.onmouseup = function() {
    //开关关闭
    isDown = false;
    wrapBtnListBigBox.style.cursor = 'default';
}