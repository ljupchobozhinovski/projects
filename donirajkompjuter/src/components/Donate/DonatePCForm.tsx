import { SecondaryButton, PrimaryButton } from '@/styles/styleComponents/globalStyleComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { FormEvent, useState } from 'react'
import { faLeftLong as faLeft } from '@fortawesome/free-solid-svg-icons'
import useTranslation from 'next-translate/useTranslation';

interface Props {
    updateStep: Function;
}

const DonatePCForm = ({ updateStep }: Props) => {
    const { t } = useTranslation('common');
    function onSubmit(e: FormEvent) {
        e.preventDefault()
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <h2 className='fs-72'>{t('donate.donateTitle')}</h2>
                    <p>{t('donate.donateDesc')}</p>
                </div>
            </div>
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col">
                        <div className="d-flex flex-column">
                            <input type="text" className="border m-2 p-2" placeholder={t('donate.donateName')} aria-label="Име" required />
                            <input type="text" className="border m-2 p-2" placeholder={t('donate.donateLastName')} aria-label="Презиме" required />
                            <input type="text" className="border m-2 p-2" placeholder={t('donate.donateCompanyName')} aria-label="Компанија" />
                            <input type="email" className="border m-2 p-2" placeholder={t('donate.donateE-mail')} aria-label="Емаил" required />
                            <input type="text" className="border m-2 p-2" placeholder={t('donate.donateCity')} aria-label="Град" required />
                            <input type="number" className="border m-2 p-2" placeholder={t('donate.donateNumber')} aria-label="Број" required />
                        </div>
                    </div>

                    <div className="col">
                        <div className="d-flex flex-column">
                            <select className="form-select border m-2 p-2" aria-label="Default select example" required>
                                <option selected>{t('donate.donateFirstField')}  </option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                            </select>
                            <select className="form-select border m-2 p-2" aria-label="Default select example" required>
                                <option selected>{t('donate.donateSecondField')} </option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                            </select>
                            <select className="form-select border m-2 p-2" aria-label="Default select example" required>
                                <option selected>{t('donate.donateThirdField')}</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                            </select>
                            <select className="form-select border m-2 p-2" aria-label="Default select example" required>
                                <option selected>{t('donate.donateFourthField')}</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                            </select>
                            <select className="form-select border m-2 p-2" aria-label="Default select example" required>
                                <option selected>{t('donate.donateFifthField')}</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                            </select>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex">
                            <input className="form-control m-2 p-2 w-25" type="file" id="formFile" placeholder='' required />
                            <input className="form-control m-2 p-2 w-25" type="file" id="formFile" placeholder='' />
                        </div>
                        <div>
                            <h6 className='my-3 mx-2'>{t('donate.donateAttach')}</h6>
                            <textarea className="form-control p-3 m-2" placeholder={t('donate.donateComment')} id="floatingTextarea"></textarea>
                            <textarea className="form-control p-3 m-2" placeholder={t('donate.donateRecc')} id="floatingTextarea"></textarea>
                        </div>
                        <div>
                            <div className='d-flex justify-content-end align-items-center'>
                                <SecondaryButton className='w-100 py-2' onClick={() => updateStep(1)} > <FontAwesomeIcon icon={faLeft} size='2x' /> </SecondaryButton>
                                <PrimaryButton type='submit' onClick={() => updateStep(3)} className='w-50 py-3'>{t('donate.donateBtn')}</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default DonatePCForm