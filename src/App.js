import Home from "./Home";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <div id="app" className="d-flex flex-column">
      <Router>
        <Nav
          locations={[
            { href: "/news", name: "News" },
            { href: "/videos", name: "Videos" },
          ]}
        />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/news">
            <h1>News</h1>
          </Route>
          <Route path="/videos">
            <h1>Videos</h1>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
