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
    height: '60%',
    padding: 5,
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
    height: '5vh',
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
    height: '13vh',
  },
  socialContainer: {
    textAlign: 'center',
    width: '100%',
    height: '10vh',
  },
  spaceThreeContainer: {
    height: '12vh',
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
