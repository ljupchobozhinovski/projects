import { PrimaryButton } from '@/styles/styleComponents/globalStyleComponents'
import Link from 'next/link'
import React from 'react'
import useTranslation from 'next-translate/useTranslation';
const MarketingPackages = () => {
    const { t } = useTranslation('common');
    return (
        <div className="container text-center py-5">
            <div className="row">
                <div className="col">
                    <h3> {t('marketing.marketingPromotion')}</h3>
                    <p> {t('marketing.marketingPromotionDescription')}</p>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <Link className='text-decoration-none' href={'/contact'}><PrimaryButton>{t('marketing.marketingPromotionButton')}</PrimaryButton> </Link>
                </div>
            </div>
        </div>
    )
}

export default MarketingPackages