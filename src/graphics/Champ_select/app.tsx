import React, {ReactElement, useEffect, useState} from 'react';
import ReactLoading from 'react-loading'
import { ChampSelectType } from 'src/types/champSelect';
import NCGStore, { replicate } from "../../stores/NodecgStore";

import Team from './components/Team';

const app: React.FC = (): ReactElement => {
  const [repState, setRepState] = useState({
    replicants: NCGStore.getReplicants(),
  });

  useEffect(() => {
    replicate("champSelectUpdate"); // You can subscribe to replicants with this method
  }, []);

  useEffect(() => {
    NCGStore.on("change", () => {
      setRepState({
        replicants: NCGStore.getReplicants(),
      });
    });
  }, []);
  
  const {
    replicants: { champSelectUpdate }, // Used to take out a replicant from the replicants object
  } = repState || {}

  if(!champSelectUpdate) {
    return (
      <div className='loading-container'>
        <ReactLoading
        className='loading'
        type="spinningBubbles" 
        color="black" 
        height={400} 
        width={400} 
        />
      </div>
    )
  }
  const champSelect:ChampSelectType = champSelectUpdate
  console.log(champSelect)
  const { myTeam, theirTeam, bans} = champSelect
  const { myTeamBans, theirTeamBans} = bans
  
  return (
    <div id="app">
      <div className="app-background">
        <img className="background" src="https://i.imgur.com/6hlMZtm.png" alt="El fondo deberia estar aqui >:c"/>
      </div>
      <div className="app-container">
        <Team
          key={1}
          side="Blue"
          data={myTeam}
          bans={myTeamBans}
        />
        <Team
          key={2}
          side="Red"
          data={theirTeam}
          bans={theirTeamBans}
        />
      </div>
    </div>
  );
};

export default app;