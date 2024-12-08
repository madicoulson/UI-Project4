<script>
    import Text from '$lib/components/Text.svelte';
    import Header from '$lib/components/Header.svelte';
    import Button from '$lib/components/Button.svelte';
    import zoo from '$lib/components/img/zoo_lights.jpg'
    import findlay from '$lib/components/img/findlay_market.jpeg';
    import cyclones from '$lib/components/img/cyclones.jpg'
    let ripples = [];

    const createRipple = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        const newRipple = {
            id: Date.now(),
            size,
            x,
            y
        };

        ripples = [...ripples, newRipple];

        // Remove ripple after animation
        setTimeout(() => {
            ripples = ripples.filter(r => r.id !== newRipple.id);
        }, 600); // Animation duration
    };
</script>

<div class="ripple-container" on:click={createRipple}>
    <img src={zoo} alt="Zoo Lights" />
    {#each ripples as ripple (ripple.id)}
        <span
            class="ripple"
            style="width: {ripple.size}px; height: {ripple.size}px; top: {ripple.y}px; left: {ripple.x}px;"
        ></span>
    {/each}
</div>

<style>
    .ripple-container {
        position: relative;
        display: inline-block;
        overflow: hidden;
    }

    .ripple-container img {
        display: block;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.3); /* Adjust color and opacity */
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
        transform: scale(0);
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
</style>
