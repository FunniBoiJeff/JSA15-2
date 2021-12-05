let header = document.querySelector(".navbar");
let listA = document.querySelectorAll(".navbar ul li a")

const handleScroll = () => {
    if (document.documentElement.scrollTop > 400) {
        header.style.backgroundColor = "white"
        listA.forEach((a) => {
            a.style.color = "black";
        });
    } else {
        header.style.backgroundColor = "transparent";
        listA.forEach((a) => {
            a.style.color = "white";
        });
    }
};

window.onscroll = handleScroll;