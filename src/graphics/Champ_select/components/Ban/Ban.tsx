import React, { ReactElement } from 'react';
import { Bans } from 'src/types/champSelect';

interface Props {
    data: Bans["myTeamBans"] 
    side: string
}

const Ban: React.FC<Props> = ({data, side}:Props): ReactElement => {
    console.log(data)
    console.log(side)

    return (
        <div className={`ban-selection -${side}`}>
            <p>aa</p>
        </div>
    );
};

export default Ban;