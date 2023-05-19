import { SecondaryButton } from '@/styles/styleComponents/globalStyleComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF as faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin as faLinkedIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram as faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter as faTwitter } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
interface Props {
    updateStep: Function;
}

const DonateEquipmentSuccessContent = ({ updateStep }: Props) => {
    const { t } = useTranslation('common');
    return (
        <div className='container'>
            <div className="row mt-5">
                <div className="col ">
                    <img className='w-100' src="../../images/donateFunds/donateEquipment.svg" alt="donateEquipment" />
                </div>
                <div className="col volunteer-arrow-down">
                    <h2 className='text-center'>
                        {t('donate.donateThankTouFirstPart')}
                        <br />
                        {t('donate.donateThankTouSecondPart')}
                    </h2>
                    <p className='text-center py-5'> {t('donate.donateThankTouParagraphFirstPart')}<br /> <span className='default-red-color fw-bold fs-4'>{t('donate.donateThankTouParagraphSecondPart')}</span> </p>
                </div>
            </div>
            <div className="row py-5">
                <div className="col d-flex flex-column justify-content-center text-center">
                    <h4>{t('donate.donateShare')}</h4>
                    <div className='d-flex justify-content-center'>
                        <Link target='_blank' className='text-decoration-none text-dark borderedIcon' href={'https://mk.linkedin.com/company/doniraj-kompjuter'}><FontAwesomeIcon icon={faLinkedIn} size='3x' /></Link>
                        <Link target='_blank' className='text-decoration-none text-dark borderedIcon' href={'https://www.facebook.com/donirajkompjuter/'}><FontAwesomeIcon icon={faFacebook} size='3x' /></Link>
                        <Link target='_blank' className='text-decoration-none text-dark borderedIcon' href={'https://www.instagram.com/donirajkompjuter/?hl=en'}><FontAwesomeIcon icon={faInstagram} size='3x' /></Link>
                        <Link target='_blank' className='text-decoration-none text-dark borderedIcon' href={'https://twitter.com/shlapatalo?lang=en'}> <FontAwesomeIcon icon={faTwitter} size='3x' /></Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DonateEquipmentSuccessContent