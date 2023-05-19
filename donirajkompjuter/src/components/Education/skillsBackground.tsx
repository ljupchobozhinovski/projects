import React from 'react'
import useTranslation from 'next-translate/useTranslation';
const SkillsBackground = () => {
    const { t } = useTranslation('common');
    return (
        <div className='container py-5'>
            <div className="row">
                <h2>{t('education.educationYourSkillsFirstPart')} <span>{t('education.educationYourSkillsSecondPart')} </span></h2>
            </div>

            <div className="row d-flex align-items-center">
                <div className="col-2">
                    <img src="../../images/education/chooseLevel.svg" alt="chooseLevel" />
                </div>
                <div className="col-2 default-light-gray-color py-5 text-center rounded-pill">
                    <h6 className='py-5'>{t('education.educationBasicLevel')}</h6>
                    <h6 className='py-5'>{t('education.educationAdvancedLevel')}</h6>
                </div>
                <div className="col-8 chooseLevelBackground">
                    <p>{t('education.educationSkillsDesc')}</p>
                    <img src="../../images/education/playIcon.svg" alt="playIcon" />
                    <span>{t('education.educationWatchVideoBtn')}</span>
                </div>
            </div>

        </div>
    )
}

export default SkillsBackground