/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-svelte"],
  overrides: [
    {
      files: "*.astro",
      options: {
        tabWidth: 2,
        useTabs: false,
        parser: "astro",
        bracketSameLine: true,
      },
    },
    {
      files: "*.svelte",
      options: {
        tabWidth: 2,
        useTabs: false,
        parser: "svelte",
        bracketSameLine: true,
      },
    },
  ],
};
