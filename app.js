
const container = document.querySelector('.container-cards');
const btnEsq = document.querySelector('.esquerda');
const btnDir = document.querySelector('.direita');

let cardWidth = container.querySelector('.card').offsetWidth + 15; // largura + gap
let scrollPos = 0;

// Função para mover os cards
function mover(direcao) {
  if (direcao === 'direita') {
    scrollPos += cardWidth;
    if (scrollPos >= container.scrollWidth - container.clientWidth) {
      scrollPos = 0; // volta pro início (loop infinito)
    }
  } else {
    scrollPos -= cardWidth;
    if (scrollPos < 0) {
      scrollPos = container.scrollWidth - container.clientWidth;
    }
  }

  container.scrollTo({
    left: scrollPos,
    behavior: 'smooth'
  });
}

// Botões manuais
btnDir.addEventListener('click', () => mover('direita'));
btnEsq.addEventListener('click', () => mover('esquerda'));

// Movimento automático
let intervalo = setInterval(() => mover('direita'), 5000);

// Pausar ao passar o mouse (opcional)
container.addEventListener('mouseenter', () => clearInterval(intervalo));
container.addEventListener('mouseleave', () => {
  intervalo = setInterval(() => mover('direita'), 5000);
});
