import { H as Header, a as attr, T as Text, B as Button } from "../../../chunks/Button.js";
import { e as escape_html } from "../../../chunks/escaping.js";
import { R as pop, P as push } from "../../../chunks/index.js";
import { w as winterfest } from "../../../chunks/kings_island.js";
import { C as Checkbox, T as Toast } from "../../../chunks/Toast.js";
function _page($$payload, $$props) {
  push();
  let currentAttending = 508;
  let currentInterest = 453;
  let isAttending = false;
  let isInterested = false;
  $$payload.out += `<div class="background svelte-gisq7w"><div class="box svelte-gisq7w">`;
  Header($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Kings Island Winterfest`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Header($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->November 29 - December 31`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <div class="info svelte-gisq7w"><img${attr("src", winterfest)} alt="Zoo Lights" class="svelte-gisq7w"> <div class="text-info svelte-gisq7w">`;
  Text($$payload, {
    type: "bold",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Visit Kings Island's Winterfest celebrations to see festive live music, parades, lots of lights, and much more!
            Festivities begin at 4 or 5 PM depending on the day, with the parade starting at 8:30 PM nightly.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="extra-padding svelte-gisq7w">`;
  Text($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->${escape_html(currentAttending)} people are already attending, and ${escape_html(currentInterest)} are interested!`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <div class="row extra-padding svelte-gisq7w">`;
  Checkbox($$payload, { label: "I'm Attending", checked: isAttending });
  $$payload.out += `<!----> `;
  Checkbox($$payload, {
    label: "I'm Interested",
    checked: isInterested
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    children: ($$payload2) => {
      Text($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->Help Me Find a Group`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> `;
  Toast($$payload);
  $$payload.out += `<!----></div></div></div>`;
  pop();
}
export {
  _page as default
};
