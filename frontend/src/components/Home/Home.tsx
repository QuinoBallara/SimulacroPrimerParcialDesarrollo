import React from 'react'
import { AddButton } from './AddButton/AddButton'
import { Title } from './Title/Title'
import { CardsContainer } from './CardsContainer/CardsContainer'

export const Home = () => {
    return (
        <div>
            <Title />
            <AddButton />
            <CardsContainer />
        </div>

    )
}
