<script>
	export let type = 'default';
</script>

<span
	class="text"
	class:default={type === 'default'}
    class:bold={type === 'bold'}
	class:small={type === 'small'}
	class:smallbold={type === 'small-bold'}
>
	<slot></slot>
</span>

<style>
	.text {
		color: black;
		font-size: 24px;
		font-family: Tahoma;
	}

    .bold {
        font-weight: bold;
    }
	.small {
		font-size: 18px;
	}
	.smallbold {
		font-size: 18px;
		font-weight: bold;
	}
</style>