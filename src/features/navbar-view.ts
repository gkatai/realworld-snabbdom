import { VNode, h } from "snabbdom";

export function navbarView(): VNode {
  return h("nav.navbar.navbar-light", [
    h("div.container", [
      h("a.navbar-brand", { props: { href: "/" } }, "conduit"),
      h("ul.nav.navbar-nav.pull-xs-right", [
        navItem("Home", "#"),
        navItem("Sign in", "#/login"),
        navItem("Sign up", "#/register"),
      ]),
    ]),
  ]);
}

function navItem(title: string, target: string) {
  return h(
    "li.nav-item",
    h("a.nav-link.active", { props: { href: target } }, title)
  );
}
