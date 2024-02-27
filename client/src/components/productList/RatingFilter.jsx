import React from 'react'

const RatingFilter = () => {
    return (
        <div className='text-sm space-y-2'>
            <div className="">
                <input type="checkbox" name="" id="rating4" className='mx-3' />
                <label htmlFor="rating4">4&#9733; &#38; above</label>
            </div>
            <div className="">
                <input type="checkbox" name="" id="rating3" className='mx-3' />
                <label htmlFor="rating3">3&#9733; &#38; above</label>
            </div>
            <div className="">
                <input type="checkbox" name="" id="rating2" className='mx-3' />
                <label htmlFor="rating2">2&#9733; &#38; above</label>
            </div>
            <div className="">
                <input type="checkbox" name="" id="rating1" className='mx-3' />
                <label htmlFor="rating1">1 &#9733; &#38; above</label>
            </div>


        </div>
    )
}

export default RatingFilter