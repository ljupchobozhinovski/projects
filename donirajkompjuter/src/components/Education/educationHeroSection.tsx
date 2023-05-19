import { PrimaryButton } from '@/styles/styleComponents/globalStyleComponents'
import Link from 'next/link'
import React from 'react'
import useTranslation from 'next-translate/useTranslation';
const EducationHeroSection = () => {
    const { t } = useTranslation('common');

    const scrollToSection = () => {
        const element = document.getElementById('how-it-works');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="container-fluid education-hero-hearts-background">
            <div className='container'>
                <div className="row">
                    <h2 className='fs-72 text-center py-5'>{t('education.educationTitleFirstPart')} <br /> <span className='text-danger'>{t('education.educationTitleSecondPart')}</span></h2>
                </div>
                <div className="row education-hero-background">
                    <div className="col py-5 d-flex justify-content-around offset-2">
                        <PrimaryButton onClick={() => scrollToSection()}>{t('education.educationButton')}</PrimaryButton>
                        <img className='' src="../../images/education/watchVideoSVG.svg" alt="watchVideoSVG" />
                    </div>
                </div>
                <div className="row ">
                    <div className="col d-flex justify-content-around">
                        <img className='mt-5' src="../../images/education/eduPerson1.svg" alt="eduPerson1" />
                        <img className='mb-5' src="../../images/education/eduPerson2.svg" alt="eduPerson2" />
                    </div>
                    <div className="col d-flex justify-content-around">
                        <img className='mt-5' src="../../images/education/eduPerson3.svg" alt="eduPerson3" />
                        <img className='mb-5' src="../../images/education/eduPerson4.svg" alt="eduPerson4" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationHeroSection