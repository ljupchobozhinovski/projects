import AboutUsHeader from "@/components/AboutUs/AboutUsHeader";
import AboutUsHeroSection from "@/components/AboutUs/AboutUsHeroSection";
import AboutUsImg from "@/components/AboutUs/AboutUsImg";
import Change from "@/components/AboutUs/Change";
import AboutUsMap from "@/components/AboutUs/AboutUsMap";
import OurPartners from "@/components/AboutUs/OurPartners";
import OurValuesAndOurTeam from "@/components/AboutUs/OurValuesAndOurTeam";
import { GetServerSideProps } from "next";
import { PostType } from "@/Types/types";
import Reward from "@/components/AboutUs/Reward";
import { server_url } from "@/environments/constants";

interface Props {
    awards: PostType[],
}

const AboutUs = ({ awards }: Props) => {
    return (

        <>
            <AboutUsHeader />
            <AboutUsHeroSection />
            <AboutUsImg />
            <OurValuesAndOurTeam />
            <Change />
            <AboutUsMap />
            <Reward awards={awards} />
            <OurPartners />
        </>
    );
}
export default AboutUs;

export const getServerSideProps: GetServerSideProps = async () => {
    const awardsRes = await fetch(`${server_url}awards`);
    const awards: PostType[] = await awardsRes.json();

    return {
        props: {
            awards,
        },
    };
};