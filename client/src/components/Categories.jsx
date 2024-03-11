import { useNavigate } from "react-router-dom"
import { RiArrowDropDownLine } from "react-icons/ri";
import ContentWrapper from "./ContentWrapper"

export const Categories = () => {
    const navigate = useNavigate(null)    

    const handleNavigation = (e) => {
        const categoryName = e.target.innerText
        navigate(`/productList/${categoryName}`)
    }

    return (
        <div className="bg-primaryGreen">
            <ContentWrapper>
                <ul className="flex justify-between font-bold py-3 ">
                    <li className="flex items-center py-1 hover:text-white" >
                        <div className="cursor-pointer" onClick={handleNavigation}>Smartphones</div>
                        <RiArrowDropDownLine className="text-2xl" />
                    </li>
                    <li className="flex items-center py-1 hover:text-white">
                        <div className="cursor-pointer" onClick={handleNavigation}>Laptops</div>
                        <RiArrowDropDownLine className="text-2xl" />
                    </li>
                    <li className="flex items-center py-1 hover:text-white" onClick={handleNavigation}>
                        <div className="cursor-pointer" onClick={handleNavigation}>Monitors</div>
                        <RiArrowDropDownLine className="text-2xl" />
                    </li>
                    <li className="flex items-center py-1 hover:text-white" >
                        <div className="cursor-pointer" onClick={handleNavigation}>Televisions</div>
                        <RiArrowDropDownLine className="text-2xl" />
                    </li>
                    <li className="flex items-center py-1 hover:text-white">
                        <div className="cursor-pointer" onClick={handleNavigation}>Audio</div>
                        <RiArrowDropDownLine className="text-2xl" />
                    </li>
                    <li className="flex items-center py-1 hover:text-white">
                        <div className="cursor-pointer" onClick={handleNavigation}>Cameras</div>
                        <RiArrowDropDownLine className="text-2xl" />
                    </li>
                    <li className="flex items-center py-1 hover:text-white">
                        <div className="cursor-pointer" onClick={handleNavigation}>Accessories</div>
                        <RiArrowDropDownLine className="text-2xl" />
                    </li>
                </ul>
            </ContentWrapper>
        </div >
    )
}
