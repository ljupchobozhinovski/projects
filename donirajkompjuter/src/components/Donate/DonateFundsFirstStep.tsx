import React, { MouseEventHandler, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck as faCheck } from '@fortawesome/free-regular-svg-icons'
import { faCoins as faCoins } from '@fortawesome/free-solid-svg-icons'
import { PrimaryButton, SecondaryButton } from '@/styles/styleComponents/globalStyleComponents'
import { faLeftLong as faLeft } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation';
import { DonationSubscription, FundData } from '@/Types/types'
interface Props {
    updateStep: Function;
    sendFundData: Function;
}

const DonateFundsFirstStep = ({ updateStep, sendFundData }: Props) => {
    const { t } = useTranslation('common');
    const [fundData, setFundData] = useState<FundData>({
        donationSubscription: DonationSubscription.none,
        amount: 0,
        leaveMsg: false,
        message: '',
        hideNameFromPublic: false,
        expenses: false
    });

    const selectAmount = [100, 300, 500, 1000];
    return (
        <div className="container-fluid default-light-gray-color">
            <div className='container '>
                <form>
                    <div className="row">
                        <div className="col">
                            <h2>{t('donate.donateSecure')}</h2>
                            <div className='py-3 w-25 text-center'>
                                <div className="btn-group w-100" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked={fundData.donationSubscription === DonationSubscription.once}
                                        onChange={() => setFundData({ ...fundData, donationSubscription: DonationSubscription.once })} />
                                    <label className="btn btn-outline-secondary p-3 m-3" htmlFor="btnradio1">{t('donate.donateOnce')} <FontAwesomeIcon icon={faCheck} /> </label>
                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" checked={fundData.donationSubscription === DonationSubscription.monthly}
                                        onChange={() => setFundData({ ...fundData, donationSubscription: DonationSubscription.monthly })} />
                                    <label className="btn btn-outline-secondary  p-3 m-3" htmlFor="btnradio2">{t('donate.donateMountly')}  <FontAwesomeIcon icon={faCheck} /> </label>
                                </div>
                            </div>
                            <div className="w-25 py-3 d-flex">
                                <div className="btn-group w-100" role="group" aria-label="Basic radio toggle button group">
                                    {selectAmount.map((amount) => {
                                        return (
                                            <>
                                                <input type="radio" className="btn-check" name="btncheck1" id="btncheck1" autoComplete="off" checked={fundData.amount === amount}
                                                    onChange={() => setFundData({ ...fundData, amount: amount })} />
                                                <label className="btn btn-outline-secondary" htmlFor="btncheck1">{amount} {t('donate.denars')} </label></>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="w-25 my-3">
                                <div className="input-group mb-3">
                                    <span className="input-group-text py-3" id="basic-addon1"> <FontAwesomeIcon icon={faCoins} /> </span>
                                    <input type="number" className="form-control" placeholder={t('donate.other')} aria-label="Money" aria-describedby="basic-addon1"
                                        onChange={(event) => setFundData({ ...fundData, amount: parseInt(event?.target.value) })} />
                                </div>
                            </div>
                            <div className="w-25 my-3">
                                <input type="checkbox" className="btn-check" id="btncheck5" autoComplete="off" checked={fundData.leaveMsg}
                                    onChange={(event) => setFundData({ ...fundData, leaveMsg: event.target.checked })} />
                                <label className="btn btn-outline-secondary" htmlFor="btncheck5"><FontAwesomeIcon icon={faCheck} /> </label>
                                <span> {t('donate.message')}</span>
                            </div>
                            <div className="w-50 my-3 d-flex">
                                <div className=''>
                                    <input className="form-control" type="file" id="formFile" />
                                    <label htmlFor="formFile" className="form-label">{t('donate.document')} 1 </label>
                                </div>
                                <div className=''>
                                    <input className="form-control" type="file" id="formFile" />
                                    <label htmlFor="formFile" className="form-label">{t('donate.document')} 2 </label>
                                </div>
                            </div>
                            <div className="w-50 my-3">
                                <input type="checkbox" className="btn-check" id="btncheck6" autoComplete="off" checked={fundData.hideNameFromPublic}
                                    onChange={(event) => setFundData({ ...fundData, hideNameFromPublic: event.target.checked })} />
                                <label className="btn btn-outline-secondary" htmlFor="btncheck6"><FontAwesomeIcon icon={faCheck} /> </label>
                                <span> {t('donate.hideName')} </span>
                            </div>
                            <div className="w-50 my-3">
                                <input type="checkbox" className="btn-check" id="btncheck7" autoComplete="off" checked={fundData.expenses}
                                    onChange={(event) => setFundData({ ...fundData, expenses: event.target.checked })} />
                                <label className="btn btn-outline-secondary" htmlFor="btncheck7"><FontAwesomeIcon icon={faCheck} /> </label>
                                <span>  {t('donate.expences')}  </span>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="w-50 py-4">
                    <div className='d-flex justify-content-start align-items-center'>
                        <Link className='text-decoration-none' href={'/donate'}><SecondaryButton className='w-100 py-2'> <FontAwesomeIcon icon={faLeft} size='2x' /> </SecondaryButton></Link>
                        <PrimaryButton className='w-100 py-3' onClick={() => {
                            sendFundData(fundData);
                            updateStep(2);
                        }}>{t('donate.continue')} </PrimaryButton>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DonateFundsFirstStep
