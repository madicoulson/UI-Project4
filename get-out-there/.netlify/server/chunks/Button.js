import { W as fallback, a1 as slot, X as bind_props, Z as stringify, Y as ensure_array_like, R as pop, P as push } from "./index.js";
import { e as escape_html } from "./escaping.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function Text($$payload, $$props) {
  let type = fallback($$props["type"], "default");
  $$payload.out += `<span${attr("class", `text svelte-147gh5a ${stringify([
    type === "default" ? "default" : "",
    type === "bold" ? "bold" : "",
    type === "small" ? "small" : "",
    type === "small-bold" ? "smallbold" : "",
    type === "hover-text" ? "hover-text" : "",
    type === "selected-text" ? "selected-text" : ""
  ].filter(Boolean).join(" "))}`)}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></span>`;
  bind_props($$props, { type });
}
function Header($$payload, $$props) {
  let type = fallback($$props["type"], "h1");
  $$payload.out += `<span${attr("class", `header svelte-bk4ixu ${stringify([
    type === "h1" ? "h1" : "",
    type === "h2" ? "h2" : "",
    type === "subheader" ? "subheader" : ""
  ].filter(Boolean).join(" "))}`)}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></span>`;
  bind_props($$props, { type });
}
function Button($$payload, $$props) {
  push();
  let ripples = [];
  let shape = fallback($$props["shape"], "rectangular");
  const each_array = ensure_array_like(ripples);
  $$payload.out += `<button${attr("class", `button ${stringify(shape === "round" ? "round" : "rectangular")} svelte-7gl5iz`)}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let { x, y, size, id } = each_array[$$index];
    $$payload.out += `<span class="ripple svelte-7gl5iz"${attr("style", `top: ${stringify(y)}px; left: ${stringify(x)}px; width: ${stringify(size)}px; height: ${stringify(size)}px;`)}></span>`;
  }
  $$payload.out += `<!--]--></button>`;
  bind_props($$props, { shape });
  pop();
}
export {
  Button as B,
  Header as H,
  Text as T,
  attr as a
};
