import React from 'react'
import { makeStyles } from '@material-ui/core'
import ImageCard from './imageCard'
import places from '../static/places'
import useWindowPosition from '../hook/useWindowPosition'

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

    const checked = useWindowPosition('header');

    return(
        <div className={classes.root}>
            <ImageCard place={places[1]} checked={checked} />
            <ImageCard place={places[0]} checked={checked} />
        </div>
    )
}