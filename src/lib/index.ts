import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
  VNode,
} from "snabbdom";
import { store } from "../store/store";
import { view } from "./view";

export function mount(elementName: string) {
  let viewFunction = view;
  const container = document.getElementById(elementName);
  if (!container) {
    return;
  }

  const patch = init([
    // Init patch function with chosen modules
    classModule, // makes it easy to toggle classes
    propsModule, // for setting properties on DOM elements
    styleModule, // handles styling on elements with support for animations
    eventListenersModule, // attaches event listeners
  ]);

  const content = getContent();

  let oldVnode = viewFunction(store.getState(), store.dispatch, content);
  patch(container, oldVnode);

  store.subscribe(() => {
    render();
  });

  addEventListener("hashchange", () => render());

  if (import.meta.hot) {
    import.meta.hot.accept("./view", (viewModule) => {
      if (!viewModule) {
        return;
      }

      viewFunction = viewModule.view;
      const newVnode = viewFunction(store.getState(), store.dispatch, content);
      patch(oldVnode, newVnode);
      oldVnode = newVnode;
    });
  }

  function render() {
    const content = getContent();

    const newVnode = viewFunction(store.getState(), store.dispatch, content);
    patch(oldVnode, newVnode);
    oldVnode = newVnode;
  }
}

function getContent(): VNode {
  const routes = {
    "": () => h("div", "Home Page"),
    "#/login": () => h("div", "Login Page"),
    "#/register": () => h("div", "Sign up Page"),
  };

  const hash = window.location.hash;

  const routeEntries = Object.entries(routes);

  for (const entry of routeEntries) {
    if (hash === entry[0]) {
      return entry[1]();
    }
  }

  return h("div", "404");
}
