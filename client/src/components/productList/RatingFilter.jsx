import { useNavigate, useSearchParams } from 'react-router-dom'

const RatingFilter = () => {
    // const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();

    const handleActive = (e) => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('rating', e.target.value);
        setSearchParams(newSearchParams.toString());
    }

    return (
        <div className='text-sm space-y-2'>
            <div className="">
                <input type="radio" id="rating4" name='rating' value={4} className='mx-3' onClick={handleActive} />
                <label htmlFor="rating4">4&#9733; &#38; above</label>
            </div>
            <div className="">
                <input type="radio" id="rating3" name='rating' value={3} className='mx-3' onClick={handleActive} />
                <label htmlFor="rating3">3&#9733; &#38; above</label>
            </div>
            <div className="">
                <input type="radio" id="rating2" name='rating' value={2} className='mx-3' onClick={handleActive} />
                <label htmlFor="rating2">2&#9733; &#38; above</label>
            </div>
            <div className="">
                <input type="radio" id="rating1" name='rating' value={1} className='mx-3' onClick={handleActive} />
                <label htmlFor="rating1">1&#9733; &#38; above</label>
            </div>
        </div>
    )
}

export default RatingFilter