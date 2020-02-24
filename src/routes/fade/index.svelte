<script>
  import { onMount, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';
  import { fade } from 'svelte/transition';
  import word from './word';
  let visible = true;
  let timer;

  onMount(() => {
    timer = setInterval(() => {
      $word = $word === 'З\'являюсь)' ? 'Зникаю(' : 'З\'являюсь)';
      setTimeout(() => {
        visible = !visible;
      }, 0)
    }, 1300)
  });
  onDestroy(() => {
    if (timer) clearInterval(timer)
  })
</script>
<style>
  h1 {
    width: 100vw;
    text-align: center;
    display: table-cell;
    height: calc(100vh - 32px);
    vertical-align: middle;
  }
</style>
{#if visible}
  <h1
    transition:fade="{{duration: 1000}}"
  >
      {$word}
  </h1>
{/if}
