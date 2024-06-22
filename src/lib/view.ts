import { VNode, h } from "snabbdom";
import { RootState, AppDispatch } from "../store/store";
import { navbarView } from "../features/navbar-view";
import { footerView } from "../features/footer-view";

export function view(
  state: RootState,
  dispatch: AppDispatch,
  content: VNode = h("div")
) {
  return h("div", { on: { click: () => console.log("updated div clicked") } }, [
    navbarView(),
    content,
    footerView(),
  ]);
}
