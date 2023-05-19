import MarketingGirlHeroSection from '@/components/Marketing/MarketingGirlHeroSection'
import MarketingHeroSection from '@/components/Marketing/MarketingHeroSection'
import MarketingPackages from '@/components/Marketing/MarketingPackages'
import SponsorsSlider from '@/components/Marketing/SponsorsSlider'
import { NextPage } from 'next'
import React from 'react'

interface Props {

}

const Marketing: NextPage<Props> = () => {
    return (

        <>
            <MarketingHeroSection />
            <MarketingGirlHeroSection />
            <SponsorsSlider />
            <MarketingPackages />
        </>

    )
}

export default Marketing;