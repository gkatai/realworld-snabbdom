import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
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

  let oldVnode = viewFunction(store.getState(), store.dispatch);
  patch(container, oldVnode);

  store.subscribe(() => {
    const newVnode = viewFunction(store.getState(), store.dispatch);
    patch(oldVnode, newVnode);
    oldVnode = newVnode;
  });

  if (import.meta.hot) {
    import.meta.hot.accept("./view", (viewModule) => {
      if (!viewModule) {
        return;
      }

      viewFunction = viewModule.view;
      const newVnode = viewFunction(store.getState(), store.dispatch);
      patch(oldVnode, newVnode);
      oldVnode = newVnode;
    });
  }
}
