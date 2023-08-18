const sections = document.querySelectorAll("section"),
    navbar = document.querySelector('.navbar'),
    navbarToggler = document.querySelector('.navbar-toggler'),
    navLinks = document.querySelectorAll('.navbar-nav .nav-item .nav-link'),
    menuToggle = document.getElementById('navbarCollapse'),
    upBtn = document.querySelector('.upBtn'),
    bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

window.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    if (scroll > 150) {
        navbar.classList.add('navbar-dark', 'glass-dark')
        scroll > 300 ? upBtn.classList.remove('d-none') : upBtn.classList.add('d-none')
    }
    else {
        if (navbarToggler.getAttribute('aria-expanded') == 'false') {
            navbar.classList.remove('navbar-dark', 'glass-dark')
        }
    }

    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop,
            sectionHeight = section.clientHeight;
        if (scroll <= 96) {
            current = "home"
        } else if (scroll >= sectionTop - sectionHeight / 5) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((li) => {
        li.classList.remove("active");
        if (li.getAttribute("href") == "#" + current && current !== "") {
            li.classList.add("active");
        }
    });
})

function navBgSetter() {
    let scroll = window.scrollY;
    if (navbarToggler.getAttribute('aria-expanded') === 'true') {
        navbar.classList.add('navbar-dark', 'glass-dark')
    } else {
        if (scroll < 150) {
            navbar.classList.remove('navbar-dark', 'glass-dark')
        }
    }
}

navbarToggler.addEventListener('click', () => { navBgSetter() })

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        bsCollapse.hide()
        navBgSetter()
    })
})

upBtn.addEventListener('click', () => { window.scrollTo(0, 0) })