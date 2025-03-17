gsap.registerPlugin(TextPlugin);
const words = [
  'made recently with an intention of imitating the fashion of the bygone era.',
];

let cursor = gsap.to('.cursor', {
  opacity: 0,
  ease: 'power2.inOut',
  repeat: -1,
});

function typeWriterEffect(text, speed = 3) {
  gsap.to('.text', {
    text: text,
    duration: speed,
    ease: 'none',
  });
}

typeWriterEffect(words[0]); // Start the animation
