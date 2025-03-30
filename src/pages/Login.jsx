import React, { useContext } from 'react'
import { login } from '../services/userApi'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import UserContext from '../contexts/UserContextBase'

const Login = () => {
  const {
    handleSubmit,
    register
  } = useForm();
  const { setUser, setIsLoggedIn, setServerMessage } = useContext(UserContext)

  let navigate = useNavigate()
  const onSubmit = async (data) => {
    try {
      const response = await login(data)
      setUser({ username: data.username })
      setIsLoggedIn(true)
      navigate('/profile')
    } catch (error) {
      setServerMessage(error.message)
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register('username', { required: true })}
          id="username-input"
        />
        <input
          type="password"
          {...register('password', { required: true })}
          id="userpwd-input"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login