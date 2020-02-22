<script>
  import { elasticOut } from 'svelte/easing';
  import { onMount, onDestroy } from 'svelte';

  let visible;

  function whoosh(node, params) {
    const existingTransform = getComputedStyle(node).transform.replace('none', '');

    return {
      delay: params.delay || 0,
      duration: params.duration || 400,
      easing: params.easing || elasticOut,
      css: (t, u) => `transform: ${existingTransform} scale(${t})`
    };
  }
  let timer;
  onMount(() => {
    timer = setInterval(() => {
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
    background-image: url("/vin_js2018.jpg");
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
           transition:whoosh="{{duration: 1000}}"
      >
      </div>
    </div>
  {/if}
</section>
