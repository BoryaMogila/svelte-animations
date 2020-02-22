<script type="module">
	import { goto } from '@sapper/app';
	import { onMount, onDestroy } from 'svelte';
	import { send, receive } from "../../animations/crossfade";
	let timer;
	onMount(() => {
		timer = setTimeout(() => {
			goto('page-transitions')
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
	div {
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

	div {
		margin: 1em auto;
	}
	a {
		display: block;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>
<svelte:head>
	<title>Попередні події</title>
</svelte:head>
<main>
	<figure>
		<img out:send="{{key: 'borat'}}" in:receive="{{key: 'borat'}}" alt='I am' src='/vin_js.svg'>
	</figure>
	<h1>
		<span out:send="{{key: 'title'}}" in:receive="{{key: 'title'}}">Попередні події</span>
	</h1>
	<div out:send="{{key: 'text'}}" in:receive="{{key: 'text'}}">
		<a target="_blank" href="https://youtube.com/watch?v=SyzaB-nJ8fk">
			VinnytsiaJS 2016 - https://youtube .com/watch?v=SyzaB-nJ8fk
		</a>
		<a target="_blank" href="https://youtube.com/watch?v=Oy_J0ko__ns">
			VinnytsiaJS 2017 - https://youtube.com/watch?v=Oy_J0ko__ns
		</a>
		<a target="_blank" href="https://youtube.com/watch?v=2bAmvd337CM">
			VinnytsiaJS 2018 - https://youtube.com/watch?v=2bAmvd337CM
		</a>
		<a target="_blank" href="https://youtube.com/watch?v=M3m25mdBBYM">
			VinnytsiaJS 2019 - https://youtube.com/watch?v=M3m25mdBBYM
		</a>
	</div>

</main>
