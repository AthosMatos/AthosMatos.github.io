import EmailIcon from '@mui/icons-material/Email'
import LockIcon from '@mui/icons-material/Lock'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { useState } from 'react'
import styles from './Input.module.css'
import { InputProps } from './intefaces'

const Input = ({ value, onChange, type, label, placeholder, error }: InputProps) => {
    const [hidden, setHidden] = useState(true)

    return (
        <div
            className={styles.wrapper}
            style={
                error
                    ? {
                          outline: '2px solid red',
                      }
                    : {}
            }
        >
            <div className={styles['icon-wrapper']}>
                {type === 'email' ? (
                    <EmailIcon className={styles.icon} />
                ) : type === 'password' ? (
                    <LockIcon className={styles.icon} />
                ) : (
                    <PhoneAndroidIcon className={styles.icon} />
                )}
            </div>

            <div className={styles['inputs-wrapper']}>
                <label className={styles.label}>{label}</label>
                <input
                    placeholder={placeholder}
                    type={hidden && type == 'password' ? 'password' : type == 'number' ? 'number' : 'text'}
                    className={styles.input}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
            {type == 'password' && (
                <div
                    className={styles['icon-wrapper']}
                    onClick={() => {
                        setHidden(!hidden)
                    }}
                >
                    {!hidden ? (
                        <VisibilityIcon className={styles.visibility} />
                    ) : (
                        <VisibilityOffIcon className={styles.visibility} />
                    )}
                </div>
            )}
        </div>
    )
}
export default Input
