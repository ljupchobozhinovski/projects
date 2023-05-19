import { DonationSubscription, FundData } from '@/Types/types'
import DonateFundsFirstStep from '@/components/Donate/DonateFundsFirstStep'
import DonateFundsSecondStep from '@/components/Donate/DonateFundsSecondStep'
import DonateFundsSuccess from '@/components/Donate/DonateFundsSuccess'
import React, { useState } from 'react'


const DonateFunds = () => {

    const [stepNumber, setStepNumber] = useState<Number>(1)
    const [fundData, setFundData] = useState<FundData>({
        donationSubscription: DonationSubscription.none,
        amount: 0,
        leaveMsg: false,
        message: '',
        hideNameFromPublic: false,
        expenses: false
    });


    const updateStep = (step: number) => {
        setStepNumber(step)
    }

    const sendFundData = (data: FundData) => {
        setFundData(data);
    }

    return (
        <div>
            {stepNumber === 1 && <DonateFundsFirstStep updateStep={updateStep} sendFundData={sendFundData} />}
            {stepNumber === 2 && <DonateFundsSecondStep updateStep={updateStep} fundData={fundData} />}
            {stepNumber === 3 && <DonateFundsSuccess updateStep={updateStep} />}
        </div>
    )
}

export default DonateFunds