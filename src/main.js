import './style.css'



const btnOtimizar = document.getElementById("btnOtimizar");

btnOtimizar.addEventListener("click", () => {
    const section = document.getElementById("precos");
    section.scrollIntoView({ behavior: "smooth"})
})

const btnO  = document.getElementById("btnO");

btnO.addEventListener("click", () => {
    const section = document.getElementById("hero")
    section.scrollIntoView({ behavior: "smooth" })
})


const bt = document.getElementById("bt")
const side = document.getElementById("side")

bt.addEventListener("click", () => {
    side.classList.toggle("hidden")
    bt.classList.toggle("rotate-45")
    
})