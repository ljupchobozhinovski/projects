import { PrimaryButton } from '@/styles/styleComponents/globalStyleComponents'
import Link from 'next/link'
import React from 'react'
import useTranslation from 'next-translate/useTranslation';

const WhatWeOffer = () => {
    const { t } = useTranslation('common');
    return (
        <div className='container'>
            <div className="row py-5">
                <p className='fs-40 text-center'>{t('homePage.whatWeOfferFirstPart')} <span className='text-danger'>{t('homePage.whatWeOfferSecondPart')} </span></p>
                <div className="col-4 flex-column d-flex">
                    <img className='w-50 mx-auto py-2' src="../../images/homepageMarketing.svg" alt="homepageMarketing" />
                    <Link className='text-decoration-none mx-auto py-2' href={'/services/marketing'}> <PrimaryButton>{t('homePage.marketingButton')}</PrimaryButton> </Link>
                    <p>{t('homePage.marketingButtonDescription')} </p>
                </div>
                <div className="col-4 d-flex flex-column">
                    <img className='w-50 mx-auto py-2' src="../../images/homepageEducation.svg" alt="homepageEducation" />
                    <Link className='text-decoration-none mx-auto py-2' href={'/services/education'} > <PrimaryButton>{t('homePage.educationButton')}</PrimaryButton></Link>
                    <p>{t('homePage.educationButtonDescription')}</p>
                </div>
                <div className="col-4 d-flex flex-column">
                    <img className='w-50 mx-auto py-2' src="../../images/homepageVolunteer.svg" alt="homepageVolunteer" />
                    <Link className='text-decoration-none mx-auto py-2' href={'/services/volunteer'}><PrimaryButton>{t('homePage.volunteerButton')}</PrimaryButton></Link>
                    <p>{t('homePage.volunteerButtonDescription')}</p>
                </div>
            </div>
        </div>
    )
}

export default WhatWeOffer