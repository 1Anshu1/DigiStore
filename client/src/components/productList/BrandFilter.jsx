import React from 'react'

const BrandFilter = () => {
    const brands = ['Apple', 'Samsung', 'Sony', 'Google Pixel', 'Xiaomi', 'Vivo']
    return (
        <div className="">
            {
                brands.map((brand, idx) => (
                    <div key={idx} className="my-2">
                        <input type="checkbox" name="" id={`brand${idx}`} className='mx-3' />
                        <label htmlFor={`brand${idx}`}>{brand}</label>
                    </div>
                ))
            }
        </div>
    )
}

export default BrandFilter