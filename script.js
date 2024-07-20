let nav = document.querySelector(".uppernav");
let itag = document.querySelector(".icon i");
let h3 = document.querySelector(".text h3");
let flag = 0

itag.addEventListener("click", function () {
    if (flag === 0) {
        nav.style.left = "2%"
        itag.style.color = "white"
        h3.style.display = "none"
        flag = 1
    }
    else {
        nav.style.left = "-100%"
        itag.style.color = "white"
        h3.style.display = "block"
        flag = 0
    }
})