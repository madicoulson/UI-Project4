<script>
    import Text from '$lib/components/Text.svelte';
    import Header from '$lib/components/Header.svelte';
    import Button from '$lib/components/Button.svelte';
    import zoo from '$lib/components/img/zoo_lights.jpg'
    import findlay from '$lib/components/img/findlay_market.jpeg';
    import cyclones from '$lib/components/img/cyclones.jpg'

    let isRectangleDisplayed = false;
    
    function toggleZooLightInfo(){
        if (isRectangleDisplayed){
            isRectangleDisplayed = false;
        }
        else {
            isRectangleDisplayed = true;
        }
    }

    function toggleFindlayMarketInfo(){
        if (isRectangleDisplayed){
            isRectangleDisplayed = false;
        }
        else {
            isRectangleDisplayed = true;
        }
    }

    function toggleCyclonesInfo(){
        if (isRectangleDisplayed){
            isRectangleDisplayed = false;
        }
        else {
            isRectangleDisplayed = true;
        }
    }

    function createRoute(route) {  
        window.location.href = route;
    }
</script>

<div class="box">
    <Header type="subheader">Highlighted Events</Header>
    <div class="row">
        <figure on:mouseenter={toggleZooLightInfo} on:mouseleave={toggleZooLightInfo}>
            <div class="middle">
                <Button on:click={()=>createRoute('/zoo-lights')}>
                    <Text type="small">Click Here to Learn More!</Text>
                </Button>
            </div>
            <img src={zoo} alt="Zoo Lights"/>
            <figcaption>
                <Text type="small-bold">Cincinnati Zoo Lights</Text>
                <Text type="small">November 24, 2024 - January 5, 2025</Text>
                <Text type="small">804 people attending, 367 interested</Text>
            </figcaption>
        </figure>
        <figure on:mouseenter={toggleFindlayMarketInfo} on:mouseleave={toggleFindlayMarketInfo}>
            <div class="middle">
                <Button on:click={()=>createRoute('/findlay-market')}>
                    <Text type="small">Click Here to Learn More!</Text>
                </Button>
            </div>
            <img src={findlay} alt="Findlay Market"/>
            <figcaption>
                <Text type="small-bold">Findlay Market in the Winter</Text>
                <Text type="small">November 1, 2024 - February 28, 2025</Text>
                <Text type="small">789 people attending, 590 interested</Text>
            </figcaption>
        </figure>
        <figure on:mouseenter={toggleCyclonesInfo} on:mouseleave={toggleCyclonesInfo}>
            <div class="middle">
                <Button on:click={()=>createRoute('/cyclones')}>
                    <Text type="small">Click Here to Learn More!</Text>
                </Button>
            </div>
            <img src={cyclones} alt="Cincinnati Cyclones"/>
            <figcaption>
                <Text type="small-bold">Cincinnati Cyclones Hockey Game</Text>
                <Text type="small">October 19, 2024 - April 12, 2025</Text>
                <Text type="small">609 people attending, 340 interested</Text>
            </figcaption>
        </figure>  
    </div>
</div>

<style>
    .box{
        background-color: #FAF9F6;
        padding: 20px;
        display:flex;
        flex-direction: column;
    }
    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    img {
        width: 450px;
        height: 300px;
        padding-top: 20px;
    }

    figcaption {
        background-color: #A98E92;
        color: black;
        padding: 2px;
        text-align: center;
        display:flex;
        flex-direction: column;
    }

    figure {
        position: relative;
    }

    figure:hover {
        transform: scale(1.05);
        filter: brightness(1.2);
        cursor: pointer;
        z-index: 1;
        position: relative
    }

    figure::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        background: rgba(250, 249, 245, 0.7);
        transition: opacity 0.3s ease;
        z-index: 1;
    }

    figure:hover::after {
        opacity: 1; 
    }

    .middle {
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        z-index: 2;
        transition: opacity 0.3s ease;
    }

    figure:hover .middle {
        opacity: 1;
    }
</style>