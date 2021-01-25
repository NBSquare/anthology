import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './Home';
import OurStory from './OurStory';
import NotFound from './NotFound';
import Streaming from './Streaming';
import Nav from './components/Nav';
import LoginModal from './components/LoginModal';
import './css/App.css';
import News from './News';
import { useEffect, useState } from 'react';
import TisbucksModal from './components/TisbucksModal';

const useLocalStorage = (itemKey) => {
  const [itemValue, setItemValue] = useState(
    localStorage.getItem(itemKey) || ''
  );
  useEffect(() => localStorage.setItem(itemKey, itemValue), [
    itemKey,
    itemValue,
  ]);
  return [itemValue, setItemValue];
};

function App() {
  const [username, setUsername] = useLocalStorage('username');
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [tisbucks, setTisbucks] = useLocalStorage('tisbucks');
  const [tisbucksModalOpen, setTisbucksModalOpen] = useState(false);
  return username === '' ? (
    <div id='app' className='d-flex flex-column'>
      <Router>
        <Nav
          getBackground={(location) =>
            location === '/' ? 'bg-transparent nav-transparent' : 'bg-primary'
          }
          locations={[
            { href: '/our-story', name: 'Our Story' },
            { href: '/news', name: 'News' },
            { href: '/videos', name: 'Videos' },
          ]}
          buttons={[
            {
              onClick: () => setLoginModalOpen(true),
              content: 'Free Trial',
            },
          ]}
        />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/our-story'>
            <OurStory />
          </Route>
          <Route path='/news'>
            <News />
          </Route>
          <Route path='/videos'>
            <h1>Videos</h1>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
      <LoginModal
        setUsername={setUsername}
        open={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
    </div>
  ) : (
    <Router>
      <Nav
        getBackground={() => 'bg-dark'}
        locations={[]}
        buttons={[
          {
            onClick: () => setTisbucksModalOpen(true),
            color: 'btn-secondary',
            content: (
              <>
                <i class='bi-cash me-2'></i>
                <span id='tisbucks-counter'>{tisbucks}</span>
              </>
            ),
          },
          { onClick: () => setUsername(''), content: 'Log Out' },
        ]}
      />

      <Switch>
        <Route path='/'>
          <Streaming />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
      <TisbucksModal
        tisbucks={tisbucks}
        setTisbucks={setTisbucks}
        open={tisbucksModalOpen}
        onClose={() => setTisbucksModalOpen(false)}
      />
    </Router>
  );
}

export default App;
