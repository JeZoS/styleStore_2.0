import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/navbar/login";
import Contact from "./components/navbar/contact";
import About from "./components/navbar/about";
import PublicHomePage from "./components/Main/HomePage";
import FashionTips from "./components/options/tips";
import MenCollection from "./components/Men/men";
import WomenCollection from "./components/women/women";
import LookBook from "./components/Main/lookbook";
import WomenSummer from "./components/women/WomenSummer";
import WomenWinter from "./components/women/WomenWinter";
import MenWinter from "./components/Men/menWinter";
import SummerMen from "./components/Men/menSummer";
import SingleProd from "./components/women/SingleProd";
import HinaKhan from "./components/lookbook/hinakhan";
import Deepika from "./components/lookbook/deepika";
import WeddingMen from "./components/Men/menWedding";
import OfficeMen from "./components/Men/menOffice";
import Profile from "./components/Profile";

class App extends React.Component {
  constructor() {
    super();
  }

  moveto = () => {
    <Redirect from="/login" to="/" />;
    // console.log("111");
  };

  render() {
    return (
      <div id="main">
        <>
          <BrowserRouter>
            <Switch>
              <Route exact path="/login">
                <Login moveto={this.moveto} />
              </Route>
              <Route exact path="/About">
                <About />
              </Route>
              <Route exact path="/Contact">
                <Contact />
              </Route>

              <Route exact path="/">
                <PublicHomePage />
              </Route>

              <Route exact path="/FashionTips">
                <FashionTips />
              </Route>
              <Route exact path="/Men">
                <MenCollection />
              </Route>
              <Route exact path="/Women">
                <WomenCollection />
              </Route>
              <Route exact path="/LookBook">
                <LookBook />
              </Route>
              <Route exact path="/women_summer">
                <WomenSummer />
              </Route>
              <Route exact path="/women_winter">
                <WomenWinter />
              </Route>
              <Route exact path="/men_winter">
                <MenWinter />
              </Route>
              <Route exact path="/men_summer">
                <SummerMen />
              </Route>
              <Route exact path="/men_office">
                <OfficeMen />
              </Route>
              <Route exact path="/men_wedding">
                <WeddingMen />
              </Route>
              <Route exact path="/product/:id">
                <SingleProd />
              </Route>

              <Route exact path="/lookBook/Hina_Khan">
                <HinaKhan />
              </Route>
              <Route exact path="/lookBook/Deepika">
                <Deepika />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
            </Switch>
          </BrowserRouter>
        </>
      </div>
    );
  }
}
export default App;
