import { PrimaryButton } from '@/styles/styleComponents/globalStyleComponents'
import Link from 'next/link'
import React from 'react'
import useTranslation from 'next-translate/useTranslation';
const ContributeHero = () => {
    const { t } = useTranslation('common');
    return (
        <>
            <div className='container contribute-up-background'>
                <h4 className='text-center py-5'>{t('contribute.contributeHeroHeader')}</h4>
                <div className='row py-3'>
                    <div className="col-5 d-flex justify-content-end">
                        <img className='w-25' src="../../images/contribute/contributeSuitcase.svg" alt="contributeSuitcase" />
                    </div>
                    <div className="col-5 d-flex justify-content-around flex-column ">
                        <h3 className='default-red-color'>{t('contribute.contributeTravelTitle')}</h3>
                        <p>{t('contribute.contributeTravelParagraphOne')} <br /> {t('contribute.contributeTravelParagraphTwo')} </p>
                    </div>
                </div>
                <div className='row py-3'>
                    <div className="col-5 d-flex justify-content-end">
                        <img className='w-25' src="../../images/contribute/contributePhone.svg" alt="contributePhone" />
                    </div>
                    <div className="col-5 d-flex justify-content-around flex-column ">
                        <h3 className='default-red-color'>{t('contribute.contributeStoryTitle')} </h3>
                        <p>{t('contribute.contributeStoryParagraph')}</p>
                    </div>
                </div>
                <div className='row py-3'>
                    <div className="col-5 d-flex justify-content-end">
                        <img className='w-25' src="../../images/contribute/contributeLanguage.svg" alt="contributeLanguage" />
                    </div>
                    <div className="col-5 d-flex justify-content-around flex-column ">
                        <h3 className='default-red-color'>{t('contribute.contributeLanguageTitle')}</h3>
                        <p>{t('contribute.contributeLanguageParagraph')}</p>
                    </div>
                </div>
            </div>
            <div className="container contribute-down-background">
                <div className='row py-3'>
                    <div className="col-5 d-flex justify-content-end">
                        <img className='w-25' src="../../images/contribute/contributeRecycle.svg" alt="contributeRecycle" />
                    </div>
                    <div className="col-5 d-flex justify-content-around flex-column ">
                        <h3 className='default-red-color'>{t('contribute.contributeRecycleTitle')}</h3>
                        <p>{t('contribute.contributeRecycleParagraph')} <br /> {t('contribute.contributeRecycleParagraphTwo')}</p>
                    </div>
                </div>
                <div className='row py-3'>
                    <div className="col-5 d-flex justify-content-end">
                        <img className='w-25' src="../../images/contribute/contributeSkills.svg" alt="contributeSkills" />
                    </div>
                    <div className="col-5 d-flex justify-content-around flex-column ">
                        <h3 className='default-red-color'>{t('contribute.contributeShareSkillsTitle')}</h3>
                        <p>{t('contribute.contributeShareSkillsParagraph')} <br /> {t('contribute.contributeShareSkillsParagraphTwo')}</p>
                    </div>
                </div>
                <div className='row py-3'>
                    <div className="col d-flex justify-content-center flex-column text-center">
                        <h3>{t('contribute.contributeLastParagraphOne')}<br /> {t('contribute.contributeLastParagraphTwo')}</h3>
                        <div className='mx-auto py-5'>
                            <Link className='text-decoration-none' href={'/contact'}> <PrimaryButton className='text-center'>{t('contribute.contributeContactButton')}</PrimaryButton></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default ContributeHero