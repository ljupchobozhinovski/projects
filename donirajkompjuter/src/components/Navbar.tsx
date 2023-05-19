import { SecondaryButton } from '@/styles/styleComponents/globalStyleComponents';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import useTranslation from 'next-translate/useTranslation';

const Header = () => {
    const router = useRouter();
    const { pathname, asPath, query } = router;

    const { t } = useTranslation('common');
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container d-flex justify-content-between">
                <div className="col-4 d-flex">
                    <Link className="navbar-brand" href="/">   <img src="../../images/donirajkompjuter.svg" alt="donirajkompjuter.mk" /></Link>
                </div>
                <div className="col-8 d-flex justify-content-end">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span> </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center justify-content-between w-100">
                            <li className="nav-item">
                                <Link className={asPath === "/about-us" ? "text-danger text-decoration-none text-decoration-underline" : "text-dark text-decoration-none"} href={"/about-us"}>{t('navbar.aboutUs')}</Link>
                            </li>
                            <div className="dropdown">
                                <div className={asPath.includes('services') ? "text-danger text-decoration-underline text-decoration-none dropdown-toggle" : "text-dark text-decoration-none dropdown-toggle"} data-bs-toggle="dropdown" aria-expanded="false">
                                    {t('navbar.services')}
                                </div>
                                <ul className="dropdown-menu text-center">
                                    <li className="dropdown-item"><Link className={asPath === "/services/marketing" ? "text-danger text-decoration-underline text-decoration-none" : "text-dark text-decoration-none"} href={"/services/marketing"}>{t('navbar.marketing')}</Link></li>
                                    <li className="dropdown-item"><Link className={asPath === "/services/education" ? "text-danger text-decoration-underline text-decoration-none" : "text-dark text-decoration-none"} href={'/services/education'}>{t('navbar.education')}</Link></li>
                                    <li className="dropdown-item"><Link className={asPath === "/services/volunteer" ? "text-danger text-decoration-underline text-decoration-none" : "text-dark text-decoration-none"} href={'/services/volunteer'}>{t('navbar.volunteer')}</Link></li>
                                    <li className="dropdown-item"><Link className={asPath === "/services/contribute" ? "text-danger text-decoration-underline text-decoration-none" : "text-dark text-decoration-none"} href={'/services/contribute'}>{t('navbar.contibuteDifferent')}</Link></li>
                                </ul>
                            </div>
                            <li className="nav-item"><Link className={asPath === "/posts" ? "text-danger text-decoration-none text-decoration-underline" : "text-dark text-decoration-none"} href={'/posts'}>{t('navbar.news')}</Link></li>
                            <li className="nav-item"><Link className={asPath === "/contact" ? "text-danger text-decoration-none text-decoration-underline" : "text-dark text-decoration-none"} href={'/contact'}>{t('navbar.contacts')}</Link></li>
                            <li className="nav-item"><Link className="text-decoration-none text-dark" href={'/cta'}> <SecondaryButton>{t('navbar.takeAction')}</SecondaryButton></Link></li>


                            <div className="dropdown">
                                <Link className="btn btn-white dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img className="navbarIcon" src="../../images/globeGif.gif" alt="language" />
                                </Link>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><Link className="dropdown-item" href={'/'} locale="mk">MK</Link></li>
                                    <li><Link className="dropdown-item" href={'/'} locale="en">ENG</Link></li>
                                    <li><Link className="dropdown-item" href={'/'} locale="al">ALB</Link></li>
                                </ul>
                            </div>
                            <li className="nav-item " data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <Link href={''}> <img src="../../images/faq.svg" alt="frequentlyAskedQuestions" /> </Link></li>

                            <div className="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tab-index="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog modal-xl ">
                                    <div className="modal-content faqBackground">
                                        <div className="modal-header text-danger">
                                            <h5 className="modal-title" id="staticBackdropLabel">{t('navbar.faq')}</h5>
                                            <span><img src="../../images/faq.svg" alt="frequentlyAskedQuestions" /></span>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingOne">
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                            {t('navbar.accordionFirst')}
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            {t('navbar.accordionFirstAnswer')}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingTwo">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            {t('navbar.accordionSecond')}
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            {t('navbar.accordionSecondAnswer')}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingThree">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            {t('navbar.accordionThird')}
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            {t('navbar.accordionThirdAnswer')}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingFour">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                            {t('navbar.accordionFour')}
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            {t('navbar.accordionFourthAnswer')}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Header;
