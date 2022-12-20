import { useContext } from 'react'
import { Context } from '../../context/userContext'

export function AccountPage() {
  const { userData } = useContext(Context)
  return <div>Hello, {userData && userData.nome}!</div>
}
