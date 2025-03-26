import React from 'react'
import { login } from '../services/userApi'
import { useForm } from 'react-hook-form'

const Login = () => {
  const {
    handleSubmit,
    register
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await login(data)
      console.log(response)
    } catch (error) {
      console.error(error)
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