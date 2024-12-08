<script>
  import { createEventDispatcher } from "svelte";

  let ripples = [];
  export let shape = "rectangular";

  const dispatch = createEventDispatcher();

  const createRipple = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    const ripple = { x, y, size, id: Date.now() };
    ripples = [...ripples, ripple];

    setTimeout(() => {
      ripples = ripples.filter((r) => r.id !== ripple.id);
    }, 600);

    dispatch("click", event);
  };
</script>

<button
  class="button {shape === 'round' ? 'round' : 'rectangular'}"
  on:click={createRipple}
>
  <slot />
  {#each ripples as { x, y, size, id }}
    <span
      class="ripple"
      style="top: {y}px; left: {x}px; width: {size}px; height: {size}px;"
    ></span>
  {/each}
</button>

<style>
  .button {
    position: relative;
    overflow: hidden;
    background-color: #CB998D;
    border-width: thin;
    border-color: antiquewhite;
    border-style: solid;
    font-size: 16px;
  }

  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
  }

  .rectangular {
    padding: 12px 24px;
    border-radius: 4px;
  }

  .round {
    padding: 4px;
    border-radius: 50%;
  }

  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
</style>
