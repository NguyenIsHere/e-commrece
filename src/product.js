import React, { useState } from 'react'
import Productdetail from './productdetail'
import { TbShoppingCart } from 'react-icons/tb'
import { TbEye } from 'react-icons/tb'
import { TbHeartPlus } from 'react-icons/tb'
import { TbLogin } from 'react-icons/tb'
import { CgCloseO } from 'react-icons/cg'
import './product.css'
import { useAuth } from './useAuth'
import ProductCard from './ProductCard'

const Product = ({
  product,
  setProduct,
  detail,
  view,
  close,
  setClose,
  addtocart
}) => {
  const { user, loading, login, logout } = useAuth()
  const isAuthenticated = !!user
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
            {detail.map(curElm => (
              <ProductCard
                key={curElm.id}
                product={curElm}
                addtocart={addtocart}
                view={view}
              />
            ))}

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
                            <li onClick={() => login()}>
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
