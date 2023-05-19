import PostHeader from '@/components/Post/PostHeader'
import React, { useEffect, useState } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { PostType } from '@/Types/types'
import PostDetail from './[id]'
import PostItem from '@/components/Post/PostItem'
import MainPost from '@/components/Post/MainPost'
import InterviewSlider from '@/components/Post/InterviewSlider'
import Melem from '@/components/Post/Melem'
import RelatedPosts from '@/components/Post/RelatedPosts'
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft as faCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { faCircleRight as faCircleRight } from '@fortawesome/free-regular-svg-icons';
import { server_url } from '@/environments/constants'

interface Props {
    posts: PostType[];
    interviews: string[]
}

type Event = {
    selected: number
}

const Post: NextPage<Props> = ({ posts, interviews }) => {
    const itemsPerPage = 6;

    const [currentItems, setCurrentItems] = useState<PostType[]>([]);
    const [pageCount, setPageCount] = useState(0);

    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(posts.slice(itemOffset, endOffset + 1));
        setPageCount(Math.ceil(posts.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event: Event) => {
        const newOffset = event.selected * itemsPerPage % posts.length;
        setItemOffset(newOffset);
    };


    return (
        <div>
            <PostHeader />
            <MainPost post={posts[0]} />
            <>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {currentItems && currentItems.map((post, index) => {
                            return (
                                <>
                                    {index !== 0 && <PostItem key={post.id} post={post} />}
                                </>
                            )
                        })}
                        <ReactPaginate
                            className='d-flex list-unstyled align-items-center justify-content-end w-100 '
                            breakLabel="..."
                            nextLabel={<FontAwesomeIcon icon={faCircleRight} size='3x' className='mx-2 greyColor' />}
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel={<FontAwesomeIcon icon={faCircleLeft} size='3x' className='mx-2  greyColor' />}
                            renderOnZeroPageCount={null}
                        />
                    </div>
                </div>
            </>
            <InterviewSlider links={interviews} />
            <RelatedPosts relatedPosts={posts}></RelatedPosts>
            <Melem />


        </div>
    )
}

export default Post;

export const getServerSideProps: GetServerSideProps = async () => {
    const postsRes = await fetch(`${server_url}posts`);
    const posts: PostType[] = await postsRes.json();


    const interviewRes = await fetch(`${server_url}interviews`);
    const interviews: PostType[] = await interviewRes.json();

    return {
        props: {
            posts,
            interviews
        },
    };
};



