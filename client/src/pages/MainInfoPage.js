import React from 'react'
import { Header } from '../components/Header'
import PhotoCard from '../components/PhotoCard'
import SwipeButtons from '../components/SwipeButtons'

export const MainInfoPage = () => {
    return (
        <>
            <div className='wrapper'>
                <Header />
                <PhotoCard />
                <SwipeButtons />
            </div>
        </>
    )
}