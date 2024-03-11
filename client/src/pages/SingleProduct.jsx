import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight, FaHeart, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { addWishList } from '../features/wishListSlice';

import productImg1 from '../assets/productImg1.jpg'
import ContentWrapper from '../components/ContentWrapper'

import { getSingleProductAction } from '../redux/features/productSlice';
import { addwishListAction } from "../redux/features/wishListSlice";


const SingleProduct = () => {
  const navigate = useNavigate()
  const { product_id } = useParams()
  const dispatch = useDispatch()
  const { singleProduct, loading, error } = useSelector(state => state.product)
  const auth = useSelector(state => state.auth)
  const wishList = useSelector(state => state.wishlist)
  // const wishList = useSelector(state => state.wishList)


  const proudctViewImages = [productImg1,
    'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/i/s/l/-original-imagx24fmpdfnuwh.jpeg?q=70&crop=false',
    'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/g/y/m/-original-imagx24ff2bwmdpm.jpeg?q=70&crop=false',
    'https://www.reliancedigital.in/medias/Horizon-Forbidden-West-Std-PS4-492519960-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNTMwMnxpbWFnZS9qcGVnfGltYWdlcy9oZTYvaDVjLzk3NDE0Mjk1NzE2MTQuanBnfDMxZTQ0NjI1NWZiYzU3YWFkMTU0ODRkMzZhOTNlYjNjYjY5MDBkYWViMWQ4NjExNTg3N2E2MTY0ZDMzMTI3MTc',
  ]

  
  const [currentSliderView, setcurrentSliderView] = useState(0)

  const handleSlideLeft = () => {
    setcurrentSliderView(prev => (prev - total + 150) % total)
    console.log(currentSliderView, total);
  }

  const handleSlideRight = () => {
    setcurrentSliderView(prev => (prev - 150) % (total))
    console.log(currentSliderView, (total));
  }
  const total = (proudctViewImages.length - 2) * 150
  
  const color = ['#53f374', '#23ad63', '#fff383']
  const date = new Date()
  const ratings = [1, 2, 3, 4, 5, 6]
  
  const [quantity, setQuantity] = useState(1)
  
  
  const handleWishlist = async () => {
    auth.data ? dispatch(addwishListAction({product_id})) : navigate('/login')
  }

  // get single product details
  useEffect(() => {
    dispatch(getSingleProductAction(product_id))
  }, [])

  
  return (
    <>
      {
        loading ? <div className="">Loading....</div>

          :

          <ContentWrapper>
            <div className="flex mt-10">
              <div className="w-[40%]">
                <div className="w-[500px] h-[400px] mx-auto border-2 border-gray">
                  <img src={productImg1} alt="" className="w-[100%] h-[100%]" />
                </div>

                <div className="flex justify-between items-center ">
                  <FaChevronLeft className="cursor-pointer text-3xl pl-2" onClick={handleSlideLeft} />

                  <div className="relative flex  items-center overflow-hidden w-[450px] h-[100px] my-10" >
                    <div className="flex " style={{ translate: `${currentSliderView}px`, transition: 'all 1s ease' }}>
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
                <div className="text-2xl font-bold">{singleProduct?.name}</div>
                <div className="text-gray flex gap-1 items-center">
                  <span className="text-primaryGreen font-bold">{singleProduct?.averageRating}</span>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <a href='/productDetails' className="text-primaryGreen underline">See all {singleProduct?.numOfReview} reviews</a>
                </div>
                <div className="text-2xl">
                  <span className="font-bold text-sm">Price : </span>
                  &#8377;{singleProduct?.price}
                </div>
                <div className="flex items-start gap-8 ">
                  <span className="font-bold text-sm">Highlights : </span>
                  <ul className="text-sm text-slate-500">
                    {
                      singleProduct && singleProduct.highlights?.map((highlight, idx) => (
                        <li key={idx} className="list-disc">{highlight}</li>
                      ))
                    }
                  </ul>
                </div>
                <div className="text-justify text-sm">
                  <span className="font-bold">Description : </span>
                  {singleProduct?.description}
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold">Colors : </span>
                  {color.map((item, idx) => (
                    <button key={idx} className={`rounded-full w-7 h-7 cursor-pointer focus:scale-150 border-2 border-darkGray`} style={{ background: item }}></button>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold">Add to Wishlist : </span>
                  <FaHeart className={`text-gray cursor-pointer text-2xl ${auth.data &&  (wishList.data.includes(product_id) ? 'text-pink-600' : 'text-gray')}`} onClick={handleWishlist} />
                </div>

                <div className="flex gap-2 items-center">
                  <span className="font-bold">Quantity  : </span>
                  <div className="flex h-10 bg-gray rounded-lg text-2xl">
                    <div className="cursor-pointer flex justify-center items-center w-8 active:text-primaryGreen select-none" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</div>
                    <div className=" flex justify-center items-center w-20">{quantity}</div>
                    <div className="cursor-pointer flex justify-center items-center w-8 active:text-primaryGreen select-none" onClick={() => setQuantity(quantity < 10 ? quantity + 1 : 10)}>+</div>
                  </div>
                </div>
                <div className="flex gap-5">
                  <button className="bg-primaryGreen text-white font-bold px-10 py-2 rounded-xl w-[50%] cursor-pointer active:bg-blue-600">Add To Cart</button>
                  <button className="bg-primaryGreen text-white px-10 py-2 font-bold rounded-xl w-[50%] cursor-pointer active:bg-blue-600">Buy Now</button>
                </div>
              </div>

            </div>
            <div className="">
              <div className="font-semibold text-2xl my-5">Rating and Reviews</div>
              <div className="">
                {ratings.map((rating, idx) => (
                  <div key={idx} className="border-b-2 border-gray my-5">
                    <span className="bg-primaryGreen rounded-md px-2 mr-5">5 &#9733;</span>
                    <span className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    <div className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, accusamus!</div>
                    <div className="">Anshu | {date.toLocaleDateString()}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="">
            <div className="font-semibold text-2xl">Similar Items</div>
            <div className="flex">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div> */}
          </ContentWrapper >
      }
    </>
  )
}

export default SingleProduct