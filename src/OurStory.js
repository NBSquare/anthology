import React, { useLayoutEffect, useRef, useState } from "react";
import Jumbotron from "./components/Jumbotron";
import Animated from "./components/Animated";
import "./css/OurStory.css";
import TeamRow from "./components/TeamRow";

import blinn from "./media/blinn.jpg";
import cekirge from "./media/cekirge.jpg";
import cagan from "./media/cagan.jpg";
import grnja from "./media/grnja.jpg";
import elston from "./media/elston.jpg";
import schneider from "./media/schneider.jpg";
import sabel from "./media/sabel.jpg";
import shashkina from "./media/shashkina.jpg";

const OurStory = () => {
  const [visible, setVisible] = useState(false);

  const ref = useRef(null);

  useLayoutEffect(() => {
    const top = ref.current.getBoundingClientRect().top;
    const onScroll = () => {
      if (top < window.scrollY + window.innerHeight * 0.5) {
        setVisible(true);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Jumbotron>
        <h1 className="text-light">So much more than entertainment.</h1>
      </Jumbotron>
      <div className="intro" ref={ref}>
        <Animated classNames="intro" visible={visible}>
          <h2>Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            pretium risus at purus rutrum, at sodales purus volutpat. Maecenas
            tristique, diam ut luctus congue, ipsum nisl tristique libero, in
            cursus nulla elit laoreet ex. Suspendisse ut turpis ultricies,
            hendrerit dolor ut, gravida eros. Morbi et lorem tincidunt urna
            bibendum porttitor. Vestibulum ut purus viverra, maximus ante in,
            feugiat odio. Aliquam tempus volutpat nisl quis placerat. Maecenas
            malesuada, metus ultrices sagittis semper, leo nunc mattis dolor,
            sit amet semper erat massa a nisi. Aliquam erat volutpat. Vestibulum
            imperdiet nunc eu ipsum malesuada, aliquam pulvinar ex laoreet. Ut
            vestibulum odio id justo placerat imperdiet. Cras dapibus risus eu
            velit luctus cursus.
          </p>
        </Animated>
      </div>
      <div className="team">
        <Animated visible={visible}>
          <h2 className="mb-3">TisTeam</h2>
        </Animated>
        <div className="container">
          <TeamRow
            classNames='px-5'
            members={[
              { name: "Nathan Blinn", title: "Founder & CEO", picture: blinn },
              { name: "Efe Cekirge", title: "CFO", picture: cekirge },
            ]}
          />
          <TeamRow
            members={[
              {
                name: "Joshua Cagan",
                title: "Head of Content Acquisition",
                picture: cagan,
              },
              {
                name: "Katie Sabel",
                title: "Head of Online Media",
                picture: sabel,
              },
              {
                name: "Emily Schneider",
                title: "Head of Internet Content",
                picture: schneider,
              },
            ]}
          />
          <TeamRow
            members={[
              {
                name: "Madeline Elston",
                title: "Junior Writing Trainee",
                picture: elston,
              },
              {
                name: "Alice Shashkina",
                title: "Head of Marketing",
                picture: shashkina,
              },
              { name: "Gavin Grnja", title: "Legal Counsel", picture: grnja },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default OurStory;
