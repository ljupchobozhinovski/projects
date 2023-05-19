import { TertiaryButton } from '@/styles/styleComponents/globalStyleComponents'
import Link from 'next/link'
import React from 'react'
import useTranslation from 'next-translate/useTranslation';
const Footer = () => {
    const { t } = useTranslation('common');
    return (
        <div className='container-fluid py-5'>
            <div className='aboutUsImg py-2'>
                <img className='w-100' src="../../images/leftDotGroup.svg" alt="footer" />
            </div>

            <div className="container">


                <div className="row py-3">

                    <div className="col-4 mt-4">
                        <img src="../../images/donirajkompjuter.svg" alt="donirajKompjuterLogo" />
                        <p>{t('footer.enterData')}</p>
                        <input type="text" className="form-control mb-4 w-75" placeholder={t('footer.enterNameAndSurname')} aria-label="name" aria-describedby="basic-addon1" />
                        <input type="email" className="form-control mb-4 w-75" placeholder={t('footer.enterEMail')} aria-label="email" aria-describedby="basic-addon1" />
                        <TertiaryButton>{t('footer.getInformed')} </TertiaryButton>
                    </div>
                    <div className="col-4 mt-4 text-center">
                        <div>
                            <h3 className='p-0 m-0'>{t('footer.contactUs')}</h3>
                            <p className='p-0 m-0'>{t('footer.contactEMail')}</p>
                            <p className='p-0 m-0'>{t('footer.contactPhone')}</p>
                            <p className='p-0 m-0'>{t('footer.contactAdress')}</p>
                            <p className='mb-5'>{t('footer.contactLocation')}</p>
                        </div>
                        <div>
                            <p>
                                {t('footer.followUs')}
                            </p>
                            <div>
                                <Link href={'https://twitter.com/shlapatalo'} target='_blank'>
                                    <img className='footerIcon' src="../../images/twitterGIF.gif" alt="twitterGIF" />
                                </Link>
                                <Link href={'https://www.linkedin.com/in/borce-stamenov-848178211/'} target='_blank'>
                                    <img className='footerIcon' src="../../images/linkedInGIF.gif" alt="linkedInGIF" />
                                </Link>
                                <Link href={'https://www.instagram.com/donirajkompjuter/'} target='_blank'>
                                    <img className='footerIcon' src="../../images/instagramGIF.gif" alt="instagramGIF" />
                                </Link>
                                <Link href={'https://www.facebook.com/donirajkompjuter/'} target='_blank'>
                                    <img className='footerIcon' src="../../images/facebookGIF.gif" alt="facebookGIF" />
                                </Link>
                            </div>

                            <span><img src="../../images/footerChecked.svg" alt="donirajKompjuterFooter" /></span>
                        </div>
                    </div>
                    <div className="col-4 mt-4 footerVector text-center">
                        <div>
                            <h3> {t('footer.explore')}</h3>
                        </div>
                        <div>
                            <ul className='list-unstyled'>
                                <li><Link className='text-dark text-decoration-none' href={"/about-us"}>{t('footer.aboutUs')}</Link></li>
                                <li><Link className='text-dark text-decoration-none' href={"/services/marketing"}>{t('footer.services')}</Link></li>
                                <li><Link className='text-dark text-decoration-none' href={"/posts"}>{t('footer.news')}</Link></li>
                                <li><Link className='text-dark text-decoration-none' href={"/contact"}>{t('footer.contact')}</Link></li>
                            </ul>
                        </div>
                        <div>
                            <ul className='list-unstyled'>
                                <li> <Link className='text-danger text-decoration-none' href={"/donate"}>{t('footer.donateHere')}</Link></li>
                                <li> <Link className='text-danger text-decoration-none' href={"/apply"}>{t('footer.applyHere')}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className='text-center text-muted p-0 m-0 text-small'>{t('footer.footerParagraph')}</p>
            </div>
        </div >
    )
}

export default Footer