import { IconButton } from '@material-ui/core'
import React from 'react'
import style from '../styles/Header.module.sass'

export const Header = () => {
    return (
        <div className={style.header}>


            <IconButton>
                <span className="material-icons account">
                    account_circle
                </span>
            </IconButton>


            <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJm9bUsk5L6fBkiOUGSDv9FBOKDZfVeYHJdw&usqp=CAU'
            className={style.headerLogo}

            />

            <IconButton>
                <span className="material-icons forum" >
                    forum
                </span>
            </IconButton>
        </div>
    )
}