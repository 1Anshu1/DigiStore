import { FaSearch, FaUser, FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import ContentWrapper from "./ContentWrapper"
import { logout } from "../redux/features/authSlice";
import { useEffect } from "react";
import { getCartAction } from "../redux/features/cartSlice";


const Header = () => {
    let q = 0
    const { data } = useSelector((state) => state.auth)
    const cartItem = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const handleLogout = async () => {
        dispatch(logout())
    }

    useEffect(()=> {
        dispatch(getCartAction())
    }, []) 

    return (
        <ContentWrapper>
            <div className="flex justify-between items-center py-2">
                <div className="text-[#80c342] text-3xl font-bold cursor-pointer">
                    <Link to='/'>DigiCart</Link>
                </div>
                <div className="flex basis-[50%] items-center border-2 border-[#80c342] p-2 rounded-[40px]">
                    <input type="text" placeholder="What are you looking for ?" className="w-full px-3 outline-none" />
                    <FaSearch className="text-4xl px-2" />
                </div>
                {
                    data ?
                        <div className="flex items-center gap-5 ">
                            <Link to='/profile'><FaUser className="text-2xl cursor-pointer" /></Link>
                            <Link to='/wishlist'><FaRegHeart className="text-2xl cursor-pointer" /></Link>
                            <div className="relative">
                                <Link to='/cart'><FaCartShopping className="text-2xl cursor-pointer" /></Link>
                                <div className="absolute bottom-4 left-3 flex justify-center items-center  w-3 h-3 rounded-full bg-primaryGreen text-white p-3 text-sm font-bold">
                                    { 
                                        cartItem && 
                                        cartItem?.data?.cartItems?.forEach((item) => {
                                                q += item.quantity
                                        })
                                    }
                                    {q}
                                </div>
                            </div>
                            <button className="bg-[#80c342] px-3 py-1 rounded-sm font-semibold text-white cursor" onClick={handleLogout}>Logout</button>
                        </div>
                        :
                        <div className="flex items-center gap-5 ">
                            <Link to='/login'><FaUser className="text-2xl cursor-pointer" /></Link>
                            <Link to='/login'><FaRegHeart className="text-2xl cursor-pointer" /></Link>
                            <Link to='/cart'><FaCartShopping className="text-2xl cursor-pointer" /></Link>
                            
                            <button className="bg-[#80c342] px-3 py-1 rounded-sm font-semibold text-white cursor">
                                <Link to='/login'>Login</Link>
                            </button>

                        </div>
                }
            </div>
        </ContentWrapper>
    )
}

export default Header