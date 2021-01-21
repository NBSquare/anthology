import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './Home';
import OurStory from './OurStory';
import Nav from './components/Nav';
import './css/App.css';
import News from './News';

function App() {
  return (
    <div id='app' className='d-flex flex-column'>
      <Router>
        <Nav
          locations={[
            { href: '/our-story', name: 'Our Story'},
            { href: '/news', name: 'News'},
            { href: '/videos', name: 'Videos' },
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
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
