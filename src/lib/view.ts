import { VNode, h } from "snabbdom";
import { RootState, AppDispatch } from "../store/store";
import { increment } from "../features/counter-slice";
import { navbarView } from "../features/navbar-view";
import { footerView } from "../features/footer-view";

export function view(
  state: RootState,
  dispatch: AppDispatch,
  content: VNode = h("div")
) {
  return h("div", { on: { click: () => console.log("updated div clicked") } }, [
    h(
      "span",
      { style: { fontWeight: "normal", fontStyle: "italic" } },
      "Count:" + state.counter.value
    ),
    h("button", { on: { click: () => dispatch(increment()) } }, "+"),
    navbarView(),
    content,
    footerView(),
  ]);
}
