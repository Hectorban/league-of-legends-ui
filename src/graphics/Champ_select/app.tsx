import React, {FC, useEffect, useState} from 'react'
import ReactLoading from 'react-loading'
import { ChampSelectType } from '~types/champSelect'
import NCGStore, { replicate } from "../../stores/NodecgStore"

// import * as example from './util/CSExample.json'
import './app.scss'
import Team from './components/Team'
import Ban from './components/Ban'
import Scoreboard from './components/Scoreboard'
import Timer from './components/Timer'

interface TeamInfoRepTypes {
  Team1Name: string
  Team2Name: string
  Team1Score: number
  Team2Score: number
}

const app: FC = () => {
  const [repState, setRepState] = useState({
    replicants: NCGStore.getReplicants(),
  });

  useEffect(() => {
    replicate("champSelectUpdate");
    replicate('TeamInfoRep') // You can subscribe to replicants with this method
  }, []);

  useEffect(() => {
    NCGStore.on("change", () => {
      setRepState({
        replicants: NCGStore.getReplicants(),
      });
    });
  }, []);
  
  const {
    replicants: { champSelectUpdate, TeamInfoRep }, // Used to take out a replicant from the replicants object
  } = repState || {}
  
  if(!champSelectUpdate || !TeamInfoRep) {
    return (
      <div className='loading-container'>
        <ReactLoading
          className='loading'
          type="spinningBubbles" 
          color="black" 
          height={200} 
          width={200} 
        />
      </div>
    )
  }
  const TeamInfoData:TeamInfoRepTypes = TeamInfoRep
  const { Team1Name, Team2Name, Team1Score, Team2Score } = TeamInfoData

  const champSelect:ChampSelectType = champSelectUpdate
  const { myTeam, theirTeam, bans, actions } = champSelect
  const { myTeamBans, theirTeamBans} = bans
  console.log(actions.length > 0 ? actions[actions.length - 1][0] : null)
  return (
    <div id="app">
{/*       <div className="app-background">
        <img className="background" src="https://i.imgur.com/YWy7MZ5.jpg" alt="El fondo deberia estar aqui >:c"/>
      </div> */}
      <div className="app-container">
        <Team
          key={1}
          side="Blue"
          data={myTeam}
        />
        <Team
          key={2}
          side="Red"
          data={theirTeam}
        />
        <Ban
          key={3}
          side='Blue'
          data={myTeamBans}
        />
        <Ban
          key={4}
          side='Red'
          data={theirTeamBans}
        />
        <Scoreboard
          Team1Name = {Team1Name}
          Team2Name = {Team2Name}
          Team1Score = {Team1Score}
          Team2Score = {Team2Score}
        />
        <Timer
          actions= {actions}
        />
      </div>
    </div>
  );
};

export default app;