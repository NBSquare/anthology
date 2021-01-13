import React from 'react';
import Jumbotron from './Jumbotron';
import backgroundImage from './placeholder.jpg';
import privacy from './privacy.jpg';
import server from './server.jpg';

const Home = () => {
  return (
    <div id='content'>
      <Jumbotron
        text='The Future of Entertainment is Here.'
        buttonText='Watch Trailers'
        buttonAction={() => alert('starting!')}
        backgroundImage={backgroundImage}
      />
      <Jumbotron text='Your Favorite Creators. And nobody else.' backgroundImage={privacy} />
      <Jumbotron text='The only spoiler-free streaming service.' backgroundImage={server} />
    </div>
  );
};

export default Home;
