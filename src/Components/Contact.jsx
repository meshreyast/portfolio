import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { contact } from './index.js'

const Contact = () => {

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }
    const form = useRef();

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        emailjs.sendForm(
            'service_01hcjhm',
            'template_g6n0fcb',
            form.current,
            'q_iGpWx25f6Ru_A4_'
        )
            .then((result) => {
                alert("Message sent");
            }, (error) => {
                alert("Something went wrong. Please try again.");
            });
        setButtonText("Send");
        setFormDetails(formInitialDetails);

    };

    return (
        <>
            <div id='contact' className='w-full min-h-full background'>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4 py-20">
                    <div className="w-[90%] lg:w-1/2 flex justify-center lg:pl-8">
                        <img src={contact} className="w-full mx-auto" alt="contact-img" />
                    </div>
                    <div className="w-[90%] lg:w-1/2 flex flex-col lg:pr-8">
                        <h2 className="text-white text-3xl md:text-6xl font-bold mb-4 md:mb-8 font-['Acme']">Get in Touch</h2>
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className="flex gap-2 md:gap-5">
                                <input
                                    type="text"
                                    value={formDetails.firstName}
                                    placeholder="First Name"
                                    name='first_name'
                                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                                    className='form-box'
                                    required
                                />
                                <input
                                    type="text"
                                    value={formDetails.lastName}
                                    placeholder="Last Name"
                                    name='last_name'
                                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                                    className='form-box'
                                    required
                                />
                            </div>
                            <div className="flex gap-2 md:gap-5">
                                <input
                                    type="email"
                                    value={formDetails.email}
                                    placeholder="Email"
                                    name='email'
                                    onChange={(e) => onFormUpdate('email', e.target.value)}
                                    className='form-box'
                                    required
                                />
                                <input
                                    type="tel"
                                    value={formDetails.phone}
                                    placeholder="Phone No"
                                    name='phone'
                                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                                    className='form-box'
                                />
                            </div>
                            <input
                                type="textarea"
                                value={formDetails.message}
                                placeholder="Message"
                                name='message'
                                onChange={(e) => onFormUpdate('message', e.target.value)}
                                className='form-box h-28 md:h-60'
                            />
                            <button
                                className='w-2/5 p-4 mt-3 text-xl md:text-2xl lg:text-4xl font-bold text-[#121212] bg-white rounded-md cursor-pointer text-center'
                                type="submit">
                                {buttonText}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact