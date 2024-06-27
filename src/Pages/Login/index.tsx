import Button from '../components/Button'
import Input from '../components/Input'
import SocialsCards from '../components/SocialsCards'
import styles from '../Pages.module.scss'
import useLogin from './useLogin'

const Login = () => {
    const { form, goToSignUp, log, updateEmail, updatePassword } = useLogin()
    return (
        <div className={styles.wrapper}>
            <div className={styles.loginWrapper}>
                <p className={styles.title}> Login</p>
                <div className={styles['subtitle--wrapper']}>
                    <p className={styles.subtitle}>Welcome back!</p>
                    <p className={styles.subtitle}>Please login to continue</p>
                </div>
                <div className={styles.inputsWrapper}>
                    <Input
                        error={form.email.error}
                        label="Email Address"
                        placeholder="Your email address"
                        type="email"
                        value={form.email.value}
                        onChange={updateEmail}
                    />
                    <Input
                        error={form.password.error}
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                        value={form.password.value}
                        onChange={updatePassword}
                    />
                </div>
                <Button
                    onClick={() => {
                        log()
                    }}
                    name="Login"
                />
                <a className={styles.forgot}>Forgot Password</a>
            </div>

            <div className={styles.socials}>
                <p className={styles.subtitle}>Or Continue with Social Accounts</p>
                <SocialsCards />
                <p className={styles.subtitle}>
                    <p className={styles.acc}>
                        Don't have an account?{' '}
                        <a onClick={goToSignUp} className={styles.forgot}>
                            Create Now
                        </a>
                    </p>
                </p>
            </div>
        </div>
    )
}

export default Login
