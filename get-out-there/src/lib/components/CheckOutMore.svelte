<script>
    import Text from '$lib/components/Text.svelte';
    import Header from '$lib/components/Header.svelte';
    import Button from '$lib/components/Button.svelte';
    import zoo from '$lib/components/img/zoo_lights.jpg'
    import findlay from '$lib/components/img/findlay_market.jpeg';
    import cyclones from '$lib/components/img/cyclones.jpg';
    import winterfest from '$lib/components/img/kings_island.png';
    import bridge from '$lib/components/img/bridge.jpg';
    import Dropdown from './Dropdown.svelte';
    import bengals from '$lib/components/img/bengals.jpg'
    

    const items = ["Outdoor", "High Attendance", "All Events"];

    let selectedEvent = null;


    const handleSelect = (event) => {
        selectedEvent = event.detail;
    };

    function createRoute(route) {  
        window.location.href = route;
    }
</script>

<div class="box">
    <div class="first-row">
        <Header type="subheader">Check Out More Events</Header>
        <Dropdown options={items} on:select={handleSelect}></Dropdown>
    </div>
    
    {#if selectedEvent === "Outdoor"}
        <div class="row">
            <figure>
                <div class="middle">
                    <Button>
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
            <figure>
                <div class="middle">
                    <Button>
                        <Text type="small">Click Here to Learn More!</Text>
                    </Button>
                </div>
                <img src={winterfest} alt="WinterFest at Kings Island"/>
                <figcaption>
                    <Text type="small-bold">WinterFest at Kings Island</Text>
                    <Text type="small">November 29 - December 31</Text>
                    <Text type="small">508 people attending, 453 interested</Text>
                </figcaption>
            </figure>
            <figure>
                <div class="middle">
                    <Button>
                        <Text type="small">Click Here to Learn More!</Text>
                    </Button>
                </div>
                <img src={bridge} alt="Roebling Bridge"/>
                <figcaption>
                    <Text type="small-bold">Check Out the Roebling Bridge</Text>
                    <Text type="small">All Year</Text>
                    <Text type="small">203 people attending, 108 interested</Text>
                </figcaption>
            </figure>
        </div>
    {/if}

    {#if selectedEvent === "High Attendance"}
        <div class="row">
            <figure>
                <div class="middle">
                    <Button on:click={()=>createRoute('/bengals')}>
                        <Text type="small">Click Here to Learn More!</Text>
                    </Button>
                </div>
                <img src={bengals} alt="Bengals"/>
                <figcaption>
                    <Text type="small-bold">Bengals vs Browns Football Game</Text>
                    <Text type="small">December 22 at 1 PM</Text>
                    <Text type="small">854 people attending, 245 interested</Text>
                </figcaption>
            </figure>
            <figure>
                <div class="middle">
                    <Button>
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
            <figure>
                <div class="middle">
                    <Button>
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
        </div>
    {/if}


    {#if selectedEvent === "All Events"}
        <div class="row">
            <figure>
                <div class="middle">
                    <Button>
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
            <figure>
                <div class="middle">
                    <Button>
                        <Text type="small">Click Here to Learn More!</Text>
                    </Button>
                </div>
                <img src={winterfest} alt="WinterFest at Kings Island"/>
                <figcaption>
                    <Text type="small-bold">WinterFest at Kings Island</Text>
                    <Text type="small">November 29 - December 31</Text>
                    <Text type="small">508 people attending, 453 interested</Text>
                </figcaption>
            </figure>
            <figure>
                <div class="middle">
                    <Button>
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
        </div>
        <div class="row">
            <figure>
                <div class="middle">
                    <Button>
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
            <figure>
                <div class="middle">
                    <Button>
                        <Text type="small">Click Here to Learn More!</Text>
                    </Button>
                </div>
                <img src={bridge} alt="Roebling Bridge"/>
                <figcaption>
                    <Text type="small-bold">Walk the Roebling Bridge</Text>
                    <Text type="small">All Year</Text>
                    <Text type="small">203 people attending, 108 interested</Text>
                </figcaption>
            </figure>
            <figure>
                <div class="middle">
                    <Button>
                        <Text type="small">Click Here to Learn More!</Text>
                    </Button>
                </div>
                <img src={bengals} alt="Bengals"/>
                <figcaption>
                    <Text type="small-bold">Bengals vs Browns Football Game</Text>
                    <Text type="small">December 22 at 1 PM</Text>
                    <Text type="small">854 people attending, 245 interested</Text>
                </figcaption>
            </figure>
        </div>
    {/if}
</div>

<style>
    .box{
        background-color: #FAF9F6;
        padding: 20px;
        display:flex;
        flex-direction: column;
        height: 100vh;
    }
    .first-row {
        display: flex;
        flex-direction: row;
        gap:20px;
        align-items: center;
    }
    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
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
    figure:hover {
        transform: scale(1.05);
        filter: brightness(1.2);
        cursor: pointer;
        opacity: 0.7;
    }
    .middle {
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
    }

    figure:hover .middle {
        opacity: 1;
    }
</style>