function RevCap(){
    str = document.getElementById("text-input").value
    function letterReCap(str){
        let strArr = str.split("")
        let result = []item.toUpperCase()):result.push(item.toLowerCase()))
        //for (i of strArr){
        strArr.forEach((item) => item.match(/[a-z]|[0-9]/) ? result.push(item.toUpperCase()):result.push(item.toLowerCase()))
        //for (i of strArr){
        //    if(i.match(/[a-z]/)){
        //        result.push(i.toUpperCase())
        //    }
        //    else result.push(i.toLowerCase())
        //}
        return result.join("").toString()
    }
    document.getElementById("result-text").innerHTML = "Result : " + letterReCap(str)
}
document.getElementById("result-btn").onclick = function() {RevCap()};

function DupRem(){
    input = document.getElementById("text-input1").value.toLowerCase()
    arr = input.split(/,/)
    function remDupl(arr){
        return arr.filter((item,index) => arr.indexOf(item) === index).toString()
    }
    document.getElementById("result-text1").innerHTML = "Result : " + remDupl(arr)
}
document.getElementById("result-btn1").onclick = function() {DupRem()};

let rowContainer = document.querySelector(".board-row")
let rowContainerWidth = rowContainer.clientWidth

for (let i=1; i<=8; i++) {
  let box = document.createElement("div");
  box.innerHTML = i
  box.setAttribute("class", "box d-flex justify-content-center align-items-center");
  rowContainer.appendChild(box);
  if(i%2==0){
    box.classList.add("bg-dark");
    box.setAttribute('style', `width: ${rowContainerWidth/8}px; height: ${rowContainerWidth/8}px; color: white;`)
  }else{
    box.classList.add("bg-light");
    box.setAttribute('style', `width: ${rowContainerWidth/8}px; height: ${rowContainerWidth/8}px; color: black;`)
  }
}
