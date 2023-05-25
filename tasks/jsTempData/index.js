let mainMenu = document.getElementById("mainMenu"),
    subMenu = document.getElementById("subMenu"),
    addNews = document.getElementById("addNews"),
    catTags = document.getElementById("catTags");

let categories = [
    { name: "Ölkə", sub: ["Cəmiyyət", "Hava", "Kriminal", "Hadisə", "Breyn Rinq"] },
    { name: "İqtisadiyyat", sub: ["Sərgilər", "Banklar"] },
    { name: "İdman", sub: [] },
    { name: "Maraqlı", sub: ["Video", "Audio", "Dizayn", "Avto", "Tarix", "Seriallar", "Elm", "Din", "Qoroskop", "Kitablar"] },
    { name: "Sağlamlıq", sub: [] },
    { name: "Dünya", sub: ["Rusiya", "Amerika", "İtalya", "Fransa", "İspaniya", "Yaponya", "Koreya", "Çin"] }
]

for (let i = 0; i < categories.length; i++) {
    let cat = categories[i].name,
        elem = document.createElement("option");
    elem.textContent = cat;
    elem.value = i;
    mainMenu.appendChild(elem);
}

mainMenu.addEventListener("change", () => {
    subMenu.innerHTML = `<option selected="">Alt kateqoriya seçin</option>`;
    let cat = categories[mainMenu.value].sub;
    if (cat.length == 0) {
        subMenu.innerHTML = `<option selected="">Kateqoriyaya uyğun alt kateqoriya yoxdur</option>`;
        subMenu.disabled = true;
    } else {
        subMenu.disabled = false;
        for (let i = 0; i < cat.length; i++) {
            let sub = cat[i],
                elem = document.createElement("option");
            elem.textContent = sub;
            elem.value = i;
            subMenu.appendChild(elem);
        }
    }
})

addNews.addEventListener("click", () => {
    if (mainMenu.selectedIndex && subMenu.selectedIndex !== 0 || subMenu.disabled == true) {
        let tag = categories[mainMenu.value].sub == 0 ? mainMenu.options[mainMenu.selectedIndex].text : subMenu.options[subMenu.selectedIndex].text
        catTag = `
        <button onclick="this.parentNode.removeChild(this)" class="d-flex align-items-center justify-content-between me-2 p-2 fs-6 alert alert-primary category">
            <span name="${tag}">${tag}</span>
        </button>
        `
        btnTag = document.getElementsByName(tag)
        if (btnTag.length == 0) {
            catTags.innerHTML += catTag;
        } else {
            btnTag[0].parentElement.classList.add("alert-added")
            removeAlert = () => { setTimeout(() => { btnTag[0].parentElement.classList.remove("alert-added") }, 1000) }
            removeAlert()
        }
    } else {
        if (mainMenu.selectedIndex == 0) {
            mainMenu.classList.add("alert-added")
        } else {
            subMenu.classList.add("alert-added")
        }
        removeAlert = () => {
            setTimeout(() => {
                mainMenu.classList.remove("alert-added")
                subMenu.classList.remove("alert-added")
            }, 1000)
        }
        removeAlert()
    }
})