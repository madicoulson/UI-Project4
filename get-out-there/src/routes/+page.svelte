<script>
    import HeaderCard from "$lib/components/HeaderCard.svelte";
    import HighlightedEvents from "$lib/components/HighlightedEvents.svelte";
    import ImageBox from "$lib/components/ImageBox.svelte";
    import profile from '$lib/components/img/profile.svg';
    import CheckOutMore from "$lib/components/CheckOutMore.svelte";
    import About from "$lib/components/About.svelte";
</script>

<div class="component">
    <HeaderCard></HeaderCard>
    <About></About>
    <hr class="solid">
    <HighlightedEvents></HighlightedEvents>
    <hr class="solid">
    <CheckOutMore></CheckOutMore>
</div>

<style>
    hr.solid {
        border-top: 3px solid #A98E92;
    }
    .component {
        background-color: #FAF9F6;
    }
</style>
