import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck as faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { SecondaryButton, PrimaryButton } from '@/styles/styleComponents/globalStyleComponents'
import { faLeftLong as faLeft } from '@fortawesome/free-solid-svg-icons'
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link'
const BeforeYouApply = () => {
    const { t } = useTranslation('common');
    return (
        <>
            <div className='container-fluid default-light-gray-color text-center py-5 vh-100'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className='py-5'>{t('apply.beforeYouApplyHeading')}</h2>
                            <p className='py-5'>{t('apply.beforeYouApplyText')}</p>
                            <div>
                                <ul className='list-unstyled'>
                                    <li className='py-1'> <FontAwesomeIcon icon={faCircleCheck}/> Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
                                    <li className='py-1'> <FontAwesomeIcon icon={faCircleCheck}/> Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
                                    <li className='py-1'> <FontAwesomeIcon icon={faCircleCheck}/> Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
                                </ul>
                            </div>
                            <div className='d-flex justify-content-center py-5'>
                                <Link className='text-decoration-none' href={'/'} ><SecondaryButton className='mx-4'> <FontAwesomeIcon icon={faLeft}/> </SecondaryButton></Link>
                                <Link className='text-decoration-none' href={'/'}> <PrimaryButton className='px-5'>  {t('apply.continue')}  </PrimaryButton> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BeforeYouApply