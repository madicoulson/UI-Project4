<script>
    import Text from "./Text.svelte";
    import { createEventDispatcher } from 'svelte';


    export let options = [];
    export let placeholder = "Filters";
  
    let isOpen = false; 
    let selectedOption = null;
    const dispatch = createEventDispatcher(); 
  
    const toggleDropdown = () => {
      isOpen = !isOpen;
    };
  
    const selectOption = (option) => {
      selectedOption = option;
      isOpen = false;
      dispatch('select', selectedOption);
    };
</script>


<div class="dropdown">
    <div class="dropdown-button" on:click={toggleDropdown}>
      <Text type="small">{selectedOption ? selectedOption : placeholder}</Text>
      <span class="caret">{isOpen ? "▲" : "▼"}</span>
    </div>
    {#if isOpen}
      <div class="dropdown-menu">
        {#each options as option}
            <div on:click={() => selectOption(option)}>
                <Text type="small">{option}</Text>
            </div>
        {/each}
      </div>
    {/if}
</div>
  

<style>
    .dropdown {
      position: relative;
      width: 200px;
    }
  
    .dropdown-button {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background: white;
      cursor: pointer;
      text-align: left;
    }
  
    .dropdown-button:hover {
      background: #f0f0f0;
    }
  
    .dropdown-menu {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-top: 5px;
      z-index: 10;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
  
    .dropdown-menu div {
      padding: 10px;
      cursor: pointer;
    }
  
    .dropdown-menu div:hover {
      background: #f0f0f0;
    }
</style>
  