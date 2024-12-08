<script>
    import { flip } from "svelte/animate";
    import { fly } from "svelte/transition";
    import {notifications} from "$lib/notifications"
    import Text from "./Text.svelte";

</script>

<div class="notifications">
    {#each $notifications as notification (notification.id)}
        <div
            animate:flip
            class="toast"
            style="background: #CB998D;"
            transition:fly={{ y: 30 }}
        >
            <div class="content">
                <Text>{notification.message}</Text>
            </div>
            {#if notification.icon}<i class={notification.icon} />{/if}
        </div>
    {/each}
</div>

<style>
    .notifications {
        position: fixed;
        bottom: 10px;
        left: 0;
        right: 0;
        margin: 0 auto;
        padding: 0;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        pointer-events: none;
        border-radius: 4px;
        padding: 12px 24px;
    }

    .toast {
        flex: 0 0 auto;
        margin-bottom: 10px;
    }

    .content {
        padding: 10px;
        display: block;
        color: white;
        font-weight: 500;
    }
</style>
