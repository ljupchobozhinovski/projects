import { PrimaryButton, SecondaryButton } from '@/styles/styleComponents/globalStyleComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftLong as faLeft } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import React, { FormEvent } from 'react'
import useTranslation from 'next-translate/useTranslation';
import { FormProvider, useForm } from 'react-hook-form'


const BecomeAVolunteerForm = () => {
    const { t } = useTranslation('common');
    const methods = useForm()
    const volunteer = () => {

    }

    return (
        <div>
            <div className="row">
                <div className="col">
                    <h2 className='text-center'>{t('volunteer.beAVolunteer')} </h2>
                </div>
            </div>
            <div className="row">
                <div className="col">

                    <FormProvider {...methods}>

                        <form className='default-light-gray-color p-5 w-75 mx-auto'>
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col">
                                        <input placeholder={t('volunteer.enterNameAndSurname')} type="text" className="form-control" id="fullName" aria-describedby="NameHelp" required />
                                    </div>
                                    <div className="col">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>{t('volunteer.position')}</option>
                                            <option value="1">{t('volunteer.optionOne')}</option>
                                            <option value="2">{t('volunteer.optionTwo')}</option>
                                            <option value="3">{t('volunteer.optionThree')}</option>
                                            <option value="4">{t('volunteer.optionFour')}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col">
                                        <input placeholder={t('volunteer.city')} type="text" className="form-control my-3" id="exampleInputCity" aria-describedby="cityHelp" required />
                                        <input placeholder={t('volunteer.e-mail')} type="email" className="form-control my-3" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                        <input placeholder={t('volunteer.phone')} type="number" className="form-control my-3" id="exampleNumber" required />
                                    </div>
                                    <div className="col">
                                        <div className=''>
                                            <textarea className="form-control py-5 my-3" placeholder={t('volunteer.details')} id="floatingTextAreaTwo" required></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col arrow-background">
                                    </div>
                                    <div className="col">
                                        <div className='attach-file-background'>
                                            <input className="form-control" type="file" id="formFile" required />
                                            <label htmlFor="formFile" className="form-label fst-italic">{t('volunteer.attachFirstFile')} </label>
                                            <p className='text-muted fs-10'> {t('volunteer.dataApproval')}
                                            </p>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <Link href={'/services/volunteer'}><SecondaryButton className='w-100 py-2'> <FontAwesomeIcon icon={faLeft} size='2x' /> </SecondaryButton></Link>
                                                <Link href={'/volunteer-application-successful'}><PrimaryButton className='w-100 py-3' onSubmit={() => volunteer()}>{t('volunteer.apply')} </PrimaryButton></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </FormProvider>


                </div>
            </div>
        </div>
    )
}

export default BecomeAVolunteerForm