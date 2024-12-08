<script>
    import Text from '$lib/components/Text.svelte';
    import Header from '$lib/components/Header.svelte';
    import Button from '$lib/components/Button.svelte';
    import zoo from '$lib/components/img/zoo_lights.jpg'
    import findlay from '$lib/components/img/findlay_market.jpeg';
    import cyclones from '$lib/components/img/cyclones.jpg'
</script>

<div class="box">
    <Header type="subheader">Highlighted Events</Header>
    <div class="row">
        <figure>
            <img src={zoo} alt="Zoo Lights"/>
            <figcaption>
                <Text type="small-bold">Cincinnati Zoo Lights</Text>
                <Text type="small">November 24, 2024 - January 5, 2025</Text>
                <Text type="small">804 people attending, 367 interested</Text>
            </figcaption>
        </figure>
        <figure>
            <img src={findlay} alt="Findlay Market"/>
            <figcaption>
                <Text type="small-bold">Findlay Market in the Winter</Text>
                <Text type="small">November 1, 2024 - February 28, 2025</Text>
                <Text type="small">789 people attending, 590 interested</Text>
            </figcaption>
        </figure>
        <figure>
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
    }
</style>