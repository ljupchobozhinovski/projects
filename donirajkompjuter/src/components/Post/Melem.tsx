import React from 'react'
import useTranslation from 'next-translate/useTranslation';
import { PrimaryButton } from '@/styles/styleComponents/globalStyleComponents';
import Link from 'next/link';
const Melem = () => {
    const { t } = useTranslation('common');
    return (
        <div className='container'>
            <div className="row p-0 m-0">
                <div className="col text-center">
                    <h2 className='p-0 m-0'>{t('blog.melemIntroFirstPart')}</h2>
                    <h2 className='text-danger p-0 m-0'>{t('blog.melemIntroSecondPart')}</h2>
                    <img className='' src="../../images/blog/detailsBlogUndercase.svg" alt="detailsBlogUndercase" />
                </div>
                <div className="col">
                </div>
                <div className="col">
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img className='w-100 h-75' src="../../images/blog/melem-left.svg" alt="melem-left" />
                </div>
                <div className="col text-center">
                    <img className='w-100 pb-4' src="../../images/blog/melem.svg" alt="melem" />
                    <p>{t('blog.melemDescription')}</p>
                    <Link className='text-decoration-none' href={'/contact'}><PrimaryButton className='mx-auto'>{t('blog.melemButton')}</PrimaryButton></Link>
                </div>
                <div className="col">
                    <img className='w-100 h-75' src="../../images/blog/melem-right.svg" alt="melem-right" />
                </div>
            </div>
        </div>
    )
}

export default Melem