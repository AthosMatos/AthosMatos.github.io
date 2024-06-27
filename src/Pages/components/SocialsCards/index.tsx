import AppleIcon from '@mui/icons-material/Apple'
import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'
import TwitterIcon from '@mui/icons-material/Twitter'
import styles from './SocilasCards.module.css'

const SocialsCards = () => {
    const fontSizes = '34px'
    return (
        <div className={styles.wrapper}>
            <div className={styles.Card}>
                <GoogleIcon style={{ fontSize: fontSizes }} className={styles['icon--google']} />
            </div>
            <div className={styles.Card}>
                <FacebookIcon style={{ fontSize: fontSizes }} className={styles['icon--facebook']} />
            </div>
            <div className={styles.Card}>
                <AppleIcon style={{ fontSize: fontSizes }} className={styles['icon--apple']} />
            </div>
            <div className={styles.Card}>
                <TwitterIcon style={{ fontSize: fontSizes }} className={styles['icon--twitter']} />
            </div>
        </div>
    )
}

export default SocialsCards
