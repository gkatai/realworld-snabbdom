import { h } from "snabbdom";

export function loginView() {
  return h("div.auth-page", [
    h("div.container.page", [
      h("div.row", [
        h("div.col-md-6.offset-md-3.col-xs-12", [
          h("h1.text-xs-center", "Sign in"),
          h("p.text-xs-center", [
            h("a", { attrs: { href: "/register" } }, "Need an account?"),
          ]),
          h("ul.error-messages", [h("li", "That email is already taken")]),
          h("form", [
            h("fieldset.form-group", [
              h("input.form-control.form-control-lg", {
                attrs: { type: "text", placeholder: "Email" },
              }),
            ]),
            h("fieldset.form-group", [
              h("input.form-control.form-control-lg", {
                attrs: { type: "password", placeholder: "Password" },
              }),
            ]),
            h("button.btn.btn-lg.btn-primary.pull-xs-right", "Sign in"),
          ]),
        ]),
      ]),
    ]),
  ]);
}
