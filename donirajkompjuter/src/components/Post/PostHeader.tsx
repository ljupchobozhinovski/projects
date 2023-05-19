import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF as faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin as faLinkedIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagram as faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter as faTwitter } from '@fortawesome/free-brands-svg-icons';
import useTranslation from 'next-translate/useTranslation';

const PostHeader = () => {
    const { t } = useTranslation('common');
    return (
        <div>
            <div className='container py-5'>
                <h2 className='text-center text-uppercase fs-72'>{t('blog.postHeaderFirstPart')} <span className='text-danger'>{t('blog.postHeaderSecondPart')} !</span></h2>
                <div className="row">
                    <div className=" col d-flex justify-content-center"><img src="../../images/blog/leftHeader.svg" alt="leftHeader" /></div>
                    <div className="col d-flex justify-content-center">
                    </div>

                    <div className="col d-flex justify-content-center"><img src="../../images/blog/rightHeader.svg" alt="rightHeader" /></div>
                </div>

                <div className="row">
                    <div className="col d-flex justify-content-center"><img className="w-100" src="../../images/leftDotGroup.svg" alt="leftDotGroup" /></div>
                    <div className="col d-flex justify-content-center">
                        <Link target='_blank' className='text-decoration-none text-dark borderedIcon' href={'https://mk.linkedin.com/company/doniraj-kompjuter'}><FontAwesomeIcon icon={faLinkedIn} size='3x' /></Link>
                        <Link target='_blank' className='text-decoration-none text-dark borderedIcon' href={'https://www.facebook.com/donirajkompjuter/'}><FontAwesomeIcon icon={faFacebook} size='3x' /></Link>
                        <Link target='_blank' className='text-decoration-none text-dark borderedIcon' href={'https://www.instagram.com/donirajkompjuter/?hl=en'}><FontAwesomeIcon icon={faInstagram} size='3x' /></Link>
                        <Link target='_blank' className='text-decoration-none text-dark borderedIcon' href={'https://twitter.com/shlapatalo?lang=en'}> <FontAwesomeIcon icon={faTwitter} size='3x' /></Link></div>
                    <div className="col d-flex justify-content-center"><img className="w-100" src="../../images/leftDotGroup.svg" alt="leftDotGroup" /></div>
                </div>
            </div >
        </div >
    )
}

export default PostHeader