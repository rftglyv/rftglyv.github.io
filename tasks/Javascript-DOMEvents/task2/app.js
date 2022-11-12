const body = document.getElementById("body")
let choice = 0
document.getElementById("btn").onclick = function() {changeBg()}
function changeBg(){
    if (choice == 0){
        body.setAttribute("style","background:red")
        choice = 1
    }else{
        body.setAttribute("style","background:blue")
        choice = 0
    }
}