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
  backgroundImage: {},
  band: {
    width: '75%',
    marginTop: '10%',
    '@media (max-width: 600px)': {
      maxWidth: '540px',
      marginTop: '200px',
    },
    '@media (min-width: 600px)': {
      maxWidth: '540px',
      marginTop: '25%',
    },
    '@media (min-width: 768px)': {
      maxWidth: '720px',
      marginTop: '15%',
    },
    '@media (min-width: 960px)': {
      maxWidth: '900px',
      marginTop: '10%',
    },
    '@media (min-width: 1280px)': {
      maxWidth: '1200px',
      marginTop: '5%',
    },
    '@media (max-height: 600px)': {
      maxWidth: '540px',
      marginTop: '50px',
    },
    '@media (min-width: 1280px, max-height: 768)': {
      marginTop: '200px',
    },
  },
  openSoon: {
    width: '30%',
    marginTop: '-8%',
  },
  description: {
    width: '75%',
    marginTop: '-3%',
  },
}))

export default useStyles
