import React from 'react'
import useTranslation from 'next-translate/useTranslation';
const AboutUsHeader = () => {
    const { t } = useTranslation('common');
    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <h2 className='text-uppercase text-center fs-72'> {t('aboutPage.aboutPageHeaderTitleFirstPart')} <br /> <span className='default-red-color'>{t('aboutPage.aboutPageHeaderTitleSecondPart')}</span> </h2>
                </div>
            </div>
        </div>
    )
}

export default AboutUsHeader;