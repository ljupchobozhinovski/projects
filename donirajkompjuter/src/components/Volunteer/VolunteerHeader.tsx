import React from 'react'
import useTranslation from 'next-translate/useTranslation';
const VolunteerHeader = () => {
    const { t } = useTranslation('common');
    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col d-flex justify-content-end">
                        <img className='mr-30' src="../../images/volunteer/volunteerHeart.svg" alt="volunteerHeart" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h2 className='text-uppercase fs-72 text-center'>{t('volunteer.volunteerFromHeartFirstPart')} <span className='default-red-color'>{t('volunteer.volunteerFromHeartSecondPart')}</span> </h2>
                    </div>
                </div>
            </div>

            {/* MAKE A SEPARATE COMPONENT FOR THIS SECTION */}

            <div className="container-fluid">
                <div className="row">
                    <div className="col-5 d-flex align-items-center justify-content-center">
                        <img className='w-100' src="../../images/aboutUs/redDots.svg" alt="redDots" />
                    </div>
                    <div className="col-2 d-flex align-items-center justify-content-center">
                        <img src="../../images/aboutUs/computer-display-outline.svg" alt="computer-display-outline" />
                    </div>
                    <div className="col-5 d-flex align-items-center justify-content-center">
                        <img className='w-100' src="../../images/aboutUs/redDots.svg" alt="redDots" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default VolunteerHeader