import React from 'react'
import Slider from 'react-slick'

const PicturesSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        swipeToSlide: true,
        className: "center",
        centerMode: true,
        centerPadding: "30px",

    };

    return (
        <div className='py-5'>

            <Slider {...settings}>

                <div className='p-5 d-flex justify-content-center align-items-center '>
                    <img className='w-75' src="../../images/driveGoogle/BOR_9438.jpg" alt="BOR_9438.jpg" />
                </div>
                <div className='p-5 d-flex justify-content-center align-items-center '>
                    <img className='w-75' src="../../images/driveGoogle/BOR_9458.jpg" alt="BOR_9458.jpg" />
                </div>
                <div className='p-5 d-flex justify-content-center align-items-center '>
                    <img className='w-75' src="../../images/driveGoogle/BOR_9460.jpg" alt="BOR_9460.jpg" />
                </div>
                <div className='p-5 d-flex justify-content-center align-items-center '>
                    <img className='w-75' src="../../images/driveGoogle/BOR_9461.jpg" alt="BOR_9461.jpg" />
                </div>
                <div className='p-5 d-flex justify-content-center align-items-center '>
                    <img className='w-75' src="../../images/driveGoogle/BOR_9465.jpg" alt="BOR_9465.jpg" />
                </div>
                <div className='p-5 d-flex justify-content-center align-items-center '>
                    <img className='w-75' src="../../images/driveGoogle/BOR_9483.jpg" alt="BOR_9483.jpg" />
                </div>


            </Slider>

        </div>
    )
}

export default PicturesSlider