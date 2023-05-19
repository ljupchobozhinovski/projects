import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {

    const sponsors = [
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

    return (
        <div className="container w-100 default-light-gray-color">
            <div className="d-flex align-items-center ">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={5}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    {sponsors.map((sponsor) => {
                        return (
                            < SwiperSlide key={sponsor.alt}>
                                <Link href={sponsor.link} target='_blank'>
                                    <img className='mx-auto default-light-gray-color' src={sponsor.image} alt={sponsor.alt} />
                                </Link>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div >
    )
}

export default Banner