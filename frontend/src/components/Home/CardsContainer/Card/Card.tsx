import React, { useState } from 'react'
import CardElements from '../../../../types/CardElements'
import { Link } from 'react-router-dom'
import { ApiUrl } from '../../../ApiURL'
import { useEffect } from 'react'
import './Card.css'

type prop = {
    title: string,
    id: string,
    doUpdate: () => void
}

export const Card = ({ title, id, doUpdate }: prop) => {
    const route = '/game/' + id
    const [keepAlive, setKeepAlive] = useState(true)

    const deleteSport = () => {
        setKeepAlive(!keepAlive)
    }

    useEffect(() => {
        if (!keepAlive) {
            fetch(ApiUrl + '/games/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => { setKeepAlive(!keepAlive) }).then(() => { doUpdate() })
        }
    }, [keepAlive])

    return (
        <div className='card'>
            <p>{title}</p>
            <Link to={route} >
                <button>
                    Details
                </button>
            </Link>
            <button onClick={deleteSport}>Borrar</button>
        </div>
    )
}
