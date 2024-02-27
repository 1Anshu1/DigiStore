import { useState } from "react"

const PriceFilter = () => {
    const [price, setPrice] = useState({
        minPrice: 100,
        maxPrice: 99999
    })

    return (
        <div>
            <input type="range" name="" id="" className="w-full" />
            <div className="flex justify-between">
                <div>{price.minPrice}</div>
                <div>{price.maxPrice}</div>
            </div>
            <div className="flex gap-2 my-2">
                <input type="number" name="" id="" placeholder="Min" className="w-20 appearance-none" />
                <input type="number" name="" id="" placeholder="Max" className="w-20 appearance-none" />

            </div>
        </div>
    )
}

export default PriceFilter