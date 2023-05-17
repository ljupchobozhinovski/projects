import Link from "next/link";
import React from "react";
import { FeaturedBlogType } from "../Types/types";

interface Props {
  relatedBlogs: FeaturedBlogType[]
}

const RelatedBlogs: React.FC<Props> = ({ relatedBlogs }) => {
  return (
    <div>
      <h4 className="mtext-112 cl2 mb-3">Related Blogs</h4>

      <ul>
        {relatedBlogs.map((relatedBlog) => {
          return (
            <li key={relatedBlog.id} className="mb-4">
              <Link href={`/blog/${relatedBlog.id}`}>
                <a className="wrao-pic-w">
                  <img src={relatedBlog.img} alt={relatedBlog.title} className="img-fluid" />
                  <div className="p-t-8 mt-1">
                    <div className="stext-116 cl8 hov-cl1 trans-04 mb-3">{relatedBlog.title}</div>
                  </div>
                </a>
              </Link>
            </li>
          )
        })}

      </ul>

    </div>
  );
};

export default RelatedBlogs;
