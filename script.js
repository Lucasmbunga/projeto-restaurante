const menuFixo = document.querySelector(".menu-fixo")
const navLinks = document.querySelectorAll("nav a")

const sections = document.querySelectorAll
    ("section")
const botaoCadastrar = document.querySelector(".botaoCadastrar")
const botaoSubmeter = document.querySelector(".formulario button")
const overlay = document.querySelector(".overlay")
const voltar_inicio=document.querySelector(".voltar-inicio")

botaoSubmeter.addEventListener("click", () => {
    const camposDeDados = document.querySelectorAll(".formulario input")

    camposDeDados.forEach(campo => {

        campo.addEventListener("blur", (event) => {

            let estadoDeCampo = event.target.validity
            console.log(estadoDeCampo)
            if (estadoDeCampo.valueMissing) {
                campo.setCustomValidity("Este campo nao pode ficar vazio")
            }
            else {
            }

            campo.reportValidity()
        })

    })

})

botaoCadastrar.addEventListener("click", () => {
    document.querySelector("dialog").show()
    overlay.style.display = "block"
})

window.onscroll = function () {
    window.scrollY > 50 ? menuFixo.classList.add("fixar") : menuFixo.classList.remove("fixar")
    controlarSecoes()
}

navLinks.forEach(link => {
    link.addEventListener("click", (selecionado) => {
        navLinks.forEach(links => {

            links.classList.remove("ativo")
        })
        selecionado.target.classList.add("ativo")

    })
})

const controlarSecoes = () => {
    sections.forEach(section => {
        const posicaoRolagem = window.scrollY
        const topSection = section.offsetTop - 50
        const alturaSection = section.offsetHeight
        const id = section.getAttribute("id")
        if (posicaoRolagem >= topSection && posicaoRolagem < topSection + alturaSection) {
            let idSection=section.getAttribute("id")
            if(idSection!="home"){
                voltar_inicio.style.display="block"
            }
            else{
                voltar_inicio.style.display="none"
            }

            navLinks.forEach(link => {
                link.classList.remove("ativo")
            })
            const linkAtivo = document.querySelector("nav a[href*=" + id + "]")
            if (linkAtivo) {
                linkAtivo.classList.add("ativo")
            }
        }
    })
}    
