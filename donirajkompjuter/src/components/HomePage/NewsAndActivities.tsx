import React from 'react'
import useTranslation from 'next-translate/useTranslation';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination"; // if yo want to style it 
import { Pagination } from "swiper";
import PostItem from '../Post/PostItem';
import { PostType } from '@/Types/types';

interface Props {
    posts: PostType[];
}


const NewsAndActivities = ({ posts }: Props) => {
    const { t } = useTranslation('common');
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col text-center aboutUsHeroImg">
                        <p className='fs-40'> {t('homePage.newsAndActivitiesFirstPart')} <span className='text-danger'>{t('homePage.newsAndActivitiesSecondPart')}</span></p>
                    </div>
                </div>
                <div className='row'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {posts.map((post) => {
                            return (
                                < SwiperSlide key={post.id}>
                                    <PostItem key={post.id} post={post} />
                                </SwiperSlide>
                            )
                        })}


                    </Swiper>
                </div>
            </div >
        </>

    )
}

export default NewsAndActivities