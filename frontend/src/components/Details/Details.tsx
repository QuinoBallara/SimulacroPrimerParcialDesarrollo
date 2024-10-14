import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiUrl } from '../ApiURL';
import CardElements from '../../types/CardElements';
import { Link } from 'react-router-dom';
import './Details.css'

export const Details = () => {
    const id = useParams().id;
    const [data, setData] = useState<CardElements>()

    useEffect(() => {
        fetch(ApiUrl + '/games/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(data => setData(data[0]))
    }, [])

    return (
        <>
            <button className='goBack'><Link to='/home'>Go back</Link></button>
            <div className='cardDetails'>
                <h1>{data?.title}</h1>
                <p>{data?.description}</p>
                <p>Players Necessary: {data?.players}</p>
                <p>Category: {data?.categories}</p>
            </div>
        </>
    )
}
