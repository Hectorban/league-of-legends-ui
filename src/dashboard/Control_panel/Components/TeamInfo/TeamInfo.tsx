/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, useState } from 'react'
import { useFormik } from 'formik'
import { setTimeout } from 'timers'

interface Props {
    Team1Name: string
    Team2Name: string
    Team1Score: number
    Team2Score: number
}

const TeamInfoRep:any = nodecg.Replicant("TeamInfoRep")

const Teaminfo:FC<Props> = ({Team1Name, Team2Name, Team1Score, Team2Score}:Props) => {
    const [updateAlert, setupdateAlert] = useState(false)

    const showAlert = () => {
        setupdateAlert(true)
        const timer = setTimeout(() => {
            setupdateAlert(false)
        }, 1500)
        return () => clearTimeout(timer)
    }    

    const formik = useFormik({
        initialValues: {
            Team1Name,
            Team2Name,
            Team1Score,
            Team2Score
        },
        onSubmit: values => {
            TeamInfoRep.value = values
        }
    }) 
    
    return (
        <div className='teaminfo'>
            <form onSubmit={formik.handleSubmit} className='teaminfo-form'>

                <div className='teaminfo-form-team1name'>
                    <label htmlFor='Team1Name'>Equipo 1</label>
                    <input 
                    id='Team1Name'
                    name='Team1Name'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.Team1Name}
                    />
                </div>
                
                <div className='teaminfo-form-team2name'>
                    <label htmlFor='Team2Name'>Equipo 2</label>
                    <input 
                    id='Team2Name'
                    name='Team2Name'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.Team2Name}
                    />
                </div>

                <h1 className='teaminfo-form-versus'>VS</h1>
                <h1 className='teaminfo-form-scores'>-</h1>

                <input 
                id='Team1Score'
                name='Team1Score'
                type='number'
                onChange={formik.handleChange}
                value={formik.values.Team1Score}
                />

                <input 
                id='Team2Score'
                name='Team2Score'
                type='number'
                onChange={formik.handleChange}
                value={formik.values.Team2Score}
                />
                
                {updateAlert ? (
                    <span className='teaminfo-form-alert'>Actualizado!</span>
                ) : null}

                <button 
                    className='teaminfo-form-submitbutton' 
                    type='submit' 
                    onClick={() => showAlert()}>
                    Actualizar
                </button>

            </form>
        </div>
    )
}

export default Teaminfo