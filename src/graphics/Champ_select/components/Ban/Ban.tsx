import React, { FC, ReactElement } from 'react';
import { Bans } from 'src/types/champSelect';

interface Props {
    data: Bans["myTeamBans"] 
    side: string
}

const Ban: FC<Props> = ({data, side}:Props): ReactElement => {
    console.log(data)

    return (
        <div className={`ban-selection -${side}`}>
            <div className='ban-selection-container'>
                <p>a</p>
            </div>
        </div>
    );
};

export default Ban;