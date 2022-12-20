import styles from './button.module.css'

export function SharedButtonComponent({ children, ...props }) {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  )
}
