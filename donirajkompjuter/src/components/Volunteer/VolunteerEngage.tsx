import { PrimaryButton } from '@/styles/styleComponents/globalStyleComponents'
import Link from 'next/link'
import React from 'react'
import useTranslation from 'next-translate/useTranslation';

const VolunteerEngage = () => {
    const { t } = useTranslation('common');

    return (
        <div className='container volunteer-engage-background py-5 mb-5'>
            <div className="row">
                <div className="col">
                    <img className='w-75' src="../../images/volunteer/evolunteerEngageImg.svg" alt="evolunteerEngageImg" />
                </div>
                <div className="col">
                    <p>{t('volunteer.areYouTheGuy')}</p>
                    <h3 className='default-red-color'> {t('volunteer.getInvolved')} </h3>
                    <div className='button-engage-background pt-5 mb-5 h-100 d-flex justify-content-center align-items-center'>
                        <Link href={'/become-volunteer'}><PrimaryButton className='mt-5'>{t('volunteer.becomeAVolunteer')} </PrimaryButton></Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default VolunteerEngage