import React from 'react'
import { makeStyles, AppBar, IconButton, Toolbar } from '@material-ui/core'
import SortIcon from '@material-ui/icons/Sort'

const useStyles = makeStyles((theme) => ({
    appbar: {
        background: 'none',
        fontFamily: 'Nunito', 
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    colorText: {
        color: '#5aff3d'
    }
}))
export default function Header() {
    const classes = useStyles();

    return (
        <div>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>My<span className={classes.colorText}>Island.</span></h1>
                    <IconButton>
                        <SortIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}