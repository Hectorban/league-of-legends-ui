import React, {FC} from 'react';

import './app.scss'
import TeamInfo from'./Components/TeamInfo'

const app:FC = () => {
  console.log("Eslint dont yell at me")

  return (
    <div id='app'>
      <div className='app-container'>
        <TeamInfo/>
      </div>
    </div>
  );
};

export default app;
