<script>
	import Nav from "./_components/Nav.svelte";

	export let segment;
</script>

<style>
	main {
	  padding-top: 2em;
	  margin: 0 auto;
	  box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>
