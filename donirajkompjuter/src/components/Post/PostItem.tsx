import { PostType } from "@/Types/types";
import Link from "next/link";
import React from "react";
import Moment from 'moment';

interface Props {
    post: PostType;
}

const PostItem: React.FC<Props> = ({ post }) => {
    const formatDate = (date: Date) => Moment(date).format('DD-MM-YYYY')
    return (
        <div className="col">
            <div className="card">
                <img src={`../../images/driveGoogle/${post.images[0]}`} className="card-img-top imagePosition" alt={post.title} />
                <div className="card-body light-gray-color">
                    <span className="bg-danger text-light px-5 py-2 categoryPosition"> {post.category} </span>
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.shortDescription}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <small> {formatDate(post.createdDate)} </small>
                        <Link href={'/posts/' + post.id}> <span className="text-danger text-decoration-underline">Повеќе...</span></Link>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default PostItem;
