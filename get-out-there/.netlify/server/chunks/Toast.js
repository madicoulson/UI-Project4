import { W as fallback, X as bind_props, R as pop, P as push, Y as ensure_array_like, T as store_get, Z as stringify, V as unsubscribe_stores } from "./index.js";
import { a as attr, T as Text } from "./Button.js";
import { e as escape_html } from "./escaping.js";
import { d as derived, w as writable } from "./index2.js";
function Checkbox($$payload, $$props) {
  push();
  let label = $$props["label"];
  let required = fallback($$props["required"], false);
  let checked = fallback($$props["checked"], false);
  $$payload.out += `<div class="checkbox svelte-17tfoz0"><div class="checkbox-inner svelte-17tfoz0"><input type="checkbox"${attr("required", required, true)}${attr("checked", checked, true)} class="svelte-17tfoz0"></div> `;
  if (label) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="checkbox-label svelte-17tfoz0">`;
    Text($$payload, {
      children: ($$payload2) => {
        $$payload2.out += `<!---->${escape_html(label)}`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { label, required, checked });
  pop();
}
function createNotificationStore(timeout) {
  const _notifications = writable([]);
  function send(message, type = "default", timeout2) {
    _notifications.update((state) => {
      return [...state, { id: id(), type, message, timeout: timeout2 }];
    });
  }
  const notifications2 = derived(_notifications, ($_notifications, set) => {
    set($_notifications);
    if ($_notifications.length > 0) {
      const timer = setTimeout(() => {
        _notifications.update((state) => {
          state.shift();
          return state;
        });
      }, $_notifications[0].timeout);
      return () => {
        clearTimeout(timer);
      };
    }
  });
  const { subscribe } = notifications2;
  return {
    subscribe,
    send,
    default: (msg, timeout2) => send(msg, "default", timeout2),
    danger: (msg, timeout2) => send(msg, "danger", timeout2),
    warning: (msg, timeout2) => send(msg, "warning", timeout2),
    info: (msg, timeout2) => send(msg, "info", timeout2),
    success: (msg, timeout2) => send(msg, "success", timeout2)
  };
}
function id() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
const notifications = createNotificationStore();
function Toast($$payload) {
  var $$store_subs;
  const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$notifications", notifications));
  $$payload.out += `<div class="notifications svelte-1txbq0"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let notification = each_array[$$index];
    $$payload.out += `<div class="toast svelte-1txbq0" style="background: #CB998D;"><div class="content svelte-1txbq0">`;
    Text($$payload, {
      children: ($$payload2) => {
        $$payload2.out += `<!---->${escape_html(notification.message)}`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----></div> `;
    if (notification.icon) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<i${attr("class", `${stringify(notification.icon)} svelte-1txbq0`)}></i>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
export {
  Checkbox as C,
  Toast as T
};
