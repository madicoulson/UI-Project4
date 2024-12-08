<script>
	export let type = 'default';
</script>

<span
	class="text"
	class:default={type === 'default'}
    class:bold={type === 'bold'}
	class:small={type === 'small'}
	class:smallbold={type === 'small-bold'}
	class:hover-text={type ==='hover-text'}
	class:selected-text={type === 'selected-text'}
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
	.small {
		font-size: 18px;
	}
	.smallbold {
		font-size: 18px;
		font-weight: bold;
	}
	.hover-text {
        transition: transform 0.2s ease, color 0.2s ease;
    }
    .hover-text:hover {
        transform: scale(1.2);
        color: rgba(255, 255, 255, 0.6);
    }
	.selected-text {
		transform: scale(1.2);
        color: rgba(255, 255, 255, 0.6);
		font-weight: bold;
	}

</style>