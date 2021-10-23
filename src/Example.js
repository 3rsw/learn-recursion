import React from "react"
import {PrismCode} from "./component"
const code = `
const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
`
const Example = () => (
  <PrismCode
    code={code}
    language="js"
    plugins={["line-numbers"]}
  />
)