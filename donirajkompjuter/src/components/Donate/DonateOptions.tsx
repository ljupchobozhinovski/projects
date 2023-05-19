import Link from 'next/link'
import React from 'react'
import useTranslation from 'next-translate/useTranslation';
const DonateOptions = () => {
    const { t } = useTranslation('common');
    return (
        <div className='container'>
            <div className="row">
                <div className="col donate-background py-5 text-center vh-100">
                    <h2> {t('donate.donateOption')}</h2>
                    <div className="dropdown py-5">
                        <button className="btn btn-outline-secondary px-5 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            {t('donate.donateOptionLabel')}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <Link className="dropdown-item" href={'/donate/funds'}> {t('donate.donateOptionOne')}</Link>
                            <Link className="dropdown-item" href={'/donate/equipment'}> {t('donate.donateOptionTwo')}</Link>
                            <Link className="dropdown-item" href={'/donate/pc'}> {t('donate.donateOptionThree')}</Link>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <img className='w-75 my-4' src="../../images/donateFunds/donateHeart.svg" alt="donateHeart" />
                    <h4 className='fst-italic'>„{t('donate.donateParagraph')}.“</h4>
                    <h4 className='fw-bold text-end default-red-color'>- {t('donate.donateParagraphAuthor')}</h4>
                </div>
            </div>
        </div>
    )
}

export default DonateOptions