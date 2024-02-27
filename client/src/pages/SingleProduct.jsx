import { FaChevronLeft, FaChevronRight, FaHeart, FaStar } from "react-icons/fa";

import productImg1 from '../assets/productImg1.jpg'

import ContentWrapper from '../components/ContentWrapper'
import { ProductCard } from '../components/ProductCard'

import { useState } from "react";

const SingleProduct = () => {
  const proudctViewImages = [productImg1,

    'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/i/s/l/-original-imagx24fmpdfnuwh.jpeg?q=70&crop=false',

    'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/g/y/m/-original-imagx24ff2bwmdpm.jpeg?q=70&crop=false',

    'https://www.reliancedigital.in/medias/Horizon-Forbidden-West-Std-PS4-492519960-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNTMwMnxpbWFnZS9qcGVnfGltYWdlcy9oZTYvaDVjLzk3NDE0Mjk1NzE2MTQuanBnfDMxZTQ0NjI1NWZiYzU3YWFkMTU0ODRkMzZhOTNlYjNjYjY5MDBkYWViMWQ4NjExNTg3N2E2MTY0ZDMzMTI3MTc',

    'https://www.reliancedigital.in/medias/Sony-PS4UNCHARTED4TEHIT-Gaming-Consoles-491431115-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDUxMnxpbWFnZS9qcGVnfGltYWdlcy9oNjMvaDJjLzkwODY4ODQ4NzIyMjIuanBnfDlhZGY5YTc0NDIwZDUzMDJjODkxYjRiYmU0OTMyMjEwYTVlZjY5ZGI4OGU4OGU5NjczNWRlY2M0YjEwNDU0YjE',

    'https://www.reliancedigital.in/medias/PS5-WWE-2K23-493842047-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4OTYwN3xpbWFnZS9qcGVnfGltYWdlcy9oOGYvaDYyLzEwMDMyOTYzOTExNzEwLmpwZ3xhYjYyMzIzM2U3OWJmZjJlNWIxNDQ4Mjc0MjhkYzAzZDYxN2YwNGZjNTY5YTUwYzExN2Y5Yzk5YTAzZTNkM2Nl',
    'https://www.reliancedigital.in/medias/PS5-WWE-2K23-493842047-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4OTYwN3xpbWFnZS9qcGVnfGltYWdlcy9oOGYvaDYyLzEwMDMyOTYzOTExNzEwLmpwZ3xhYjYyMzIzM2U3OWJmZjJlNWIxNDQ4Mjc0MjhkYzAzZDYxN2YwNGZjNTY5YTUwYzExN2Y5Yzk5YTAzZTNkM2Nl',
    'https://www.reliancedigital.in/medias/PS5-WWE-2K23-493842047-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4OTYwN3xpbWFnZS9qcGVnfGltYWdlcy9oOGYvaDYyLzEwMDMyOTYzOTExNzEwLmpwZ3xhYjYyMzIzM2U3OWJmZjJlNWIxNDQ4Mjc0MjhkYzAzZDYxN2YwNGZjNTY5YTUwYzExN2Y5Yzk5YTAzZTNkM2Nl',
    'https://www.reliancedigital.in/medias/PS5-WWE-2K23-493842047-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4OTYwN3xpbWFnZS9qcGVnfGltYWdlcy9oOGYvaDYyLzEwMDMyOTYzOTExNzEwLmpwZ3xhYjYyMzIzM2U3OWJmZjJlNWIxNDQ4Mjc0MjhkYzAzZDYxN2YwNGZjNTY5YTUwYzExN2Y5Yzk5YTAzZTNkM2Nl',
    'https://www.reliancedigital.in/medias/PS5-WWE-2K23-493842047-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4OTYwN3xpbWFnZS9qcGVnfGltYWdlcy9oOGYvaDYyLzEwMDMyOTYzOTExNzEwLmpwZ3xhYjYyMzIzM2U3OWJmZjJlNWIxNDQ4Mjc0MjhkYzAzZDYxN2YwNGZjNTY5YTUwYzExN2Y5Yzk5YTAzZTNkM2Nl']

  const [currentView, setCurrentView] = useState(0)

  const handleSlideLeft = () => {

    setCurrentView(prev => (prev - total + 150) % total)
    console.log(currentView, total);

  }

  const handleSlideRight = () => {
    setCurrentView(prev => (prev - 150) % (total))
    console.log(currentView, (total));
  }

  const total = (proudctViewImages.length - 2) * 150
  const productTitle = 'Razer Seiren V2 Pro USB Dynamic Microphone for Streaming, Gaming, Recording, Podcasting on PC, Twitch, YouTube'
  const productPrice = 40000
  const productDescription = 'Encompassed with an array of features, this Toshiba smart TV is a real game changer. Its host of attributes includes a powerful REGZA Engine ZR, introduced in 2023, to provide you with 4K image resolution, REGZA Power Audio with dual 12 W clear and direct speakers for a loud and distinct sound, DLED backlight for uniform brightness, Dolby support for enhanced sound, colour re-master to provide real and natural colours, and more exciting features. '

  const color = ['#53f374', '#23ad63', '#fff383']
  const date = new Date()
  const ratings = [1, 2, 3, 4, 5, 6]

  const [quantity, setQuantity] = useState(1)

  return (
    <ContentWrapper>
      <div className="flex">

        <div className="w-[40%]">
          <div className="relative w-[500px] h-[400px] mx-auto">
            <img src={productImg1} alt="" className="w-[100%] h-[100%]" />
            <div className="absolute right-2 top-2 rounded-full p-3 bg-white text-4xl cursor-pointer">
              <FaHeart className="text-gray" />
            </div>
          </div>

          {/* <div className="relative flex items-center overflow-hidden  h-[100px] px-10 my-10 bg-blue-800" >
          <FaChevronLeft className="absolute left-2 z-10 cursor-pointer" onClick={handleSlideLeft} />
          <div className="flex mx-[40px] " style={{ translate: `${currentView}px`, transition: 'all 2s ease' }}>
            {
              proudctViewImages.map((productView, idx) => (
                <div key={productView} className="w-[150px] h-[100px]shrink-0 border-2 border-red-800">
                  <img src={productView} alt="" className="object-contain w-[100%] h-[100%]" />
                </div>
              ))
            }
          </div>

          <FaChevronRight className="absolute right-2 cursor-pointer" onClick={handleSlideRight} />
        </div> */}
          <div className="flex justify-between items-center ">

            <FaChevronLeft className="cursor-pointer text-3xl pl-2" onClick={handleSlideLeft} />

            <div className="relative flex  items-center overflow-hidden w-[450px] h-[100px] my-10" >
              <div className="flex " style={{ translate: `${currentView}px`, transition: 'all 1s ease' }}>
                {
                  proudctViewImages.map((productView, idx) => (
                    <div key={idx} className="w-[150px] h-[100px]shrink-0">
                      <img src={productView} alt="" className="object-contain w-[100%] h-[100%]" />
                    </div>
                  ))
                }
              </div>
            </div>

            <FaChevronRight className="cursor-pointer text-3xl pr-2" onClick={handleSlideRight} />
          </div>
        </div>

        <div className="p-5 my-5 space-y-5 text-darkGray">
          <div className="text-2xl font-bold">{productTitle}</div>
          <div className="text-gray flex gap-1 items-center">
            <span className="text-green font-bold">3.9</span>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <a href='/productDetails' className="text-green underline">See all {10} reviews</a>
          </div>
          <div className="text-2xl">
            <span className="font-bold text-sm">Price : </span>
            &#8377;{productPrice}
          </div>
          <div className="text-justify text-sm">
            <span className="font-bold">Description : </span>
            {productDescription}
          </div>
          <div className="flex items-center gap-3">
            <span className="font-bold">Colors : </span>
            {color.map((item, idx) => (
              <button key={idx} className={`rounded-full w-7 h-7 cursor-pointer focus:scale-150 border-2 border-darkGray`} style={{ background: item }}></button>
            ))}
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-bold">Quantity  : </span>
            <div className="flex h-10 bg-gray rounded-lg text-2xl">
              <div className="cursor-pointer flex justify-center items-center w-8 active:text-green select-none" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</div>
              <div className=" flex justify-center items-center w-20">{quantity}</div>
              <div className="cursor-pointer flex justify-center items-center w-8 active:text-green select-none" onClick={() => setQuantity(quantity < 10 ? quantity + 1 : 10)}>+</div>
            </div>
          </div>
          <div className="flex gap-5">
            <button className="bg-green text-white font-bold px-10 py-2 rounded-xl w-[50%] cursor-pointer active:bg-blue-600">Add To Cart</button>
            <button className="bg-green text-white px-10 py-2 font-bold rounded-xl w-[50%] cursor-pointer active:bg-blue-600">Buy Now</button>
          </div>
        </div>

      </div>
      <div className="">
        <div className="font-semibold text-2xl my-5">Rating and Reviews</div>
        <div className="">
          {ratings.map((rating, idx) => (
            <div key={idx} className="border-b-2 border-gray my-5">
              <span className="bg-green rounded-md px-2 mr-5">5 &#9733;</span>
              <span className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              <div className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, accusamus!</div>
              <div className="">Anshu | {date.toLocaleDateString()}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <div className="font-semibold text-2xl">Similar Items</div>
        <div className="flex">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </ContentWrapper >
  )
}

export default SingleProduct