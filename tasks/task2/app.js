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
document.getElementById("result-btn").onclick = function() {RevCap()};

function DupRem(){
    arr = document.getElementById("text-input1").value.split(/,/)
    function remDupl(arr){
        return arr.filter((item,index) => arr.indexOf(item) === index).toString()
    }
    document.getElementById("result-text1").innerHTML = "Result : " + remDupl(arr)
}
document.getElementById("result-btn1").onclick = function() {DupRem()};