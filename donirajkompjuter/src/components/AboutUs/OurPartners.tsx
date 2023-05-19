import { PrimaryButton } from '@/styles/styleComponents/globalStyleComponents'
import React from 'react'
import useTranslation from 'next-translate/useTranslation';

const OurPartners = () => {
    const { t } = useTranslation('common');
    return (
        <div className='container-fluid default-light-gray-color py-5'>
            <div className="row">
                <div className="col text-center">
                    <img src="./images/aboutUs/golden-snitch.svg" alt="golden-snitch" />
                    <h3>{t('aboutPage.ourPartnersTitleFirstPart')} <span>{t('aboutPage.ourPartnersTitleSecondPart')}</span></h3>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias facilis cum deserunt maiores rem asperiores? </p>
                </div>

                <div className="row ">
                    <div className="col d-flex justify-content-center">
                        <div className="accordion accordion-flush w-50" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header p-4" id="flush-headingOne">
                                    <PrimaryButton className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">{t('aboutPage.macedoniaPartners')}</PrimaryButton>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <h6>Еко Логистик Сервис</h6>
                                        <h6>Клими Мк</h6>
                                        <h6>Ендава</h6>
                                        <h6>Триглав осигурување</h6>
                                        <h6>Кам Маркети</h6>
                                        <h6>Штедилница Можности</h6>
                                        <h6>Филолошки факултет</h6>
                                        <h6>Фудбалска федерација на Македонија</h6>
                                        <h6>Битолска Млекара</h6>
                                    </div>

                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header p-4" id="flush-headingTwo">
                                    <PrimaryButton className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseOne">{t('aboutPage.internationalPartners')}</PrimaryButton>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <h6>Allocate Software</h6>
                                        <h6>Quipu</h6>
                                        <h6>Fx3x</h6>
                                        <h6>Symphony Solutions</h6>
                                        <h6>Publikum Invest</h6>
                                        <h6>Канцеларија на Делегација на ЕУ</h6>
                                        <h6>One Inside</h6>
                                        <h6>Амбасада на Холандија</h6>
                                        <h6>Каталист Балканс</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header p-4" id="flush-headingThree">
                                    <PrimaryButton className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseOne">{t('aboutPage.officialSponsors')}</PrimaryButton>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <h6>Силк роад банка</h6>
                                        <h6>Кожувчанка</h6>
                                        <h6>Аква Нет</h6>
                                        <h6>Тирена Скави</h6>
                                        <h6>Конект</h6>
                                        <h6>ОКО</h6>
                                        <h6>Контура (маркетинг)</h6>
                                        <h6>Радио МОФ</h6>
                                        <h6>Каталист Балканс</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OurPartners