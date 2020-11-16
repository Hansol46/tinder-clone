import { IconButton } from '@material-ui/core'
import React from 'react'
import style from '../styles/SwipeButtons.module.sass'


function SwipeButtons() {
    return (
        <div className={style.swipeButtons}>
            <IconButton>
            <span className="material-icons replay">
                replay
            </span>
            </IconButton>
            <IconButton>
            <span className="material-icons close">
                close
            </span>
            </IconButton>
            <IconButton>
            <span className="material-icons star">
                star
            </span>
            </IconButton>
            <IconButton>
            <span className="material-icons favorite">
                favorite
            </span>
            </IconButton>
            <IconButton>
            <span className="material-icons flash">
                flash_on
            </span>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
