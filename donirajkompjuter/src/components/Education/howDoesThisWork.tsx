import React from 'react'
import useTranslation from 'next-translate/useTranslation';
const HowDoesThisWork = () => {
    const { t } = useTranslation('common');
    return (
        <div className='container' id="how-it-works">
            <div className="row py-5 text-center">
                <h3>{t('education.howDoesThisWorkFirstPart')} <span className='text-danger'>{t('education.howDoesThisWorkSecondPart')}?</span>
                </h3>
            </div>

            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card h-100 default-light-gray-color p-4">
                        <img className='w-25' src="../../images/education/relax.svg" alt="relax" />
                        <div className="card-body">
                            <h5 className="card-title">{t('education.educationCardOne')}</h5>
                            <p className="card-text">{t('education.educationCardOneDescription')}</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 default-light-gray-color p-4">
                        <img className='w-25' src="../../images/education/quality.svg" alt="quality" />
                        <div className="card-body">
                            <h5 className="card-title">{t('education.educationCardTwo')}</h5>
                            <p className="card-text">{t('education.educationCardTwoDescription')}</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 default-light-gray-color p-4">
                        <img className='w-25' src="../../images/education/creative.svg" alt="creative" />
                        <div className="card-body">
                            <h5 className="card-title">{t('education.educationCardThree')}</h5>
                            <p className="card-text">{t('education.educationCardThreeDescription')}</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 default-light-gray-color p-4">
                        <img className='w-25' src="../../images/education/certificate.svg" alt="certificate" />
                        <div className="card-body">
                            <h5 className="card-title">{t('education.educationCardFour')}</h5>
                            <p className="card-text">{t('education.educationCardFourDescription')}</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default HowDoesThisWork