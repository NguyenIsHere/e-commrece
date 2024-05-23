import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDropright } from 'react-icons/io'
import { TbTruck } from 'react-icons/tb'
import { TbCurrencyDollar } from 'react-icons/tb'
import { TbFilePercent } from 'react-icons/tb'
import { TbHeadphones } from 'react-icons/tb'
import { TbShoppingCart } from 'react-icons/tb'
import { TbEye } from 'react-icons/tb'
import { TbHeartPlus } from 'react-icons/tb'
import { CgCloseO } from 'react-icons/cg'
import './home.css'
import Productdetail from './productdetail'
import { useAuth } from './useAuth'
import ProductCard from './ProductCard'

const Home = ({ detail, view, close, setClose, addtocart }) => {
  const { user, loading, login, logout } = useAuth()
  const isAuthenticated = !!user
  return (
    <>
      <div className='top_banner'>
        <div className='container'>
          <div className='detail'>
            <h2>The Best Note Book Collection 2024</h2>
            <Link to='/product' className='link'>
              <span>Shop Now</span>
              <div className='icon-wrapper'>
                <IoIosArrowDropright />
              </div>
            </Link>
          </div>
          <div className='img_box'>
            <img src='./img/slider-img.png' alt='sliderimg' />
          </div>
        </div>
      </div>

      {close ? (
        <div className='product_detail'>
          <div className='container'>
            <button className='closebtn' onClick={() => setClose(false)}>
              <CgCloseO />
            </button>
            {detail.map(curElm => {
              return (
                <div className='product_box'>
                  <div className='img_box'>
                    <img src={curElm.image} alt={curElm.title}></img>
                  </div>
                  <div className='detail'>
                    <h4>{curElm.category}</h4>
                    <h2>{curElm.title}</h2>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      In nihil, cum at maiores numquam sequi architecto officiis
                      aliquam excepturi molestiae assumenda maxime quibusdam
                      amet delectus nam sunt voluptas quo molestias.
                    </p>
                    <h3>${curElm.price}</h3>
                    {isAuthenticated ? (
                      <button
                        className='addbtn'
                        onClick={() => addtocart(curElm)}
                      >
                        Add To Cart
                      </button>
                    ) : (
                      <button className='addbtn' onClick={() => login()}>
                        Add To Cart
                      </button>
                    )}
                  </div>
                </div>
              )
            })}

            <div className='productbox'></div>
          </div>
        </div>
      ) : null}

      <div className='product_type'>
        <div className='container'>
          <div className='box'>
            <div className='img_box'>
              <img src='./img/MobilePhone.png' alt='mobile' />
            </div>
            <div className='detail'>
              <p>23 products</p>
            </div>
          </div>
          <div className='box'>
            <div className='img_box'>
              <img src='./img/SmartWatch.png' alt='watch' />
            </div>
            <div className='detail'>
              <p>15 products</p>
            </div>
          </div>
          <div className='box'>
            <div className='img_box'>
              <img src='./img/HeadPhone.png' alt='headphone' />
            </div>
            <div className='detail'>
              <p>52 products</p>
            </div>
          </div>
          <div className='box'>
            <div className='img_box'>
              <img src='./img/Cpu.png' alt='cpu' />
            </div>
            <div className='detail'>
              <p>63 products</p>
            </div>
          </div>
        </div>
      </div>
      <div className='about'>
        <div className='container'>
          <div className='box'>
            <div className='icon'>
              <TbTruck />
            </div>
            <div className='detail'>
              <h3>Free Shipping</h3>
              <p>Order above $1000</p>
            </div>
          </div>
          <div className='box'>
            <div className='icon'>
              <TbCurrencyDollar />
            </div>
            <div className='detail'>
              <h3>Return & Refund</h3>
              <p>Money Back Guarantee</p>
            </div>
          </div>
          <div className='box'>
            <div className='icon'>
              <TbFilePercent />
            </div>
            <div className='detail'>
              <h3>Member Discount</h3>
              <p>On every order</p>
            </div>
          </div>
          <div className='box'>
            <div className='icon'>
              <TbHeadphones />
            </div>
            <div className='detail'>
              <h3>Customer Support</h3>
              <p>Every Time Call Support</p>
            </div>
          </div>
        </div>
      </div>

      <div className='product'>
        <h2>Top Products</h2>
        <div className='container'>
          {Productdetail.map(curElm => (
            <ProductCard
              key={curElm.id}
              product={curElm}
              addtocart={addtocart}
              view={view}
            />
          ))}
        </div>
      </div>
      <div className='banner'>
        <div className='container'>
          <div className='detail'>
            <h4>LATEST TECHNOLOGY ADDED</h4>
            <h3>Apple iPad 10.2 9th Gen - 2021</h3>
            <p>$986</p>
            <Link to='/product' className='link'>
              <span>Shop Now</span>
              <div className='icon-wrapper'>
                <IoIosArrowDropright />
              </div>
            </Link>
          </div>
          <div className='img_box'>
            <img src='./img/slider-img.png' alt='sliderimg'></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
