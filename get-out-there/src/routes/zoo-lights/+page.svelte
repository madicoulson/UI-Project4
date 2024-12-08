<script>
    import Text from '$lib/components/Text.svelte';
    import Header from '$lib/components/Header.svelte';
    import Button from '$lib/components/Button.svelte';
    import zoo from '$lib/components/img/zoo_lights.jpg'
</script>

<div class="background">
    <div class="box">
        <Header>Cincinnati Zoo Lights</Header>
        <Header>November 24, 2024 - January 5, 2025</Header>
    </div>

    <div class="info">
        <img src={zoo} alt="Zoo Lights">
        <div class="text-info">
            <Text type="bold">Visit the Cincinnati Zoo to see the animals and lights this holiday season. Tickets are available
                from November 24, 2024 to January 5, 2025. The zoo is open until 9 PM Sunday - Thursday, and 10 PM Friday and Saturday.
            </Text>
            <div class="extra-padding"><Text>804 people are already attending, and 367 are interested!</Text></div>
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
        border-radius: 8px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }
</style>
