import React from 'react'
import useTranslation from 'next-translate/useTranslation';
const OurAcknowledgments = () => {
    const { t } = useTranslation('common');
    return (
        <div className='container-fluid'>

            <div className="row">
                <h2>{t('aboutPage.aboutPageOurAcknowledgmentsTitleFirstPart')} <span className='red-default-color'>{t('aboutPage.aboutPageOurAcknowledgmentsTitleSecondPart')}</span></h2>
                <div className="col">
                    {t('aboutPage.aboutPageOurAcknowledgmentsTitleThirdPart')}  <br />
                    {t('aboutPage.aboutPageOurAcknowledgmentsTitleFourthPart')}
                </div>
            </div>
        </div>
    )
}

export default OurAcknowledgments