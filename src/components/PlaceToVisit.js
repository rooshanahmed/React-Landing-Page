import React from 'react'
import { makeStyles } from '@material-ui/core'
import ImageCard from './imageCard';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
}))

export default function PlaceToVisit() {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <ImageCard />
        </div>
    )
}