import React, { FC } from 'react'

interface Props {
    Team1Name: string
    Team1Score: number
    Team2Name: string
    Team2Score: number
}

const Scoreboard:FC<Props> = ({ Team1Name,Team1Score,Team2Name,Team2Score }:Props) => {
    
    console.log("a")
    return (
        <div className='scoreboard'>
            <p>A</p>
        </div>
    )
}

export default Scoreboard
