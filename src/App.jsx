
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import './App.css'

import person from './assets/image.jpg'
import person2 from './assets/image2.jpg'


import Kubernetes from './assets/skill/Kubernetes.png'
import docker from './assets/skill/docker.png'
import python from './assets/skill/python.png'
import react from './assets/skill/react.png'
import java from './assets/skill/java.png'

import Ansible from './assets/skill/Ansible.png'
import argocd from './assets/skill/argocd.png'
import aws from './assets/skill/aws.png'
import gitops from './assets/skill/gitops.png'
import grafana from './assets/skill/grafana.png'
import jenkins from './assets/skill/jenkins.png'
import prometheus from './assets/skill/prometheus.png'
import terraform from './assets/skill/terraform.png'



import mongo from './assets/skill/mongo.png'
import redux from './assets/skill/redux.png'
import bootstrap from './assets/skill/bootstrap.png'
import tailwind from './assets/skill/tailwind.png'
import node from './assets/skill/node.png'
import next from './assets/skill/next.png'
import ts from './assets/skill/ts.png'

import vs from './assets/skill/vs.png'
import git from './assets/skill/git.png'
import jwt from './assets/skill/jwt.png'
import fire from './assets/skill/fire.png'


import p1 from './assets/project/p1.png'
import p2 from './assets/project/p2.png'
import p3 from './assets/project/p3.png'
import p4 from './assets/project/p4.png'
import p5 from './assets/project/p5.png'
import ContactMe from './Components/ContactMe'
import MyProject from './Components/MyProject'
import Education from './Components/Education'


import { Link, animateScroll as scroll } from 'react-scroll'

import Tilt from 'react-parallax-tilt'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Particless from './Components/Particless'
import { useEffect, useState } from 'react'
// ..
AOS.init()


import Typewriter from 'react-ts-typewriter'


function App() {

  const navLinks = (
    <>
      <li className='text-white'>
        <Link to="intro"

          smooth={true}
          offset={-50}
          duration={500} >
          Introduction
        </Link>
      </li>

      <li className='text-white'>
        <Link to="about"

          smooth={true}
          offset={-50}
          duration={500} >
          About Me
        </Link>
      </li>

      <li className='text-white'>
        <Link to="skill"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500} >
          Skills
        </Link>
      </li>

      <li className='text-white'>
        <Link to="project"

          smooth={true}
          offset={-50}
          duration={500} >
          Projects
        </Link>
      </li>

      <li className='text-white'>
        <Link to="contact"

          smooth={true}
          offset={-50}
          duration={500} >
          Contact Me
        </Link>
      </li>
    </>
  )

  const skills = [
    { img: Kubernetes, name: 'Kubernetes'},
    { img: aws, name: 'AWS'},
    { img: docker, name: 'Docker'},
    { img: grafana, name: 'Grafana'},
    { img: jenkins, name: 'Jenkins'},
    { img: prometheus, name: 'Prometheus'},
    { img: gitops, name: 'GitLab'},
    { img: terraform, name: 'Terraform'},
    { img: Ansible, name: 'Ansible'},
    { img: argocd, name: 'Argo CD'},
    { img: python, name: 'Python'},
    { img: java, name: 'Java' },
    { img: react, name: 'React'},
    { img: node, name: 'NodeJs' },
    { img: mongo, name: 'MongoDb'},
    { img: ts, name: 'TypeScript'},
  ]



  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        console.log(window.scrollY)
        setIsButtonVisible(true);
      } else {
        setIsButtonVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div >
      <section name='intro' className='relative'>

        <div className="navbar bg-base-200 mb-10 md:mb-0">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                {navLinks}
              </ul>
            </div>
            <a className=" text-3xl font-bold text-white">Maruf's Prorfolio</a>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navLinks}
            </ul>
          </div>
        </div>

        <div className='lg:min-h-[610px] xl:min-h-[650px]  flex items-center  z-50 mx-4'>
          <div className='text-white grid gap-0.5 md:grid-cols-2 justify-center items-center'>

            <div className='flex justify-center w-full text-center md:text-left' data-aos="fade-up">
              <div className='grid gap-6'>
                <h1 className='text-4xl font-semibold text-gray-300'>Hello, It's Me</h1>
                <h1 className='text-6xl font-bold text-gray-300'>Md Maruf Hossain</h1>
                <h1 className='font-semibold text-4xl text-gray-300'>I'm a <span className='text-white'> <Typewriter speed={300}
                  text={["Cloud & DevOps Engineer", "IT professional","Full Stack Developer", "Web Developer", "ReactJs Developer" ]} loop={true} /></span></h1>
                <a href='resume.pdf' download={'resume.pdf'} className='btn w-2/3 sm:w-2/3 xl:w-1/3 mx-auto md:mx-0 outline outline-offset-4  hover:outline-offset-2 transition-all duration-100 rounded-full bg-white bg-opacity-30 text-gray-300 p-2'>Download Resume <FaArrowDown></FaArrowDown></a>
              </div>
            </div>

            <div className='flex justify-center mt-10 md:mt-0  ' data-aos="fade-up">
              <div className='imageSection xl:w-4/6 lg:w-5/6 rounded-full  flex justify-center p-5 bg-white bg-opacity-30 shadow-2xl shadow-gray-700'>
                <img className='rounded-full ' src={person} alt="" />
              </div>
            </div>
            
          </div>
        </div>

        <div className='absolute top-10 -z-10'>
          <Particless></Particless>
        </div>
      </section>

      <section className='mb-10' name='about'>
        <Education person2={person2}></Education>
      </section>

      <section className='mb-10' name='skill'>
        <div>
          <div className='flex justify-center mb-10'>
            <h1 className='text-4xl font-semibold  text-gray-200 border-b-2 inline-block p-2 rounded-xl '>Skills & Tools</h1>
          </div>

          <div className='grid  lg:grid-cols-3 xl:grid-cols-4 grid-cols-2 gap-5  md:gap-10 mx-2'>
            {skills.map(skill => <Tilt>
              <div key={skill.name} className='flex flex-col  items-center w-auto md:w-80 card bg-base-200 p-5' data-aos="fade-up">
                <div className='mb-2'><img width={'100px'} src={skill.img} alt="" /></div>
                <div className='text-gray-300'>{skill.name}</div>
                <div className='text-gray-300'>{skill.level ? `( ${skill.level} )` : ''}</div>
              </div>
            </Tilt>)}
          </div>

        </div>
      </section>



      <section className='mb-10 ' name='project'>
        <MyProject p1={p1} p2={p2} p3={p3} p4={p4} p5={p5}></MyProject>
      </section>

      <section className='mb-10' name='contact'>

        <div className='flex justify-center '>
          <h1 className='text-4xl font-semibold  text-gray-200 border-b-2 inline-block p-2 rounded-xl '>Contact Me</h1>
        </div>

        <ContactMe></ContactMe>
      </section>

      <div className={`bottom-10 fixed right-10 ${isButtonVisible ? 'visible' : 'hidden'}`}>
        <button className='bg-gray-700 p-3 rounded-full shadow-lg imageSection2 '><Link
          to="intro"
          smooth={true}
          offset={-50}
          duration={500}
        ><FaArrowUp></FaArrowUp></Link></button>
      </div>
    </div>
  )
}

export default App
