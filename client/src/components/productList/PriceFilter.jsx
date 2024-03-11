// TODO add two way slider in price input range

import {  useState } from "react"
import {  useSearchParams } from 'react-router-dom'

const PriceFilter = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const [priceFilter, setPriceFilter] = useState({ min_price: 0, max_price: null })
    const [priceChange, setPriceChange] = useState({ minprice: 0, maxprice: 0 })

    // const handlePriceFilter = (e) => {
    //     setPriceFilter({ ...priceFilter, max_price: e.target.value })
    //     navigate(`?min_price=${priceFilter.min_price}&max_price=${priceFilter.max_price}`)
    // }
    const handlePriceFilter = (e) => {
        // setPriceFilter(prevState => {
        //     const updatedFilter = { ...prevState, max_price: e.target.value };
        //     navigate(`?min_price=${updatedFilter.min_price}&max_price=${updatedFilter.max_price}`);
        //     return updatedFilter;
        // });
        setPriceFilter((prev) => {
            const updatedPriceFilter = { ...prev, max_price: e.target.value }

            const newSearchParams = new URLSearchParams(searchParams);
            newSearchParams.set('min_price', priceFilter.min_price);
            newSearchParams.set('max_price', updatedPriceFilter.max_price);
            // newSearchParams.delete('min_price');
            setSearchParams(newSearchParams.toString());

            return updatedPriceFilter
        })
    };

    const showPriceChange = (e) => {
        setPriceChange({ ...priceChange, maxprice: e.target.value })
    }

    const removePriceFilter = () =>{
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.delete('min_price');
        newSearchParams.delete('max_price');
        setSearchParams(newSearchParams.toString());
    }

    return (
        <>
            <div className="flex justify-between font-bold my-5 cursor-pointer ">
                <div className="">Price</div>
                <div className="hover:text-white" onClick={removePriceFilter}> Clear</div>
            </div>
            <div>
                <input type="range" name="" id="" className="w-full" min={priceFilter.min_price} max={200000} onMouseUp={handlePriceFilter} onChange={showPriceChange} />
                <div className="flex justify-between">
                    <div>{priceChange.minprice}</div>
                    <div>{priceChange.maxprice}</div>
                </div>
                {/* <div className="flex gap-2 my-2">
                    <input type="number" name="" value={priceFilter.min_price} id="" placeholder="Min" className="w-20 appearance-none" onChange={(e) => setPriceFilter({ ...priceFilter, min_price: e.target.value })} />
                    <input type="number" name="" id="" value={priceFilter.max_price} placeholder="Max" className="w-20 appearance-none" onChange={(e) => setPriceFilter({ ...priceFilter, max_price: e.target.value })} />
                </div> */}
            </div>
        </>
    )
}

export default PriceFilter