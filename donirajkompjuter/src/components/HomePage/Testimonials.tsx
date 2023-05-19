import React, { useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import { TestimonialType } from '@/Types/types';
import { test } from 'node:test';


interface Props {
    testimonials: TestimonialType[]
}


const Testimonials = ({ testimonials }: Props) => {
    const { t } = useTranslation('common');
    let sliceTestimonials = false;

    const [activeTestimonial, setActiveTestimonial] = useState<TestimonialType>();
    const [otherTestimonials, setOtherTestimonials] = useState<any>()

    useEffect(() => {
        if (testimonials.length && !sliceTestimonials) {
            setActiveTestimonial(testimonials[0]);
            divideInChunks(0)
            sliceTestimonials = true;
        }

    }, testimonials);


    const divideInChunks = (index: number) => {
        const allTestimonials = [...testimonials];
        allTestimonials.splice(index, 1)
        const tempArr = [];
        for (let i = 0; i < allTestimonials.length; i += 2) {
            tempArr.push(allTestimonials.slice(i, i + 2))
        }
        setOtherTestimonials(tempArr)
    }

    return (
        <div className='container testimonialsBg py-5 mb-5'>
            <div className="row px-5">
                {activeTestimonial &&
                    <div className="col py-5">
                        <div className='d-flex justify-content-center'>
                            <img src={"../../images/" + activeTestimonial.image} alt={activeTestimonial.name} />
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='text-center'>{activeTestimonial.name} <br />
                                <span> {activeTestimonial.age}</span>
                                <p className='w-50 mx-auto'>{activeTestimonial.paragraph}</p>
                            </div>
                        </div>
                    </div>
                }
            </div>

            {otherTestimonials && otherTestimonials.map((testimonial: TestimonialType[], index: number) => {

                return (

                    <div className='row mx-auto' key={index}>
                        < div className={`col d-flex shadowImg ${index % 2 === 0 ? 'justify-content-around' : 'justify-content-between'}`} onClick={() => { setActiveTestimonial(otherTestimonials[index][0]); divideInChunks(index) }}>
                            <img src={"../../images/" + testimonial[0].image} alt={testimonial[0].name} />
                        </div>
                        < div className={`col d-flex shadowImg ${index % 2 !== 0 ? 'justify-content-around' : 'justify-content-between'}`} onClick={() => { setActiveTestimonial(otherTestimonials[index][1]); divideInChunks(index) }}>
                            <img src={"../../images/" + testimonial[1].image} alt={testimonial[1].name} />
                        </div>
                    </div>
                )
            })}
        </div >

    )
}

export default Testimonials


// < div className = {`col-5 d-flex shadowImg ${index % 2 === 0 ? 'justify-content-start' : 'justify-content-end '}`
// } onClick = {() => updateActiveTestimonial(index)}>
// <img src={"../../images/" + testimonial.image} alt={testimonial.name} />{index}