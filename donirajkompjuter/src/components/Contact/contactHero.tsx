import { PrimaryButton, SecondaryButton } from '@/styles/styleComponents/globalStyleComponents'
import React from 'react'
import useTranslation from 'next-translate/useTranslation';

const ContactHero = () => {
    const { t } = useTranslation('common');
    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col contactBackground">
                        <h2>{t('contact.getInTouch')}</h2>
                        <br />
                        <h5 className='p-0 m-0 fw-bold'>{t('contact.phone')}</h5>
                        <h5 className='p-0 m-0'>(+389)071/288-802</h5>
                        <br />
                        <h5 className='p-0 m-0 fw-bold'>{t('contact.e-mail')}</h5>
                        <h5 className='p-0 m-0'>donirajkompjuter@gmail.com</h5>
                        <br />
                        <h5 className='p-0 m-0 fw-bold'>{t('contact.address')}</h5>
                        <h5 className='p-0 m-0'>{t('contact.street')}</h5>
                        <h5 className='p-0 m-0'>{t('contact.city')}</h5>
                        <br />
                        <h5 className='p-0 m-0 fw-bold'>{t('contact.neptun')}</h5>
                        <a href="https://www.neptun.mk/pocetna/vesti/ns-newsarticle-doniraj-komjuter-i-neptun.nspx">{t('contact.neptunLink')}</a>
                        <h5></h5>
                    </div>
                    <div className="col">
                        <form className='default-light-gray-color p-5'>
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col">
                                        <input placeholder={t('contact.name')} type="text" className="form-control" id="exampleInputName" aria-describedby="NameHelp" />
                                    </div>
                                    <div className="col">
                                        <input placeholder={t('contact.lastName')} type="text" className="form-control" id="exampleInputLastName" aria-describedby="LastNameHelp" />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <input placeholder={t('contact.e-mail')} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <input placeholder={t('contact.phone')} type="number" className="form-control" id="exampleNumber" />
                            </div>
                            <div className='my-5'>
                                <textarea className="form-control py-5" placeholder={t('contact.message')} id="floatingTextArea"></textarea>
                            </div>
                            <SecondaryButton>{t('contact.send')}</SecondaryButton>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactHero