import React from 'react';
import './OurTeam.css';
import Judin from './assets/4[1].png';
import adrash from  './assets/8.png'
import thejus from  './assets/10.png';
import  vyshag from './assets/11.png';
import sanal from './assets/7.png';
import anwar from './assets/9.png';

const teamMembers = [
  { name: 'Vyshag', role: 'Video Grapher', imageUrl: vyshag },
  { name: 'Adarsh', role: 'Video Editor', imageUrl: adrash },
  { name: 'Sanal', role: 'Digital Marketing', imageUrl:sanal },

  { name: 'Judin', role: 'Developer', imageUrl: Judin },
    { name: 'Anwar Sadik', role: 'CMO', imageUrl: anwar },
  
  { name: 'Thejus', role: 'HR', imageUrl: thejus},
];

function OurTeam() {
  return (
    <div className="team-container">
      <h1>Our <span>Team</span></h1>
      <div className="team-slider">
        <div className="team-cards">
          {teamMembers.concat(teamMembers).map((member, index) => ( // duplicated for smooth scroll loop
            <div className="team-card" key={index}>
              <img src={member.imageUrl} alt={member.name} />
              <div className="card-info">
                <h2>{member.name}</h2>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
