import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile as faSmile } from '@fortawesome/free-solid-svg-icons'
import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';


enum CTAOption {
    donate = "donate",
    get = "get",
}


const CtaTogglePurpose = () => {
    const { t } = useTranslation('common');
    const [activeCTA, setActiveCTA] = useState<CTAOption>(CTAOption.donate);



    return (
        <div className='container-fluid default-light-gray-color pb-5'>
            <div className="row">
                <div className="col ">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked={activeCTA === CTAOption.donate} onChange={() => setActiveCTA(CTAOption.donate)} />
                    <label className={`fs-2 btn p-3 m-3 d-flex align-items-center justify-content-between ${(activeCTA === CTAOption.donate ? "default-light-gray-color" : "default-white-color")}`} htmlFor="btnradio1"> Како да донираш? </label>
                </div>
                <div className="col">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" checked={activeCTA === CTAOption.get} onChange={() => setActiveCTA(CTAOption.get)} />
                    <label className={`fs-2 btn p-3 m-3 d-flex align-items-center justify-content-between ${(activeCTA === CTAOption.get ? "default-light-gray-color" : "default-white-color")}`} htmlFor="btnradio2"> Како да добиеш компјутер? </label>
                </div>
            </div>
            <div className="col">
                <div className={(activeCTA === CTAOption.donate ? "expandDiv" : "collapseDiv")}>
                    <div className='container text-center'>
                        <img className='w-75' src="../../images/cta/CtaDonateComputer.svg" alt="CtaDonateComputer" />
                        <p>{t('cta.ctaHeroFirstPart')}</p>
                    </div>
                </div>
                <div className={(activeCTA === CTAOption.get ? "expandDiv" : "collapseDiv")}>
                    <div className='container text-center'>
                        <img className='w-75' src="../../images/cta/CtaGetComputer.svg" alt="CtaGetComputer" />
                        <p>{t('cta.ctaHeroSecondPart')}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}










{/* <div className="col text-center default-light-gray-color ">
                    <div className='default-light-gray-color' onClick={() => {
                        setActiveCTA(true)
                    }}>
                        <h2>Како да донираш?</h2>
                    </div>
                    <div>
                        <div className='container text-center'>
                            <img className='w-75' src="../../images/cta/CtaDonateComputer.svg" alt="CtaDonateComputer" />
                            <p>{t('cta.ctaHeroFirstPart')}</p>
                        </div>
                    </div>
                </div>
                <div className="col text-center default-light-gray-color ">
                    <div className='default-light-gray-color'>
                        <h2>Како да добиеш компјутер?</h2>
                    </div>
                    <div className='container text-center'>
                        <img className='w-75' src="../../images/cta/CtaGetComputer.svg" alt="CtaGetComputer" />
                        <p>{t('cta.ctaHeroSecondPart')}</p>
                        <p><FontAwesomeIcon className='default-red-color' icon={faSmile} size='2x' /></p>
                    </div>
                </div> */}




export default CtaTogglePurpose