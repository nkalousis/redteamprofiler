import { c as create_ssr_component, k as subscribe, o as escape } from './exports-5P2LagHd.js';
import { p as page } from './stores-DVB0KGRN.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}</h1> <p>${escape($page.error?.message)}</p>`;
});

export { Error as default };
//# sourceMappingURL=error.svelte-4LQWiGr-.js.map
