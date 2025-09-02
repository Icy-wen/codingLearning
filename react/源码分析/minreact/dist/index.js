"use strict";
const content = MiniReact.createElement("div", null,
    MiniReact.createElement("a", { href: "xxx" }, "\u94FE\u63A5"));
console.log(JSON.stringify(content));
