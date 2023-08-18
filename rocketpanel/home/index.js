let servicesWrapper = document.querySelector('.services'),
    pillsWrapper = document.querySelector('.services-pills'),
    upBtn = document.querySelector('.upBtn');

upBtn.addEventListener('click', () => { window.scrollTo(0, 0) })

function renderServices(service) {
    let html =
        `
            <div class="card anim col-10 col-md-5 col-xl-3 my-2 mx-md-1 my-md-1 mx-xl-2 my-xl-2" bis_skin_checked="1">
            <div class="card-body" bis_skin_checked="1">
                <h5 class="card-title fs-3"><i class="me-2 fa-brands ${service.icon}"></i>${service.name}</h5>
                <p class="card-text">${service.desc}</p>
                <button type="button" class="btn btn-primary">${service.lot} / ${service.price} ₼</button>
            </div>
            </div>
        `
    servicesWrapper.insertAdjacentHTML('beforeend', html)
}

function renderServiceTabs(ServiceTab) {
    let tabName = ServiceTab.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()),
        html =
            `
                <a class="nav-link" name="${tabName}" data-bs-toggle="pill" role="tab" aria-selected="false"><i class="fa-brands fa-${ServiceTab.split(" ").join("")} me-2"></i>${tabName}</a>
            `
    pillsWrapper.insertAdjacentHTML('beforeend', html)
}

function renderSection(data) {
    data.tabs.forEach((serviceTab) => {
        renderServiceTabs(serviceTab);
    })

    data.services.forEach((service) => {
        renderServices(service);
    })

    let tabs = document.querySelectorAll('[role="tab"]');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            pillsWrapper.scrollIntoView(true, { behavior: 'smooth' })
            servicesWrapper.innerHTML = ""
            data.services.forEach((service) => {
                if (tab.name == "All") {
                    renderServices(service)
                } else if (tab.name == service.name) {
                    renderServices(service)
                }
            })
            if (servicesWrapper.innerHTML == "") {
                servicesWrapper.innerHTML = `<h1 class="text-center mt-5 shake"><i class="fa-solid fa-triangle-exclamation me-2"></i>No services found</h1>`
            }
        })
    });
}

let fetchRes = fetch("./data.json")
fetchRes.then(res => res.json()).then(data => {
    servicesWrapper.innerHTML = ``
    renderSection(data)
})