<script>
	export let type = 'default';
	export let size = 'default';
</script>

<span
	class="text"
	class:default={type === 'default'}
    class:bold={size === 'large'}
>
	<slot></slot>
</span>

<style>
	.text {
		color: black;
		font-size: 16px;
	}

    .bold {
        font-weight: bold;
    }
</style>