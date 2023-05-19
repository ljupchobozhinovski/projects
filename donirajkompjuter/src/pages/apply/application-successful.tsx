import React from 'react'
import useTranslation from 'next-translate/useTranslation';
import { SecondaryButton } from '@/styles/styleComponents/globalStyleComponents';
import Link from 'next/link';
const ApplicationSuccessful = () => {
  const { t } = useTranslation('common');
  return (
    <div className='container-fluid'>
      <div className="container">
        <div className="row">
          <div className="col">
            <img className='w-100' src="../../images/apply/applySuccess.svg" alt="applySuccess" />
          </div>
          <div className="col text-center py-5">
            <h2>{t('apply.thankYouFirstPart')}</h2>
            <h2 className='text-danger pb-5'>{t('apply.thankYouSecondPart')}</h2>
            <p className='pb-5'>{t('apply.thankYouDescription')}</p>
            <Link className='text-decoration-none' href={'/'}><SecondaryButton className='mx-auto'>{t('apply.backButton')}</SecondaryButton></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicationSuccessful