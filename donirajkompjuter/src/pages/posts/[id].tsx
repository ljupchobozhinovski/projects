import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PostType } from "../../Types/types";
import RelatedPosts from "@/components/Post/RelatedPosts";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF as faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin as faLinkedIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram as faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter as faTwitter } from '@fortawesome/free-brands-svg-icons'
import { server_url } from "@/environments/constants";

interface Props {
    post: PostType,
    posts?: PostType[],
    relatedPosts: PostType[],
}

const PostDetail: NextPage<Props> = ({ post, posts, relatedPosts }) => {

    return (
        <>
            <div className='container-fluid py-5'>
                <h2 className='text-center text-uppercase fs-72 text-danger'> {post.title}</h2>
                <h6 className="text-center">read in X minutes</h6>
                <div className="row">
                    <div className="col d-flex justify-content-center"><img src="../../images/blog/leftHeader.svg" alt="leftHeader" /></div>
                    <div className="col d-flex justify-content-center">
                    </div>
                    <div className="col d-flex justify-content-center"><img src="../../images/blog/rightHeader.svg" alt="rightHeader" /></div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center"><img className="w-100" src="../../images/leftDotGroup.svg" alt="leftDotGroup" /></div>
                    <div className="col d-flex justify-content-center">
                        <Link target='_blank' className='text-decoration-none text-dark borderedIcon' href={'https://mk.linkedin.com/company/doniraj-kompjuter'}><FontAwesomeIcon icon={faLinkedIn} size='3x' /></Link>
                        <Link target='_blank' className='text-decoration-none text-dark borderedIcon' href={'https://www.facebook.com/donirajkompjuter/'}><FontAwesomeIcon icon={faFacebook} size='3x' /></Link>
                        <Link target='_blank' className='text-decoration-none text-dark borderedIcon' href={'https://www.instagram.com/donirajkompjuter/?hl=en'}><FontAwesomeIcon icon={faInstagram} size='3x' /></Link>
                        <Link target='_blank' className='text-decoration-none text-dark borderedIcon' href={'https://twitter.com/shlapatalo?lang=en'}> <FontAwesomeIcon icon={faTwitter} size='3x' /></Link></div>
                    <div className="col d-flex justify-content-center"><img className="w-100" src="../../images/leftDotGroup.svg" alt="leftDotGroup" /></div>
                </div>
            </div>

            <div className='container py-5'>
                <div className="row py-3">
                    <div className="col">
                        <img className="w-100" src={`../../images/driveGoogle/${post.images[1]}`} alt={post.title} />
                    </div>
                    <div className="col">
                        {post.title}
                        <br />
                        {post.longDescription}
                    </div>
                </div>
                <div className="row py-3">
                    <div className="col">
                        {post.title}
                        <br />
                        {post.longDescription}
                    </div>
                    <div className="col">
                        <img className="w-100" src={`../../images/driveGoogle/${post.images[0]}`} alt={post.title} />
                    </div>
                </div>
                <div className="row">
                    {post.conclusion}
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-5">
                        <h2>Ако ти се допадна, читај следно</h2>
                        <img className="ms-5 mt-n5" src="../images/blog/detailsBlogUndercase.svg" alt="detailsBlogUndercase" />
                    </div>
                    <div className="col-7 blogDetailsBackground">
                    </div>
                </div>
            </div>

            <RelatedPosts relatedPosts={relatedPosts} />
        </>
    );
};

export default PostDetail;

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`${server_url}posts`)
    const posts: PostType[] = await res.json();

    const paths = posts.map((post) => {
        return {
            params: {
                id: post.id
            }
        }
    });

    return {
        paths: paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    if (params?.id) {
        const res = await fetch(`${server_url}posts/${params.id}`);
        const post: PostType = await res.json();

        const resOfAllPosts = await fetch(`${server_url}posts`);
        const allPosts: PostType[] = await resOfAllPosts.json();

        // get random 3 from allPosts
        const copyOfAllBlogs = Array.from(allPosts)

        const n = 3; // number of elements we want to get
        const shuffledArray = copyOfAllBlogs.sort(() => 0.5 - Math.random()); // shuffles array
        const relatedPosts = shuffledArray.slice(0, n); // gets first n elements after shuffle

        console.log(relatedPosts)

        if (!res.ok) {
            return {
                notFound: true,
            }
        }

        return {
            props: {
                post,
                relatedPosts,
            },
        };
    }

    return {
        props: {
            notFound: true,
        },
    };
}