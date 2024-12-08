<script>
    import Text from '$lib/components/Text.svelte';
    import Header from '$lib/components/Header.svelte';
    import Button from '$lib/components/Button.svelte';
</script>

<div class="box">
    <Header type='subheader'>
        About
        <span class="italic">Get Out There!</span>
    </Header>
    <div class="text-padding">
    <Text> Get Out There is a platform designed for anyone looking to explore their city, whether it’s a familiar place or somewhere new. 
    It offers a space to discover local events, see how many people are attending, and join a group of others if you’d like 
    to attend together.</Text>
    </div>

    <Text>The platform features Highlighted Events, along with various other selection types and features. In the profile section, 
    users can add events they discover and contribute them to the website, connect with other users, explore pages of other cities 
    through the Explore tab, and join or create groups. Get Out There is a fantastic way to connect with others—start by checking out 
    the local events below!</Text>
</div>

<style>
    .italic {
        font-style:oblique;
    }
    .box{
        padding: 20px;
        display: flex;
        flex-direction: column;
    }
    .text-padding {
        padding-top: 20px;
        padding-bottom: 20px;
    }
</style>