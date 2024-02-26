import { useState, useEffect, useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import bannerImg1 from '../../assets/banner-img/bannerImg1.webp'
import bannerImg2 from '../../assets/banner-img/bannerImg2.webp'
import bannerImg3 from '../../assets/banner-img/bannerImg3.webp'
import bannerImg4 from '../../assets/banner-img/bannerImg4.webp'
import bannerImg5 from '../../assets/banner-img/bannerImg5.webp'
import bannerImg6 from '../../assets/banner-img/bannerImg6.webp'

const Banner = () => {
    const bannerImages = [bannerImg1, bannerImg2, bannerImg3, bannerImg4, bannerImg5, bannerImg6]
    const [currentslide, setCurrentSlide] = useState(0)

    let timeout = useRef(null)

    const handelLeft = () => {
        clearTimeout(timeout.current)
        setCurrentSlide(currentslide > 0 ? currentslide - 1 : bannerImages.length - 1)
    }

    const handleRight = () => {
        clearTimeout(timeout.current)
        setCurrentSlide(currentslide < bannerImages.length - 1 ? currentslide + 1 : 0)
    }

    const handleDots = (idx) => {
        clearTimeout(timeout.current)
        setCurrentSlide(idx)
    }

    useEffect(() => {
        const changeBannerImg = () => {
            timeout.current = setTimeout(() => {
                setCurrentSlide(currentslide < bannerImages.length - 1 ? currentslide + 1 : 0)
            }, 3000)
        }
        // changeBannerImg()
        return (() => {
            clearTimeout(timeout)
        })
    }, [currentslide, bannerImages.length])

    return (
        <div className="">
            <div className="relative flex items-center">
                <FaChevronLeft className='absolute left-2 text-8xl cursor-pointer text-green' onClick={handelLeft} />

                <div className="w-full h-[600px]">
                    <img src={bannerImages[currentslide]} alt="" className="w-[100%] h-[100%] object-cover" />
                </div>

                <FaChevronRight className='absolute right-2 text-8xl cursor-pointer text-green' onClick={handleRight} />

                <div className="absolute bottom-0 left-[50%] translate-x-[-50%] flex justify-center gap-2 py-4 cursor-pointer">
                    {
                        bannerImages.map((item, idx) => (
                            <div key={idx} className={`rounded-full h-3 w-3 ${idx === currentslide ? 'bg-white' : 'bg-green'}`} onClick={() => handleDots(idx)}></div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Banner