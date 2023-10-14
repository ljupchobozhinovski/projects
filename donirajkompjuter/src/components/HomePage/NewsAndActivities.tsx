import React from 'react'
import useTranslation from 'next-translate/useTranslation';

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

                    {posts.map((post) => {
                        return (
                            <PostItem key={post.id} post={post} />
                        )
                    })}
                </div>
            </div >
        </>

    )
}

export default NewsAndActivities