import { makeStyles } from '@material-ui/styles'
import backgroundImage from 'assets/images/Home/backgroundImage.png'

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    width: '100%',
    height: '100vh',
    position: 'relative',
    background: 'url(' + backgroundImage + ') 50% 50% no-repeat rgb(249,249,249)',
    backgroundSize: 'cover',
  },
  socialTwitter: {
    width: '60px',
    height: '60px',
    position: 'absolute',
    top: '86%',
    left: 'calc(50% - 110px)',
    '&:hover': {
      cursor: 'pointer',
    },
    '@media (max-height: 600px)': {
      width: '30px',
      height: '30px',
      left: 'calc(50% - 65px)',
    },
  },
  socialInstagram: {
    width: '60px',
    height: '60px',
    position: 'absolute',
    top: '86%',
    left: 'calc(50% - 30px)',
    '&:hover': {
      cursor: 'pointer',
    },
    '@media (max-height: 600px)': {
      width: '30px',
      height: '30px',
      left: 'calc(50% - 15px)',
    },
  },
  socialDiscord: {
    width: '60px',
    height: '60px',
    position: 'absolute',
    top: '86%',
    left: 'calc(50% + 50px)',
    '&:hover': {
      cursor: 'pointer',
    },
    '@media (max-height: 600px)': {
      width: '30px',
      height: '30px',
      left: 'calc(50% + 33px)',
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
  },
  band: {
    width: '50%',
    marginTop: '10%',
    '@media (max-width: 600px)': {
      marginTop: '200px',
    },
    '@media (min-width: 600px)': {
      marginTop: '25%',
    },
    '@media (min-width: 768px)': {
      marginTop: '15%',
    },
    '@media (min-width: 960px)': {
      marginTop: '10%',
    },
    '@media (min-width: 1280px)': {
      marginTop: '3%',
    },
    '@media (max-height: 600px)': {
      marginTop: '50px',
      width: '40%',
      marginBottom: '30px',
    },
    '@media (min-height: 600px)': {
      marginTop: '50px',
      width: '40%',
    },
    '@media (min-height: 768px)': {
      marginTop: '50px',
      width: '40%',
    },
  },
  openSoon: {
    width: '25%',
    marginTop: '-3%',
  },
  description: {
    width: '75%',
    marginTop: '-3%',
  },
}))

export default useStyles
