import React from 'react'
import useTranslation from 'next-translate/useTranslation';
import { PostType } from '@/Types/types';
import Moment from 'moment';
import Link from 'next/link';

interface Props {
    post: PostType
}
const MainPost = ({ post }: Props) => {
    const { t } = useTranslation('common');
    const formatDate = (date: Date) => Moment(date).format('DD-MM-YYYY')

    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col"><img className='w-100' src="./images/driveGoogle/BOR_9465.jpg" alt="BOR_9465" /></div>
                <div className="col default-light-gray-color">
                    <img className='w-50' src="./images/rightDotGroup.svg" alt="rightDotGroup" />
                    <h4>{post.title}</h4>
                    <p>{post.shortDescription}</p>
                    <p className='text-muted'>{formatDate(post.createdDate)}</p>
                    <Link href={'/posts/' + post.id}><span className='default-red-color text-decoration-underline'>Learn More</span></Link>
                </div>
            </div>
        </div>
    )
}

export default MainPost