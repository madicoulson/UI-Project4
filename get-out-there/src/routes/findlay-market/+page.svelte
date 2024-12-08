<script>
    import Text from '$lib/components/Text.svelte';
    import Header from '$lib/components/Header.svelte';
    import Button from '$lib/components/Button.svelte';
    import findlay from '$lib/components/img/findlay_market.jpeg'
</script>

<div class="background">
    <div class="box">
        <Header>Findlay Market in the Winter</Header>
        <Header>November 1, 2024 - February 28, 2025</Header>
    </div>

    <div class="info">
        <img src={findlay} alt="Findlay Market">
        <div class="text-info">
            <Text type="bold">Visit Findlay Market during the winter months to warm up and try authentic, warm food from 
                all different cusine types. The market is open Tuesday - Friday 9 AM - 6 PM, Saturdays 8 AM - 6 PM, and Sundays
                10 AM - 4 PM.
            </Text>
            <div class="extra-padding"><Text>789 people are already attending, and 590 are interested!</Text></div>
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
