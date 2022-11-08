function RevCap(){
    str = document.getElementById("text-input").value
    function letterReCap(str){
      let strArr = str.split("")
      let result = []
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
document.getElementById("result-btn").onclick = function() {RevCap()}

function DupRem(){
  if(document.getElementById("CaseSensCheck").checked == true){
    arr = document.getElementById("text-input1").value.toLowerCase().split(/[,]/)
  }else{
    arr = document.getElementById("text-input1").value.split(/[,]/)
  }
  function remDupl(arr){
    return arr.filter((item,index) => arr.indexOf(item) === index).toString()
  }
  document.getElementById("result-text1").innerHTML = "Result : " + remDupl(arr)
}
document.getElementById("result-btn1").onclick = function() {DupRem()}

container = document.querySelector(".chessBoardContainer")
containerWidth = container.clientWidth
chessboard = document.getElementById('chessboard');
for (i = 0; i < 8; i++) {
  for (j = 0; j < 8; j++) {
    chessSquare = document.createElement('div');
    chessSquare.setAttribute('style', `float: left; width: ${containerWidth/8}px; height: ${containerWidth/8}px; border: 1px solid black; background-color: #fff;`)
    if ((i + j) % 2 == 0) {
      chessSquare.style.backgroundColor = '#000';
    }
    chessboard.appendChild(chessSquare);
  }
}
