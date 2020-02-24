<script>
  import { spring } from 'svelte/motion';
  import { pannable } from '../../animations/pannable.js';

  const coords = spring({ x: 0, y: 0 }, {
    stiffness: 0.2,
    damping: 0.4
  });

  function handlePanStart() {
    coords.stiffness = coords.damping = 1;
  }

  function handlePanMove(event) {
    coords.update($coords => ({
      x: $coords.x + event.detail.dx,
      y: $coords.y + event.detail.dy
    }));
  }

  function handlePanEnd(event) {
    coords.stiffness = 0.2;
    coords.damping = 0.4;
    coords.set({ x: 0, y: 0 });
  }
</script>

<style>
  .wrap {
    height: calc(100vh - 32px);
  }
  .box {
    background-image: url("/vin_js.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100px 100px;
    --width: 100px;
    --height: 100px;
    position: absolute;
    width: var(--width);
    height: var(--height);
    left: calc(50% - var(--width) / 2);
    top: calc(50% - var(--height) / 2);
    border-radius: 4px;
    background-color: #ff3e00;
    border-radius: 50%;
    cursor: move;
  }
</style>
<div class="wrap">
  <div class="box"
       use:pannable
       on:panstart={handlePanStart}
       on:panmove={handlePanMove}
       on:panend={handlePanEnd}
       style="transform:
          translate({$coords.x}px,{$coords.y}px)
          rotate({$coords.x * 0.2}deg)"
  ></div>
</div>
