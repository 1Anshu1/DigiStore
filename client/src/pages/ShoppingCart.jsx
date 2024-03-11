import { useState } from 'react';
import productImg1 from '../assets/productImg1.jpg'
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import ContentWrapper from '../components/ContentWrapper';

const ShoppingCart = () => {
  const [quantity, setQuantity] = useState(1)
  return (
    <ContentWrapper>
      <div className='flex flex-col'>
        <div className="text-3xl font-semibold my-10 ">Shopping Cart</div>
        <div className="flex justify-between items-start border-b-2 border-gray py-5">
          <div className="w-[100px] h-[100px] overflow-hidden bg-gray rounded-lg p-2">
            <img src={productImg1} alt="" className='w-[100%] h-[100%] object-contain' />
          </div>
          <div className="flex flex-col justify-between h-[100px]">
            <div className="">Product Name</div>
            <div className="flex gap-5 items-center">
              <FaCheck className='text-primaryGreen' />
              <span className="">In Stock</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-bold">Quantity  : </span>
            <div className="flex h-10 bg-gray rounded-lg text-2xl">
              <div className="cursor-pointer flex justify-center items-center w-8 active:text-primaryGreen select-none" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</div>
              <div className=" flex justify-center items-center w-20">{quantity}</div>
              <div className="cursor-pointer flex justify-center items-center w-8 active:text-primaryGreen select-none" onClick={() => setQuantity(quantity < 10 ? quantity + 1 : 10)}>+</div>
            </div>
          </div>
          <div className="text-2xl">
            <span className="font-bold text-sm">Price : </span>
            &#8377; 40000
          </div>
        </div>

        <div className="flex justify-between items-start border-b-2 border-gray py-5">
          <div className="w-[100px] h-[100px] overflow-hidden bg-gray rounded-lg p-2">
            <img src={productImg1} alt="" className='w-[100%] h-[100%] object-contain' />
          </div>
          <div className="flex flex-col justify-between h-[100px]">
            <div className="">Product Name</div>
            <div className="flex gap-5 items-center">
              <FaCheck className='text-primaryGreen' />
              <span className="">In Stock</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-bold">Quantity  : </span>
            <div className="flex h-10 bg-gray rounded-lg text-2xl">
              <div className="cursor-pointer flex justify-center items-center w-8 active:text-primaryGreen select-none" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</div>
              <div className=" flex justify-center items-center w-20">{quantity}</div>
              <div className="cursor-pointer flex justify-center items-center w-8 active:text-primaryGreen select-none" onClick={() => setQuantity(quantity < 10 ? quantity + 1 : 10)}>+</div>
            </div>
          </div>
          <div className="text-2xl">
            <span className="font-bold text-sm">Price : </span>
            &#8377; 40000
          </div>
        </div>

        <div className="flex justify-between items-start border-b-2 border-gray py-5">
          <div className="w-[100px] h-[100px] overflow-hidden bg-gray rounded-lg p-2">
            <img src={productImg1} alt="" className='w-[100%] h-[100%] object-contain' />
          </div>
          <div className="flex flex-col justify-between h-[100px]">
            <div className="">Product Name</div>
            <div className="flex gap-5 items-center">
              <FaCheck className='text-primaryGreen' />
              <span className="">In Stock</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-bold">Quantity  : </span>
            <div className="flex h-10 bg-gray rounded-lg text-2xl">
              <div className="cursor-pointer flex justify-center items-center w-8 active:text-primaryGreen select-none" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</div>
              <div className=" flex justify-center items-center w-20">{quantity}</div>
              <div className="cursor-pointer flex justify-center items-center w-8 active:text-primaryGreen select-none" onClick={() => setQuantity(quantity < 10 ? quantity + 1 : 10)}>+</div>
            </div>
          </div>
          <div className="text-2xl">
            <span className="font-bold text-sm">Price : </span>
            &#8377; 40000
          </div>
        </div>

        <div className="bg-slate-100 text-slate-600 self-end w-[50%] my-10 p-5 rounded-lg">
          <div className="flex justify-between border-b-2 border-gray my-2 py-5">
            <div className="">SubTotal</div>
            <div className="">100000</div>
          </div>
          <div className="flex justify-between border-b-2 border-gray my-2 py-5">
            <div className="">Shipping Fee</div>
            <div className="">100</div>
          </div>
          <div className="flex justify-between my-2 py-5">
            <div className="">Order Total</div>
            <div className="">110000</div>
          </div>
          <button className='bg-primaryGreen text-white w-full rounded-lg p-4'>Checkout</button>
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