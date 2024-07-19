<script>
  import { createEventDispatcher } from "svelte";

  export let placeholder;
  export let label;
  export let title;
  export let maxInputs = 20;

  const dispatch = createEventDispatcher();
  let inputs = [{ id: Date.now(), value: "" }];

  function addInput() {
    inputs = [...inputs, { id: Date.now(), value: "" }];
    dispatchUpdate();
  }

  function removeInput(id) {
    inputs = inputs.filter((input) => input.id !== id);
    dispatchUpdate();
  }

  function dispatchUpdate() {
    dispatch("update", { inputs });
  }
</script>

<p class=" text-base pl-1 mb-1 font-light">{title}</p>
<div class="flex flex-col w-full gap-2 mb-4">
  {#each inputs as input, index (input.id)}
    <div class="flex flex-row w-full gap-3 items-center">
      <input
        required={index == 0 ? true : false}
        id={label + index}
        aria-label={label}
        type="text"
        {placeholder}
        bind:value={input.value}
        on:input={dispatchUpdate}
        class="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      {#if index !== 0}
        <button
          for={label + index}
          aria-label={"remove a " + label + " field"}
          on:click={() => removeInput(input.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26px"
            height="26px"
            viewBox="0 0 24 24"
            ><path
              fill="black"
              d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z" /></svg>
        </button>
      {:else}
        {#if inputs.length < maxInputs}
          <button
            type="button"
            for={label + index}
            aria-label={"add a " + label + " field"}
            on:click={addInput}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26px"
              height="26px"
              viewBox="0 0 24 24"
              ><path
                fill="green"
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z" /></svg>
          </button>
        {:else if inputs.length == maxInputs}
        <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 1200 1200">
          <path fill="green" d="m1004.237 99.152l-611.44 611.441l-198.305-198.305L0 706.779l198.305 198.306l195.762 195.763L588.56 906.355L1200 294.916z" />
        </svg>
        {/if}
      {/if}
    </div>
  {/each}
</div>
