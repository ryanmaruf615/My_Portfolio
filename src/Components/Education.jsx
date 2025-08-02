import React from 'react';
import Tilt from 'react-parallax-tilt'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init()

const Education = ({person2}) => {
    return (
        <div>
        <div className='flex justify-center mb-10'>
          <h1 className='text-4xl font-semibold  text-gray-200 border-b-2 inline-block p-2 rounded-xl '>About Me</h1>
        </div>

        <div className='grid lg:grid-cols-2 gap-4 items-center mx-3'>

          <div className='grid items-center mb-10 md:mb-0'>
            <div className='flex justify-center ' data-aos="fade-up">
             <Tilt> <img className=" mas mask-hexagon-2 " src={person2} width={'300px'} /></Tilt>
            </div>
            <div className=' text-lg  text-justify text-gray-300 mx-3' data-aos="fade-up">
              I am Md Maruf Hossain .Cloud & DevOps Engineer | Docker · Kubernetes · AWS · React · Node.js · Jira | Driving Scalable IT Solutions
            </div>
          </div>

          <div className=' grid gap-4'>

            <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-200 hover:bg-base-300 transition-all hover:-translate-y-1 duration-500" data-aos="fade-up">
              <div className="collapse-title text-xl font-medium text-gray-300">
                Master of Engineering (M.Eng.):
              </div>
              <div className="collapse-content">
                <p>Institute: <span className='text-gray-300'>Frankfurt University Of Applied Sciences,
                  Frankfurt am Main  .</span></p>
                <p>Subject: <span className='text-gray-300'>Masters in Information Technology</span></p>              
              </div>
            </div>

            <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-200 hover:bg-base-300 transition-all hover:-translate-y-1 duration-500" data-aos="fade-up">
              <div className="collapse-title text-xl font-medium text-gray-300">
                Bachelor of Science (B.Sc):
              </div>
              <div className="collapse-content">
                <p>Institute: <span className='text-gray-300'>American International University Bangladesh,
                  Dhaka.</span></p>
                <p>Subject: <span className='text-gray-300'>Computer Science & Engineering (CSE)</span></p>
                <p>Date : 2016-2020</p>
              </div>
            </div>

            
            
          </div>

        </div>

      </div>
    );
};

export default Education;