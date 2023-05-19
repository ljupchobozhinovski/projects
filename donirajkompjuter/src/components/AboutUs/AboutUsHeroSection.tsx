import React from 'react'
import useTranslation from 'next-translate/useTranslation';
const AboutUsHeroSection = () => {
    const { t } = useTranslation('common');
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-5 d-flex align-items-center justify-content-center">
                        <img className='w-100' src="./images/aboutUs/redDots.svg" alt="redDots" />
                    </div>
                    <div className="col-2 d-flex align-items-center justify-content-center">
                        <img src="./images/aboutUs/computer-display-outline.svg" alt="computer-display-outline" />
                    </div>
                    <div className="col-5 d-flex align-items-center justify-content-center">
                        <img className='w-100' src="./images/aboutUs/redDots.svg" alt="redDots" />
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                   <div className="container">
                    <div className="row w-100">
                        <div className="col-6">
                            <h3 className='text-uppercase'> {t('aboutPage.aboutPageHeroTitleFirstPart')} <span className='default-red-color'> {t('aboutPage.aboutPageHeroTitleSecondPart')} </span></h3>
                            <h2>{t('aboutPage.aboutPageHeroTitleThirdPart')}</h2>
                            <p>{t('aboutPage.aboutPageHeroTitleDescriptionPart')} </p>
                        </div>
                        <div className="col-6 aboutUsHeroImg">
                            <img src="./images/aboutUs/aboutUsHeroSectionImg.svg" alt="aboutUsHeroSectionImg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsHeroSection