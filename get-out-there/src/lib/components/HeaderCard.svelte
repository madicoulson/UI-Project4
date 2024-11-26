<script>
    import Text from '$lib/components/Text.svelte'
    import Header from '$lib/components/Header.svelte'
</script>

<div class="box">
    <div class="first-row">
        <Header>Get Out There</Header>
        <Text>Events</Text>
        <Text>Connect</Text>
        <Text>Explore</Text>
    </div>
</div>

<style>
    .box{
        background-color: #A98E92;
        padding: 10px;
    }
    .first-row {
        display: flex;
        padding: 10px;
        align-items: center;
        justify-content: space-between;
    }
</style>