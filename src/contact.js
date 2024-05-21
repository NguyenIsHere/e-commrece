import React, { useState } from 'react'
import './contact.css'
import { useAuth0 } from '@auth0/auth0-react'

const Contact = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0()
  const [users, setUser] = useState({
    Name: '',
    Email: '',
    Subject: '',
    Message: ''
  })
  let name, value
  const data = e => {
    name = e.target.name
    value = e.target.value
    setUser({ ...users, [name]: value })
  }
  const sendata = async e => {
    const { Name, Email, Subject, Message } = users
    e.preventDefault()
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ Name, Email, Subject, Message })
    }
    const res = await fetch(
      'https://easy-chat-5bb9a-default-rtdb.firebaseio.com/Message.json',
      options
    )
    console.log(res)
    if (res) {
      setUser({
        Name: '',
        Email: '',
        Subject: '',
        Message: ''
      })
      alert('Message Sent')
    } else {
      alert('An error occured, Please try again later')
    }
  }

  return (
    <>
      <div className='contact_container'>
        <div className='contant'>
          <h2>#Contact us</h2>
          <div className='form'>
            <form method='POST'>
              {isAuthenticated ? (
                <input
                  type='text'
                  name='Name'
                  value={user.name}
                  placeholder='Enter Your Fullname'
                  required
                  autoComplete='off'
                  onChange={data}
                />
              ) : (
                <input
                  type='text'
                  name='Name'
                  value={users.Name}
                  placeholder='Enter Your Fullname'
                  required
                  autoComplete='off'
                  onChange={data}
                />
              )}
              {isAuthenticated ? (
                <input
                  type='email'
                  name='Email'
                  value={user.email}
                  placeholder='Enter Your Email'
                  required
                  autoComplete='off'
                  onChange={data}
                />
              ) : (
                <input
                  type='email'
                  name='Email'
                  value={users.Email}
                  placeholder='Enter Your Email'
                  required
                  autoComplete='off'
                  onChange={data}
                />
              )}
              <input
                type='text'
                name='Subject'
                value={users.Subject}
                placeholder='Enter Your Subject'
                required
                autoComplete='off'
                onChange={data}
              />
              <textarea
                name='Message'
                value={users.Message}
                placeholder='Enter Your Message'
                required
                autoComplete='off'
                onChange={data}
              ></textarea>
              {isAuthenticated ? (
                <button type='submit' onClick={sendata}>
                  Send
                </button>
              ) : (
                <button onClick={loginWithRedirect}>Login</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
