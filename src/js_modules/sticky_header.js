export const init = () => {
    const nav = document.querySelector("nav");
    const header = document.querySelector("header > .container");
    let headerBounding = header.getBoundingClientRect();
    let navBounding = nav.getBoundingClientRect();
    window.addEventListener('scroll', () => {
        if (window.scrollY >= (headerBounding.height - navBounding.height)) {
            nav.classList.add("nav-show");
        } else {
            nav.classList.remove("nav-show");
        }
    });
}
