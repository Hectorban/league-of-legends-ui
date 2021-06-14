import React, { FC, useEffect, useState} from 'react';
import NCGStore, { replicate } from "../../stores/NodecgStore";

import './app.scss'
import TeamInfo from'./Components/TeamInfo'

const app:FC = () => {
  const [repState, setRepState] = useState({
    replicants: NCGStore.getReplicants(),
  });

  useEffect(() => {
    replicate("TeamInfoRep"); // You can subscribe to replicants with this method
  }, []);

  useEffect(() => {
    NCGStore.on("change", () => {
      setRepState({
        replicants: NCGStore.getReplicants(),
      });
    });
  }, []);
  
  const {
    replicants: { TeamInfoRep }, // Used to take out a replicant from the replicants object
  } = repState || {}
  
  if (!TeamInfoRep) {
    return (
      <div>
        Loading
      </div>
    )
  }

  const TeamInfoRepData = TeamInfoRep || null 
  const { Team1Name, Team2Name, Team1Score, Team2Score } = TeamInfoRepData 
  
  return (
    <div id='app'>
      <div className='app-container'>
        <TeamInfo
          Team1Name = {Team1Name}
          Team2Name = {Team2Name}
          Team1Score = {Team1Score}
          Team2Score = {Team2Score}
        />
      </div>
    </div>
  );
};

export default app;
