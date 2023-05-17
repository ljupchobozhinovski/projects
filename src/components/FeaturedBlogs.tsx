import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FeaturedBlogType } from "../Types/types";

interface Props {
  featuredBlogs: FeaturedBlogType[]
}

const FeaturedBlogs: React.FC<Props> = ({ featuredBlogs }) => {

  return (
    <section className="sec-blog bg0 p-t-60 p-b-90">
      <div className="container">
        <div className="p-b-66">
          <h3 className="ltext-105 cl5 txt-center respon1">Our Blogs</h3>
        </div>

        <div className="row">
          {/* blog skeleton */}

          {featuredBlogs.map((featuredBlog) => {
            return (
              <div className="col-sm-6 col-md-4 p-b-40" key={featuredBlog.id}>
                <Link href={`/blog/${featuredBlog.id}`}>
                  <a className="blog-item">
                    <div className="hov-img0">
                      <img src={featuredBlog.img} alt={featuredBlog.title} className="img-fluid" />
                    </div>

                    <div className="p-t-15">
                      <div className="stext-107 flex-w p-b-14">
                        <span className="m-r-3">
                          <span className="cl4">By </span>

                          <span className="cl5">{featuredBlog.author}</span>
                        </span>

                        <span>
                          <span className="cl4">on</span>

                          <span className="cl5 ml-1">{featuredBlog.date}</span>
                        </span>
                      </div>

                      <h4 className="p-b-12">
                        <div className="mtext-101 cl2 hov-cl1 trans-04">{featuredBlog.title}</div>
                      </h4>

                      <p className="stext-108 cl6">{featuredBlog.excerpt}</p>
                    </div>
                  </a>
                </Link>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  const category = query.category;

  let blogRes;

  if (category) {
    blogRes = await fetch(
      `http://localhost:5001/blogs?category_like=${category}`);
  } else {
    blogRes = await fetch(
      `http://localhost:5001/blogs`);
  }

  const featuredBlogs: FeaturedBlogType[] = await blogRes.json();

  return {
    props: {
      featuredBlogs,
    },
  };
};
