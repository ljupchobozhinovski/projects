import { SecondaryButton, PrimaryButton } from '@/styles/styleComponents/globalStyleComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { FormEvent } from 'react'
import { faLeftLong as faLeft } from '@fortawesome/free-solid-svg-icons'
import useTranslation from 'next-translate/useTranslation';
const Pc = () => {
    const { t } = useTranslation('common');
    function onSubmit(e: FormEvent) {
        e.preventDefault()
    }

    return (
        <div className="container-fluid default-light-gray-color vh-100">
            <div className='container'>
                <div className="row py-5">
                    <div className="col">
                        <h2>{t('apply.applyForPCHeading')}</h2>
                        <p>{t('apply.applyForPCParagraph')}</p>
                    </div>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col-5">
                            <div className="d-flex flex-column">
                                <input type="text" className="border m-2 p-2" placeholder={t('apply.applyForPCName')} aria-label="Име" required autoFocus />
                                <input type="text" className="border m-2 p-2" placeholder={t('apply.applyForPCSurname')} aria-label="Презиме" required />
                                <input type="text" className="border m-2 p-2" placeholder={t('apply.applyForPCCity')} aria-label="Град" required />
                                <input type="email" className="border m-2 p-2" placeholder={t('apply.applyForPCEmail')} aria-label="Емаил" />
                                <input type="number" className="border m-2 p-2" placeholder={t('apply.applyForPCPhone')} aria-label="Број" required />
                            </div>
                            <div className='d-flex justify-content-start align-items-center my-3'>
                                <Link className='text-decoration-none' href={'/apply'}><SecondaryButton className='mx-3'> <FontAwesomeIcon icon={faLeft} size='2x' /> </SecondaryButton></Link>
                                <PrimaryButton type='submit' className='w-50 py-3'>{t('apply.apply')}</PrimaryButton>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="d-flex flex-column">
                                <select className="form-select border m-2 p-2" aria-label="Default select example" required>
                                    <option selected>{t('apply.applyForPCType')}</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                    <option value="4">Four</option>
                                </select>
                                <h6 className='my-3 mx-2'>{t('apply.applyForPCAttachments')}</h6>
                                <div className="d-flex">
                                    <input className="form-control m-2 p-2 w-50" type="file" id="formFile1" placeholder='' required />
                                    <input className="form-control m-2 p-2 w-50" type="file" id="formFile2" placeholder='' />
                                </div>
                                <div>
                                    <textarea className="form-control p-4 m-2" placeholder={t('apply.comments')} id="floatingTextarea"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Pc