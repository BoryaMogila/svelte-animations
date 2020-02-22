<script type="module">
  import { onMount, onDestroy } from 'svelte';
  import Svelte from './_components/Svelte.svelte';
  let visible = false;
  const order = Array(18).fill();
  let timer;
  onMount(() => {
    timer = setInterval(() => {
      visible = !visible;
    }, 3000)
  })
  onDestroy(() => {
    if (timer) clearInterval(timer)
  })
</script>
{#each order as item, delay}
  <Svelte {visible} {delay} />
{/each}
