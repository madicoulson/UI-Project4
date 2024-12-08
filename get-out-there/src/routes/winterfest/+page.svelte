<script>
    import Text from '$lib/components/Text.svelte';
    import Header from '$lib/components/Header.svelte';
    import Button from '$lib/components/Button.svelte';
    import winterfest from '$lib/components/img/kings_island.png'
</script>

<div class="background">
    <div class="box">
        <Header>Kings Island Winterfest</Header>
        <Header>November 29 - December 31</Header>
    </div>

    <div class="info">
        <img src={winterfest} alt="Zoo Lights">
        <div class="text-info">
            <Text type="bold">Visit Kings Island's Winterfest celebrations to see festive live music, parades, lots of lights, and much more!
            Festivities begin at 4 or 5 PM depending on the day, with the parade starting at 8:30 PM nightly.
            </Text>
            <div class="extra-padding"><Text>508 people are already attending, and 453 are interested!</Text></div>
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
