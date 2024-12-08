<script>
    import Text from '$lib/components/Text.svelte';
    import Header from '$lib/components/Header.svelte';
    import Button from '$lib/components/Button.svelte';
    import findlay from '$lib/components/img/findlay_market.jpeg'
    import Checkbox from '$lib/components/Checkbox.svelte';
    import Toast from '$lib/components/Toast.svelte';
    import {notifications} from '$lib/notifications'

    let currentAttending = $state(789);
    let currentInterest = $state(590);
    let isAttending = $state(false);
    let isInterested = $state(false);

    function handleAttendingChange() {
        if (!isAttending) {
            currentAttending = currentAttending + 1;
            isAttending = true;
            notifications.default('You are now marked as attending the event!', 2000);
            if (isInterested) {
                handleInterestedChange();
            }
        }
        else {
            currentAttending = currentAttending - 1;
            isAttending = false;
            notifications.default('You are unmarked from attending the event.', 2000);
        }
    }

    function handleInterestedChange() {
        if (!isInterested) {
            currentInterest = currentInterest + 1;
            isInterested = true;
            notifications.default('You are now marked as interested in the event!', 2000);
            if (isAttending) {
                handleAttendingChange();
            }
        }
        else {
            currentInterest = currentInterest - 1;
            isInterested = false;
            notifications.default('You are unmarked from from interest in the event!', 2000);
        }
    }
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
            <div class="extra-padding"><Text>{currentAttending} people are already attending, and {currentInterest} are interested!</Text></div>
            <div class="row extra-padding">
                <Checkbox label="I'm Attending" on:change={handleAttendingChange} checked={isAttending} />
                <Checkbox label="I'm Interested" on:change={handleInterestedChange} checked={isInterested}/>
                <Button><Text>Help Me Find a Group</Text></Button>
            </div>
            <Toast />
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
