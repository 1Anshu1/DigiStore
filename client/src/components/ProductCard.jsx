import productImg from '../assets/productImg1.jpg'
import { FaHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addWishList } from '../features/wishListSlice';
import { addwishListAction } from '../redux/features/wishListSlice';

export const ProductCard = ({ item }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const wishlist = useSelector((state) => state.wishlist.data)

    const handleClick = () => {
        navigate(`/product/${item._id}`)
    }
    const handleWishlist = async (e) => {
        e.stopPropagation()
        dispatch(addwishListAction({product_id: item._id}))
    }

    return (
        <div className='cursor-pointer rounded-3xl overflow-hidden shadow-sm shadow-black m-2' onClick={handleClick}>
            {/* <div className="w-[300px] h-[250px]  bg-green-200  overflow-hidden"> */}
                <img src={productImg} alt="" className="w-[100%] h-[250px] object-contain" />
            {/* </div> */}
            <div className="px-2 text-center space-y-2">
                <div className="text-ellipsis line-clamp-2 text-sm text-darkGray font-medium ">{item.name}</div>
                <div className="flex justify-center items-center gap-2">
                    <div className='bg-primaryGreen text-white rounded-sm px-2 py-1 text-xs font-bold'>
                        {item.averageRating} &#9733; | {item.numOfReview}
                    </div>
                    <FaHeart className={`${wishlist && wishlist.includes(item._id) ? 'text-pink-600' : 'text-gray'} cursor-pointer text-xl`} onClick={handleWishlist} />
                </div>
                <div className="text-md font-bold"> &#8377; {item.price}</div>
            </div>

        </div>
    )
}
