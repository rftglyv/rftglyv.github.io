let cardWrapper = document.querySelector('.card-wrapper');

let users = 
[
    {
        name: "Sara",
        desc: "Bekar AzMİU tələbəsi",
        addiction: "31",
        icon: "fa-user-graduate"
    },
    {
        name: "Əkbər",
        desc: "Sumqayıt uşağı/avarəsi. Auye ✵",
        addiction: "Gambling",
        icon: "fa-sack-dollar"
    },
    {
        name: "Camal",
        desc: "Qazaxlı balası hiper ultra dindar",
        addiction: "Praying",
        icon: "fa-person-praying"
    },
    {
        name: "Ağa",
        desc: "İçkini həyatından çox sevən alkaş",
        addiction: "Alcohol",
        icon: "fa-wine-glass"
    },
    {
        name: "Rüfət",
        desc: "HTML is programming language",
        addiction: "Overthinking",
        icon: "fa-radiation"
    },
    {
        name: "Nigar",
        desc: "Führerin davamçısı olmaya çalışır",
        addiction: "Gossip",
        icon: "fa-star-of-life"
    },
]

for (i in users) {
    cards(i);
}
   
function cards(i) {
    setTimeout(function() {
        let userCard = `
        <div class="card p-2 col-3 my-2 mx-1">
            <img src="assets/image${i}.png" class="p-1 card-img-top" alt="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${users[i].name}</h5>
                <p class="card-text">${users[i].desc}.</p>
                <p class="card-text"><i class="fa-solid ${users[i].icon} me-2"></i><small class="text-muted">${users[i].addiction} addiction</small></p>
            </div>
        </div>
        `;
        cardWrapper.innerHTML += userCard;
   }, 1000 * i);
}