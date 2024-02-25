import { c as create_ssr_component, v as validate_component, k as subscribe, l as add_attribute } from './exports-5P2LagHd.js';
import { p as page } from './stores-DVB0KGRN.js';

const css$1 = {
  code: "header.svelte-1pwpfuj.svelte-1pwpfuj{display:flex;justify-content:center}nav.svelte-1pwpfuj.svelte-1pwpfuj{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}svg.svelte-1pwpfuj.svelte-1pwpfuj{width:2em;height:3em;display:block}path.svelte-1pwpfuj.svelte-1pwpfuj{fill:var(--background)}ul.svelte-1pwpfuj.svelte-1pwpfuj{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-1pwpfuj.svelte-1pwpfuj{position:relative;height:100%}li[aria-current='page'].svelte-1pwpfuj.svelte-1pwpfuj::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--color-theme-1)}nav.svelte-1pwpfuj a.svelte-1pwpfuj{display:flex;height:100%;align-items:center;padding:0 0.5rem;color:var(--color-text);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-1pwpfuj.svelte-1pwpfuj:hover{color:var(--color-theme-1)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="svelte-1pwpfuj"> <nav class="svelte-1pwpfuj"><svg viewBox="0 0 2 3" aria-hidden="true" class="svelte-1pwpfuj"><path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" class="svelte-1pwpfuj"></path></svg> <ul class="svelte-1pwpfuj"><li${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : void 0, 0)} class="svelte-1pwpfuj"><a href="/" class="svelte-1pwpfuj" data-svelte-h="svelte-5a0zws">Home</a></li> <li${add_attribute("aria-current", $page.url.pathname === "/about" ? "page" : void 0, 0)} class="svelte-1pwpfuj"><a href="/about" class="svelte-1pwpfuj" data-svelte-h="svelte-iphxk9">About</a></li></ul> <svg viewBox="0 0 2 3" aria-hidden="true" class="svelte-1pwpfuj"><path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" class="svelte-1pwpfuj"></path></svg></nav>  </header>`;
});
const css = {
  code: ".app.svelte-8o1gnw{display:flex;flex-direction:column;min-height:100vh}main.svelte-8o1gnw{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}@media(min-width: 480px){}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-8o1gnw">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-8o1gnw">${slots.default ? slots.default({}) : ``}</main>  </div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-BJLmpXPS.js.map
