import { PrimaryButton, SecondaryButton } from '@/styles/styleComponents/globalStyleComponents'
import Link from 'next/link'
import React from 'react'
import useTranslation from 'next-translate/useTranslation';
const CtaHero = () => {
    const { t } = useTranslation('common');
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 className='text-center fs-72'>{t('cta.ctaTitle')}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <img className='w-75' src="../../images/cta/CtaHeroImg.svg" alt="CtaHeroImg" />
                </div>
            </div>
            <div className="row d-flex mx-auto w-50">
                <div className="col  py-4">
                    <Link className='text-decoration-none' href={'/donate'}><SecondaryButton className='w-100 py-2'> {t('cta.ctaDonatePC')} </SecondaryButton></Link>
                </div>
                <div className="col py-4">
                    <Link className='text-decoration-none' href={'/apply'}> <PrimaryButton className='w-100 py-2'>{t('cta.ctaApplyForPC')}</PrimaryButton> </Link>
                </div>
            </div>
        </div>
    )
}

export default CtaHero