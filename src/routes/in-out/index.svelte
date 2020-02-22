<script>
  import random from 'lodash/random';
  import { fly, fade } from 'svelte/transition';
  import { onMount, onDestroy } from 'svelte';
  let visible = false;
  let timer;
  let x = 0;
  let y = 0;
  onMount(() => {
    timer = setInterval(() => {
      x = random(-400,400);
      y = random(-125, 125);
      visible = !visible;
    }, 1000)
  });
  onDestroy(() => {
    if (timer) clearInterval(timer)
  })
</script>
<style>
  section {
    display: table;
    height: 450px;
    width:100%;
  }
  .middle {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    height: 100%;
  }

  .inner {
    background-image: url("/vin_js2019.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 200px 200px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: auto;
  }
</style>

<section class="">
  {#if visible}
    <div class="middle">
      <div class="inner"
           in:fly={{ x, y}}
           out:fade
      >
      </div>
    </div>
  {/if}
</section>
