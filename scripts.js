// Registrar plugins e animações usando GSAP e ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Função para dividir o texto em palavras e envolver em <span>
function wrapWords(selector) {
  document.querySelectorAll(selector).forEach((element) => {
    const words = element.textContent.split(" ");
    element.innerHTML = words
      .map((word) => `<span class='word'>${word}</span>`)
      .join(" ");
  });
}

// Selecionar todos os elementos com o custom attribute data-animate="true"
const animatedElements = document.querySelectorAll('[data-animate="true"]');

if (animatedElements.length > 0) {
  // Envolver as palavras em <span>
  wrapWords('[data-animate="true"]');

  // Animação de blur para palavras de elementos com data-animate="true"
  gsap.utils.toArray('[data-animate="true"] .word').forEach((element) => {
    gsap.fromTo(element, 
      { filter: "blur(10px)", opacity: 0 }, 
      { filter: "blur(0px)", opacity: 1, duration: 1.1, stagger: 0.1, scrollTrigger: {
        trigger: element,
        start: "top 50%", 
        toggleActions: "play none none none"
      }}
    );
  });

  // Animação de fade-in para palavras de elementos com data-animate="true"
  gsap.utils.toArray('[data-animate="true"] .word').forEach((element) => {
    gsap.fromTo(element, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.1, stagger: 0.1, scrollTrigger: {
        trigger: element,
        start: "top 50%",
        toggleActions: "play none none none"
      }}
    );
  });
}