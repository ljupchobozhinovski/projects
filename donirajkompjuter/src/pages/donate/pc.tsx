import DonateEquipmentInformation from '@/components/Donate/DonateEquipmentInformation'
import DonateEquipmentSuccessContent from '@/components/Donate/DonateEquipmentSuccessContent'
import DonatePCForm from '@/components/Donate/DonatePCForm'
import React, { useState } from 'react'



const DonateEquipment = () => {

    const [stepNumber, setStepNumber] = useState<Number>(1)

    const updateStep = (step: number) => {
        setStepNumber(step)
    }

    return (
        <div>

            {stepNumber === 1 && <DonateEquipmentInformation updateStep={updateStep} />}
            {stepNumber === 2 && <DonatePCForm updateStep={updateStep} />}
            {stepNumber === 3 && <DonateEquipmentSuccessContent updateStep={updateStep} />}

        </div>
    )
}

export default DonateEquipment