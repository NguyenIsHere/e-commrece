import React from 'react'
import { Link } from 'react-router-dom'
import { CgCloseO } from 'react-icons/cg'
import './cart.css'

const Cart = ({ cart, setCart }) => {
  // increase qty
  const incqty = product => {
    const exist = cart.find(x => {
      return x.id === product.id
    })
    if (exist) {
      setCart(
        cart.map(curElm => {
          return curElm.id === product.id
            ? { ...exist, qty: exist.qty + 1 }
            : curElm
        })
      )
    }
  }
  // decrease qty
  const decqty = product => {
    const exist = cart.find(x => {
      return x.id === product.id
    })
    if (exist.qty === 1) {
      setCart(
        cart.filter(x => {
          return x.id !== product.id
        })
      )
    } else {
      setCart(
        cart.map(x => {
          return x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        })
      )
    }
  }
  // remove product
  const removeproduct = product => {
    const exist = cart.find(x => {
      return x.id === product.id
    })
    if (exist) {
      setCart(
        cart.filter(x => {
          return x.id !== product.id
        })
      )
    }
  }
  // total price
  const totalprice = cart.reduce(
    (price, item) => price + item.price * item.qty,
    0
  )

  return (
    <>
      <div className='cart_container'>
        {cart.length === 0 && (
          <div className='emptycart'>
            <h2 className='empty'>Your Cart is Empty</h2>
            <Link to='/product' className='emptycart_btn'>
              Shop Now
            </Link>
          </div>
        )}
        <div className='contant'>
          {cart.map(curElm => {
            return (
              <div className='cart_item' key={curElm.id}>
                <div className='img_box'>
                  <img src={curElm.image} alt={curElm.title}></img>
                </div>
                <div className='detail'>
                  <div className='info'>
                    <h4>{curElm.category}</h4>
                    <h3>{curElm.title}</h3>
                    <p>Price: ${curElm.price}</p>
                    <div className='qty'>
                      <button className='incqty' onClick={() => incqty(curElm)}>
                        +
                      </button>
                      <input type='text' value={curElm.qty}></input>
                      <button className='decqty' onClick={() => decqty(curElm)}>
                        -
                      </button>
                    </div>
                    <h4 className='subtotal'>
                      sub total: ${curElm.price * curElm.qty}
                    </h4>
                  </div>
                  <button
                    className='close'
                    onClick={() => removeproduct(curElm)}
                  >
                    <CgCloseO />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
        {cart.length > 0 && (
          <>
            <h2 className='totalprice'>Total: ${totalprice}</h2>
            <button className='checkout'>Check Out</button>
          </>
        )}
      </div>
    </>
  )
}

export default Cart
