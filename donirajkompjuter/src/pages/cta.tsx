import CtaHero from '@/components/CTA/CtaHero'
import CtaOtherWay from '@/components/CTA/CtaOtherWay'
import CtaTogglePurpose from '@/components/CTA/CtaTogglePurpose'
import ScrollToTop from '@/components/ScrollToTop'
import React from 'react'

const Cta = () => {
    return (
        <div>
            <CtaHero />
            <CtaTogglePurpose />
            <CtaOtherWay />
        </div>
    )
}

export default Cta