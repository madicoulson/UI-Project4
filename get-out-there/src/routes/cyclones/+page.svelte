<script>
    import Text from '$lib/components/Text.svelte';
    import Header from '$lib/components/Header.svelte';
    import Button from '$lib/components/Button.svelte';
    import cyclones from '$lib/components/img/cyclones.jpg'
</script>

<div class="background">
    <div class="box">
        <Header>Cincinnati Cyclones Game</Header>
        <Header>October 19, 2024 - April 12, 2025</Header>
    </div>

    <div class="info">
        <img src={cyclones} alt="Findlay Market">
        <div class="text-info">
            <Text type="bold">Check out a Cincinnati Cyclones game at Heritage Bank Center in downtown Cincinnati. They play
                on various nights throughout the week and season.
            </Text>
            <div class="extra-padding"><Text>609 people are already attending, and 340 are interested!</Text></div>
            <div class="row extra-padding">
                <Button><Text>I'm Attending</Text></Button>
                <Button><Text>I'm Interested</Text></Button>
                <Button><Text>Help Me Find a Group</Text></Button>
            </div>
        </div>
    </div>
</div>


<style>
    .box{
        background-color: #A98E92;
        padding: 20px;
        justify-content: space-between;
        display: flex;
        flex-direction: row;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        margin-bottom: 20px;
        border-radius: 10px;
    }
    .background {
        height: 100vh;
        background-color: #FAF9F6;
    }
    .info {
        background-color: #FAF9F6;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 60px;
        display:flex;
        flex-direction: row;
    }
    .text-info {
        padding-left: 60px;
        display:flex;
        flex-direction: column;
        justify-content: center;
    }

    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .extra-padding {
        padding-top: 20px;
    }

    img {
        width: 800px;
        height: 500px;
    }
</style>
