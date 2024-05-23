import React from 'react'
import { TbShoppingCart, TbEye, TbHeartPlus } from 'react-icons/tb'
import { useAuth } from './useAuth' // Make sure the path is correct

const ProductCard = ({ product, addtocart, view }) => {
  const { user, login } = useAuth()
  const isAuthenticated = !!user

  return (
    <div className='box' key={product.id}>
      <div className='img_box'>
        <img src={product.image} alt={product.title}></img>
        <div className='icon'>
          {isAuthenticated ? (
            <li onClick={() => addtocart(product)}>
              <TbShoppingCart />
            </li>
          ) : (
            <li onClick={() => login()}>
              <TbShoppingCart />
            </li>
          )}
          <li onClick={() => view(product)}>
            <TbEye />
          </li>
          <li>
            <TbHeartPlus />
          </li>
        </div>
      </div>
      <div className='detail'>
        <p>{product.category}</p>
        <h3>{product.title}</h3>
        <h4>${product.price}</h4>
      </div>
    </div>
  )
}

export default ProductCard
