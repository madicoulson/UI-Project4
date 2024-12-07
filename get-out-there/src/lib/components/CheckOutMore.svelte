<script>
    import Text from '$lib/components/Text.svelte';
    import Header from '$lib/components/Header.svelte';
    import Button from '$lib/components/Button.svelte';
    import zoo from '$lib/components/img/zoo_lights.jpg'
    import findlay from '$lib/components/img/findlay_market.jpeg';
    import cyclones from '$lib/components/img/cyclones.jpg'
    import Dropdown from './Dropdown.svelte';

    const items = ["Outdoor", "High Attendance", "All Events"];
</script>

<div class="box">
    <div class="row">
        <Header type="subheader">Check Out More</Header>
        <Dropdown options={items}></Dropdown>
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
        gap:20px;
        align-items: center;
    }
</style>