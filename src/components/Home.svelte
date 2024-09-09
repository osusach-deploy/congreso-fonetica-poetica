<script lang="ts">
  import Participantes from "./Participantes.svelte";
  import { setDefaultOptions } from "svelte-reveal";
  import Timeline from "./Timeline.svelte";
  import { getLocaleId } from "../i18n";
  import Formulario from "./Formulario.svelte";

  const API_URL = import.meta.env.PUBLIC_API_URL;

  export let i18n: any;
  export let currentLocale: string;

  let langPath = currentLocale == "es" ? "" : "/" + currentLocale;
  function handleClick() {
    const body = {
      email: email,
      lang: getLocaleId(currentLocale),
    };
    // console.log(body);

    fetch(API_URL + "listener", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((x) => {
        return x.json();
      })
      .then((data) => {
        if (data.success === false) {
          alert("Este correo ya se registró");
        }
        if (data.success) {
          alert(i18n.listener_alert_success);
          email = "";
        }
      })
      .catch((e) => {
        alert(i18n.listener_alert_fail);
        // console.log(e);
      });
  }

  setDefaultOptions({
    easing: "easeOutCubic",
    duration: 500,
  });

  let email = "";
</script>

<div class="relative flex flex-col w-full items-center mt-24 lg:mt-12">
  <div
    class=" animate-fade-up animate-ease-in-out flex flex-col gap-20 lg:flex-row lg:my-10 w-[90%] lg:mx-0 lg:w-[60%] lg:justify-between">
    <div
      class="flex flex-col lg:w-[50%] gap-3 text-center items-center align-middle justify-center">
      <img
        class="flex h-48 aspect-auto"
        src={"/img" + langPath + "/logoweb.png"}
        alt="logocongreso" />
      <p class=" font-extralight text-2xl">{i18n.date}</p>
    </div>
    <div
      class="flex flex-col my-auto gap-2 bg-white bg-opacity-40 rounded-xl p-5 md:mx-5 lg:w-[40%] text-center items-center sm:min-w-72">
      <h2 class="text-3xl font-bold">{i18n.listener_title}</h2>
      <p class="font-light text-lg">
        {i18n.listener_subtitle}
      </p>
      <form
        class="w-[100%] justify-center flex flex-row px-2 lg:px-5 py-2 rounded-lg"
        on:submit|preventDefault={handleClick}>
        <input
          aria-label="enter your email to get notifications as a listener"
          class="rounded-l-full w-[75%] lg:w-full pl-3 py-2 appearance-none focus:outline-none focus:shadow-outline"
          name="email"
          type="email"
          bind:value={email}
          placeholder={i18n.email_placeholder} />
        <button
          aria-label="submit your email as a listener, wide button"
          type="submit"
          class="hidden sm:flex w-fit justify-center bg-indigo-600 hover:bg-indigo-700 transition-all text-white font-semibold py-2 px-2 rounded-r-full"
          >{i18n.subscribe_button}</button>
        <button
          aria-label="submit your email as a listener, mobile button"
          type="submit"
          class="flex sm:hidden justify-center bg-indigo-600 hover:bg-indigo-700 transition-all text-white font-semibold p-2 lg:px-2 rounded-r-full">
          <img src="/img/send.svg" alt="send icon" class="w-6 mr-1" />
        </button>
      </form>
    </div>
  </div>
  <Participantes {i18n} />
  <div
    class="flex flex-col gap-5 items-center mb-10 animate-fade-up animate-delay-700">
    <p class="text-center font-light text-xl">{i18n.participant_title}</p>
    <a
      href="/#form"
      class="hover:animate-bounce py-2"
      aria-label="Scroll to form button"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 1024 1024"
        ><path
          fill="black"
          d="M8.2 275.4c0-8.6 3.4-17.401 10-24.001c13.2-13.2 34.8-13.2 48 0l451.8 451.8l445.2-445.2c13.2-13.2 34.8-13.2 48 0s13.2 34.8 0 48L542 775.399c-13.2 13.2-34.8 13.2-48 0l-475.8-475.8c-6.8-6.8-10-15.4-10-24.199" /></svg
      ></a>
  </div>
  <section class="mx-10 my-20 lg:w-[60%] lg:my-28">
    <p class="text-lg lg:text-2xl font-light text-center">
      {i18n.presentation_text}
    </p>
  </section>

  <section class="flex flex-col w-[90%] gap-14 items-center mb-7 lg:mx-44">
    <h2 class="font-bold text-4xl">{i18n.dates.title}</h2>
    <Timeline {i18n} />
  </section>
  <Formulario {i18n}>
    <article class="text-xl gap-16 flex flex-col">
      <div class="flex flex-col gap-5">
        <h2 class="font-bold text-4xl">{i18n.proposal.submission_title}</h2>
        <p class="text-xl font-light">{i18n.proposal.submission_subtitle}</p>
      </div>

      <div class="hidden lg:flex flex-col gap-5">
        <h2 class="text-3xl font-bold">
          {i18n.proposal.considerations_title}
        </h2>

        <div class="flex flex-col">
          <ul class="flex flex-col list-disc pl-8 gap-5">
            {#each i18n.proposal.considerations_description as text}
              <li class="font-light pl-7 text-left">{text}</li>
            {/each}
          </ul>
        </div>
      </div>
    </article>
  </Formulario>
  <img
    class="hidden lg:block absolute opacity-5 top-[5%] -z-10"
    src="/img/ondasonido.png"
    alt="onda_sonido" />
</div>
