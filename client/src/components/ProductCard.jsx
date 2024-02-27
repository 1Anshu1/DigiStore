import productImg from '../assets/productImg1.jpg'
import { FaHeart } from "react-icons/fa";

export const ProductCard = () => {
    const rating = 4.4
    const numOfReviews = 230
    const productName = 'Xiaomi Smart TV A Ultra HD 4K TV'
    const productPrice = 40000
    return (
        <div className='border-b-2 border-gray cursor-pointer '>
            <div className="w-[300px] h-[300px] rounded-3xl overflow-hidden">
                <img src={productImg} alt="" className="w-[100%] h-[100%] object-contain" />
            </div>
            <div className="flex justify-between px-2 ">
                <div className="">{productName}</div>
                <div className="">{productPrice}</div>
            </div>
            <div className="flex justify-between p-2 ">
                <div className='bg-green text-white rounded-md p-1 text-sm'>
                    {rating}&#9733; | {numOfReviews}
                </div>
                <FaHeart className='text-green cursor-pointer text-xl' />
            </div>

        </div>
    )
}
