import './style.css'



const btnOtimizar = document.getElementById("btnOtimizar");

btnOtimizar.addEventListener("click", () => {
    const section = document.getElementById("servicos");
    section.scrollIntoView({ behavior: "smooth"})
})

const btnO  = document.getElementById("btnO");

btnO.addEventListener("click", () => {
    const section = document.getElementById("como")
    section.scrollIntoView({ behavior: "smooth" })
})


