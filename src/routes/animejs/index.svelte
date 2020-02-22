<script>
  import { onMount, onDestroy } from 'svelte';
  import animejs from "../../animations/animejs.js";
  let position = 'left';
  let timer;
  onMount(() => {
    timer = setInterval(() => {
      position = position === 'left' ? 'right' : 'left';
    }, 1000)
  });
  onDestroy(() => {
    if (timer) clearInterval(timer)
  });
</script>

<style>
  p {
    text-align: center;
  }
  div {
    margin-top: calc(50vh - 50px);
    margin-left: 100px;
    width: 100px;
    height: 100px;
    background-image: url("/vin_js2017.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100px 100px;
    border-radius: 20px;
  }
</style>
<div use:animejs={position}></div>
