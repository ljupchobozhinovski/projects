import { PrimaryButton } from '@/styles/styleComponents/globalStyleComponents'
import Link from 'next/link'
import React from 'react'
import useTranslation from 'next-translate/useTranslation';
const MarketingHeroSection = () => {
  const { t } = useTranslation('common');
  return (
    <div className='container'>
      <div className="row">
        <div className="col text-center text-uppercase ">
          <h2 className='fs-72'>  {t('marketing.marketingTitleFirstPart')} <br /> <span className='default-red-color'> {t('marketing.marketingTitleSecondPart')} </span></h2>
        </div>
        <div className="row">
          <div className="col marketing-background py-5 d-flex justify-content-center">
            <Link className='text-decoration-none' href={'/contact'} ><PrimaryButton>{t('marketing.marketingHeroButton')}</PrimaryButton></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketingHeroSection