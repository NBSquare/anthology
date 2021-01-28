import React from 'react';
import Jumbotron from './components/Jumbotron';
import backgroundImage from './media/placeholder.jpg';
import fortnite from './media/fortnite.jpg';
import joker from './media/joker.png';
import privacy from './media/privacy.jpg';
import server from './media/server.jpg';

const Home = () => {
  return (
    <div id='content'>
      <Jumbotron backgroundClass='blur' backgroundImage={backgroundImage}>
        <h1 className='text-light mb-3 text-center'>The Future of Entertainment is Here.</h1>
        <button className='btn btn-primary btn-lg mt-4' onClick={() => alert('starting')}>Watch Trailers</button>
      </Jumbotron>
      <Jumbotron backgroundClass='blur' backgroundImage={privacy}>
        <div className="full-width">
          <h1 className="text-end text-light">Your Favorite Creators.</h1>
          <h1 className="text-end text-light mb-3">And nobody else.</h1>
          <h3 className="text-end text-light mt-4">We will never collaborate with anybody else.</h3>
        </div>
      </Jumbotron>
      <Jumbotron backgroundClass='blur' backgroundImage={fortnite}>
        <div className='half-width'>
          <h1 className='text-start text-light mb-3'>Unlock exclusive skins with Tisbucks.</h1>
          <h4 className='text-light text-start'>For purchase with liquid assets only, no credit.</h4>
        </div>
        <div className='half-width side-image'>
          <img src={joker} alt='' />
        </div>
      </Jumbotron>
      <Jumbotron backgroundClass='blur' backgroundImage={server}>
        <h1 className="text-light mb-3">The <u>ONLY</u> spoiler-free streaming service.</h1>
      </Jumbotron>
    </div>
  );
};

export default Home;
