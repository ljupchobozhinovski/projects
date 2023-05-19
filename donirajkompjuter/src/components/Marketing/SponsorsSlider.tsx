import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from 'next/link';

const SponsorsSlider = () => {

    const sponsorsSlider = [
        {
            link: "https://one-inside.com/",
            image: "../../images/inside.svg",
            alt: "inside"
        },
        {
            link: "https://www.symphony-solutions.eu/benefits-in-north-macedonia/",
            image: "../../images/symphony.svg",
            alt: "symphony"
        },
        {
            link: "https://www.allocatesoftware.com/",
            image: "../../images/allocate.svg",
            alt: "allocate"
        },
        {
            link: "https://www.triglav.mk/",
            image: "../../images/triglav.svg",
            alt: "triglav"
        },
        {
            link: "https://klimi.mk/",
            image: "../../images/klimimk.svg",
            alt: "klimi"
        },
        {
            link: "https://ffm.mk/",
            image: "../../images/ffm.svg",
            alt: "ffm"
        },
        {
            link: "https://www.endava.com/en",
            image: "../../images/endava.svg",
            alt: "endava"
        },
        {
            link: "http://kozuvcanka.mk/en/",
            image: "../../images/kozuvcanka.svg",
            alt: "kozuvcanka"
        },
        {
            link: "https://fx3x.com/",
            image: "../../images/fx3x.svg",
            alt: "fx3x"
        },
    ]

    const sponsorsSettings = {
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
            <Slider {...sponsorsSettings}>

                {sponsorsSlider.map((sponsor) => {
                    return (
                        <Link href={sponsor.link} target='_blank' key={sponsor.alt}>
                            <img className='mx-auto default-light-gray-color sliderCircle' src={sponsor.image} alt={sponsor.alt} />
                        </Link>
                    )
                })}
            </Slider>

        </>




    );
}

export default SponsorsSlider