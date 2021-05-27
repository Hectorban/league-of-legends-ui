import React, { ReactElement, useState, useEffect } from 'react';
import PlayerPick from '../PlayerPick'

const champInfoRep:any = nodecg.Replicant("ddChampInfo")
const summInfoRep:any = nodecg.Replicant("ddSummInfo")

interface Props {
    data: Array<unknown>
    bans: Array<unknown>
    side: string
}

const Team = ({side, data, bans}:Props): ReactElement => {
    const [champInfo, setChampInfo] = useState()
    const [summInfo, setSummInfo] = useState()

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

    console.log(champInfo)
    console.log(summInfo)
    return (
        <div className={`team-selection -${side}`}>
            <div className="selection">
                {data.map((playerSelection:any) =>{
                    const { spell1d, spell2d, summonerId, team, cellId } = playerSelection
                    return (
                        <PlayerPick
                        key={cellId}
                        team = {team}
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