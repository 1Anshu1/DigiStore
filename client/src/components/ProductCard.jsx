import productImg from '../assets/productImg1.jpg'

export const ProductCard = () => {
    return (
        <div className='border-2 border-gray-300 rounded-lg overflow-hidden cursor-pointer'>
            <div className="w-[300px] h-[300px]  bg-red-500">
                <img src={productImg} alt="" className="w-[100%] h-[100%] object-cover" />
            </div>
            <div className="flex justify-between px-2 ">
                <div className="">Xiaomi TV</div>
                <div className="">40000</div>
            </div>
            <div className='px-2'>rating</div>
        </div>
    )
}
