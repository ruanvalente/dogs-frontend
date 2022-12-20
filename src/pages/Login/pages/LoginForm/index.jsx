import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { useForm } from '../../../../hooks/useForm'
import { Context } from '../../../../context/userContext'

import { SharedButtonComponent } from '../../../../shared/components/Button'
import { SharedInputComponent } from '../../../../shared/components/Input'

import { ErrorMessage } from '../../../../core-ui/ErrrorMessager/ErrorMessager'

import styles from './loginForm.module.css'

export function LoginForm() {
  const { userLogin, error, loading } = useContext(Context)

  const username = useForm()
  const password = useForm()

  async function handleSubmitForm(event) {
    event.preventDefault()

    if (username.validator() && password.validator()) {
      userLogin({ username: username.value, password: password.value })
    }
  }

  return (
    <section className="animationLeft" onSubmit={handleSubmitForm}>
      <h1 className="dogs_title">Login</h1>
      <form className={styles.loginForm}>
        <SharedInputComponent
          label="Usuário"
          type="text"
          name="username"
          {...username}
        />
        <SharedInputComponent
          label="Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <SharedButtonComponent disabled>Carregando...</SharedButtonComponent>
        ) : (
          <SharedButtonComponent>Entrar</SharedButtonComponent>
        )}
        <ErrorMessage error={error} />
      </form>
      <Link className={styles.forgot} to="/login/forgot-login">
        Perdeu a senha ?
      </Link>

      <div className={styles.createAccount}>
        <h2 className={styles.subtitleForm}>Cadastre-se</h2>
        <p>Ainda não possui conta ?</p>
        <Link className={styles.createAccountButton} to="/login/create-account">
          Cadastrar
        </Link>
      </div>
    </section>
  )
}
