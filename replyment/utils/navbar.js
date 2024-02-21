const closeBtns = document.querySelectorAll(".btn-close"),
    sections = document.querySelectorAll("section"),
    navLinks = document.querySelectorAll('.navbar-nav .nav-item .nav-link'),
    menuToggle = document.getElementById('navbarCollapse'),
    bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false }),
    upBtn = document.querySelector('.upBtn');

closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", function (event) {
        const parentElement = event.target.parentElement;
        parentElement.remove()
    });
});

window.addEventListener('scroll', () => {
    let scroll = window.scrollY;

    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop,
            sectionHeight = section.clientHeight;
        if (scroll <= 128) {
            current = "home"
        } else if (scroll >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((li) => {
        li.classList.remove("gradient-text");
        if (li.getAttribute("href") == "#" + current && current !== "") {
            li.classList.add("gradient-text");
        }
    });
})

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        bsCollapse.hide()
    })
})

upBtn.addEventListener('click', () => { window.scrollTo(0, 0) })

window.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    scroll > 300 ? upBtn.classList.remove('d-none') : upBtn.classList.add('d-none')
})

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const part = entry.target;
        if (entry.isIntersecting) {
            part.classList.add('fade-in');
            return;
        }
    });
});
sections.forEach(section => {
    observer.observe(section);
})