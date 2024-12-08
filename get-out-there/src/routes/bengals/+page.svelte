<script>
    import Text from '$lib/components/Text.svelte';
    import Header from '$lib/components/Header.svelte';
    import Button from '$lib/components/Button.svelte';
    import bengals from '$lib/components/img/bengals.jpg'
</script>

<div class="box">
    <Header>Bengals vs Browns Football Game</Header>
    <Header>December 22 at 1 PM</Header>
</div>

<div class="info">
    <img src={bengals} alt="Bengals">
</div>


<style>
    .box{
        background-color: #A98E92;
        padding: 20px;
        justify-content: space-between;
        display: flex;
        flex-direction: row;
    }
    .info {
        background-color: #FAF9F6;
        padding: 20px;
        display:flex;
        flex-direction: row;
        height: 100vh;

    }

    img {
        width: 800px;
        height: 500px;
    }
</style>
