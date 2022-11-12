database = []
    
function addData(){
    nameData = document.getElementById("name-input").value
    surnameData = document.getElementById("surname-input").value
    tempData = nameData + " " + surnameData
    database.push(tempData)
    document.getElementById("result-text").innerHTML = ""
    for (i in database){
        document.getElementById("result-text").innerHTML = database.join(", ")
    }
}

document.getElementById("add-btn").onclick = function() {addData()}