import styles from './Button.module.css'
import { ButtonProps } from './intefaces'

const Button = ({ name, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} className={styles.wrapper}>
            <p className={styles.name}>{name}</p>
        </button>
    )
}

export default Button
