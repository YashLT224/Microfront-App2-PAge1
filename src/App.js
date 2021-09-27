import React from "react";
import "./root.component.css";
import Page2 from "./components/page1";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { getBuildsListingReducer } from "./redux/reducer";
import { Provider } from "react-redux";
// import header from "nav/Abc";
// import("nav/Abc");
const store = createStore(
  getBuildsListingReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const App = () => {
  return (
    <Provider store={store}>
      <div className="container2">
        <Page2></Page2>
        <Page2></Page2>
      </div>
    </Provider>
  );
};

export default App;
