import styles from './error.module.css'

export function ErrorMessage({ error }) {
  if (!error) return null

  return <p className={styles.errorMessage}>{error}</p>
}
