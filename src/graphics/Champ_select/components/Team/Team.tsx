import React, { ReactElement } from 'react';

interface Props {
    data: any
    side: string
}

const Team = ({side, data}:Props): ReactElement => {
    console.log(side)
    console.log(data)
    return (
        <div>
            <h1>aaa</h1>
        </div>
    );
};

export default Team;