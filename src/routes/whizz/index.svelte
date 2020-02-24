<script>
  import { onMount, onDestroy } from 'svelte';
  import { cubicOut } from 'svelte/easing';

  function whizz(node, { from, to }, params) {

    const dx = from.left - to.left;
    const dy = from.top - to.top;

    const d = Math.sqrt(dx * dx + dy * dy);

    return {
      delay: 0,
      duration: Math.sqrt(d) * 120,
      easing: cubicOut,
      css: (t, u) =>
              `transform: translate(${u * dx}px, ${u * dy}px) rotate(${t*360}deg);`
    };
  }
  let uid = 1;

  const initTodos = [
    { id: uid++, description: 'Прийти на Pub Tacks' },
    { id: uid++, description: 'Випи типивка' },
    { id: uid++,  description: 'Нормальнo потусити' },
    { id: uid++, description: 'Оримати скідос на JS Fest' },
    { id: uid++, description: 'Купити квиточок на VinnytsiaJS' }
  ];
  let todos = [];
  function remove(todo) {
    todos = todos.filter(t => t !== todo);
  }
  let timer;
  let counter = initTodos.length;
  const tick = () => {
    if (counter >= 0) {
      todos = [...initTodos.slice(counter, counter + 1), ...todos];
      counter--
    } else {
      todos.splice(0, 1);
      todos = [...todos];
      if (!todos.length) counter = initTodos.length;
    }
  };
  onMount(() => {
    tick();
    timer = setInterval(tick, 1500)
  });
  onDestroy(() => {
    if (timer) clearInterval(timer)
  })
</script>
<div class='board'>
  <div class='left'>
    <h2>План на сьогодні</h2>
    {#each todos as todo (todo.id)}
      <label
              animate:whizz
      >
        {todo.description}
        <button on:click="{() => remove(todo)}">remove</button>
      </label>
    {/each}
  </div>
</div>

<style>
  .board {
    overflow: hidden;
    display: grid;
    max-width: 36em;
    margin: 0 auto;
    height: calc(100vh - 32px);
  }

  h2 {
    text-align: center;
    font-size: 2em;
    font-weight: 200;
    user-select: none;
    margin: 0 0 0.5em 0;
  }

  label {
    display: block;
    position: relative;
    line-height: 1.2;
    padding: 0.5em 2.5em 0.5em 2em;
    margin: 0 0 0.5em 0;
    border-radius: 2px;
    user-select: none;
    border: 1px solid hsl(240, 8%, 70%);
    background-color:#007aa8;
  }

  button {
    position: absolute;
    top: 0;
    right: 0.2em;
    width: 2em;
    height: 100%;
    background: no-repeat 50% 50% url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23676778' d='M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z'%3E%3C/path%3E%3C/svg%3E");
    background-size: 1.4em 1.4em;
    border: none;
    opacity: 0;
    transition: opacity 0.2s;
    text-indent: -9999px;
    cursor: pointer;
  }

  label:hover button {
    opacity: 1;
  }
</style>
