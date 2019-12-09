let welcomeText = document.getElementsByClassName('welcomeText')[0];

setTimeout(() => {
    welcomeText.style.opacity = "1";
    welcomeText.style.filter = "blur(0px)";
},1);

function welcomeEnd(){
    welcomeText.style.filter = "blur(100px)";
    welcomeText.style.opacity = "0";
    welcomeText.addEventListener("transitionend",welcomeDisplayNone);
    function welcomeDisplayNone(){
        welcomeText.style.display = "none";
    }
}

document.body.addEventListener('touchmove', function(e){
    e.preventDefault();
}, { passive: false });  //passive 参数不能省略，用来兼容ios和android