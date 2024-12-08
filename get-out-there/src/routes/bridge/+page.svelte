<script>
    import Text from '$lib/components/Text.svelte';
    import Header from '$lib/components/Header.svelte';
    import Button from '$lib/components/Button.svelte';
    import bridge from '$lib/components/img/bridge.jpg'
</script>

<div class="background">
    <div class="box">
        <Header>Walk the Roebling Bridge</Header>
        <Header>All Year</Header>
    </div>

    <div class="info">
        <img src={bridge} alt="Roebling Bridge">
        <div class="text-info">
            <Text type="bold">Walk across Cincinnati's historic Roebling Bridge across the Ohio River. This bridge
                connects downtown Cincinnati to Covington, Kentucky. It is open year round.
            </Text>
            <div class="extra-padding"><Text>203 people are already attending, and 108 are interested!</Text></div>
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
