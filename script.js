const menuFixo = document.querySelector(".menu-fixo")
const navLinks = document.querySelectorAll("nav a")

const sections=document.querySelectorAll
("section")

window.onscroll = function () {
    window.scrollY > 50 ? menuFixo.classList.add("fixar") : menuFixo.classList.remove("fixar")
}

navLinks.forEach(link => {
    link.addEventListener("click", (selecionado) => {
        navLinks.forEach(links => {

            links.classList.remove("ativo")
        })
        selecionado.target.classList.add("ativo")

    })
})


