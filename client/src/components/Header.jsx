import { FaSearch, FaUser, FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom'

import ContentWrapper from "./ContentWrapper"

const Header = () => {
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
                <div className="flex items-center gap-5 ">
                    <Link to='/my/profile'><FaUser className="text-2xl cursor-pointer" /></Link>
                    <Link to='/wishlist'><FaRegHeart className="text-2xl cursor-pointer" /></Link>
                    <Link to='/cart'><FaCartShopping className="text-2xl cursor-pointer" /></Link>
                    <button className="bg-[#80c342] px-3 py-1 rounded-sm font-semibold text-white cursor">
                        <Link to='/login'>Login</Link>
                    </button>
                </div>
            </div>
        </ContentWrapper>
    )
}

export default Header