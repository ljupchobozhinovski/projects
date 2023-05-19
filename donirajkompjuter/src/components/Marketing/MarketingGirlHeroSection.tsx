import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck as faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import useTranslation from 'next-translate/useTranslation';
const MarketingGirlHeroSection = () => {
    const { t } = useTranslation('common');
    return (
        <div className='container-fluid default-pink-color'>
            <div className="row">
                <div className="col-7">
                    <h3 className='font-weight-bold text-center py-5'>
                        {t('marketing.marketingPromoteFirstPart')}
                        <br />
                        {t('marketing.marketingPromoteSecondPart')}
                    </h3>
                    <p> {t('marketing.marketingPromoteDescription')} </p>
                    <ul>
                        <ul className='list-unstyled'>
                            <li className='py-1'> <FontAwesomeIcon icon={faCircleCheck} /> {t('marketing.marketingPromoteReasonOne')}</li>
                            <li className='py-1'> <FontAwesomeIcon icon={faCircleCheck} /> {t('marketing.marketingPromoteReasonTwo')}</li>
                            <li className='py-1'> <FontAwesomeIcon icon={faCircleCheck} /> {t('marketing.marketingPromoteReasonThree')}</li>
                        </ul>
                    </ul>
                </div>
                <div className="col-5 ">
                    <img src="../../images/marketing/marketingGirlHeroImg.svg" alt="marketingGirlHeroImg" />
                </div>
            </div>
        </div>
    )
}

export default MarketingGirlHeroSection;