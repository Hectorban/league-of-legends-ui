import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Bans } from 'src/types/champSelect';

import BanPick from '../BanPick'

interface Props {
    data: Bans["myTeamBans"] 
    side: string
}

const champInfoRep = nodecg.Replicant("ddChampInfo")

const Ban: FC<Props> = ({data, side}:Props): ReactElement => {
    const [champInfo, setChampInfo] = useState<any>()

    useEffect(() =>{
    const fetchddInfo = async ()=>{
        NodeCG.waitForReplicants(champInfoRep).then(() => {
            setChampInfo(champInfoRep.value)
      });
    };
    fetchddInfo();
    }, []);

    if (!champInfo) {
        return (
            <div> 
               Loading
            </div>
        )
    }

    return (
        <div className={`ban-selection -${side}`}>
                {data.map((banpick) => {
                    const banName = champInfo[banpick]
                    return (
                        <BanPick 
                            banName = {banName}
                        />
                    )
                })}
        </div>
    );
};

export default Ban;