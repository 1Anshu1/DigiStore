import { Link } from "react-router-dom"
import { RiArrowDropDownLine } from "react-icons/ri";

import ContentWrapper from "./ContentWrapper"

export const Categories = () => {
    return (
        <div className="bg-green">
            <ContentWrapper>
                <ul className="flex justify-between font-bold py-3 ">
                    <Link to='/'>
                        <li className="flex items-center py-1 hover:text-white">
                            SmartPhones
                            <RiArrowDropDownLine className="text-2xl" />
                        </li>
                    </Link>
                    <Link to='/'>
                        <li className="flex items-center py-1 hover:text-white">
                            Laptops
                            <RiArrowDropDownLine className="text-2xl" />
                        </li>
                    </Link>
                    <Link to='/'>
                        <li className="flex items-center py-1 hover:text-white">
                            Monitors
                            <RiArrowDropDownLine className="text-2xl" />
                        </li>
                    </Link>
                    <Link to='/'>
                        <li className="flex items-center py-1 hover:text-white">
                            Televisions
                            <RiArrowDropDownLine className="text-2xl" />
                        </li>
                    </Link>
                    <Link to='/'>
                        <li className="flex items-center py-1 hover:text-white">
                            Audio
                            <RiArrowDropDownLine className="text-2xl" />
                        </li>
                    </Link>
                    <Link to='/'>
                        <li className="flex items-center py-1 hover:text-white">
                            Cameras
                            <RiArrowDropDownLine className="text-2xl" />
                        </li>
                    </Link>
                    <Link to='/'>
                        <li className="flex items-center py-1 hover:text-white">
                            Accessories
                            <RiArrowDropDownLine className="text-2xl" />
                        </li>
                    </Link>
                </ul>
            </ContentWrapper>
        </div>
    )
}
