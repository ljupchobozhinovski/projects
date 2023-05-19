import Banner from '@/components/HomePage/Banner'
import Header from '@/components/Navbar'
import Hero from '@/components/HomePage/Hero'
import WhatWeDo from '@/components/HomePage/WhatWeDo'
import PictureSection from '@/components/HomePage/PictureSection'
import WhatWeOffer from '@/components/HomePage/WhatWeOffer'
import WhyDonate from '@/components/HomePage/WhyDonate'
import NewsAndActivities from '@/components/HomePage/NewsAndActivities'
import Testimonials from '@/components/HomePage/Testimonials'
import CountingClock from '@/components/HomePage/CountingClock'
import { PostType, StatisticsType, TestimonialType } from '@/Types/types';
import { GetServerSideProps, NextPage } from 'next'
import { server_url } from '@/environments/constants'
interface Props {
  statistics: StatisticsType,
  posts: PostType[],
  testimonials: TestimonialType[]
}

const Home: NextPage<Props> = ({ statistics, posts, testimonials }) => {

  return (
    <>
      <Banner />
      <Header />
      <Hero />
      <CountingClock statistics={statistics} />
      <WhatWeDo />
      <PictureSection />
      <WhatWeOffer />
      <WhyDonate />
      <NewsAndActivities posts={posts} />
      <Testimonials testimonials={testimonials} />
      <Banner />
    </>
  )
}
export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const statisticsRes = await fetch(`${server_url}statistics`);
  const statistics: StatisticsType = await statisticsRes.json();

  const postsRes = await fetch(`${server_url}posts`);
  const posts: PostType[] = await postsRes.json();

  const testimonialsRes = await fetch(`${server_url}testimonials`);
  const testimonials: TestimonialType[] = await testimonialsRes.json();

  return {
    props: {
      statistics,
      posts,
      testimonials
    },
  };
};