import anime from "animejs/lib/anime.es.js";
export let position;
export default (node) => {
  let animation = anime({
    targets: node,
    duration: 500,
    easing: "easeInOutCirc",
    translateX: [window.innerWidth - 200, 0],
    scale: [0.5, 2],
    rotate: 720,
  });
  return {
    destroy() {
      anime.remove(node)
    },
    update() {
      if (animation) {
        animation.reverse();
        animation.play();
        return;
      }
    }
  }
}
