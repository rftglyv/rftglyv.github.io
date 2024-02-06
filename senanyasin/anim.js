let cards = document.querySelectorAll('.card'),
    upBtn = document.querySelector('.upBtn');
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
        part.classList.remove('fade-in');
    });
});
cards.forEach(card => {
    observer.observe(card);
})