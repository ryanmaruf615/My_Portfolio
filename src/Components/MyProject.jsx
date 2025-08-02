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
import Kubernetes from '../assets/skill/Kubernetes.png'



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
                            <div className={`w-[300px] rounded-lg h-[250px] ease-in-out duration-[5000ms] bg-cover bg-top hover:bg-bottom`} style={{ backgroundImage: `url(${p2})` }}>

                            </div>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-gray-300">E-ExamPro</h1>
                            <p> ( Team Project )</p>
                            <p className="py-6">E-ExamPro is a online Exam Platform. Student can perticipate exam in online by this website. Instructor can add question paper.</p>
                            <div className='flex items-center gap-3'>
                                <p className='flex items-center gap-1'>  <span className='text-2xl'><FaGithubSquare /></span><a className='link-hover' href="https://github.com/Abir-7/E-ExaminationPro" target='_blank'>Client </a></p>
                                <p className='flex items-center gap-1'>  <span className='text-2xl'><FaGithubSquare /></span><a className='link-hover' href="https://github.com/Abir-7/E-ExaminationPro-server" target='_blank'>Server </a></p>
                                <p className='flex items-center gap-1'>  <span className='text-2xl text-blue-600'><FaReact /></span><a className='link-hover' target='_blank' href="https://e-exampro.web.app/">Live Site</a></p>
                            </div>

                            <div className='flex items-center flex-wrap gap-3 mt-5'>
                                <img className='w-[30px]'  src={html} alt="" />
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
                            <div className={`w-[300px] rounded-lg h-[250px] ease-in-out duration-[5000ms] bg-cover bg-top hover:bg-bottom`} style={{ backgroundImage: `url(${p4})` }}>

                            </div>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-gray-300">Car Toy Store</h1>
                            <p className="py-6">Car Toy Store is a toy store website where seller can add toy, and admin manage the website.</p>
                            <div className='flex items-center gap-3'>
                                <p className='flex items-center gap-1'>  <span className='text-2xl'><FaGithubSquare /></span><a className='link-hover' href="https://github.com/Abir-7/Car-Toy-Store" target='_blank'>Client </a></p>
                                <p className='flex items-center gap-1'>  <span className='text-2xl'><FaGithubSquare /></span><a className='link-hover' href="https://github.com/Abir-7/Car-Toy-Store-Server" target='_blank'>Server </a></p>
                                <p className='flex items-center gap-1'>  <span className='text-2xl text-blue-600'><FaReact /></span><a className='link-hover' target='_blank' href="https://car-toys-fcd9d.web.app/">Live Site</a></p>
                            </div>

                            <div className='flex items-center flex-wrap gap-3 mt-5'>
                                <img className='w-[30px]'  src={html} alt="" />
                                <img className='w-[30px]'  src={css} alt="" />
                                <img className='w-[30px]'  src={tailwind} alt="" />
                                <img className='w-[30px]'  src={js} alt="" />
                                <img className='w-[30px]'  src={react} alt="" />
                                <img className='w-[30px]'  src={fire} alt="" />
                                <img className='w-[30px] bg-white p-1 rounded-full'  src={node} alt="" />
                                <img className='w-[30px]'  src={ex} alt="" />
                                <img className='w-[30px]'  src={mongo} alt="" />
                               
                            </div>

                        </div>
                    </div>
                </div>

                <div className="hero  bg-base-200 rounded-lg hover:-translate-y-1 duration-500" data-aos="fade-up">
                    <div className="hero-content flex-col xl:flex-row">
                        <div className='p-3'>
                            <div className={`w-[300px] rounded-lg h-[250px] ease-in-out duration-[5000ms] bg-cover bg-top hover:bg-bottom`} style={{ backgroundImage: `url(${p1})` }}>

                            </div>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-gray-300">Capture Camp</h1>
                            <p className="py-6">Capture Camp is a photography course website, where student can enroll in any course.</p>
                            <div className='flex items-center gap-3'>
                                <p className='flex items-center gap-1'>  <span className='text-2xl'><FaGithubSquare /></span><a className='link-hover' href="https://github.com/Abir-7/React-Project-Capture-Camp-Client" target='_blank'>Client </a></p>
                                <p className='flex items-center gap-1'>  <span className='text-2xl'><FaGithubSquare /></span><a className='link-hover' href="https://github.com/Abir-7/React-Project-Capture-Camp-Server" target='_blank'>Server </a></p>
                                <p className='flex items-center gap-1'>  <span className='text-2xl text-blue-600'><FaReact /></span><a className='link-hover' target='_blank' href="https://capture-camp.web.app/">Live Site</a></p>
                            </div>
                            <div className='flex items-center flex-wrap gap-3 mt-5'>
                                <img className='w-[30px]'  src={html} alt="" />
                                <img className='w-[30px]'  src={css} alt="" />
                                <img className='w-[30px]'  src={tailwind} alt="" />
                                <img className='w-[30px]'  src={js} alt="" />
                                <img className='w-[30px]'  src={react} alt="" />
                                <img className='w-[30px]'  src={jwt} alt="" />
                                <img className='w-[30px] bg-white p-1 rounded-full'  src={node} alt="" />
                                <img className='w-[30px]'  src={ex} alt="" />
                                <img className='w-[30px]'  src={mongo} alt="" />
                               
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero  bg-base-200 rounded-lg hover:-translate-y-1 duration-500" data-aos="fade-up">
                    <div className="hero-content flex-col xl:flex-row ">
                        <div className='p-3'>
                            <div className={`w-[300px] rounded-lg h-[250px] ease-in-out duration-[3000ms] bg-cover bg-top hover:bg-bottom`} style={{ backgroundImage: `url(${p5})` }}>

                            </div>
                        </div>
                        <div>
                            <h1 className="text-4xl text-gray-300 font-bold">BD Food-Recipe</h1>
                            <p className="py-6">BD Food Recipe is a recipe website where user can find any recipe.</p>
                            <div className='flex items-center gap-3'>
                                <p className='flex items-center gap-1'>  <span className='text-2xl'><FaGithubSquare /></span><a className='link-hover' href="https://github.com/Abir-7/BD-Food-Recipe" target='_blank'>Client </a></p>
                                <p className='flex items-center gap-1'>  <span className='text-2xl'><FaGithubSquare /></span><a className='link-hover' href="https://github.com/Abir-7/BD-Food-Recipe-Server" target='_blank'>Server </a></p>
                                <p className='flex items-center gap-1'>  <span className='text-2xl text-blue-600'><FaReact /></span><a className='link-hover' target='_blank' href="https://bd-recipes.web.app/">Live Site</a></p>
                            </div>

                            <div className='flex items-center flex-wrap gap-3 mt-5'>
                                <img className='w-[30px]'  src={html} alt="" />
                                <img className='w-[30px]'  src={css} alt="" />
                                <img className='w-[30px]'  src={tailwind} alt="" />
                                <img className='w-[30px]'  src={js} alt="" />
                                <img className='w-[30px]'  src={react} alt="" />
                                <img className='w-[30px] bg-white p-1 rounded-full'  src={node} alt="" />
                                <img className='w-[30px]'  src={fire} alt="" />
                                <img className='w-[30px]'  src={ex} alt="" />
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default MyProject;