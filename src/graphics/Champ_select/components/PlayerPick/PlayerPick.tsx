import React, { ReactElement, useState, useEffect, FC } from 'react';

interface Props {
    champName: string
    spell1Name: string
    spell2Name: string
    team: number
    summonerId: number
}

const PlayerPick:FC<Props> = ({champName, spell1Name, spell2Name, team, summonerId}:Props): ReactElement => {
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
    console.log(team)
    
    return (
        <div className='player-pick'>
            {summonerName ? (
                <div className='player-pick-container'>
                    <div className='player-pick-name'>{summonerName}</div>
                    <img className='player-pick-champImage' src={champImage} alt={champName}/>
                    <img className='player-pick-summoner1' src={spell1Image} alt='Bot Summoner'/>
                    <img className='player-pick-summoner2' src={spell2Image} alt='Bot Summoner'/>
                </div> ) 
                : null
            }            
        </div>
    );
};

export default PlayerPick;