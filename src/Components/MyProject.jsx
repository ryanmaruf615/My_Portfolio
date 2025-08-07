import React from 'react';
import { FaGitSquare, FaGithubSquare, FaReact } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init()

import html from '../assets/skill/html.jpg'
import css from '../assets/skill/css.jpg'
import js from '../assets/skill/js.png'
import react from '../assets/skill/react.png'
import ex from '../assets/skill/ex.png'
import mongo from '../assets/skill/mongo.png'
import redux from '../assets/skill/redux.png'
import bootstrap from '../assets/skill/bootstrap.png'
import tailwind from '../assets/skill/tailwind.png'
import node from '../assets/skill/node.png'
import next from '../assets/skill/next.png'
import ts from '../assets/skill/ts.png'
import vs from '../assets/skill/vs.png'
import git from '../assets/skill/git.png'
import jwt from '../assets/skill/jwt.png'
import fire from '../assets/skill/fire.png'

import Kubernetes from '../assets/skill/Kubernetes.png';

import docker from '../assets/skill/docker.png'


import Ansible from '../assets/skill/Ansible.png'
import argocd from '../assets/skill/argocd.png'
import aws from '../assets/skill/aws.png'
import gitops from '../assets/skill/gitops.png'
import grafana from '../assets/skill/grafana.png'
import jenkins from '../assets/skill/jenkins.png'
import prometheus from '../assets/skill/prometheus.png'
import terraform from '../assets/skill/terraform.png'




const MyProject = ({ p1, p2, p3, p4, p5 }) => {
    return (
        <div>
            <div>
                <div className='flex justify-center mb-10'>
                    <h1 className='text-4xl font-semibold  text-gray-200 border-b-2 inline-block p-2 rounded-xl '>My Project</h1>
                </div>
            </div>

            <div className='grid gap-5 md:grid-cols-2'>



                <div className="hero  bg-base-200 rounded-lg hover:-translate-y-1 duration-500" data-aos="fade-up">
                    <div className="hero-content flex-col xl:flex-row">
                        <div className='p-3'>
                            <div className={`w-[300px] rounded-lg h-[250px] ease-in-out duration-[5000ms] bg-cover bg-top hover:bg-bottom`} style={{ backgroundImage: `url(${p3})` }}>

                            </div>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-gray-300">Food-Corner</h1>
                            <p className="py-6">Food-Corner is a online food order website where user can order different type of food. Admin can add/edit food/food details. User can add menu to favourite list item section.</p>
                            <div className='flex items-center gap-3'>
                                <p className='flex items-center gap-1'>  <span className='text-2xl'><FaGithubSquare /></span><a className='link-hover' href="https://github.com/Abir-7/Food-Corner-Client" target='_blank'>Client </a></p>
                                <p className='flex items-center gap-1'>  <span className='text-2xl'><FaGithubSquare /></span><a className='link-hover' href="https://github.com/Abir-7/Food-Corner-Server" target='_blank'>Server </a></p>
                                <p className='flex items-center gap-1'>  <span className='text-2xl text-blue-600'><FaReact /></span><a className='link-hover' target='_blank' href="https://foodcorner-2c2d7.web.app/">Live Site</a></p>
                            </div>

                            <div className='flex items-center flex-wrap gap-3 mt-5'>
                                <img className='w-[30px]'  src={Kubernetes} alt="" />
                                
                                <img className='w-[30px]'  src={css} alt="" />
                                <img className='w-[30px]'  src={tailwind} alt="" />
                                <img className='w-[30px]'  src={js} alt="" />
                                <img className='w-[30px]'  src={react} alt="" />
                                <img className='w-[30px]'  src={redux} alt="" />
                                <img className='w-[30px] bg-white p-1 rounded-full'  src={node} alt="" />
                                <img className='w-[30px]'  src={ex} alt="" />
                                <img className='w-[30px]'  src={mongo} alt="" />
                                <img className='w-[30px]'  src={jwt} alt="" />
                                <img className='w-[30px]'  src={fire} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

<div className="hero  bg-base-200 rounded-lg hover:-translate-y-1 duration-500" data-aos="fade-up">
                    <div className="hero-content flex-col xl:flex-row">
                        <div className='p-3'>
                            <div className={`w-[300px] rounded-lg h-[250px] ease-in-out duration-[5000ms] bg-cover bg-top hover:bg-bottom`} style={{ backgroundImage: `url(${p3})` }}>

                            </div>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-gray-300">WunderLust</h1>
                            <p className="py-6">Automated end-to-end deployment on AWS EKS with ArgoCD, Terraform, and Jenkins. Integrated CI/CD pipelines, implemented GitOps for seamless sync, and set up monitoring with Prometheus and Grafana — boosting scalability, reliability, and operational efficiency.</p>
                            <div className='flex items-center gap-3'>
                                <p className='flex items-center gap-1'>  <span className='text-2xl'><FaGithubSquare /></span><a className='link-hover' href="https://github.com/ryanmaruf615/Wanderlust-Mega-Project" target='_blank'>Client </a></p>                               
                            </div>

                            <div className='flex items-center flex-wrap gap-3 mt-5'>
                                <img className='w-[30px]'  src={aws} alt="" />  
                                <img className='w-[30px]'  src={Kubernetes} alt="" />                           
                                <img className='w-[30px]'  src={docker} alt="" />
                                <img className='w-[30px]'  src={jenkins} alt="" />
                                <img className='w-[30px]'  src={argocd} alt="" />
                                <img className='w-[30px]'  src={prometheus} alt="" />
                                <img className='w-[30px]'  src={Ansible} alt="" />
                                <img className='w-[30px] bg-white p-1 rounded-full'  src={gitops} alt="" />
                                <img className='w-[30px]'  src={grafana} alt="" />
                                <img className='w-[30px]'  src={terraform} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                
                

               

            

            </div>
        </div>
    );
};

export default MyProject;