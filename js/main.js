// Initialize Lenis
const lenis = new Lenis({
	lerp: 0.1,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.addEventListener('DOMContentLoaded', function() {
  // Enhanced smooth toggle for FAQ accordions
  document.querySelectorAll('.faq-wrap').forEach(function(wrap) {
    wrap.addEventListener('click', function(e) {
      const answer = wrap.querySelector('.faq-answer');
      const plus = wrap.querySelector('.faq-plus');
      if (answer) {
        const isHidden = window.getComputedStyle(answer).display === 'none' || answer.offsetHeight === 0;
        if (isHidden) {
          answer.style.display = 'block';
          answer.style.height = 'auto';
          answer.style.opacity = '1';
          if (plus) plus.style.transform = 'rotate(45deg)';
        } else {
          answer.style.display = 'none';
          answer.style.height = '0px';
          if (plus) plus.style.transform = 'rotate(0deg)';
        }
      }
    });
  });
});