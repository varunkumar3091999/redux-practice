import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";

// //store - stores all the data required for the application globally

// //action - describes what we need to do with the data. eg - increment, decrement

// const increment = () => {
//   return { type: "INCREMENT" };
// };

// const decrement = () => {
//   return { type: "DECREMENT" };
// };

// //reducer - checks the action and manipulate the data in the store

// const counter = (state = 0, action) => {
//   switch(action.type) {
//     case "INCREMENT":
//       return state + 1
//     case "DECREMENT":
//       return state - 1
//   }
// }

let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// //display
// store.subscribe(() => console.log(store.getState()))

// //dispatch - dispatch and action to the reducer
// store.dispatch(increment())
// store.dispatch(decrement())
// store.dispatch(decrement())

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
