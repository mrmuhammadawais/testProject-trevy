// "use client";
// import store  from "./store"
// const { Provider } = require("react-redux");
// export function Providers({ children }) {
//   return <Provider store={store}>{children}</Provider>;
// }

"use client"; 
// import { Provider } from "react-redux";
const { Provider } = require("react-redux");

import {store} from "./store"; 

export function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
