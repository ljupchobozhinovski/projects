import React from 'react'
import useTranslation from 'next-translate/useTranslation';
const ContributeHeader = () => {
    const { t } = useTranslation('common');
    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <h2 className='text-uppercase text-center fs-72'>{t('contribute.contributeHeaderTitleFirstPart')} <br /> <span className='default-red-color'>{t('contribute.contributeHeaderTitleSecondPart')}</span> </h2>
                    </div>
                </div>
            </div>

            {/* MAKE A SEPARATE COMPONENT FOR THIS SECTION */}

            <div className="container-fluid">
                <div className="row">
                    <div className="col-5 d-flex align-items-center justify-content-center">
                        <img className='w-100' src="../../images/aboutUs/redDots.svg" alt="redDots" />
                    </div>
                    <div className="col-2 d-flex align-items-center justify-content-center">
                        <img src="../../images/aboutUs/computer-display-outline.svg" alt="computer-display-outline" />
                    </div>
                    <div className="col-5 d-flex align-items-center justify-content-center">
                        <img className='w-100' src="../../images/aboutUs/redDots.svg" alt="redDots" />
                    </div>
                </div>
            </div>





        </>




    )
}

export default ContributeHeader