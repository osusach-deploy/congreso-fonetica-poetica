<script>
    import { createEventDispatcher } from 'svelte';

    export let placeholder;

    const dispatch = createEventDispatcher();
    let inputs = [{ id: Date.now(), value: '' }];

    function addInput() {
        inputs = [...inputs, { id: Date.now(), value: '' }];
        dispatchUpdate();
    }

    function removeInput(id) {
        inputs = inputs.filter(input => input.id !== id);
        dispatchUpdate();
    }

    function dispatchUpdate() {
        dispatch('update', { inputs });
    }
</script>

<div class="flex flex-col w-full gap-2 mb-4">
    {#each inputs as input, index (input.id)}
        <div class="flex flex-row w-full gap-3">
            <input 
                type="text" 
                required 
                placeholder={placeholder} 
                bind:value={input.value} 
                on:input={dispatchUpdate}
                class="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />   
            {#if index !== 0}
                <button
                on:click={() => removeInput(input.id)}
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 24 24"><path fill="black" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"/></svg>
                </button>
            {:else}
                <button 
                on:click={addInput}
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 24 24"><path fill="green" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z"/></svg>
                </button>
            {/if}
        </div>
    {/each}
</div>
