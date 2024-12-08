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
        <Text type="selected-text">Events</Text>
        <Text type="hover-text">Connect</Text>
        <Text type="hover-text">Explore</Text>
        <Text type="hover-text">Groups</Text>
        <Button shape="round">
            <img src={profile} alt="Profile SVG"/>
        </Button>
    </div>
</div>

<style>
    .box{
        background-color: #A98E92;
        padding: 20px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
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