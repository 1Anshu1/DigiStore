import { useEffect, useState } from 'react';
import productImg1 from '../assets/productImg1.jpg'
import { MdDeleteForever } from "react-icons/md";
import {useDispatch, useSelector} from 'react-redux'
import ContentWrapper from '../components/ContentWrapper';
import { getCartAction, removeCartAction } from '../redux/features/cartSlice';

const ShoppingCart = () => {
  const dispatch = useDispatch()
  let cartData = useSelector((state) => state.cart)
  const cartProducts = cartData?.data?.cartItems

  const handleRemove = (product_id) => {
     dispatch(removeCartAction(product_id))
  }

  useEffect(() => {
      dispatch(getCartAction())
  },[])

  
  return (
    <ContentWrapper>
      <div className="text-3xl font-semibold my-10 ">Shopping Cart</div>
      <div className='flex justify-between items-start  gap-10 '>
          <div className="w-full">
            {
              cartProducts && cartProducts.map((item) => (
                <div key={item.product._id} className="relative flex gap-10 overflow-hidden shadow-md shadow-black rounded-lg p-2 mb-5 bg-slate-100">
                  <img src={productImg1} alt="" className='w-[200px] h-[200px] object-contain border-2 '/>
                  <div className="space-y-3 text-[16px] font-bold text-darkGray ">
                    <div className="">{item.product.name}</div>
                    <div className="flex gap-5 items-center ">
                      <span className="font-bold">Quantity  : </span>
                      <span className=''>{item.quantity}</span>
                    </div>
                    <div className=""><span className="font-bold text-sm">Price : </span>&#8377; {item.totalPrice}</div>
                  </div>
                  <button className='absolute bottom-2 right-5' onClick={() => handleRemove(item.product._id)}>
                    <MdDeleteForever className='text-red-500 text-2xl' />
                  </button>
                </div>
              ))             
            }
          </div>

        <div className="bg-slate-100 text-slate-600 w-[50%] p-5 rounded-lg">
          <div className="flex justify-between border-b-2 border-gray my-2 py-5">
            <div className="">SubTotal</div>
            <div className="">{cartData?.data?.cartTotal}</div>
          </div>
          <div className="flex justify-between border-b-2 border-gray my-2 py-5">
            <div className="">Shipping Fee</div>
            <div className="">100</div>
          </div>
          <div className="flex justify-between my-2 py-5">
            <div className="">Order Total</div>
            <div className="">{cartData?.data?.cartTotal + 100}</div>
          </div>
          <button className='bg-primaryGreen text-white w-full rounded-lg p-4'>Place Order</button>
          <div className="flex flex-col items-center">
            <div className="">Or</div>
            <div className="">Continue Shopping </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  )
}

export default ShoppingCart