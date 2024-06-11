<script>
    import Date from "./Date.svelte";

    export let i18n;
</script>

<div class="flex flex-col w-[75%] lg:w-full lg:justify-center lg:flex-row">
    <Date title={i18n.dates.date_1.title} date={i18n.dates.date_1.date} />
    <Date title={i18n.dates.date_2.title} date={i18n.dates.date_2.date} />
    <Date title={i18n.dates.date_3.title} date={i18n.dates.date_3.date} />
    <Date title={i18n.dates.date_4.title} date={i18n.dates.date_4.date} />
</div>