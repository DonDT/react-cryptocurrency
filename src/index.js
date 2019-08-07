import React from "react";
import ReactDom from "react-dom";
import Header from "./components/common/Header";
import "./index.css";
import List from "./components/list/List";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./components/notFound/NotFound";
import Detail from "./components/detail/detail";

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />

        <Switch>
          <Route path="/currency/:id" exact component={Detail} />
          <Route path="/" exact component={List} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
