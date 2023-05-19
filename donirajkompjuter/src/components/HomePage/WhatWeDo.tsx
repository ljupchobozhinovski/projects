import React from 'react'
import useTranslation from 'next-translate/useTranslation';
const WhatWeDo = () => {
    const { t } = useTranslation('common');
    return (
        <div className='container text-center'>
            <div className="row py-5">
                <div className="col-6">
                    <span className='fs-1'>

                        {t('homePage.whoAreWe')}
                    </span>
                    <p>{t('homePage.whatWeDoDescription')}</p>
                </div>
                <div className="col-6">
                    <span className='fs-1'>
                        {t('homePage.whatWeDo')}
                    </span>
                    <p>{t('homePage.whoAreWeDescription')}</p>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo