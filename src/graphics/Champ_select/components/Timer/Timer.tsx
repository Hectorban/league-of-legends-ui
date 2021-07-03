import React, { FC, useState, useEffect } from 'react'
import useCountDown from 'react-countdown-hook'
import { Action } from '~types/champSelect'

interface Props {
    actions: Action[][]
}

const pickTime = 27 * 1000 // Secs
const interval = 1 * 10 // Also secs


const Timer:FC<Props> = ({actions, currentPick}: Props) => {
    const [timeLeft, {start, reset}] = useCountDown(pickTime, interval)
    const [length, setlength] = useState(actions.length)
    useEffect(() => {
        start();
    }, []);
    if(length === 0) {
        reset()
    }
    if(length < actions.length) {
        setlength(actions.length)
        start(pickTime)
    }

    console.log(timeLeft/10)
    return (
        <div className='timer'>
            <div className='timer-bar' style={{width:`${(timeLeft/1000)*71}px`}}/>
        </div>
    )
}

export default Timer
