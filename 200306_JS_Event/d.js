function loadEnd(){
    alert("실행/d.js");
}

if(window.attachEvent){
    window.attachEvent('onload',loadEnd);
}else{
    window.addEventListener('load',loadEnd);
}