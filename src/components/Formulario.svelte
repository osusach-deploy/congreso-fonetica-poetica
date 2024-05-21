<script>
    let nombre = '';
    let email = '';
    let institucion = '';
    let titulo = '';
    let areaTematica = '';

    const areas = ['Ciencias Naturales', 'Ciencias Sociales', 'Matemáticas', 'Arte y Humanidades'];

    function handleSubmit() {

    }

</script>

<div class="flex flex-row w-[60%] justify-between mt-20 mb-44">
    <div class="flex flex-col w-[35%] gap-3 text-center justify-center">
        <p class="font-bold text-4xl">Declaración de Interés</p>
        <p class="text-lg font-light">Si te interesa ser parte del primer congreso de fonética y poética completa este formulario para que podamos
          planificar tu participación.
        </p>
    </div>
    <div class="w-[35%] mt-10 text-lg">
        <form on:submit|preventDefault={handleSubmit} class="bg-white bg-opacity-50 p-5 rounded-lg">
          <div class="mb-4">
            <p class=" text-lg font-bold mb-4">Información Personal</p>
            <input type="text" bind:value={nombre} placeholder="Nombre" class="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div class="mb-4">
            <input type="email" bind:value={email} placeholder="Email" class="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div class="mb-4">
            <input type="text" bind:value={institucion} placeholder="Institución" class="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div class="mb-4">
            <p class=" text-lg font-bold mb-4">Información Exposición</p>
            <input type="text" bind:value={titulo} placeholder="Título presentación" class="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div class="mb-6">
            <select bind:value={areaTematica} class="block appearance-none w-full bg-white border  px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none focus:shadow-outline">
              <option value="">Seleccione una opción</option>
              {#each areas as area}
                <option value={area}>{area}</option>
              {/each}
            </select>
          </div>
          <button type="submit" class="w-full bg-indigo-400 hover:bg-indigo-500 transition-all text-white font-bold py-2 px-4 rounded ">
            Enviar Declaración
          </button>
        </form>
      </div>
</div>

<style>

</style>