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
    color: 'white',
  },
  socialTwitter: {
    // width: '60px',
    height: '60%',
    padding: 5,
    // position: 'absolute',
    // top: '86%',
    // left: 'calc(50% - 110px)',
    // '&:hover': {
    //   cursor: 'pointer',
    // },
    // ''@media (max-height: 600px)': {
    //   width: '30px'':,,
    //   height: '30px',
    //   left: 'calc(50% - 65px)',
    // },
  },
  socialInstagram: {
    height: '60%',
    padding: 5,
  },
  socialDiscord: {
    height: '60%',
    padding: 5,
  },
  spaceOneContainer: {
    height: '10vh',
  },
  bandContainer: {
    width: '100%',
    height: '33vh',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  openContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '17vh',
    paddingBottom: '2vh',
  },
  descriptionContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '7vh',
  },
  spaceTwoContainer: {
    height: '15vh',
  },
  socialContainer: {
    textAlign: 'center',
    width: '100%',
    height: '10vh',
  },
  spaceThreeContainer: {
    height: '5vh',
  },
  band: {
    height: '100%',
  },
  openSoon: {
    height: '100%',
  },
  description: {
    height: '100%',
  },
}))

export default useStyles
