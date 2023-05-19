import React from 'react'
import useTranslation from 'next-translate/useTranslation';
const OurValuesAndOurTeam = () => {
    const { t } = useTranslation('common');
    return (
        <>
            <h3 className='text-center pt-5'>{t('aboutPage.ourValuesFirstPart')} <span className='default-red-color'>{t('aboutPage.ourValuesSecondPart')} </span></h3>
            <div className="row row-cols-1 row-cols-md-3 g-4 py-5 ">

                <div className="col d-flex justify-content-center">
                    <div className="card h-100 w-50 text-center default-light-gray-color">
                        <div className="card-body">
                            <img src="./images/aboutUs/modest.svg" alt="modest" />
                            <h5 className="card-title">{t('aboutPage.weAreModest')}</h5>
                        </div>
                    </div>
                </div>

                <div className="col d-flex justify-content-center">
                    <div className="card h-100 w-50 text-center default-light-gray-color">
                        <div className="card-body">
                            <img src="./images/aboutUs/teamwork.svg" alt="teamwork" />
                            <h5 className="card-title">{t('aboutPage.weLoveOurWork')}</h5>
                        </div>
                    </div>
                </div>
                <div className="col d-flex justify-content-center">
                    <div className="card h-100 w-50 text-center default-light-gray-color">
                        <div className="card-body">
                            <img src="./images/aboutUs/respect.svg" alt="respect" />
                            <h5 className="card-title">{t('aboutPage.weRespect')}</h5>
                        </div>
                    </div>
                </div>
            </div>

            <h3 className='text-center pt-5'>{t('aboutPage.ourTeamFirstPart')} <span className='default-red-color'>{t('aboutPage.ourTeamSecondPart')}</span></h3>
            <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
                <div className="col d-flex justify-content-center">
                    <div className="card h-100 w-50 text-center default-light-gray-color">
                        <div className="card-body">
                            <img src="./images/aboutUs/person1.svg" alt="person1" />
                            <h5 className="card-title">{t('aboutPage.person1')}</h5>
                        </div>
                    </div>
                </div>
                <div className="col d-flex justify-content-center">
                    <div className="card h-100 w-50 text-center default-light-gray-color">
                        <div className="card-body">
                            <img src="./images/aboutUs/person2.svg" alt="person2" />
                            <h5 className="card-title">{t('aboutPage.person2')}</h5>
                        </div>
                    </div>
                </div>
                <div className="col d-flex justify-content-center">
                    <div className="card h-100 w-50 text-center default-light-gray-color">
                        <div className="card-body">
                            <img src="./images/aboutUs/person3.svg" alt="person3" />
                            <h5 className="card-title">{t('aboutPage.person3')}</h5>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default OurValuesAndOurTeam