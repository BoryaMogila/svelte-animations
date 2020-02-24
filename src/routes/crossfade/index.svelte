<script>
  import { onMount, onDestroy } from 'svelte';
  import random from 'lodash/random';
  import { crossfade, scale } from 'svelte/transition';
  import images from './images.js';

  const [send, receive] = crossfade({
    duration: 400,
    fallback: scale
  });

  let selected = null;
  let loading = null;

  const ASSETS = `/afterparty-gallery`;

  const load = image => {
    const timeout = setTimeout(() => loading = image, 100);

    const img = new Image();

    img.onload = () => {
      selected = image;
      clearTimeout(timeout);
      loading = null;
    };

    img.src = `${ASSETS}/${image.id}.jpg`;
  };
  let timer;
  onMount(() => {
    timer = setInterval(() => {
      if(selected) {
        selected = null;
        return;
      }
      let id = random(0, images.length - 1);
      load(images[id]);
    }, 1500)
  });
  onDestroy(() => {
    if (timer) clearInterval(timer)
  });
</script>

<div class="container">
  <div class="phone">
    <div class="grid">
        {#each images as image}
          <div class="square">
              {#if selected !== image}
                <button
                  style="background-color: {image.color};"
                  on:click="{() => load(image)}"
                  in:receive={{key:image.id}}
                  out:send={{key:image.id}}
                >{loading === image ? '...' : image.id}</button>
              {/if}
          </div>
        {/each}
    </div>

      {#if selected}
          {#await selected then d}
            <div class="photo" in:receive={{key:d.id}} out:send={{key:d.id}}>
              <img
                alt={d.alt}
                src="{ASSETS}/{d.id}.jpg"
                on:click="{() => selected = null}"
              >
            </div>
          {/await}
      {/if}
  </div>
</div>

<style>
  .container {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: calc(100vh - 32px);
    top: 0;
    left: 0;
  }

  .phone {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 82vmin;
    height: 76vmin;
    border: 2vmin solid #ccc;
    padding: 3vmin;
    border-radius: 2vmin;
  }

  h1 {
    font-weight: 300;
    text-transform: uppercase;
    font-size: 5vmin;
    margin: 0.2em 0 0.5em 0;
  }

  .grid {
    display: grid;
    flex: 1;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 2vmin;
  }

  button {
    width: 100%;
    height: 100%;
    color: white;
    font-size: 5vmin;
    border: none;
    margin: 0;
    will-change: transform;
  }

  .photo, img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .photo {
    display: flex;
    align-items: stretch;
    justify-content: flex-end;
    flex-direction: column;
    will-change: transform;
  }

  img {
    object-fit: cover;
    cursor: pointer;
  }

  .credit a, .credit a:visited {
    color: white;
  }
</style>
