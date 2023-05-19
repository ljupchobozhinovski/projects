import { PrimaryButton } from '@/styles/styleComponents/globalStyleComponents'
import React from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation';

const WhyDonate = () => {
    const { t } = useTranslation('common');
    return (
        <div className='container whyDonateBg py-5'>
            <p className='fs-40 text-center'>
                {t('homePage.whyDonateTitle')} <span className='default-red-color'>{t('homePage.whyDonatePostTitle')}</span>
            </p>
            <div className="row py-4 d-flex align-items-center">
                <div className="col text-end">
                    <span>   <img src="../../images/homepage1Icon.svg" alt="homepageIcon1" /></span>
                </div>
                <div className="col"><p className='text-uppercase'>{t('homePage.whyDonateFirstReasonFirstPart')} <br />
                    {t('homePage.whyDonateFirstReasonSecondPart')}</p></div>
            </div>
            <div className="row py-4 d-flex align-items-center">
                <div className="col text-end">
                    <span>   <img src="../../images/homepage2Icon.svg" alt="homepageIcon2" /></span>
                </div>
                <div className="col"><p className='text-uppercase'> {t('homePage.whyDonateSecondReasonFirstPart')}<br />
                    {t('homePage.whyDonateSecondReasonSecondPart')}</p></div>
            </div>
            <div className="row py-4 d-flex align-items-center">
                <div className="col text-end">
                    <span>   <img src="../../images/homepage3Icon.svg" alt="homepageIcon3" /></span>
                </div>
                <div className="col"><p className='text-uppercase'>{t('homePage.whyDonateThirdReasonFirstPart')} <br /> {t('homePage.whyDonateThirdReasonSecondPart')}</p></div>
            </div>
            <div className="d-flex justify-content-center">
                <Link className='text-decoration-none mx-auto py-2' href={'/donate'}><PrimaryButton>{t('homePage.whyDonateButton')} </PrimaryButton></Link>
            </div>
        </div>
    )
}

export default WhyDonate