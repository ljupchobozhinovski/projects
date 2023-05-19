import { PostType } from '@/Types/types'
import { NextPage } from 'next'
import React from 'react'

interface Props {
    post: PostType,
}

const PostDetails: NextPage<Props> = ({ post }) => {
    return (
        <div className='container'>
            <h2 className='text-center text-uppercase'> {post.title} <span className='default-red-color'> {post.title} </span>!</h2>
            <h6>read in X minutes</h6>
            <div className="row ">
                <div className="col d-flex justify-content-center"><img src="./images/blog/leftHeader.svg" alt="leftHeader" /></div>
                <div className="col d-flex justify-content-center"></div>
                <div className="col d-flex justify-content-center"><img src="./images/blog/rightHeader.svg" alt="rightHeader" /></div>
            </div>
        </div>
    )
}

export default PostDetails