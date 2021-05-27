import React from 'react';

interface Props {
    champName: string
    spell1Name: string
    spell2Name: string
    team: number
    summonerId: number
}
const PlayerPick = ({champName, spell1Name, spell2Name, team, summonerId}:Props) => {
    console.log("AAAA")
    return (
        <div>
            <h1>aaa</h1>
        </div>
    );
};

export default PlayerPick;