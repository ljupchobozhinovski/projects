import { PostType } from '@/Types/types'
import React from 'react'
import PostItem from './PostItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft as faCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { faCircleRight as faCircleRight } from '@fortawesome/free-regular-svg-icons';
interface Props {
    relatedPosts: PostType[];

}

const RelatedPosts: React.FC<Props> = ({ relatedPosts }) => {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {relatedPosts.map((post) => {
                    return (
                        <PostItem key={post.id} post={post} />
                    )
                })}
            </div>
            <div className='text-end py-5'>
                <FontAwesomeIcon icon={faCircleLeft} size='3x' className='mx-2  greyColor' />
                <FontAwesomeIcon icon={faCircleRight} size='3x' className='mx-2 greyColor' />
            </div>
        </div>
    )
}
export default RelatedPosts