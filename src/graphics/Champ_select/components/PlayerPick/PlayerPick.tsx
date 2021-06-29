import React, { useState, useEffect, FC } from 'react';
import { Action } from '~types/champSelect';

interface Props {
    champName: string
    spell1Name: string
    spell2Name: string
    team: number
    summonerId: number
    currentpick: Action
    cellId: number
}

const PlayerPick:FC<Props> = ({champName, spell1Name, spell2Name, team, summonerId, currentpick, cellId}:Props) => {
    const champImage = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champName}_0.jpg`;
    const spell1Image = `http://ddragon.leagueoflegends.com/cdn/11.6.1/img/spell/Summoner${spell1Name}.png`;
    const spell2Image = `http://ddragon.leagueoflegends.com/cdn/11.6.1/img/spell/Summoner${spell2Name}.png`;
    const [summonerName, setsummonerName] = useState(null)
    useEffect(() => {
        const fetchSummonerName = async () => {
            const response = await nodecg.sendMessage('summonerName', summonerId)
            setsummonerName(response)
        };
        fetchSummonerName()
    }, [])
    console.log(cellId)
    const summTrigger = false
    return (
        <div className='player-pick'>
            {summonerName ? (
                <div className='player-pick-container'>
                    {cellId === currentpick.actorCellId ? 
                    <video className='player-pick-currentpick' autoPlay muted loop>
                        <source src='https://www.dropbox.com/s/hq1zxvuliicjoge/Precomp-%201_2.webm?dl=1' type='video/webm'/>
                    </video>
                    : null}
                    <div className='player-pick-name'>{summonerName}</div>
                    {champName ? 
                    <img className='player-pick-champImage' src={champImage} alt={champName}/> 
                    : null}
                    {summTrigger ? 
                    <div className='player-pick-summonercontainer'>
                        <img className='player-pick-summoner1' src={spell1Image} alt='Summoner'/>
                        <img className='player-pick-summoner2' src={spell2Image} alt='Summoner'/>
                    </div>
                    : null}
                </div> ) 
                : null
            }            
        </div>
    );
};

export default PlayerPick;