const buttonFloat = () => {

    let burger = document.querySelector(".burger");
    let burgerBounding = burger.getBoundingClientRect();
    const renderFixedBurger = () => {
        if (!burgerBounding.top == 0) {
            const logoImgBounding = document.querySelector(".logo-img").getBoundingClientRect();
            burger.setAttribute("style", `position:fixed; top:${burgerBounding.top}px; right:${logoImgBounding.left}px; z-index:10`);
            burger.setAttribute("id", "burger");
            document.body.appendChild(burger);
            burger = document.querySelector(".burger");
        }
    }
    renderFixedBurger();
    window.addEventListener("resize", renderFixedBurger);
}

const toggle = () => {
    const overlay = document.querySelector(".overlay");
    const sideMenu = document.querySelector(".side-menu");
    const toggleBurger = () => {
        overlay.classList.add("overlay--shown");
        burger.classList.toggle("burger--active");
        overlay.classList.toggle("overlay--active");
        sideMenu.classList.toggle("side-menu--active");
        setTimeout(() => {
            if (!burger.classList.contains("burger--active")) {
                overlay.classList.remove("overlay--shown");
            }
        }, 1000);
    }
    burger.addEventListener("click", toggleBurger);
    overlay.addEventListener("click", toggleBurger);
}

export {buttonFloat, toggle}
