import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Dogs } from '@/assets/dogs.svg'
import { Context } from '@/context/userContext'

import styles from './header.module.css'

export function Header() {
  const { userData, userLogout } = useContext(Context)
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {userData ? (
          <Link className={styles.login} to="/login">
            {userData.nome}
            <button onClick={userLogout}>Sair</button>
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  )
}
