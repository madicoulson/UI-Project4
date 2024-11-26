<script>
	export let type = 'default';
</script>

<span
	class="text"
	class:default={type === 'default'}
    class:bold={type === 'bold'}
>
	<slot></slot>
</span>

<style>
	.text {
		color: black;
		font-size: 24px;
		font-family: 'inter', sans-serif;
	}

    .bold {
        font-weight: bold;
    }
</style>