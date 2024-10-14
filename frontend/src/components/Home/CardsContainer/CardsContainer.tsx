import React, { useState, useEffect } from 'react'
import { Card } from './Card/Card'
import CardElements from '../../../types/CardElements'
import { ApiUrl } from '../../ApiURL'
import './CardsContainer.css'

export const CardsContainer = () => {
    const [cards, setCards] = useState<CardElements[]>([])
    const [update, setUpdate] = useState(true)

    const updateame = () => {
        setUpdate(true)
    }

    useEffect(() => {
        if (update) {
            fetch(ApiUrl + '/games', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json()).then(data => setCards(data)).then(() => { setUpdate(false) })
        }
    }, [update])
    console.log(cards)

    return (
        <div className='container'>
            {cards.map(task => <Card key={task.id} id={task.id} title={task.title} doUpdate={updateame} />)}
        </div>
    )
}
