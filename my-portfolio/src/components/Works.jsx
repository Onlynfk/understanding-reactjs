import React from 'react';
import NetFlix from '../assests/netflix.png';
import TrackIm from '../assests/health.svg';
import AbbaImage from '../assests/abbas.png';
import Spotify from '../assests/spotify.png';

import { Button } from '@chakra-ui/react';

const works = [
  {
    id: '1',
    title: "Abba's Clan",
    url: 'http://abbasclan.com',
    image: AbbaImage,
    description:
      'Abba`s Clan is a Writers and Readers Platform for writing and sharing short stories',
  },

  {
    id: '2',
    title: 'TrackImmunize',
    url: 'https://github.com/Onlynfk/trackimmunize',
    image: TrackIm,
    description:
      'A unique and functional pediatrics immunization managment system for tracking immunization records of children in Nigeria .  ',
  },

  {
    id: '3',
    title: 'My NetFlix Clone',
    url: 'https://netflixclone-5ebe4.web.app/',
    image: NetFlix,
    description:
      'Abba`s Clan is a Writers and Readers Platform for writing and sharing short stories',
  },
  {
    id: '4',
    title: 'MusicSoft -Spotify Clone',
    url: 'https://musicsoft-spotify.web.app/',
    image: Spotify,
    description:
      'A Spotify Clone built with Reactjs',
  },
];

function Works() {
  return (
    <div class="works" id="works">
      <h5 class="text-center mt-5 fw-bold"> 🧑‍💻 My Works</h5>
      <div class="row row-cols-1 row-cols-md-3 g-4 p-5 ">
        {works?.map(work => (
          <div class="col ">
            <div class="card works__bg ">
              <div class="card-body ">
                <h5 class="card-title works__title">{work.title}</h5>
              </div>
              <a href={work.url}>
                <img src={work.image} className='works__image' alt="... " />
              </a>
              <p class="card-text m-3  ">
                {' '}
                {work.description}
              </p>
              <div class="ml-3 mb-3 ">
                <a
                  href={work.url}
                  class="text-decoration-none m-2 text-secondary button_me"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div spacing={4} direction="row" align="center">
        <Button> View All Projects</Button>
      </div>
    </div>
  );
}

export default Works;
