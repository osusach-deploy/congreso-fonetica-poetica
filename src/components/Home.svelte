<script lang="ts">
  import Participantes from "./Participantes.svelte";
  import Formulario from "./Formulario.svelte";
  import { reveal, setDefaultOptions } from "svelte-reveal";

  const API_URL = import.meta.env.PUBLIC_API_URL;

  export let i18n;

  function scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }

  function handleClick() {
    const body = {
      email: email
    };
    console.log(body);
    
    fetch(API_URL + "listeners", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((x) => {
        console.log(x);
        alert("LISTENER");
      })
      .catch((e) => {
        console.log(e);
      });
    }

  setDefaultOptions({
    easing: "easeOutCubic",
    duration: 500,
  });

  let email = "";
</script>

<div class="flex flex-col w-full items-center mt-24 md:mt-20">
  <div class=" animate-fade-up animate-ease-in-out flex flex-col gap-20 md:flex-row md:my-10 w-full md:w-[60%] md:justify-between">
    <div class="flex flex-col md:w-[40%] gap-3 text-center  align-middle justify-center">
      <p class=" font-light text-5xl">{ i18n.title }</p>
      <p class=" font-extralight text-2xl">{ i18n.date }</p>
    </div>
    <div
      
      class="flex flex-col my-auto gap-2 bg-white bg-opacity-40 rounded-xl p-5 mx-5 md:w-[40%] text-center items-center"
    >
      <p class=" text-3xl font-bold">{ i18n.listener_title }</p>
      <p class="font-light text-lg">
        { i18n.listener_subtitle }
      </p>
      <form class="w-[100%] justify-center flex flex-row px-2 md:px-5 py-2 rounded-lg" method="POST">
          <input
            class="rounded-l-full w-[65%] md:w-full pl-3 py-2 appearance-none focus:outline-none focus:shadow-outline"
            name="email"
            type="email"
            bind:value={email}
            placeholder="{ i18n.email_placeholder }"
          />
        <button type="submit"
          class="flex w-[35%] md:w-[30%] justify-center bg-indigo-400 hover:bg-indigo-500 transition-all text-white font-semibold py-2 md:px-4 rounded-r-full"
          >{ i18n.subscribe_button }</button
        >
      </form>
    </div>
  </div>
  <Participantes i18n={i18n}/>
  <div
    class="flex flex-col gap-7 items-center mb-10 animate-fade-up animate-delay-700"
  >
    <p class=" font-light text-xl">{ i18n.participant_title }</p>
    <button on:click={scrollToBottom} class="hover:animate-bounce py-4"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 1024 1024"
        ><path
          fill="black"
          d="M8.2 275.4c0-8.6 3.4-17.401 10-24.001c13.2-13.2 34.8-13.2 48 0l451.8 451.8l445.2-445.2c13.2-13.2 34.8-13.2 48 0s13.2 34.8 0 48L542 775.399c-13.2 13.2-34.8 13.2-48 0l-475.8-475.8c-6.8-6.8-10-15.4-10-24.199"
        /></svg
      ></button
    >
  </div>
  <Formulario i18n={i18n}/>
</div>
