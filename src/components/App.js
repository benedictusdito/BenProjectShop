import React, { Component } from "react";
import HeaderAtas from "./HeaderAtas";
import ProductShow from "./ProductShow";
import ShowSetting from "../components/design/ShowSetting";

// React Router Import
import { Switch, Route } from "react-router-dom";
// Import Pages
import Header from "./Header";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";
import NotFoundPage from "./Pages/NotFoundPage";
import Login from "./Pages/Login";
import Detail from "./Pages/Detail";
import Footer from "./Pages/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <HeaderAtas />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/contact" component={Contact} />
          <Route path="/detail" component={Detail} />
          <Route path="/login" component={Login} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
