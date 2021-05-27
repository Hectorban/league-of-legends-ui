import React, { ReactElement, useState, useEffect } from 'react';
import ReactLoading from 'react-loading'
import PlayerPick from '../PlayerPick'

const champInfoRep:any = nodecg.Replicant("ddChampInfo")
const summInfoRep:any = nodecg.Replicant("ddSummInfo")

interface Props {
    data: Array<unknown>
    bans: Array<unknown>
    side: string
}

const Team = ({side, data, bans}:Props): ReactElement => {
    const [champInfo, setChampInfo]:any = useState()
    const [summInfo, setSummInfo]:any = useState()

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
            <div className="selection">
                {data.map((playerSelection:any) =>{
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
            <div className="bans">
                {bans.map((ban) => {
                    console.log(ban)
                })}
            </div>
        </div>
    );
};

export default Team;