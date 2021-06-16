import React, { ReactElement, useState, useEffect, FC } from 'react';
import ReactLoading from 'react-loading'
import { ChampSelectType } from 'src/types/champSelect';
import PlayerPick from '../PlayerPick'

const champInfoRep = nodecg.Replicant("ddChampInfo")
const summInfoRep = nodecg.Replicant("ddSummInfo")

interface Props {
    data: ChampSelectType["myTeam"]   
    side: string
}

const Team:FC<Props> = ({side, data}:Props): ReactElement => {
    const [champInfo, setChampInfo] = useState<any>()
    const [summInfo, setSummInfo] = useState<any>()

    useEffect(() =>{
    const fetchddInfo = async ()=>{
        NodeCG.waitForReplicants(champInfoRep).then(() => {
            setChampInfo(champInfoRep.value)
      });
        NodeCG.waitForReplicants(summInfoRep).then(() =>{
            setSummInfo(summInfoRep.value)
        })
    };
    fetchddInfo();
    }, []);
    if (!champInfo || !summInfo) {
        return(
            <div>
                <ReactLoading 
                    type="spinningBubbles" 
                    color="black" 
                    height={400} 
                    width={400} 
                />
            </div>
        )
    }

    return (
        <div className={`team-selection -${side}`}>
                {data.map((playerSelection) =>{
                    const { spell1Id, spell2Id, summonerId, team, cellId, championId } = playerSelection
                    const champName = champInfo[championId]
                    const spell1Name = summInfo[spell1Id]
                    const spell2Name = summInfo[spell2Id]
                    return (
                        <PlayerPick
                            key={cellId}
                            team = {team}
                            summonerId = {summonerId}
                            champName = {champName}
                            spell1Name = {spell1Name}
                            spell2Name = {spell2Name}
                        />
                    )
                })}
        </div>
    );
};

export default Team;