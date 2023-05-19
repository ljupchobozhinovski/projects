import React from 'react'
import Map from '../ContactMap/map'
import useTranslation from 'next-translate/useTranslation';
const AboutUsMap = () => {
    const { t } = useTranslation('common');
    return (
        <>
            <div className="container">
                <h3 className='text-center py-5'> {t('aboutPage.aboutPageMapTitleFirstPart')} <span className='default-red-color'> {t('aboutPage.aboutPageMapTitleSecondPart')} </span></h3>
                <div className="row d-flex align-items-center aboutUsBackgroundImg">
                    <div className='col-7'>
                        <div className='py-5'>
                            <img className='w-100' src="../../images/aboutUs/mapOfMacedonia.svg" alt="mapOfMacedonia" useMap="#mapOfMacedonia" />
                            {/* <map name="mapOfMacedonia">
                                <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm" />
                                <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm" />
                                <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm" />
                            </map> */}

                        </div>
                    </div>
                    <div className='col-5  text-center'>
                        <img src="./images/aboutUs/aboutUsTruck.svg" alt="aboutUsTruck" />
                        <br />
                        <span>{t('aboutPage.aboutPageMapPCNumberFirstPart')} </span> <span>{t('aboutPage.aboutPageMapPCNumberSecondPart')} </span>
                        <br />
                        <span>{t('aboutPage.aboutPageMapTabletsNumberFirstPart')} </span> <span>{t('aboutPage.aboutPageMapTabletsNumberSecondPart')} </span>
                    </div>
                </div>
            </div>

        </>

    )
}

export default AboutUsMap