import { H as Header, T as Text, B as Button, a as attr } from "../../chunks/Button.js";
import { z as zoo } from "../../chunks/zoo_lights.js";
import { f as findlay } from "../../chunks/findlay_market.js";
import { c as cyclones } from "../../chunks/cyclones.js";
import { W as fallback, X as bind_props, R as pop, P as push, Y as ensure_array_like, Z as stringify } from "../../chunks/index.js";
import { w as winterfest } from "../../chunks/kings_island.js";
import { b as bridge } from "../../chunks/bridge.js";
import { e as escape_html } from "../../chunks/escaping.js";
import { b as bengals } from "../../chunks/bengals.js";
const profile = "data:image/svg+xml,%3csvg%20fill='%23CB998D'%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23FAF9F6'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%3e%3c/g%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/g%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M16%2015.503A5.041%205.041%200%201%200%2016%205.42a5.041%205.041%200%200%200%200%2010.083zm0%202.215c-6.703%200-11%203.699-11%205.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z'%3e%3c/path%3e%3c/g%3e%3c/svg%3e";
function HeaderCard($$payload) {
  $$payload.out += `<div class="box svelte-11ctl01"><div class="first-row svelte-11ctl01">`;
  Header($$payload, {
    type: "h1",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Get Out There!<br> <span class="italic svelte-11ctl01">Cincinnati</span>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Text($$payload, {
    type: "selected-text",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Events`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Text($$payload, {
    type: "hover-text",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Connect`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Text($$payload, {
    type: "hover-text",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Explore`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Text($$payload, {
    type: "hover-text",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Groups`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    shape: "round",
    children: ($$payload2) => {
      $$payload2.out += `<img${attr("src", profile)} alt="Profile SVG" class="svelte-11ctl01">`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div>`;
}
function HighlightedEvents($$payload) {
  $$payload.out += `<div class="box svelte-1965y3v">`;
  Header($$payload, {
    type: "subheader",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Highlighted Events`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="row svelte-1965y3v"><figure class="svelte-1965y3v"><div class="middle svelte-1965y3v">`;
  Button($$payload, {
    children: ($$payload2) => {
      Text($$payload2, {
        type: "small",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Click Here to Learn More!`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <img${attr("src", zoo)} alt="Zoo Lights" class="svelte-1965y3v"> <figcaption class="svelte-1965y3v">`;
  Text($$payload, {
    type: "small-bold",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Cincinnati Zoo Lights`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Text($$payload, {
    type: "small",
    children: ($$payload2) => {
      $$payload2.out += `<!---->November 24, 2024 - January 5, 2025`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Text($$payload, {
    type: "small",
    children: ($$payload2) => {
      $$payload2.out += `<!---->804 people attending, 367 interested`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></figcaption></figure> <figure class="svelte-1965y3v"><div class="middle svelte-1965y3v">`;
  Button($$payload, {
    children: ($$payload2) => {
      Text($$payload2, {
        type: "small",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Click Here to Learn More!`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <img${attr("src", findlay)} alt="Findlay Market" class="svelte-1965y3v"> <figcaption class="svelte-1965y3v">`;
  Text($$payload, {
    type: "small-bold",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Findlay Market in the Winter`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Text($$payload, {
    type: "small",
    children: ($$payload2) => {
      $$payload2.out += `<!---->November 1, 2024 - February 28, 2025`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Text($$payload, {
    type: "small",
    children: ($$payload2) => {
      $$payload2.out += `<!---->789 people attending, 590 interested`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></figcaption></figure> <figure class="svelte-1965y3v"><div class="middle svelte-1965y3v">`;
  Button($$payload, {
    children: ($$payload2) => {
      Text($$payload2, {
        type: "small",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Click Here to Learn More!`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <img${attr("src", cyclones)} alt="Cincinnati Cyclones" class="svelte-1965y3v"> <figcaption class="svelte-1965y3v">`;
  Text($$payload, {
    type: "small-bold",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Cincinnati Cyclones Hockey Game`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Text($$payload, {
    type: "small",
    children: ($$payload2) => {
      $$payload2.out += `<!---->October 19, 2024 - April 12, 2025`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Text($$payload, {
    type: "small",
    children: ($$payload2) => {
      $$payload2.out += `<!---->609 people attending, 340 interested`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></figcaption></figure></div></div>`;
}
function Dropdown($$payload, $$props) {
  push();
  let options = fallback($$props["options"], () => [], true);
  let placeholder = fallback($$props["placeholder"], "Filters");
  $$payload.out += `<div class="dropdown svelte-1ucedpu"><div class="dropdown-button svelte-1ucedpu">`;
  Text($$payload, {
    type: "small",
    children: ($$payload2) => {
      $$payload2.out += `<!---->${escape_html(placeholder)}`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <span class="caret">${escape_html("▼")}</span></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { options, placeholder });
  pop();
}
function CheckOutMore($$payload) {
  const items = ["Outdoor", "High Attendance", "All Events"];
  let currentSlide = 0;
  const events = [
    {
      img: zoo,
      alt: "Zoo Lights",
      title: "Cincinnati Zoo Lights",
      dates: "November 24, 2024 - January 5, 2025",
      stats: "804 people attending, 367 interested",
      route: "/zoo-lights"
    },
    {
      img: winterfest,
      alt: "WinterFest at Kings Island",
      title: "WinterFest at Kings Island",
      dates: "November 29 - December 31",
      stats: "508 people attending, 453 interested",
      route: "/winterfest"
    },
    {
      img: findlay,
      alt: "Findlay Market",
      title: "Findlay Market in the Winter",
      dates: "November 1, 2024 - February 28, 2025",
      stats: "789 people attending, 590 interested",
      route: "/findlay-market"
    },
    {
      img: cyclones,
      alt: "Cincinnati Cyclones",
      title: "Cincinnati Cyclones Hockey Game",
      dates: "October 19, 2024 - April 12, 2025",
      stats: "609 people attending, 340 interested",
      route: "/cyclones"
    },
    {
      img: bridge,
      alt: "Roebling Bridge",
      title: "Walk the Roebling Bridge",
      dates: "All Year",
      stats: "203 people attending, 108 interested",
      route: "/bridge"
    },
    {
      img: bengals,
      alt: "Bengals",
      title: "Bengals vs Browns Football Game",
      dates: "December 22 at 1 PM",
      stats: "854 people attending, 245 interested",
      route: "/bengals"
    }
  ];
  const numSlides = Math.ceil(events.length / 3);
  $$payload.out += `<div class="box svelte-9nnryr"><div class="first-row svelte-9nnryr">`;
  Header($$payload, {
    type: "subheader",
    children: ($$payload2) => {
      $$payload2.out += `<!---->More Events`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Dropdown($$payload, { options: items });
  $$payload.out += `<!----></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(Array(numSlides));
    $$payload.out += `<div class="carousel svelte-9nnryr"><button class="nav-button left svelte-9nnryr">❮</button> <div class="carousel-track svelte-9nnryr"><!--[-->`;
    for (let slideIndex = 0, $$length = each_array.length; slideIndex < $$length; slideIndex++) {
      each_array[slideIndex];
      const each_array_1 = ensure_array_like(events.slice(slideIndex * 3, slideIndex * 3 + 3));
      $$payload.out += `<div${attr("class", `slide ${stringify(slideIndex === currentSlide ? "active" : "")} svelte-9nnryr`)}><!--[-->`;
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let event = each_array_1[$$index];
        $$payload.out += `<figure class="svelte-9nnryr"><div class="middle svelte-9nnryr">`;
        Button($$payload, {
          children: ($$payload2) => {
            Text($$payload2, {
              type: "small",
              children: ($$payload3) => {
                $$payload3.out += `<!---->Click Here to Learn More!`;
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
        $$payload.out += `<!----></div> <img${attr("src", event.img)}${attr("alt", event.alt)} class="svelte-9nnryr"> <figcaption class="svelte-9nnryr">`;
        Text($$payload, {
          type: "small-bold",
          children: ($$payload2) => {
            $$payload2.out += `<!---->${escape_html(event.title)}`;
          },
          $$slots: { default: true }
        });
        $$payload.out += `<!----> `;
        Text($$payload, {
          type: "small",
          children: ($$payload2) => {
            $$payload2.out += `<!---->${escape_html(event.dates)}`;
          },
          $$slots: { default: true }
        });
        $$payload.out += `<!----> `;
        Text($$payload, {
          type: "small",
          children: ($$payload2) => {
            $$payload2.out += `<!---->${escape_html(event.stats)}`;
          },
          $$slots: { default: true }
        });
        $$payload.out += `<!----></figcaption></figure>`;
      }
      $$payload.out += `<!--]--></div>`;
    }
    $$payload.out += `<!--]--></div> <button class="nav-button right svelte-9nnryr">❯</button></div>`;
  }
  $$payload.out += `<!--]--></div>`;
}
function About($$payload) {
  $$payload.out += `<div class="box svelte-xr1rgf"><div class="header-text svelte-xr1rgf">`;
  Header($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Making Connection Simple`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <div class="text-padding svelte-xr1rgf"><div class="extra-padding svelte-xr1rgf">`;
  Text($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<span class="italic svelte-xr1rgf">Get Out There</span> is a platform designed for anyone looking to explore a city, whether it’s a familiar place or somewhere new. 
            It offers a space to discover local events, see how many people are attending, and join a group of others if you would like 
            to attend together.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> `;
  Text($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->The platform features Highlighted Events, along with other selection types and features. In the profile section, 
        users can add events they discover and contribute them to the website. Additionally, they can connect with other users in the Connect tab, explore pages of other cities 
        through the Explore tab, and join or create groups in the Groups tab. <span class="italic svelte-xr1rgf">Get Out There</span> is a fantastic way to connect with others—start by checking out 
        the local events below!`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div>`;
}
function _page($$payload) {
  $$payload.out += `<div class="component svelte-k4xjk1">`;
  HeaderCard($$payload);
  $$payload.out += `<!----> `;
  About($$payload);
  $$payload.out += `<!----> <hr class="solid svelte-k4xjk1"> `;
  HighlightedEvents($$payload);
  $$payload.out += `<!----> <hr class="solid svelte-k4xjk1"> `;
  CheckOutMore($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  _page as default
};
