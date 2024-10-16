import React from 'react'
import { AddButton } from './AddButton/AddButton'
import { Title } from './Title/Title'
import { CardsContainer } from './CardsContainer/CardsContainer'
import { ThemeButton } from '../ThemeButton/ThemeButton'

export const Home = () => {
    return (
        <div>
            <Title />
            <ThemeButton />
            <AddButton />
            <CardsContainer />
        </div>

    )
}
