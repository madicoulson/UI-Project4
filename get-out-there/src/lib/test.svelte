<script>
    import { onMount } from 'svelte';
    import Text from '$lib/components/Text.svelte';
    import Button from '$lib/components/Button.svelte';
    import zoo from '$lib/components/img/zoo_lights.jpg';
    import winterfest from '$lib/components/img/kings_island.png';
    import findlay from '$lib/components/img/findlay_market.jpeg';
    import cyclones from '$lib/components/img/cyclones.jpg';
    import bridge from '$lib/components/img/bridge.jpg';
    import bengals from '$lib/components/img/bengals.jpg';

    let currentSlide = 0;

    const events = [
        {
            img: zoo,
            alt: "Zoo Lights",
            title: "Cincinnati Zoo Lights",
            dates: "November 24, 2024 - January 5, 2025",
            stats: "804 people attending, 367 interested"
        },
        {
            img: winterfest,
            alt: "WinterFest at Kings Island",
            title: "WinterFest at Kings Island",
            dates: "November 29 - December 31",
            stats: "508 people attending, 453 interested"
        },
        {
            img: findlay,
            alt: "Findlay Market",
            title: "Findlay Market in the Winter",
            dates: "November 1, 2024 - February 28, 2025",
            stats: "789 people attending, 590 interested"
        },
        {
            img: cyclones,
            alt: "Cincinnati Cyclones",
            title: "Cincinnati Cyclones Hockey Game",
            dates: "October 19, 2024 - April 12, 2025",
            stats: "609 people attending, 340 interested"
        },
        {
            img: bridge,
            alt: "Roebling Bridge",
            title: "Walk the Roebling Bridge",
            dates: "All Year",
            stats: "203 people attending, 108 interested"
        },
        {
            img: bengals,
            alt: "Bengals",
            title: "Bengals vs Browns Football Game",
            dates: "December 22 at 1 PM",
            stats: "854 people attending, 245 interested"
        }
    ];

    const numSlides = Math.ceil(events.length / 3);

    function nextSlide() {
        currentSlide = (currentSlide + 1) % numSlides;
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + numSlides) % numSlides;
    }
</script>

<div class="carousel">
    <button class="nav-button left" on:click={prevSlide}>❮</button>
    <div class="carousel-track">
        {#each Array(numSlides) as _, slideIndex}
            <div class="slide {slideIndex === currentSlide ? 'active' : ''}">
                {#each events.slice(slideIndex * 3, slideIndex * 3 + 3) as event}
                    <figure>
                        <div class="middle">
                            <Button>
                                <Text type="small">Click Here to Learn More!</Text>
                            </Button>
                        </div>
                        <img src={event.img} alt={event.alt} />
                        <figcaption>
                            <Text type="small-bold">{event.title}</Text>
                            <Text type="small">{event.dates}</Text>
                            <Text type="small">{event.stats}</Text>
                        </figcaption>
                    </figure>
                {/each}
            </div>
        {/each}
    </div>
    <button class="nav-button right" on:click={nextSlide}>❯</button>
</div>

<style>
    .carousel {
        position: relative;
        width: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .carousel-track {
        display: flex;
        transition: transform 0.5s ease;
        width: 100%;
    }

    .slide {
        display: none;
        flex: 1 0 100%;
        justify-content: space-around;
        align-items: center;
    }

    .slide.active {
        display: flex;
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

    img {
        width: 450px;
        height: 300px;
        padding-top: 20px;
    }

    .middle {
        margin-bottom: 10px;
    }

    figcaption {
        margin-top: 10px;
    }

    .nav-button {
        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        padding: 0 10px;
        color: #333;
    }

    .nav-button:hover {
        color: #000;
    }

    .nav-button.left {
        position: absolute;
        left: 10px;
    }

    .nav-button.right {
        position: absolute;
        right: 10px;
    }
</style>
