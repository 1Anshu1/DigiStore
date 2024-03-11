import { Link } from 'react-router-dom'
import { IoIosCall, IoIosMail } from "react-icons/io";
import { FaLocationDot, FaFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import ContentWrapper from './ContentWrapper';

export const Footer = () => {
    return (
        <div className="bg-black text-white">
            <ContentWrapper>
                <div className="flex py-5 gap-5">
                    <div className="flex-1">
                        <h2 className="text-xl pb-2">DigiCart</h2>
                        <p className="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vitae recusandae quisquam qui officiis ex, rerum est laudantium culpa veritatis.</p>
                    </div>
                    <div className="flex-1">
                        <h2 className='text-xl pb-2'>Product Categories</h2>
                        <ul className="text-sm">
                            <Link to='/'><li className="py-1 hover:text-primaryGreen">Laptops</li></Link>
                            <Link to='/'><li className="py-1 hover:text-primaryGreen">SmartPhones</li></Link>
                            <Link to='/'><li className="py-1 hover:text-primaryGreen">Monitors</li></Link>
                            <Link to='/'><li className="py-1 hover:text-primaryGreen">Televisions</li></Link>
                            <Link to='/'><li className="py-1 hover:text-primaryGreen">Audio</li></Link>
                            <Link to='/'><li className="py-1 hover:text-primaryGreen">Cameras</li></Link>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h2 className='text-xl pb-2'>Company</h2>
                        <ul className="text-sm">
                            <Link to='/'><li className="py-1 hover:text-primaryGreen">About</li></Link>
                            <Link to='/'><li className="py-1 hover:text-primaryGreen">Careers</li></Link>
                            <Link to='/'><li className="py-1 hover:text-primaryGreen">Services</li></Link>
                            <Link to='/'><li className="py-1 hover:text-primaryGreen">Privacy Policy</li></Link>
                            <Link to='/'><li className="py-1 hover:text-primaryGreen">Terms of Service</li></Link>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h2 className='text-xl pb-2'>Contact Us</h2>
                        <ul className="text-sm">
                            <li className="flex gap-2 py-1 items-center">
                                <IoIosCall />
                                <a href="tel:+">+91-9922992299</a>
                            </li>
                            <li className="flex gap-2 py-1 items-center">
                                <IoIosMail />
                                <a href="mailto:">digicart@support.com</a>
                            </li>
                            <li className="flex gap-2 py-1 items-center">
                                <FaLocationDot />
                                <p>Bengaluru Karnataka, India</p>
                            </li>
                            <li className="py-5 text-xl">
                                <div className="flex gap-2 py-1 items-center">
                                    <FaFacebook />
                                    <FaInstagramSquare />
                                    <FaSquareXTwitter />
                                </div>
                            </li>


                        </ul>
                    </div>
                </div>
            </ContentWrapper>
            <div className=" py-2 text-center">Copyright &#169; 2024. All rights reserved</div>
        </div>
    )
}

export default Footer
