import React, { useRef } from 'react'
import { Box } from '@material-ui/core'
import useStyles from './style'
import twitter from 'assets/images/Home/twitter.png'
import instagram from 'assets/images/Home/instagram.png'
import discord from 'assets/images/Home/discord.png'
import band from 'assets/images/Home/band.png'
import openSoon from 'assets/images/Home/openSoon.png'
import description from 'assets/images/Home/description.png'

const Home = () => {
  const classes = useStyles()
  const descriptionRef = useRef(null)
  const bandRef = useRef(null)
  const openSoonRef = useRef(null)

  let rateScreen = 1
  window.onresize = displayWindowSize
  window.onload = displayWindowSize
  function displayWindowSize() {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)

    rateScreen = window.screen.width / window.screen.height
    if (rateScreen < 0.5) {
      descriptionRef.current.style.height = '35%'
      bandRef.current.style.height = '47%'
      openSoonRef.current.style.height = '48%'
    } else if (rateScreen < 0.61) {
      descriptionRef.current.style.height = '42%'
      bandRef.current.style.height = '62%'
      openSoonRef.current.style.height = '64%'
    } else if (rateScreen < 0.83) {
      descriptionRef.current.style.height = '50%'
      bandRef.current.style.height = '72%'
      openSoonRef.current.style.height = '73%'
    } else if (rateScreen < 0.95) {
      descriptionRef.current.style.height = '60%'
      bandRef.current.style.height = '82%'
      openSoonRef.current.style.height = '83%'
    } else if (rateScreen < 1.2) {
      descriptionRef.current.style.height = '80%'
      bandRef.current.style.height = '92s%'
      openSoonRef.current.style.height = '93%'
    } else {
      descriptionRef.current.style.height = '100%'
      bandRef.current.style.height = '100%'
      openSoonRef.current.style.height = '100%'
    }
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.spaceOneContainer} />
      <Box className={classes.bandContainer}>
        <img src={band} className={classes.band} ref={bandRef} />
      </Box>
      <Box className={classes.openContainer}>
        <img src={openSoon} className={classes.openSoon} ref={openSoonRef} />
      </Box>
      <Box className={classes.descriptionContainer}>
        <img src={description} className={classes.description} ref={descriptionRef} />
      </Box>
      <Box className={classes.spaceTwoContainer} />
      <Box className={classes.socialContainer}>
        <a href="https://twitter.com/astrohedz" target="_blank" rel="noreferrer">
          <img src={twitter} className={classes.socialTwitter} />
        </a>
        <a href="https://instagram.com/astrohedz" target="_blank" rel="noreferrer">
          <img src={instagram} className={classes.socialInstagram} />
        </a>
        <a href="https://discord.gg/unWzTdD98z" target="_blank" rel="noreferrer">
          <img src={discord} className={classes.socialDiscord} />
        </a>
      </Box>
      <Box className={classes.spaceThreeContainer} />
    </Box>
  )
}

export default Home
