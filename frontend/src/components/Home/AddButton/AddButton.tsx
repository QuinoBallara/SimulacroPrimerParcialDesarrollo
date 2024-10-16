import React from 'react'
import { Link } from 'react-router-dom'
import './AddButton.css'

export const AddButton = () => {
    return (
        <div>
            <Link to='/addGame'>
                <button className='addButton'>
                    Add Sport
                </button>
            </Link>
        </div>
    )
}
