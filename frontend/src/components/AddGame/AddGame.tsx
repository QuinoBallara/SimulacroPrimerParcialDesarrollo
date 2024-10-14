import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CardElements from '../../types/CardElements'
import { ApiUrl } from '../ApiURL'
import './AddGame.css'

export const AddGame = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [players, setPlayers] = useState('')
    const [categories, setCategories] = useState('')
    const [sport, setSports] = useState<CardElements>()
    let isReady = false;

    const addSport = () => {
        if (title.length > 0 && description.length > 0 && players.length > 0 && categories.length > 0) {
            setSports({
                id: '',
                title: title,
                description: description,
                players: players,
                categories: categories
            })
            isReady = !isReady
        } else {
            alert('Uno de los campos está vacío')
        }

    }

    useEffect(() => {
        if (title.length > 0 && description.length > 0 && players.length > 0 && categories.length > 0) {

            fetch(ApiUrl + '/games', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: sport?.title,
                    description: sport?.description,
                    players: sport?.players,
                    categories: sport?.categories
                })
            }).then(response => response.json()).then(data => console.log("Sport added: " + data)).then(() => location.replace('/'))
        }
    }, [sport])

    return (
        <>
            <h1>Add a new sport</h1>
            <div className='values'>
                <div className='box'>
                    <label>Name:</label>
                    <input value={title} placeholder='Name' onChange={data => setTitle(data.target.value)} />
                </div>
                <div className='box'>
                    <label>Description: </label>
                    <input value={description} placeholder='Description' onChange={data => setDescription(data.target.value)} />
                </div>
                <div className='box'>
                    <label>Players:</label>
                    <input value={players} placeholder='Players' onChange={data => setPlayers(data.target.value)} />
                </div>
                <div className='box'>
                    <label>Categories</label>
                    <input value={categories} placeholder='Categories' onChange={data => setCategories(data.target.value)} />
                </div>
            </div>
            <button onClick={addSport}>Add</button>
            <button><Link to='/home'>Go Back</Link></button>
        </>
    )
}
