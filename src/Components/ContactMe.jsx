import React, { useRef, useState } from 'react';

import { HiRocketLaunch } from 'react-icons/hi2';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init()


const ContactMe = () => {

    const form = useRef()
    const [msg, setMsg] = useState('')

    const sendEmail = e => {
        e.preventDefault()
        setMsg('')
        emailjs
            .sendForm(
                import.meta.env.VITE_Email_serviceId,
                import.meta.env.VITE_Email_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_Email_PUBLIC_KEY,
            )
            .then(
                result => {
                    if (result.text) {
                        setMsg('Message Sent')
                        toast.success('Message Sent.')
                    }
                },
                error => {
                    setMsg('Message Limit is Over')
                }
            )
    }


    return (
        <div className=''>
            <ToastContainer />


            <div className='min-h-[50vh] py-12 container mx-auto p-5 '>

                <div className='items-center grid-cols-2 gap-10 pt-3 space-y-5 md:grid'>
                    <div className='w-full md:gap-10' data-aos="fade-up">

                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className='pb-5 bg-base-200 rounded-lg shadow-md card-body'
                        >
                            <h1 className='pb-2 text-gray-300 text-3xl md:text-4xl font-semibold'>How Can We Help</h1>
                            <div className=''>
                                <div className='form-control'>
                                    <label className='label'>
                                        <p className=''>Name</p>
                                    </label>
                                    <input
                                        required
                                        name='name'
                                        type='text'
                                        placeholder='Name'
                                        className='input-bordered input'
                                    />
                                </div>
                                <div className='form-control'>
                                    <label className='label'>
                                        <p className=''>Email</p>
                                    </label>
                                    <input
                                        required
                                        name='email'
                                        type='email'
                                        placeholder='Email'
                                        className='input input-bordered'
                                    />
                                </div>
                                <div className='form-control'>
                                    <label className='label'>
                                        <p className=''>Message</p>
                                    </label>
                                    <textarea
                                        required
                                        name='message'
                                        className='textarea textarea-bordered'
                                        placeholder='Message'
                                    ></textarea>
                                </div>
                                <div className='mt-6'>
                                    <button className='btn w-2/3 md:w-1/3 mx-auto md:mx-0 outline outline-offset-4  hover:outline-offset-2 transition-all duration-100 rounded-full bg-white bg-opacity-30 text-white p-2 btn-sm'>
                                        <span>Send Message</span> <HiRocketLaunch></HiRocketLaunch>
                                    </button>
                                    <p className={msg == 'Message Sent' ? 'z-20 mt-3 text-green-500' : 'z-20 mt-3 text-red-500'}>{msg}</p>
                                </div>

                            </div>
                        </form>
                    </div>


                    <div className='md:w-3/4 ' data-aos="fade-up" >
                        <div>
                            <div className='mb-10'>
                                <h1 className='mb-3 text-3xl font-semibold border-l-8 text-gray-300 border-white ps-5'>
                                    Contact Info
                                </h1>

                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div className='space-y-5'>
                                    <div className='flex items-center gap-4'>
                                        <Mail className='font-semibold text-white'></Mail>
                                        <p><a className='link-hover' href="mailto:marufhossainbd615@gmail.com">marufhossainbd615@gmail.com</a></p>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <FaPhoneAlt className='text-xl text-white' />
                                        <p> +4915758061122 </p>
                                    
                                        

                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <FaMapMarkerAlt className='text-xl text-white' />
                                        <p>
                                           Friedrich-Wilhelm-von-Steuben-Str 90 G-612, Frankfurt Am Main <br /> Germany
                                        </p>
                                    </div>

                                </div>

                                <div className='space-y-5'>
                                    <div className='flex items-center gap-4'>
                                        <FaFacebookSquare className='text-xl text-white' />
                                        <p><a href="https://www.facebook.com/hemaruf/" className='link-hover'>Facebook</a></p>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <FaGithubSquare className='text-xl text-white' />
                                        <p>
                                            <a href="https://github.com/ryanmaruf615" className='link-hover'>GitHub</a>
                                        </p>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <FaLinkedin className='text-xl text-white'></FaLinkedin>
                                        <p>
                                            <a href="https://www.linkedin.com/in/md-maruf-hossain-b9b252187/" className='link-hover'>LinkedIn</a>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;