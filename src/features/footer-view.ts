import { VNode, h } from "snabbdom";

export function footerView(): VNode {
  return h("footer", [
    h("div.container", [h("a.logo-font", { props: { href: "/" } }, "conduit")]),
    h("span.attribution", [
      h("text", "An interactive learning project from"),
      h("a", { props: { href: "https://thinkster.io" } }, "Thinkster"),
      h("text", ". Code &amp; design licensed under MIT."),
    ]),
  ]);
}
