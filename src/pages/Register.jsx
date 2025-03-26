import React, { useState }from 'react'
import { useForm } from 'react-hook-form'
import { createUser } from '../services/userApi'
import TextInput from '../components/TextInput'

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  

  const [serverMessage, setServerMessage] = useState("")

  const onSubmit = async (data) => {
    try{
      const response = await createUser(data)
      setServerMessage({type: "success", text: response.message})
      reset()
    } catch(error){
      setServerMessage({
        type: "error",
        text: error.response?.data?.error || "Something went wrong!",
      })
    }
  }
  return (
    <div className="form-container">
      <h2>Create new user</h2>
      {serverMessage && (
        <p>{serverMessage.text}</p>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          name="username"
          label="Username"
          register={register}
          registerOptions={{ required: "Username is required" }}
          error={errors.username}
        />
        <TextInput
          name="password"
          label="Password"
          type="password"
          register={register}
          registerOptions={{
            required: "Password is required",
            minLength: { value: 6, message: "At least 6 characters long" },
          }}
          error={errors.password}
        />
        <button type="submit">Create User</button>
      </form>
    </div>
  )
}

export default Register