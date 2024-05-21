import React, { useState } from 'react'
import Productdetail from './productdetail'
import { TbShoppingCart } from 'react-icons/tb'
import { TbEye } from 'react-icons/tb'
import { TbHeartPlus } from 'react-icons/tb'
import { TbLogin } from 'react-icons/tb'
import { CgCloseO } from 'react-icons/cg'
import { useAuth0 } from '@auth0/auth0-react'
import './product.css'

const Product = ({
  product,
  setProduct,
  detail,
  view,
  close,
  setClose,
  addtocart
}) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()
  const filterproduct = product => {
    const update = Productdetail.filter(x => {
      return x.category === product
    })
    setProduct(update)
  }
  const AllProducts = () => {
    setProduct(Productdetail)
  }
  return (
    <>
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
                      <button
                        className='addbtn'
                        onClick={() => loginWithRedirect()}
                      >
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
      <div className='products'>
        <h2># Products</h2>
        <p>Home . products</p>
        <div className='container'>
          <div className='filter'>
            <div className='categories'>
              <h3>categories</h3>
              <ul>
                <li onClick={() => AllProducts()}>All Products</li>
                <li onClick={() => filterproduct("men's clothing")}>
                  Men's clothing
                </li>
                <li onClick={() => filterproduct('jewelery')}>Jewelery</li>
                <li onClick={() => filterproduct('electronics')}>
                  Electronics
                </li>
                <li onClick={() => filterproduct("women's clothing")}>
                  Women's clothing
                </li>
                <li onClick={() => filterproduct('Gaming')}>Gaming</li>
              </ul>
            </div>
          </div>
          <div className='productbox'>
            <div className='contant'>
              {product.map(curElm => {
                return (
                  <>
                    <div className='box' key={curElm.id}>
                      <div className='img_box'>
                        <img src={curElm.image} alt={curElm.title}></img>
                        <div className='icon'>
                          {isAuthenticated ? (
                            <li onClick={() => addtocart(curElm)}>
                              <TbShoppingCart />
                            </li>
                          ) : (
                            <li onClick={() => loginWithRedirect()}>
                              <TbShoppingCart />
                            </li>
                          )}

                          <li onClick={() => view(curElm)}>
                            <TbEye />
                          </li>
                          <li>
                            <TbHeartPlus />
                          </li>
                        </div>
                      </div>
                      <div className='detail'>
                        <p>{curElm.category}</p>
                        <h3>{curElm.title}</h3>
                        <h4>${curElm.price}</h4>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
