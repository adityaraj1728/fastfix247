import { c as create_ssr_component } from "../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="flex flex-row gap-4 px-3 py-2" data-svelte-h="svelte-4xgi7h"><a href="/home">Home</a> <a href="/about">About</a> <a href="/services">Services</a> <a href="/contact">Contact</a></nav> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
