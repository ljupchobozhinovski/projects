import Link from 'next/link'
import React from 'react'
import useTranslation from 'next-translate/useTranslation';
const Apply = () => {
    const { t } = useTranslation('common');



    return (
        <div className='container'>
            <div className="row">
                <div className="col donate-background py-5 text-center">
                    <h2> {t('apply.title')}</h2>
                    <div className="dropdown py-5">
                        <button className="btn btn-secondary px-5 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            {t('apply.choose')}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <Link className="dropdown-item" href={'/apply/pc'}> {t('apply.pc')}</Link>
                            <Link className="dropdown-item" href={'/apply/equipment'}> {t('apply.equipment')}</Link>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <img className='w-75 my-4' src="../../images/donateFunds/donateHeart.svg" alt="donateHeart" />
                    <h4 className='fst-italic'>{t('apply.quote')}</h4>
                    <h4 className='fw-bold text-end default-red-color'>- {t('apply.quoteAuthor')}</h4>
                </div>
            </div>
        </div>
    )
}

export default Apply