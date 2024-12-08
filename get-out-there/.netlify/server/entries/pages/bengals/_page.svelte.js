import { H as Header, a as attr, T as Text, B as Button } from "../../../chunks/Button.js";
import { e as escape_html } from "../../../chunks/escaping.js";
import { R as pop, P as push } from "../../../chunks/index.js";
import { b as bengals } from "../../../chunks/bengals.js";
import { C as Checkbox, T as Toast } from "../../../chunks/Toast.js";
function _page($$payload, $$props) {
  push();
  let currentAttending = 854;
  let currentInterest = 245;
  let isAttending = false;
  let isInterested = false;
  $$payload.out += `<div class="background svelte-gisq7w"><div class="box svelte-gisq7w">`;
  Header($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Bengals vs Browns Football Game`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Header($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->December 22 at 1 PM`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <div class="info svelte-gisq7w"><img${attr("src", bengals)} alt="Bengals" class="svelte-gisq7w"> <div class="text-info svelte-gisq7w">`;
  Text($$payload, {
    type: "bold",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Watch the Bengals as they take on the Cleveland Browns at Paycor Stadium on Sunday, December 22 at 1 PM.`;
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
