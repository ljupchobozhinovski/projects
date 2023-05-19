import React from 'react'
import useTranslation from 'next-translate/useTranslation';
const VolunteerHero = () => {
    const { t } = useTranslation('common');
    return (
        <div className='container'>
            <div className="row py-4">
                <div className="col text-start">
                    <img className='w-75' src="../../images/volunteer/volunteerHeroImgOne.svg" alt="volunteerHeroImgOne" />
                </div>
                <div className="col text-end">
                    <h3>{t('volunteer.partOfUs')} </h3>
                    <p>{t('volunteer.reasonOne')}</p>
                </div>
            </div>

            <div className="row py-4" >
                <div className="col text-start">
                    <h3>{t('volunteer.basicHelp')} </h3>
                    <p>{t('volunteer.reasonTwo')}</p>
                </div>
                <div className="col text-end">
                    <img className='w-75' src="../../images/volunteer/volunteerHeroImgTwo.svg" alt="volunteerHeroImgTwo" />
                </div>
            </div>
        </div>
    )
}

export default VolunteerHero