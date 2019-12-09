let voCursorBigBox = document.getElementsByClassName('voCursorBigBox')[0];
let voCursorRelativeBox = document.getElementsByClassName('voCursorRelativeBox')[0];
let voCursorBox = document.getElementsByClassName('voCursorBox')[0];
let aHref = document.getElementsByTagName('a');

function mousePos(event) {
    let e = event || window.event;
    return {"x":e.clientX,"y":e.clientY}
}
document.onmousemove = () => {
    voCursorBigBox.style.top = (mousePos().y+9) + "px";
    voCursorBigBox.style.left = (mousePos().x-12) + "px";
}

for(let i = 0;i<aHref.length;++i){
    aHref[i].onmouseenter = () =>{
        voCursorRelativeBox.style.width = "30px";
        voCursorRelativeBox.style.height = "30px";
    }
    aHref[i].onmouseleave = () =>{
        voCursorRelativeBox.style.width = "";
        voCursorRelativeBox.style.height = "";
    }
}

document.onmousedown = () =>{
    voCursorBox.style.background = "#18f7b5";
}
document.onmouseup = () =>{
    voCursorBox.style.background = "";
}

document.onmouseover = () =>{
    voCursorBigBox.style.transform = "scale(1)";
}
document.onmouseout = () =>{
    voCursorBigBox.style.transform = "scale(0)";
}