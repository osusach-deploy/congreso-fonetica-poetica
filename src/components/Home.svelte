<script>
    import Participantes from './Participantes.svelte';
    import { reveal, setDefaultOptions } from 'svelte-reveal';
	
	setDefaultOptions({
		easing: 'easeOutCubic',
		duration: 500
	});
</script>

<div class="flex flex-col w-full items-center">
    <div class=" flex flex-row w-[60%] justify-between">
        <div class="flex flex-col w-[30%] text-center">
            <p class=" text-3xl">1er CONGRESO NACIONAL DE FONÉTICA Y POÉTICA</p>
            <p class=" font-light">15 de Noviembre 2024</p>
        </div>
        <div class="flex flex-col gap-2 bg-slate-200 rounded-xl p-4 w-[40%] text-center items-center">
            <p class=" text-2xl font-black">¿Deseas ser oyente?</p>
            <p class=" text-sm font-light">Déjanos tu correo electrónico y te enviaremos las noticias más recientes sobre el congreso</p>
            <form class="flex flex-row py-2 rounded-lg" method="POST">
                <label class="flex w-full">
                    <input class="rounded-l-full pl-3 py-2" name="email" type="email" placeholder="Introduce tu correo">
                </label>
                <button class=" text-white font-black px-4 bg-blue-400 hover:bg-blue-500 transition-all rounded-r-full">Suscribirse</button>    
            </form>
        </div>
    </div>
    <Participantes/>
</div>