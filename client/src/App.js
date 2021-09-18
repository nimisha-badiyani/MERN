// import logo from './logo.svg';
// import './App.css';

import React from "react";
import { Box } from "@material-ui/core";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./component/Header";
import Home from "./component/Home/Home";
import DetailView from "./component/post/DetailView";
import CreateView from "./component/post/CreateView";
import UpdateView from "./component/post/UpdateView";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: "64" }} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:id" component={DetailView} />
          <Route exact path="/create" component={CreateView} />
          <Route exact path="/update/:id" component={UpdateView} />
        </Switch>
        <Box />
      </BrowserRouter>
    </>
  );
}

export default App;
