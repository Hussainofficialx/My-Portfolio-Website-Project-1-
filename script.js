window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const body = document.body;

  // Define smooth gradient changes based on scroll position
  if (scrollY < 400) {
    // Dark mode start
    body.style.background = "radial-gradient(circle at center, hsl(0, 4%, 39%),rgb(0, 128, 115) 80%)";
  } 
  else if (scrollY >= 400 && scrollY < 900) {
    // Deep blue to purple glow
    body.style.background = "radial-gradient(circle at center, #1a1a40, #2a0845 80%)";
  } 
  else if (scrollY >= 900 && scrollY < 1400) {
    // Warm orange-pink gradient
    body.style.background = "radial-gradient(circle at center, #ff512f, #dd2476 80%)";
  } 
  else {
    // Bright, futuristic cyan-blue gradient
    body.style.background = "radial-gradient(circle at center, #00c6ff, #0072ff 80%)";
  }
});
// Reveal boxes on scroll
const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.8;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
});
