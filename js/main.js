/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')

        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle', 'nav-menu')


const navbar = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        navbar.classList.add("navscroll");
    } else {
        navbar.classList.remove("navscroll");
    }
});


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // agar animasi hanya terjadi sekali
        }
    });
}, {
    threshold: 0.2 // 20% terlihat dulu baru muncul
});

document.querySelectorAll('.portofolio-box').forEach(box => {
    observer.observe(box);
});


const title = document.querySelector('.portofolio h2');

const titleObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            title.classList.add('show');
            titleObserver.unobserve(title);
        }
    });
}, {
    threshold: 0.3
});

titleObserver.observe(title);



