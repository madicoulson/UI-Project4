<script>
    import Text from '$lib/components/Text.svelte';
    import Header from '$lib/components/Header.svelte';
    import Button from '$lib/components/Button.svelte';
</script>

<div class="box">
    <div class="header-text"><Header>
        Making Connection Simple
    </Header></div>
    <div class="text-padding">
        <div class="extra-padding">
            <Text> <span class="italic">Get Out There </span> is a platform designed for anyone looking to explore a city, whether it’s a familiar place or somewhere new. 
            It offers a space to discover local events, see how many people are attending, and join a group of others if you would like 
            to attend together.</Text>
        </div>

        <Text>The platform features Highlighted Events, along with other selection types and features. In the profile section, 
        users can add events they discover and contribute them to the website. Additionally, they can connect with other users in the Connect tab, explore pages of other cities 
        through the Explore tab, and join or create groups in the Groups tab. <span class="italic">Get Out There </span> is a fantastic way to connect with others—start by checking out 
        the local events below!</Text>
    </div>
</div>

<style>
    .italic {
        font-style:italic;
    }
    .box{
        padding: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #FAF9F6;
    }
    .text-padding {
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 100px;
        display: flex;
        flex-direction: column;
    }
    .extra-padding {
        padding-bottom: 20px;
    }
    .header-text {
        white-space: nowrap;
    }
</style>