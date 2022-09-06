let insideentry = document.getElementById("inside-entry");
let insidecount = 0;
insideentry.onclick = function(){
    if (insidecount === 0){
        alert("唔...");
        insidecount = insidecount + 1;}
    else if (insidecount === 1){
        alert("...");
        insidecount = insidecount + 1;
    }
    else if (insidecount === 2){
        prompt("小朋友删除了这里的功能，所以随便填点什么都可以。");
        window.location = "sub-site/inside.html";
    }
}

function change1() {
    document.getElementById("inshref1").innerText = "...";
}
function change2() {
    document.getElementById("inshref2").innerText = "...";
}
function change3() {
    document.getElementById("inshref3").innerText = "...";
}