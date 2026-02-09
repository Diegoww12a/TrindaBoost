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




const bt = document.getElementById("bt"); // seu botão
const side = document.getElementById("side"); // sua sidebar

bt.addEventListener("click", () => {
    side.classList.toggle("hidden");         // mostra/oculta sidebar
    bt.classList.toggle("rotate-180");       // rotaciona botão
    side.classList.toggle("");  // animação de entrada
});