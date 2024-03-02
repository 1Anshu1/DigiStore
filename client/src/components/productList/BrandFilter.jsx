import { useState } from "react"
import { useSearchParams } from "react-router-dom"


const BrandFilter = ({ filterArray, setFilterArray }) => {
    const brands = ['Apple', 'Samsung', 'Sony', 'LG', 'Mi', 'Vivo', 'Realme']

    const [selected, setSelected] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const handleClick = (e) => {
        setSelected((prev) => {
            const updatedBrand = e.target.checked ? [...prev, e.target.value] : prev.filter((item) => item != e.target.value)
            const newSeacrhParams = new URLSearchParams(searchParams)
            newSeacrhParams.set('brands', updatedBrand)
            setSearchParams(newSeacrhParams.toString())
            return updatedBrand
        })

        setFilterArray(e.target.checked ? [...filterArray, e.target.value] : filterArray.filter((item) => item != e.target.value))
    }

    return (
        <div className="">
            {
                brands.map((brand, idx) => (
                    <div key={idx} className="my-2">
                        <input type="checkbox" name="brand" value={brand} id={`brand${idx}`} className='mx-3' onClick={handleClick} />
                        <label htmlFor={`brand${idx}`}>{brand}</label>
                    </div>
                ))
            }
        </div>
    )
}

export default BrandFilter