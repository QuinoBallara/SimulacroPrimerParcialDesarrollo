import React from 'react'
import { Link } from 'react-router-dom'
import './AddButton.css'

export const AddButton = () => {
    return (
        <div>
            <button className='addButton'><Link to='/addGame'>Add Sport</Link></button>
        </div>
    )
}
