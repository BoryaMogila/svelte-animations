<script type="module">
	import { goto } from '@sapper/app';
	import { onMount, onDestroy } from 'svelte';
	import { send, receive } from "../../animations/crossfade";
	let timer;
	onMount(() => {
		timer = setTimeout(() => {
			goto('page-transitions/last-events')
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
	}

	p {
		width: 60%;
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
	img {
	  width: 100%;
	  max-width: 100px;
	  vertical-align: baseline;
	}

	p {
	  font-size: 1.5em;
	  margin: 1em auto;
	}

	@media (min-width: 480px) {
	  h1 {
	    font-size: 4em;
	  }
	}
</style>
<svelte:head>
	<title>Про нас</title>
</svelte:head>
<main>
	<h1>
		<img out:send="{{key: 'borat'}}" in:receive="{{key: 'borat'}}" alt='I am' src='vin_js.svg'>
		<span out:send="{{key: 'title'}}" in:receive="{{key: 'title'}}">VinnytsiaJS 2020</span>
	</h1>

	<p out:send="{{key: 'text'}}" in:receive="{{key: 'text'}}">
		<strong>
			П'ята щорічна Javascript конференція, яка відбудеться у Open-Air форматі.
			Захід організовує <b>Vinnytsia JavaScript Community</b>.
			Цього літа зустріньте Конференцію, присвячену JavaScript розробці.
			Ми подбали про все, щоб забезпечити усім гостям конференції комфортну локацію,
			щоб ви просто відпочивали та насолоджувались спілкуванням.
		</strong>
	</p>
</main>
