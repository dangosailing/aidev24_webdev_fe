import React from 'react'
import Form from '../components/Form'
import { createUser } from '../services/userApi'


const Register = () => {
  const fields = [
    { name: "username", label: "Username", validation: { required: "Username is required" } },
    { name: "password", label: "Password", type: "password", validation: { 
        required: "Password is required", 
        minLength: { value: 6, message: "Password must be at least 6 characters" } 
      } 
    }
  ]

  return (
    <div className="form-container">
      <h2>Create new user</h2>
      <Form fields={fields} onSubmit={createUser} />
    </div>
  )
}

export default Register