<script>
    import Text from '$lib/components/Text.svelte'
    import Header from '$lib/components/Header.svelte'
    import profile from '$lib/components/img/profile.svg'
    import Button from '$lib/components/Button.svelte';
</script>

<div class="box">
    <div class="first-row">
        <Header type='h1'>
            Get Out There!<br />
            <span class="italic">Cincinnati</span>
        </Header>         
        <Text>Events</Text>
        <Text>Connect</Text>
        <Text>Explore</Text>
        <Button shape="round">
            <img src={profile} alt="Profile SVG"/>
        </Button>
    </div>
</div>

<style>
    .box{
        background-color: #A98E92;
        padding: 20px;
    }
    .first-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    img {
        width: 50px;
        height: 50px;
    }
    .italic {
        font-style: italic;
    }
</style>