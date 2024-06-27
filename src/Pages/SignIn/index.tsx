import Button from '../components/Button'
import Input from '../components/Input'
import SocialsCards from '../components/SocialsCards'
import styles from './SignIn.module.css'
import useSignIn from './useSignIn'

const SignIn = () => {
    const { form, goToLogin, register, updateEmail, updateMobile, updatePassword } = useSignIn()
    return (
        <div className={styles.wrapper}>
            <div className={styles.loginWrapper}>
                <p className={styles.title}> Create Account</p>
                <div className={styles['subtitle--wrapper']}>
                    <p className={styles.subtitle}>
                        Enter your information below or continue with social media account
                    </p>
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
                        error={form.mobile.error}
                        label="Mobile Number"
                        placeholder="Your mobile number"
                        type="number"
                        value={form.mobile.value}
                        onChange={updateMobile}
                    />
                    <Input
                        error={form.password.error}
                        label="Password"
                        placeholder="Create password"
                        type="password"
                        value={form.password.value}
                        onChange={updatePassword}
                    />
                </div>
                <Button
                    onClick={() => {
                        register()
                    }}
                    name="Create Account"
                />
            </div>

            <div className={styles.socials}>
                <p className={styles.subtitle}>Or Register with Social Accounts</p>
                <SocialsCards />
                <p className={styles.subtitle} style={{ marginTop: '12px' }}>
                    Already have an account?
                    <a onClick={goToLogin} className={styles.forgot}>
                        Login Now
                    </a>
                </p>
            </div>
        </div>
    )
}

export default SignIn
