import React from 'react'
import useTranslation from 'next-translate/useTranslation';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const EducationLogoSlider = () => {
    const { t } = useTranslation('common');
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        swipeToSlide: true,
    };
    return (
        <>
            <p className='text-muted h4 text-center'>{t('education.educationLogoSlider')}</p>
            <Slider {...settings}>
                <div className='p-5 d-flex justify-content-center align-items-center'>
                    <a href="https://www.raspberrypi.com/" target='_blank'><img src="../../images/education/raspberry.svg" alt="raspberry" /></a>
                </div>
                <div className='p-5 d-flex justify-content-center align-items-center'>
                    <a href="https://www.netherlandsandyou.nl/your-country-and-the-netherlands/north-macedonia/about-us/netherlands-embassy-in-skopje" target='_blank'><img src="../../images/education/netherlandsEmb.svg" alt="raspberry" /></a>
                </div>
                <div className='p-5 d-flex justify-content-center align-items-center'>
                    <a href="https://www.raspberrypi.com/" target='_blank'><img src="../../images/education/raspberry.svg" alt="raspberry" /></a>
                </div>
                <div className='p-5 d-flex justify-content-center align-items-center'>
                    <a href="https://www.netherlandsandyou.nl/your-country-and-the-netherlands/north-macedonia/about-us/netherlands-embassy-in-skopje" target='_blank'><img src="../../images/education/netherlandsEmb.svg" alt="raspberry" /></a>
                </div>
                <div className='p-5 d-flex justify-content-center align-items-center'>
                    <a href="https://www.raspberrypi.com/" target='_blank'><img src="../../images/education/raspberry.svg" alt="raspberry" /></a>
                </div>
                <div className='p-5 d-flex justify-content-center align-items-center'>
                    <a href="https://www.netherlandsandyou.nl/your-country-and-the-netherlands/north-macedonia/about-us/netherlands-embassy-in-skopje" target='_blank'><img src="../../images/education/netherlandsEmb.svg" alt="raspberry" /></a>
                </div>
            </Slider>

            <img className='w-100' src="../../images/education/leftDotGroup.svg" alt="leftDotGroup" />
        </>
    )
}

export default EducationLogoSlider