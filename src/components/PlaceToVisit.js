import React from 'react'
import { makeStyles } from '@material-ui/core'
import ImageCard from './imageCard'
import places from '../static/places'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}))

export default function PlaceToVisit() {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <ImageCard place={places[0]} />
            <ImageCard place={places[1]} />
        </div>
    )
}