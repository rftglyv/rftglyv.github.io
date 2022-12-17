var users = []
class User {
    constructor(id, fname, lname, age, email, city, password){
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.email = email;
        this.city = city;
        this.password = password;
    }
}

function getFullUserData(user){
    return `
    <tr>
    <th scope="row">${user.id}</th>
    <td>${user.fname}</td>
    <td>${user.lname}</td>
    <td>${user.age}</td>
    <td>${user.city}</td>
    <td>${user.email}</td>
    <td>
        <button type="button" class="btn btn-sm btn-primary">Edit</button>
        <button type="button" class="btn btn-sm btn-danger">Delete</button>
    </td>
  </tr>`
}

// Create

function regUser(){
    let fname = document.getElementById("fname").value
    let lname = document.getElementById("lname").value
    let age = document.getElementById("age").value
    let email = document.getElementById("email").value
    let city = document.getElementById("city").value
    let password = document.getElementById("password").value
    let id = users.length + 1
    let user = new User(id, fname, lname, age, email, city, password)
    users.push(user)
}

// Read

function showAllUsers(){
    usersTable.innerHTML = "";
    if (users.length === 0){
        alert(`Hal-hazırda qeydiyyatdan keçmiş istifadəçi yoxdur.`)
    }
    else{
        for(let user of users){
            usersTable.innerHTML += getFullUserData(user)
        }
    }
}

// Update

// ~

// Delete

// ~

// Login

function sysLogin(emailInput, passwordInput){
    result = users.filter(user => user.email.toUpperCase().indexOf(emailInput.toUpperCase()) !=-1);
    function loginMenu(){
        console.clear()
        while (true){
            let loginMenuError = `\nSistemə Giriş \n1. Qeydiyyat üçün 1 seçin \n0. Əsas menyuya qayıtmaq üçün 0 seçin \n`
            console.log(`Email düzgün deyil. Qeydiyyat ?`)
            console.log(loginMenuError)
            let menuInput = prompt(`Əməliyyat seçin :`)
            console.log("\n")
            if(menuInput == "1"){
                regUser()
                console.clear()
            }
            else if (menuInput == "0"){
                console.clear()
                break
            }else{
                console.clear()
                console.log("Düzgün əməliyyat daxil edilməyib!")
            }
        }
    }
    if (result.length === 0){
        loginMenu()
    }else{
        for(let user of result){
            if (passwordInput == user.password)
            console.log(`Sistemə giriş edildi, ${user.fname + " " + user.lname}`);
            else{
                console.clear()
                console.log("Email və ya şifrə yanlışdır!")
                loginMenu()
            }
        }
    }
}

// Filters

function filters(){
    filterPhrase = document.getElementById("filterPhrase").value
    if(document.getElementById("filterType").value == "0"){
        alert("Please select a filter")
    }else if(document.getElementById("filterPhrase").value == ""){
        alert("Filter Phrase required")
    }
    else if(document.getElementById("filterType").value == "1"){
        result = users.filter(user => user.fname.toUpperCase().indexOf(filterPhrase.toUpperCase()) !=-1)
    }else if(document.getElementById("filterType").value == "2"){
        result = users.filter(user => user.age.indexOf(filterPhrase) !=-1);
    }else if(document.getElementById("filterType").value == "3"){
        result = users.filter(user => user.city.toUpperCase().indexOf(filterPhrase.toUpperCase()) !=-1);
    }
    if(result.length === 0){
        alert(`No user found! Filter Phrase : ${filterPhrase}`)
    }

    usersTable.innerHTML = "";
    for(let user of result){
        usersTable.innerHTML += getFullUserData(user)
    }

    for(let user of result){
        console.log(`\nİstifadəçi adı : ${user.fname + " " + user.lname} \nYaşı : ${user.age} \nŞəhər : ${user.city}`);
    }
}

document.getElementById("regUser").onclick = function() {regUser()}
document.getElementById("showAllUsers").onclick = function() {showAllUsers()}
document.getElementById("filterBy").onclick = function() {filters()}