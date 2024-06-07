<script>
    export let i18n;
    const footer = i18n;
</script>

<div class="flex flex-col bg-slate-600 text-white p-3 gap-7 divide-y divide-slate-500 px-10">
    <div class="flex flex-col lg:flex-row lg:gap-0 gap-10 lg:justify-between items-center">
        <div class="flex flex-col mx-auto pt-5 text-center gap-5">
            <p class=" text-xl font-bold uppercase">{i18n.footer.organizers_title}</p>
            <div class="flex flex-wrap items-center justify-center max-w-3xl gap-7 mx-auto content-center">
                <img src="/img/fonetica.png" class="h-16" alt="" />
                <img src="/img/conce.png" class="h-16" alt="" />
                <img src="/img/granada.png" class="h-16" alt="" />
                <img src="/img/eu.png" class="h-16" alt="" />
                <img src="/img/vhp.png" class="h-16" alt="" />
            </div>
        </div>
        <div class="flex flex-col md:flex-row w-fit gap-10 mx-auto bg-inherit py-5 text-white">
            <aside class="flex flex-col">
                <img
                    class="h-20"
                    src="img/logo_transparent.svg"
                    alt="Open Source Usach logo"
                />
                <h1 class="text-3xl font-bold">Open Source USACH</h1>
            </aside>
            <nav>
                <h6 class="font-bold text-xl uppercase">{i18n.footer.developers_title}</h6>
                <a href="https://github.com/kappita/" class="text-lg hover:underline"
                    >Ignacio Lara</a
                >
                <a href="https://github.com/Skyrdow/" class="text-lg hover:underline"
                    >Lucas Mesías</a
                >
                <a href="https://github.com/Klefur/" class="text-lg hover:underline"
                    >Joaquín Saldivia</a
                >
                <a
                    href="https://github.com/Don-Uldaricio/"
                    class="text-lg hover:underline"
                    >Nicolás Aguilera</a
                >
            </nav>
            <nav>
                <h6 class="font-bold text-xl">OSUSACH</h6>
                <a href="https://www.osusach.com/" class="text-lg hover:underline"
                    >Website</a
                >
                <a href="https://github.com/osusach/" class="text-lg hover:underline"
                    >Github</a
                >
                <a
                    href="https://github.com/osusach/congreso-fonetica-poetica/"
                    class="text-lg hover:underline"
                    >Source Code Git</a
                >
            </nav>
            <nav>
                <h6 class="font-bold text-xl uppercase">{i18n.footer.osusach_organizers}</h6>
                <a href="https://domingo-roman.net" class="text-lg hover:underline"
                    >Domingo Román</a
                >
            </nav>
        </div>
    </div>
    <div class="flex flex-row flex-wrap md:gap-0 gap-5 pt-5">
        <div class="m-auto flex flex-col">
            <img src="img/acreditacion.png" alt="Acreditación 7 años" />
        </div>
        <div
            class="m-auto flex flex-col text-center text-lg md:gap-0 gap-5"
        >
            <p>
                Facultad de Humanidades | Universidad de Santiago de Chile
            </p>
            <p>
                Avenida Libertador Bernardo O'Higgins n°3363 | Estación
                Central - Santiago - Chile
            </p>
        </div>
        <div class="m-auto flex flex-col">
            <img src="img/logo_segic.png" alt="Logo Segic" />
        </div>
    </div>
</div>

<style>
    nav{
        display: flex;
        flex-direction: column;
        justify-items: center;
    }
</style>