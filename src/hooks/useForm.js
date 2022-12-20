import { useState } from 'react'

const VALIDATOR = {
  email: {
    regex: /^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i,
    message: 'Preencha um e-mail váldo'
  }
}

export function useForm(type) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)

  function validator(value) {
    if (type === false) return true

    if (value.length === 0) {
      setError('Preencha um valor')
      return false
    }

    if (VALIDATOR[type] && !VALIDATOR[type].regex.test(value)) {
      setError(VALIDATOR[type].message)
      return false
    }
    setError(null)
    return true
  }

  function onChange({ target }) {
    if (error) {
      validator(value)
    }
    setValue(target.value)
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validator: () => validator(value),
    onBlur: () => validator(value)
  }
}
