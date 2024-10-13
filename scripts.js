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

// Aplicar animações para elementos com as classes específicas
wrapWords(".blur-text, .fade-in");

gsap.utils.toArray(".blur-text .word").forEach((element) => {
  gsap.fromTo(element, 
    { filter: "blur(10px)", opacity: 0 }, 
    { filter: "blur(0px)", opacity: 1, duration: 1.1, stagger: 0.1, scrollTrigger: {
      trigger: element,
      start: "top 50%", 
      toggleActions: "play none none none"
    }}
  );
});

gsap.utils.toArray(".fade-in .word").forEach((element) => {
  gsap.fromTo(element, 
    { opacity: 0, y: 50 }, 
    { opacity: 1, y: 0, duration: 1.1, stagger: 0.1, scrollTrigger: {
      trigger: element,
      start: "top 50%", 
      toggleActions: "play none none none"
    }}
  );
});