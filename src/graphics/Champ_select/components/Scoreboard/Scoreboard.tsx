import React, { FC } from 'react'

interface Props {
    Team1Name: string
    Team1Score: number
    Team2Name: string
    Team2Score: number
}

const Scoreboard:FC<Props> = ({ Team1Name,Team1Score,Team2Name,Team2Score }:Props) => {
    
    console.log("Scoreboard")
    return (
        <div className='scoreboard'>
            <p className='team1Name'>{Team1Name}</p>
            <p className='team2Name'>{Team2Name}</p>
            <p className='team1Score'>{Team1Score}</p>
            <p className='team2Score'>{Team2Score}</p>
            <p className='versus'>VS</p>
        </div>
    )
}

export default Scoreboard
