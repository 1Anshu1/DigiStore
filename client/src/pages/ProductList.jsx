import { ProductCard } from "../components/ProductCard"
import BrandFilter from "../components/productList/BrandFilter"
import PriceFilter from "../components/productList/PriceFilter"
import RatingFilter from "../components/productList/RatingFilter"
import ContentWrapper from "../components/ContentWrapper"

const ProductList = () => {
  return (
    <ContentWrapper>
      <div className="my-10 flex">
        {/* <div>ProductList</div> */}

        {/* Filter criteria */}
        <div className="px-5 w-80 border-[2px] border-gray">
          <div className="">
            <div className="font-bold my-3">Brand</div>
            <BrandFilter />
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


        <div className="px-5">
          <div className="flex justify-between items-center">
            <div className="">Viewing (1-20) of 240 Products</div>
            <div className="">
              <label htmlFor="sort" className="px-2">Sort By :</label>
              <select name="" id="sort" className="text-sm border-2 border-black rounded-md outline-none p-1" >
                <option value="" className="">Popularity</option>
                <option value="" className="">What&#8217;s new</option>
                <option value="" className="">Price: Low to High</option>
                <option value="">Price: High to Low</option>
                <option value="">Rating</option>
              </select>
            </div>
          </div>

          <div className="grid grid-row-4 grid-cols-3 grid-flow-row-dense gap-5 mt-5">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>

          <div className="">
            <div className="">
              
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>

  )
}

export default ProductList