import { SecondaryButton } from '@/styles/styleComponents/globalStyleComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF as faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin as faLinkedIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram as faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter as faTwitter } from '@fortawesome/free-brands-svg-icons'
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link'
import React, { FormEvent } from 'react'


const VolunteerApplicationSuccessful = () => {
    const { t } = useTranslation('common');
    return (
        <div className='container'>

            <div className="row mt-5">
                <div className="col ">
                    <img className='w-100' src="../../images/volunteer/volunteerAplicationSuccesfull.svg" alt="volunteerAplicationSuccesfull" />
                </div>
                <div className="col volunteer-arrow-down">
                    <h2 className='text-center'>
                        {t('volunteer.thankYouForYourAplicationFirstPart')}
                        <br />
                        {t('volunteer.thankYouForYourAplicationSecondPart')}
                    </h2>
                    <p className='text-center py-5'>{t('volunteer.volunteerReasonsFirstPart')} <br /> <span className='default-red-color fw-bold fs-4'>{t('volunteer.volunteerReasonsSecondPart')}</span> </p>
                </div>
            </div>

            <div className="row py-5">
                <div className="col d-flex flex-column justify-content-center text-center">
                    <h4>{t('volunteer.shareOnSocialMedia')} </h4>
                    <div className='d-flex justify-content-center'>
                        <Link target='_blank' className='text-decoration-none text-dark borderedIcon' href={'https://mk.linkedin.com/company/doniraj-kompjuter'}><FontAwesomeIcon icon={faLinkedIn} size='3x' /></Link>
                        <Link target='_blank' className='text-decoration-none text-dark borderedIcon' href={'https://www.facebook.com/donirajkompjuter/'}><FontAwesomeIcon icon={faFacebook} size='3x' /></Link>
                        <Link target='_blank' className='text-decoration-none text-dark borderedIcon' href={'https://www.instagram.com/donirajkompjuter/?hl=en'}><FontAwesomeIcon icon={faInstagram} size='3x' /></Link>
                        <Link target='_blank' className='text-decoration-none text-dark borderedIcon' href={'https://twitter.com/shlapatalo?lang=en'}> <FontAwesomeIcon icon={faTwitter} size='3x' /></Link>
                    </div>
                    <p>или</p>
                    <div className='d-flex justify-content-center'>
                        <Link className='text-decoration-none' href={'/'}><SecondaryButton>{t('volunteer.backToHome')} </SecondaryButton></Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default VolunteerApplicationSuccessful