import React, { useState, useEffect } from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { TbHeart } from 'react-icons/tb'
import { TbShoppingBagCheck } from 'react-icons/tb'
import { TbUser } from 'react-icons/tb'
import { TbLogin } from 'react-icons/tb'
import { TbLogout } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import './nav.css'
import { useAuth } from './useAuth'

const Nav = ({ searchbtn }) => {
  const [search, setSearch] = useState()

  const { user, loading, login, logout } = useAuth()
  const isAuthenticated = !!user

  return (
    <div>
      {loading ? (
        <div>Loading...</div> // Replace this with your loading spinner
      ) : (
        <>
          <div className='free'>
            <div className='icon'>
              <TbTruckDelivery />
            </div>
            <p>FREE Shipping when shopping up to $1000</p>
          </div>
          <div className='main_header'>
            <div className='container'>
              <div className='left_section'>
                <div className='logo'>
                  <img src='../img/logo.svg' alt='logo' />
                </div>
                <div className='nav'>
                  <ul>
                    <li>
                      <Link to='/' className='link'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to='/product' className='link'>
                        Product
                      </Link>
                    </li>
                    <li>
                      <Link to='/about' className='link'>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to='/contact' className='link'>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='right_section'>
                <div className='search_box'>
                  <button onClick={() => searchbtn(search)}>Search</button>
                  <input
                    type='text'
                    value={search}
                    placeholder='Enter The Product Name'
                    autoComplete='off'
                    onChange={e => setSearch(e.target.value)}
                  />
                </div>
                <div className='icon'>
                  {isAuthenticated && (
                    <div className='account'>
                      <div className='user_icon'>
                        <TbUser />
                      </div>
                      <p>Hello, You logged in</p>
                    </div>
                  )}

                  <div className='second_icon'>
                    <Link to='/' className='link'>
                      <TbHeart />
                    </Link>
                    <Link to='cart' className='link'>
                      <TbShoppingBagCheck />
                    </Link>
                  </div>
                  <div className='auth'>
                    {isAuthenticated ? (
                      <button onClick={logout}>
                        <TbLogout />
                      </button>
                    ) : (
                      <button onClick={() => login()}>
                        <TbLogin />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}{' '}
    </div>
  )
}

export default Nav
