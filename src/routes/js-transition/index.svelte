<script>
  import { onMount, onDestroy } from 'svelte';
  let visible = false;

  function typewriter(node, { speed = 50 }) {
    const valid = (
      node.childNodes.length === 1 &&
      node.childNodes[0].nodeType === 3
    );

    if (!valid) {
      throw new Error(`This transition only works on elements with a single text node child`);
    }

    const text = node.textContent;
    const duration = text.length * speed;

    return {
      duration,
      tick: t => {
        const i = ~~(text.length * t);
        node.textContent = text.slice(0, i);
      }
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
  p {
    font-size: 80px;
    width: 100vw;
    text-align: center;
    display: table-cell;
    height: 450px;
    vertical-align: middle;
  }
</style>
<div>
  {#if visible}
    <p transition:typewriter>
      JS forever!!!
    </p>
  {/if}

</div>
