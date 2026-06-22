import styles from './Button.module.css'

const Button = ({children = 'Button', onClick}) => {
  return (
    <button type="button" className={styles.btn} onClick={onClick}>{children}</button>
  )
}

export default Button