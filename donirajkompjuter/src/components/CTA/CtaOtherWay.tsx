import { SecondaryButton, PrimaryButton } from '@/styles/styleComponents/globalStyleComponents'
import Link from 'next/link'
import React from 'react'
import useTranslation from 'next-translate/useTranslation';
const CtaOtherWay = () => {
    const { t } = useTranslation('common');
    return (
        <div className='container-fluid py-5'>
            <div className="row">
                <div className="col text-center">
                    <h2>{t('cta.ctaOtherWay')}</h2>
                    <p className='py-5'>{t('cta.ctaOtherWayDescription')} </p>
                    <div className='d-flex justify-content-center'>
                        <Link className='text-decoration-none' href={'/services/volunteer'}><SecondaryButton className='py-2 mx-5'> {t('cta.ctaVolunteer')}  </SecondaryButton></Link>
                        <Link className='text-decoration-none' href={'/services/contribute'}> <PrimaryButton className='py-2 mx-5'>{t('cta.ctaContributeDif')}</PrimaryButton> </Link>
                    </div>
                    <Link className='text-dark' href={'/contact'}> <p className='py-4'>{t('cta.ctaLeaveAComment')}</p> </Link>
                </div>
            </div>
        </div>
    )
}

export default CtaOtherWay