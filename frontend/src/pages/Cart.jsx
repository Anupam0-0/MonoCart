import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const Cart = () => {
  const {products, currency, cartItems } = useContext(ShopContext);
  const [cartData, setCartData] = useState([])

  useEffect(() => {
    let tempData = []
    for(const items in cartItems){
      for(const item in cartItems[items]){ //there quantity of each size
        if (cartItems[items][item] > 0){
          // let product = products.find((product) => product._id === items)
          // let size = product.sizes.find((size) => size.size === item)
          tempData.push({
            product: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    console.log(tempData)
    setCartData(tempData)
  }, [cartItems])

  return (
    <div className='border-t-2 pt-14'>
      <div className='text-2xl mb-3' >
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item.product);

            if (!productData) {
              return null;
            }

            return(
              <div key={index}  className='flex justify-between items-center border-b-2 py-4'>
                <div className='flex items-center'>
                  <img src={productData.image[0]}  alt={productData.name} className='w-20 h-20 object-cover' />
                  <div className='ml-4'>
                    <h1 className='text-lg'>{productData.name}</h1>
                    <p className='text-sm'>{item.size}</p>
                    <p className='text-sm'>{currency}{productData.price}</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <button className='text-2xl'>-</button>
                  <p className='mx-4'>{item.quantity}</p>
                  <button className='text-2xl'>+</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cart