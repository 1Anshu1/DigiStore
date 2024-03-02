import productImg from '../assets/productImg1.jpg'
import { FaHeart } from "react-icons/fa";

export const ProductCard = ({ item }) => {

    return (
        <div className='border-b-2 border-gray cursor-pointer shadow-2xl'>
            <div className="w-[300px] h-[300px] rounded-3xl overflow-hidden">
                <img src={productImg} alt="" className="w-[100%] h-[100%] object-contain" />
            </div>
            <div className="flex justify-between px-2 ">
                <div className="">{item.name}</div>
                <div className="">{item.price}</div>
            </div>
            <div className="flex justify-between p-2 ">
                <div className='bg-green text-white rounded-md p-1 text-sm'>
                    {item.averageRating}&#9733; | {item.numOfReview}
                </div>
                <FaHeart className='text-green cursor-pointer text-xl' />
            </div>

        </div>
    )
}
