import { PrimaryButton, SecondaryButton } from '@/styles/styleComponents/globalStyleComponents'
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import React from 'react'

const Hero = () => {
    const { t } = useTranslation('common');
    return (
        <div className='hero-background mx-auto m-0 px-0 py-4 vh-100'>
            <div className='container-fluid width-100 '>
                <div className="container-fluid">
                    <div className="row mx-auto m-0 p-0 d-flex align-items-center align-middle ">
                        <div className="col-6 d-flex justify-content-center flex-column">
                            <p className='text-uppercase fs-72'> {t('homePage.heroTitleFirstPart')} <span className='text-danger'>{t('homePage.heroTitleFirstSpan')}</span> </p>
                            <p className='text-uppercase fs-72'> {t('homePage.heroTitleSecondPart')} </p>
                            <p className='text-uppercase fs-72'> <span className='text-danger'>{t('homePage.heroTitleSecondSpan')}</span> {t('homePage.heroTitleThirdPart')} </p>
                            <div className="col-8 d-flex justify-content-around py-4">
                                <Link className='text-decoration-none' href={"/donate"}><PrimaryButton>{t('homePage.donatePCButton')} </PrimaryButton></Link>
                                <Link className='text-decoration-none' href={"apply"}><SecondaryButton>{t('homePage.iNeedPCButton')}</SecondaryButton></Link>
                            </div>
                        </div>
                        <div className="col-6 aboutUsHeroImg d-flex justify-content-center">
                            <img className='w-75' src="./images/homepage1.svg" alt="homepagePicture" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero