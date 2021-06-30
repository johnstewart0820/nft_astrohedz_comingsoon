import React from 'react'
import { Box } from '@material-ui/core'
import useStyles from './style'
import twitter from 'assets/images/Home/twitter.png'
import instagram from 'assets/images/Home/instagram.png'
import discord from 'assets/images/Home/discord.png'
import band from 'assets/images/Home/band.png'
import openSoon from 'assets/images/Home/openSoon.gif'
import description from 'assets/images/Home/description.png'

const Home = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <div className={classes.container}>
        <img src={band} className={classes.band} />
      </div>
      <div className={classes.container}>
        <img src={openSoon} className={classes.openSoon} />
      </div>
      <div className={classes.container}>
        <img src={description} className={classes.description} />
      </div>
      <a href="https://twitter.com/astrohedz" target="_blank" rel="noreferrer">
        <img src={twitter} className={classes.socialTwitter} />
      </a>
      <a href="https://instagram.com/astrohedz" target="_blank" rel="noreferrer">
        <img src={instagram} className={classes.socialInstagram} />
      </a>
      <a href="https://discord.gg/jGXRQFuZtA" target="_blank" rel="noreferrer">
        <img src={discord} className={classes.socialDiscord} />
      </a>
    </Box>
  )
}

export default Home
