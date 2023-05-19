import { PrimaryButton } from '@/styles/styleComponents/globalStyleComponents';
import React from 'react'
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
const Change = () => {
    const { t } = useTranslation('common');
    return (
        <>
            <div className='container-fluid py-5 mx-0 px-0'>
                <div className="row py-5 mx-0 px-0">
                    <div className="col d-flex justify-content-start aboutUsChangeDots">
                        <img src="./images/leftDotGroup.svg" alt="leftDotGroup" />
                    </div>
                </div>

                <div className="row d-flex align-items-center justify-content-center mx-0">
                    <div className="col-6 text-center">
                        <h2>{t('aboutPage.aboutPageVolunteerTitle')} </h2>
                        <h2>{t('aboutPage.aboutPageVolunteerTitleFirstPart')}  <br /> <span className='default-red-color'>{t('aboutPage.aboutPageVolunteerTitleSecondPart')} </span></h2>
                    </div>
                    <div className="col-6 text-center">

                        <Link className='text-decoration-none' href={'/services/volunteer'}><PrimaryButton className='mx-auto'>{t('aboutPage.aboutPageVolunteerButton')}</PrimaryButton></Link>


                        <br />
                        <img src="./images/aboutUs/signature.svg" alt="signature" />
                    </div>

                </div>
            </div>
            <div className="row mx-0 px-0">
                <div className="col d-flex justify-content-end aboutUsChangeDots">
                    <img src="../../images/rightDotGroup.svg" alt="rightDotGroup" />
                </div>
            </div>
        </>
    )
}
export default Change;