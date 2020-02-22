<script type="module">
	import { goto } from '@sapper/app';
	import { onMount, onDestroy } from 'svelte';
	import { send, receive } from "../../animations/crossfade";
	let timer;
	onMount(() => {
		timer = setTimeout(() => {
			goto('page-transitions/about')
		}, 4000)
	});
	onDestroy(() => {
		if (timer) clearTimeout(timer)
	})
</script>

<style>
	main {
		overflow: hidden;
	}
	h1,
	figure,
	p {
	  text-align: center;
	  margin: 0 auto;
	  font-size: 2em;
	}

	h1 {
	  font-size: 2.8em;
	  text-transform: uppercase;
	  font-weight: 700;
	  margin: 0 0 0.5em 0;
	}

	h1 span {
	  position: relative;
	  display: inline-block;
	}

	figure {
	  margin: 0 0 1em 0;
	}

	img {
	  width: 100%;
	  max-width: 200px;
	}

	p {
	  margin: 1em auto;
	}

	@media (min-width: 480px) {
	  h1 {
	    font-size: 4em;
	  }
	}
</style>
<svelte:head>
	<title>VinnytsiaJS 2020</title>
</svelte:head>
<main>
<h1>
  <span out:send="{{key: 'title'}}" in:receive="{{key: 'title'}}">VinnytsiaJS 2020</span>
</h1>

<figure>
	<img out:send="{{key: 'borat'}}" in:receive="{{key: 'borat'}}" alt='I am' src='/vin_js.svg'>
</figure>

<p out:send="{{key: 'text'}}" in:receive="{{key: 'text'}}">
  Ми Vinnytsia JavaScript Community!
</p>

</main>
