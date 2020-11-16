import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import style from '../styles/PhotoCard.module.sass'
import axios from '../axios/axios'


function PhotoCard() {
    const [people,setPeople] = useState([])
    
    useEffect(() => {
        async function fetchData () {
            const req = await axios.get('/tinder/cards')
            setPeople(req.data)
        }
        fetchData()
    }, [])

// console.log(people)

    const swiped = (direction, nameToDelete) => {
        console.log('removing ' + nameToDelete)
    }
    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }
    return (
        <div className={style.mainContent}>
        <div className={style.tinderCards}>
            <div className={style.cardContainer}>
                {people.map( (person, id) => (
                    <TinderCard
                        className='swipe'
                        key={id}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={()=> outOfFrame(person.name)}
                    >
                        <div 
                        style={{backgroundImage: `url(${person.imgUrl})`}} 
                        className={style.card}
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
        </div>
    )
}

export default PhotoCard
