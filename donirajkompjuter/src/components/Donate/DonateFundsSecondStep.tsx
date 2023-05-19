import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns as faBank } from '@fortawesome/free-solid-svg-icons'
import { faSquareCheck as faCheck } from '@fortawesome/free-regular-svg-icons'
import { faCreditCard as faCreditCard } from '@fortawesome/free-regular-svg-icons'
import { faPaypal as faPayPal } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { PrimaryButton, SecondaryButton } from '@/styles/styleComponents/globalStyleComponents'
import { faLeftLong as faLeft } from '@fortawesome/free-solid-svg-icons'
import useTranslation from 'next-translate/useTranslation';
import { FundData } from '@/Types/types'
import { server_url } from '@/environments/constants'
interface Props {
    updateStep: Function;
    fundData: FundData;
}

enum PaymentMethod {
    creditCard = "credit_card",
    bankTransfer = "bank_transfer",
    paypal = "paypal_card"
}

interface PaymentData {
    paymentMethod: PaymentMethod,
    fullName?: string,
    cardNumber?: number,
    transactionNumber?: number,
    expireDate?: string,
    ccv?: number,
    zipCode?: number
}

const DonateFundsSecondStep = ({ updateStep, fundData }: Props) => {
    const { t } = useTranslation('common');

    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(PaymentMethod.creditCard)
    const [paymentData, setPaymentData] = useState<PaymentData>()

    const sendData = () => {
        fetch(`${server_url}fund`, {
            method: "POST",
            body: JSON.stringify({
                fundData,
                paymentData
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(res => {
            updateStep(3);
        }).catch((e) => console.log(e))
    }

    return (
        <div className="container-fluid default-light-gray-color">
            <div className='container '>
                <div className="row">
                    <div className="col">
                        <h2>{t('donate.donateMethod')} </h2>
                        {/* CARD */}
                        <div className='py-3 text-center w-75'>
                            <div className="btn-group d-flex flex-column" role="group" aria-label="Basic radio toggle button group">
                                <div>
                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked={paymentMethod === PaymentMethod.creditCard} onChange={() => setPaymentMethod(PaymentMethod.creditCard)} />
                                    <label className="btn btn-outline-secondary p-3 m-3 d-flex align-items-center justify-content-between" htmlFor="btnradio1"> <FontAwesomeIcon icon={faCreditCard} size='3x' /> {t('donate.creditCard')}  <FontAwesomeIcon icon={faCheck} size='3x' /> </label>
                                </div>

                                <div className={(paymentMethod === PaymentMethod.creditCard ? 'expandDiv' : 'collapseDiv')}>
                                    <div className="input-group mb-3">
                                        <input type="text" className='form-control m-2' id="nameandsurname" name="nameandsurname" placeholder={t('donate.creditCardName')} required onChange={(event) => setPaymentData({ ...paymentData, fullName: event?.target.value, paymentMethod: PaymentMethod.creditCard })} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="number" className='form-control m-2' id="cardNumber" name="cardNumber" placeholder={t('donate.creditCardNumber')} required onChange={(event) => setPaymentData({ ...paymentData, cardNumber: parseInt(event?.target.value), paymentMethod: PaymentMethod.creditCard })} />
                                    </div>
                                    <div className="input-group mb-3 w-100">
                                        <input type="text" className='form-control m-2' id="cardNumber" name="cardNumber" placeholder={t('donate.creditCardDate')} required onChange={(event) => setPaymentData({ ...paymentData, expireDate: event?.target.value, paymentMethod: PaymentMethod.creditCard })} />
                                        <input type="number" className='form-control m-2' id="cardNumber" name="cardNumber" placeholder='CCV' required onChange={(event) => setPaymentData({ ...paymentData, ccv: parseInt(event?.target.value), paymentMethod: PaymentMethod.creditCard })} />
                                        <input type="number" className='form-control m-2' id="cardNumber" name="cardNumber" placeholder={t('donate.creditCardZip')} required onChange={(event) => setPaymentData({ ...paymentData, zipCode: parseInt(event?.target.value), paymentMethod: PaymentMethod.creditCard })} />
                                    </div>
                                </div>



                            </div>
                        </div>
                        {/* BANK */}

                        <div className='py-3 text-center w-75'>
                            <div>
                                <div className="btn-group d-flex flex-column" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" checked={paymentMethod === PaymentMethod.bankTransfer} onChange={() => setPaymentMethod(PaymentMethod.bankTransfer)} />
                                    <label className="btn btn-outline-secondary p-3 m-3 d-flex align-items-center justify-content-between" htmlFor="btnradio2"> <FontAwesomeIcon icon={faBank} size='3x' /> {t('donate.bankTransfer')}  <FontAwesomeIcon icon={faCheck} size='3x' />  </label>
                                </div>
                            </div>
                            <div className={(paymentMethod === PaymentMethod.bankTransfer ? 'expandDiv' : 'collapseDiv')}>
                                <div className="input-group mb-3">
                                    <input type="text" className='form-control m-2' id="nameandsurname" name="nameandsurname" placeholder={t('donate.bankTransferName')} required onChange={(event) => setPaymentData({ ...paymentData, fullName: event?.target.value, paymentMethod: PaymentMethod.bankTransfer })} />
                                </div>
                                <div className="input-group mb-3 w-100">
                                    <input type="number" className='form-control m-2' id="cardNumber" name="transaction Number" placeholder={t('donate.bankTransferNumber')} required onChange={(event) => setPaymentData({ ...paymentData, transactionNumber: parseInt(event?.target.value), paymentMethod: PaymentMethod.bankTransfer })} />
                                </div>
                            </div>
                        </div>
                        {/* PAYPAL */}
                        <div className='py-3 text-center w-75'>
                            <div className="btn-group d-flex flex-column" role="group" aria-label="Basic radio toggle button group">
                                <div>
                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" checked={paymentMethod === PaymentMethod.paypal} onChange={() => setPaymentMethod(PaymentMethod.paypal)} />
                                    <label className="btn btn-outline-secondary p-3 m-3 d-flex align-items-center justify-content-between" htmlFor="btnradio3"> <FontAwesomeIcon icon={faPayPal} size='3x' /> PayPal <FontAwesomeIcon icon={faCheck} size='3x' /> </label>
                                </div>
                                <div className={(paymentMethod === PaymentMethod.paypal ? 'expandDiv' : 'collapseDiv')}>
                                    <div className="input-group mb-3">
                                        <input type="text" className='form-control m-2' id="nameandsurname" name="nameandsurname" placeholder={t('donate.creditCardName')} required onChange={(event) => setPaymentData({ ...paymentData, fullName: event?.target.value, paymentMethod: PaymentMethod.paypal })} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="number" className='form-control m-2' id="cardNumber" name="cardNumber" placeholder={t('donate.creditCardNumber')} required onChange={(event) => setPaymentData({ ...paymentData, cardNumber: parseInt(event?.target.value), paymentMethod: PaymentMethod.paypal })} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-50 py-4">
                            <div className='d-flex justify-content-end align-items-center'>
                                <SecondaryButton className='w-100 py-2' onClick={() => updateStep(1)}> <FontAwesomeIcon icon={faLeft} size='2x' /> </SecondaryButton>
                                <PrimaryButton className='w-100 py-3' onClick={() => sendData()}>{t('donate.donateContinueBtn')} </PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonateFundsSecondStep