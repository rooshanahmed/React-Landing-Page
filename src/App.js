import React from 'react'
import { makeStyles, CssBaseline } from '@material-ui/core'
import Header from './components/Header';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assests/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
}))

export default function App () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
    </div>
  )
}