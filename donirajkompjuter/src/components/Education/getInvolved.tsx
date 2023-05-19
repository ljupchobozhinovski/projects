import { PrimaryButton } from '@/styles/styleComponents/globalStyleComponents'
import Link from 'next/link'
import React from 'react'
import useTranslation from 'next-translate/useTranslation';
const GetInvolved = () => {
    const { t } = useTranslation('common');
    return (
        <div className='container-fluid w-100 text-center'>
            <div className="row d-flex justify-content-between mx-auto align-items-center">
                <div className="col-6">
                    <p className='fs-3'>{t('education.educationGetInvolvedFirstPart')} <span className='text-danger'>{t('education.educationGetInvolvedSecondPart')} </span></p>
                    <h3>{t('education.educationGetInvolvedQuestion')} </h3>
                    <Link className='text-decoration-none' href={'/contact'}> <PrimaryButton className='mx-auto my-4'>{t('education.educationGetInvolvedContactBtn')}</PrimaryButton></Link>
                </div>
                <div className="col-6 my-4">
                    <img className='w-50' src="../../images/education/getInvolved.svg" alt="getInvolved" />
                </div>
            </div>
        </div>
    )
}

export default GetInvolved