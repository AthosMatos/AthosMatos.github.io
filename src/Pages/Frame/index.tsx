import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Toaster } from 'react-hot-toast'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import styles from './Frame.module.css'

const imgUrl =
    'https://s3-alpha-sig.figma.com/img/8478/f892/1f0eac6f343f568563a2361230744276?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AlrBwpz3PtRSM4vBVQHHHF1uS~ZKgrJENM4cj-UWum3Www1FcsftK7j2hww1xyWQP7fopU28RA7EabLvfG6b8BT15kIaRV0168BfrO9Eml-Ig5hW56jYQ7B-jNZOJpxeGytHKZqsRIGrt5n9KmKDeIIvjKjdbQB2ZL6yX3epA28LHERvLlatn1Xms06O3RUa7wQOjHPv0586r1crYm3WRWcznfxJLxg~7jaiJPtapxISuKFs1jI3uHLTVvnWIG7eyJHo2g4Av~-pjX4alSkXImR2zxq0KTrmcM9lGE8pJeR4LepuZrXRXi5OwGQN31ko~CFgwfJOEJxupcmvwfMKLg__'

const Frame = () => {
    const nav = useNavigate()
    const location = useLocation()
    return (
        <div className={styles.back}>
            <Toaster
                toastOptions={{
                    style: {
                        fontSize: 'clamp(0.8rem, 3.5vw, 1rem)',
                    },
                }}
                position="top-center"
                reverseOrder={false}
            />
            <div className={styles['img-wrapper']}>
                <img src={imgUrl} className={styles.img} alt="logo" />
            </div>
            <div className={styles.outlet}>
                <ArrowBackIcon
                    onClick={() => {
                        if (location.pathname === '/login') nav('/')
                        else nav(-1)
                    }}
                    className={styles.Micon}
                />

                <Outlet />
            </div>
        </div>
    )
}

export default Frame
