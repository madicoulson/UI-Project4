import { H as Header, a as attr, T as Text, B as Button } from "../../../chunks/Button.js";
import { e as escape_html } from "../../../chunks/escaping.js";
import { R as pop, P as push } from "../../../chunks/index.js";
import { f as findlay } from "../../../chunks/findlay_market.js";
import { C as Checkbox, T as Toast } from "../../../chunks/Toast.js";
function _page($$payload, $$props) {
  push();
  let currentAttending = 789;
  let currentInterest = 590;
  let isAttending = false;
  let isInterested = false;
  $$payload.out += `<div class="background svelte-wdptgo"><div class="box svelte-wdptgo">`;
  Header($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Findlay Market in the Winter`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Header($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->November 1, 2024 - February 28, 2025`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <div class="info svelte-wdptgo"><img${attr("src", findlay)} alt="Findlay Market" class="svelte-wdptgo"> <div class="text-info svelte-wdptgo">`;
  Text($$payload, {
    type: "bold",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Visit Findlay Market during the winter months to warm up and try authentic, warm food from 
                all different cusine types. The market is open Tuesday - Friday 9 AM - 6 PM, Saturdays 8 AM - 6 PM, and Sundays
                10 AM - 4 PM.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="extra-padding svelte-wdptgo">`;
  Text($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->${escape_html(currentAttending)} people are already attending, and ${escape_html(currentInterest)} are interested!`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <div class="row extra-padding svelte-wdptgo">`;
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
