import React from 'react';
import Jumbotron from './Jumbotron';
import backgroundImage from './placeholder.jpg';
import privacy from './privacy.jpg';
import server from './server.jpg';

const Home = () => {
  return (
    <div id='content'>
      <Jumbotron backgroundImage={backgroundImage}>
        <h1 className='text-light mb-3'>The Future of Entertainment is Here.</h1>
        <button className='btn btn-primary btn-lg mt-4' onClick={() => alert('starting')}>Watch Trailers</button>
      </Jumbotron>
      <Jumbotron backgroundImage={privacy}>
        <h1 className="text-light mb-3">Your Favorite Creators. And nobody else.</h1>
      </Jumbotron>
      <Jumbotron backgroundImage={server}>
        <h1 className="text-light mb-3">The only spoiler-free streaming service.</h1>
      </Jumbotron>
    </div>
  );
};

export default Home;
