//Balão de Duvidas - Aparecer e Desaparecer//
const ajudaTer = document.querySelector('#ajuda_ter');
const baLao = document.querySelector('#balao_prim');

document.addEventListener('mousedown',(event) =>{
  if (ajudaTer.contains(event.target)){
    baLao.classList.remove('sumir');
    baLao.offsetHeight;
    baLao.classList.add('show_balao');
  }else{
    baLao.classList.remove('show_balao');
    baLao.classList.add('sumir');
  }
});

//Calcular
document.getElementById('bt_calcular').addEventListener('click', function() {
var fator_r = 100;
  document.getElementById('teste').textContent = fator_r;
  
    var myDiv = document.getElementById('resultado');
    myDiv.classList.remove('sumir'); // Remove a classe 'hidden'
    myDiv.offsetHeight; // Força o reflow para garantir que a transição aconteça
    myDiv.classList.add('show_result'); // Adiciona a classe 'show' para iniciar a transição
    
});

//Deixar o Menu Responsivo//
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}
btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
