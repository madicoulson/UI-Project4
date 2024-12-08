<script>
    export let type = 'h1';
</script>

<span
    class="header"
    class:h1={type === 'h1'}
	class:h2={type === 'h2'}
	class:subheader={type === 'subheader'}
>
    <slot></slot>
</span>

<style>
    .header {
		margin: 0;
		color: black;
		font-weight: bold;
        font-family: 'inter', sans-serif;
	}

	.h1 {
		font-size: 240%;
	}

	.h2 {
		font-size: 200%;
        font-style: italic;
	}

	.subheader {
		font-size: 32px;
	}
</style>