import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck as faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { SecondaryButton, PrimaryButton } from '@/styles/styleComponents/globalStyleComponents'
import { faLeftLong as faLeft } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation';
interface Props {
    updateStep: Function;
}
const DonateEquipmentInformation = ({ updateStep }: Props) => {
    const { t } = useTranslation('common');
    return (
        <div className='container'>
            <div className="row text-center">
                <div className="col p-4 m-4 default-light-gray-color d-flex flex-column align-items-center justify-content-center">
                    <h2 className='p-3'>{t('donate.donateAccept')}</h2>
                    <p className='p-3'>{t('donate.donateAcceptInfo')}</p>
                    <ul className='list-unstyled text-start p-3'>
                        <li> <FontAwesomeIcon icon={faCircleCheck} /> {t('donate.donateAcceptFirst')}</li>
                        <li> <FontAwesomeIcon icon={faCircleCheck} /> {t('donate.donateAcceptSecond')}</li>
                        <li> <FontAwesomeIcon icon={faCircleCheck} />   {t('donate.donateAcceptThird')}</li>
                    </ul>
                    <div className='d-flex justify-content-start align-items-center p-3'>
                        <Link className='text-decoration-none' href={'/donate'}><SecondaryButton className='w-100 py-2'> <FontAwesomeIcon icon={faLeft} size='2x' /> </SecondaryButton></Link>
                        <PrimaryButton onClick={() => updateStep(2)} className='w-100 py-3'>{t('donate.donateContinueBtn')}</PrimaryButton>
                    </div>
                </div>

                <div className="col p-4 m-4 default-light-gray-color d-flex flex-column align-items-center justify-content-center">
                    <h2 className='p-3'>{t('donate.donateInfo')}</h2>
                    <p className='p-3'>{t('donate.donateInfoDesc')}</p>
                    <ul className='list-unstyled text-start p-3'>
                        <li> <FontAwesomeIcon icon={faCircleCheck} /> {t('donate.donateInfoReasonOne')}</li>
                        <li> <FontAwesomeIcon icon={faCircleCheck} /> {t('donate.donateInfoReasonTwo')}</li>
                        <li> <FontAwesomeIcon icon={faCircleCheck} /> {t('donate.donateInfoReasonThree')}</li>
                    </ul>
                    <Link className='text-decoration-none' href={'https://www.facebook.com/zerowastemk/'}><SecondaryButton className='w-100 py-2'> Донирај во Zero waste </SecondaryButton></Link>
                </div>
            </div>
        </div>
    )
}

export default DonateEquipmentInformation