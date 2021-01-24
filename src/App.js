import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./Home";
import OurStory from "./OurStory";
import NotFound from "./NotFound";
import Streaming from "./Streaming";
import Nav from "./components/Nav";
import LoginModal from "./components/LoginModal";
import "./css/App.css";
import News from "./News";
import { useEffect, useState } from "react";
import TisbucksModal from "./components/TisbucksModal";

const useLocalStorage = (itemKey, defaultValue) => {
  const [itemValue, setItemValue] = useState(
    localStorage.getItem(itemKey) || defaultValue
  );
  useEffect(() => localStorage.setItem(itemKey, itemValue), [itemKey, itemValue]);
  return [itemValue, setItemValue];
};

function App() {
  const [username, setUsername] = useLocalStorage("username", "");
  const [tisbucks, setTisbucks] = useLocalStorage("tisbucks", 0);

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

  useEffect(() => {
    localStorage.setItem("tisbucks", tisbucks);
  }, [tisbucks]);

  return username === "" ? (
    <div id="app" className="d-flex flex-column">
      <Router>
        <Nav
          getBackground={(location) =>
            location === "/" ? "bg-transparent nav-transparent" : "bg-primary"
          }
          locations={[
            { href: "/our-story", name: "Our Story" },
            { href: "/news", name: "News" },
            { href: "/videos", name: "Videos" },
          ]}
          buttons={[
            {
              onClick: () => setModalOpen(true),
              content: "Free Trial",
            },
          ]}
        />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/our-story">
            <OurStory />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/videos">
            <h1>Videos</h1>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
      <LoginModal setUsername={setUsername} open={modalOpen} onClose={() => {setModalOpen(false)}} />
    </div>
  ) : (
    <Router>
      <Nav
        getBackground={() => "bg-dark"}
        locations={[]}
        buttons={[
          {
            onClick: () => alert("get more tisbucks"),
            color: "btn-secondary",
            content: (
              <>
                <i class="bi-cash me-2"></i>
                <span id="tisbucks-counter">{tisbucks}</span>
              </>
            ),
          },
          { onClick: () => setUsername(""), content: "Log Out" },
        ]}
      />

      <Switch>
        <Route path="/">
          <Streaming />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
      <TisbucksModal />
    </Router>
  );
}

export default App;
