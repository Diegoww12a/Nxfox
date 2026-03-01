
import './style.css'


const btt = document.getElementById("btt");
const hover = document.querySelector(".hover");


btt.addEventListener("click", () => {
    hover.classList.toggle("hidden")
})



document.querySelectorAll(".faq-bt").forEach(btn => {
  btn.addEventListener("click", () => {
    const cont = btn.nextElementSibling;
    const isOpen = !cont.classList.contains("hidden");

    // fecha todos
    document.querySelectorAll(".faq-bt").forEach(b => {
      b.nextElementSibling.classList.add("hidden");
    });

    // abre o clicado (se estava fechado)
    if (!isOpen) {
      cont.classList.remove("hidden");
    }
  });
});




const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalTotal = document.getElementById('modal-total');
const radios = document.querySelectorAll('input[name="plano"]');

// abre o modal em todos os botões de compra



document.querySelectorAll(".btn-comprar").forEach(btn => {
  btn.addEventListener("click", () => {
    const plano = btn.dataset.plano;

    if (plano) {
      document.querySelector(`input[value="${plano}"]`).checked = true;
      modalTotal.textContent = plano === 'v3' ? 'R$ 150,00' : 'R$ 30,00'
    }

    modal.classList.add("flex")
    modal.classList.remove("hidden")
  })
})

radios.forEach(radio => {
  radio.addEventListener("change", () => {
    modalTotal.textContent = radio.value === 'v3' ? 'R$ 150,00' : 'R$ 30,00'
  })
})

// fecha o modal
function closeModal() {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}



modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);


function pagaPix() {
  const pix = document.getElementById("btn-pix");

  pix.addEventListener("click", () => {


    const plano = document.querySelector('input[name="plano"]:checked')


    modalTotal.textContent === 'v3' ? 'R$ 150,00' : 'R$ 60,00' 
    
    alert(`Voce Compro o NXFOX ${plano.value} por ${modalTotal.textContent} 🎇`)
  


    modal.classList.add("hidden");
    
   

  });
}

pagaPix();