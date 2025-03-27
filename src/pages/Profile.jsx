import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const Profile = () => {

  const [token, setToken] = useState('token')
  const navigate = useNavigate()

  const Logout = () => {
    sessionStorage.removeItem('token')
    navigate('/')
  }

  useEffect(() => {
    const sessionToken = sessionStorage.getItem('token')
    if (!sessionToken) {
      navigate('/login')

    } else {
      setToken(sessionToken)
    }
  }, [navigate])

  return (
    <div>
      <h1>Hello {username}</h1>
      <Button onClick={Logout} text={"Logout"}/>
    </div>

  )
}

export default Profile