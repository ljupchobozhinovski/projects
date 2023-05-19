import EducationHeroSection from '@/components/Education/educationHeroSection'
import EducationLogoSlider from '@/components/Education/educationLogoSlider'
import GetInvolved from '@/components/Education/getInvolved'
import HowDoesThisWork from '@/components/Education/howDoesThisWork'
import PicturesSlider from '@/components/Education/picturesSlider'
import SkillsBackground from '@/components/Education/skillsBackground'
import React from 'react'

const Education = () => {
    return (
        <>
            <EducationHeroSection />
            <EducationLogoSlider />
            <HowDoesThisWork />
            <SkillsBackground />
            <PicturesSlider />
            <GetInvolved />
        </>
    )
}

export default Education