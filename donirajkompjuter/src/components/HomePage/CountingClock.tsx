import React, { useState, useMemo, useEffect, useRef } from 'react'
import useTranslation from 'next-translate/useTranslation';
import { useSpring, animated } from 'react-spring';
import { StatisticsType } from '@/Types/types';
import { NextPage } from 'next';
import { useInView } from 'react-intersection-observer';

interface Props {
    statistics: StatisticsType
}

const CountingClock: NextPage<Props> = ({ statistics }) => {
    const { t } = useTranslation('common');
    const { ref: ref, inView: isVisible } = useInView();


    function Number({ n }: any) {
        const { number } = useSpring({
            from: { number: 0 },
            number: n,
            delay: 200,
            config: { mass: 1, tension: 20, friction: 10 },
        });
        return <animated.div>{number.to((n) => n.toFixed(0) + '+')}</animated.div>
    }

    return (
        <>
            <div ref={ref} className='container-fluid default-light-gray-color '>
                <div className="row">
                    <div className="col d-flex justify-content-start aboutUsChangeDots">
                        <img src="./images/leftDotGroup.svg" alt="leftDotGroup" />
                    </div>
                </div>
                <div className="row d-flex align-items-end justify-content-center w-100">
                    <div className="col-4 text-center aboutUsChangeDots py-5 position-relative-homePage">
                        <img className='w-50' src="./images/count-years.svg" alt="countingClock" />
                        <div className='position-absolute-homePage-activism w-100'>
                            {isVisible && <Number n={statistics.counterActivism} />}
                        </div>
                        <p>{t('homePage.counterActivism')} </p>
                    </div>
                    <div className="col-4 text-center aboutUsChangeDots py-5 position-relative-homePage">
                        <img className='w-50' src="./images/count-PC.svg" alt="donatedPC" />
                        <div className='position-absolute-homePage w-100'>
                            {isVisible && <Number n={statistics.donatedPCs} />}
                        </div>
                        <p>{t('homePage.donatedPCs')} </p>
                    </div>
                    <div className="col-4 text-center py-5 position-relative-homePage">
                        <img className='w-50' src="./images/count-childred.svg" alt="charm_heart" />
                        <div className='position-absolute-homePage-children w-100'>
                            {isVisible && <Number n={statistics.childrenWithoutPC} />}
                        </div>
                        <p>{t('homePage.childrenWithoutPC')} </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-end aboutUsChangeDots">
                        <img src="./images/rightDotGroup.svg" alt="rightDotGroup" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CountingClock


