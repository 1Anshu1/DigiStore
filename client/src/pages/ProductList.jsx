import { useParams, useLocation, useSearchParams } from 'react-router-dom'

import { ProductCard } from "../components/ProductCard"
import BrandFilter from "../components/productList/BrandFilter"
import PriceFilter from "../components/productList/PriceFilter"
import RatingFilter from "../components/productList/RatingFilter"
import ContentWrapper from "../components/ContentWrapper"
import useFetch from '../hooks/useFetch.js'
import { useState } from 'react'

const ProductList = () => {
  const location = useLocation()
  const category = useParams().category
  const { data, loading, error } = useFetch(`/product/${category}${location.search}`)

  const [searchParams, setSearchParams] = useSearchParams()
  const [filterArray, setFilterArray] = useState([])

  const handleSortOrder = (e) => {
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.set('sort', e.target.value)
    setSearchParams(newSearchParams)
  }


  //TODO: remove the checked mark from clicking on filter criteria tags
  // const removeFilter = (e) => {
  //   console.log(e.target.parentNode)
  //   e.target.parentNode.style.display = 'none'
  // }

  return (
    <ContentWrapper>
      <div className="my-10 flex">

        {/* Filter criteria */}
        <div className="px-5 w-80 bg-green border-[2px] border-gray">
          <div className="">
            <div className="font-bold my-3">Brand</div>
            <BrandFilter filterArray={filterArray} setFilterArray={setFilterArray} />
          </div>
          <div className="border-y-[2px] border-y-gray ">
            <div className="font-bold my-3">Price</div>
            <PriceFilter />
          </div>
          <div className="">
            <div className="font-bold my-3">Rating</div>
            <RatingFilter />
          </div>
        </div>


        <div className="px-5 w-full">
          <button className='bg-green border-2'>Filter</button>
          <div className="flex gap-5">
            {
              filterArray.map((item, idx) => {
                return (
                  <div key={idx} className="flex gap-5 border-2 border-green w-fit">
                    <div className="">{item}</div>
                    {/* <div className="cursor-pointer" onClick={removeFilter}>X</div> */}
                  </div>
                )
              })
            }
          </div>
          <div className="font-bold text-xl">{category}</div>
          <div className="flex justify-between items-center">
            <div className="">Viewing (1-20) of {data && data.count} Products</div>
            <div className="">
              <label htmlFor="sortOrder" className="px-2">Sort By :</label>
              <select id="sortOrder" className="text-sm border-2 border-black rounded-md outline-none p-1" onChange={handleSortOrder}>
                <option value="whatNew">What&#8217;s new</option>
                <option value="lowtohigh">Price: Low to High</option>
                <option value="hightolow">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>

          <div className="grid grid-row-4 grid-cols-3 grid-flow-row-dense gap-5 mt-5">
            {
              data && data.products.map((item) => (
                <ProductCard key={item._id} item={item} />
              ))
            }
          </div>
        </div>
      </div>
    </ContentWrapper>

  )
}

export default ProductList