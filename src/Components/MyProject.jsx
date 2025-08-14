import React, { useEffect } from 'react';
import { FaGithubSquare, FaReact } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Skills icons grouped in one object
import * as icons from './Skills';

// Project data
const projects = [
  {
    title: 'Food-Corner',
    description:
      'Food-Corner is an online food order website where users can order different types of food. Admin can add/edit food details. Users can save favorites.',
    image: 'p3',
    githubLinks: [
      { label: 'Github', url: 'https://github.com/ryanmaruf615/Food-corner.git' }
    ],
    tech: [
      'html', 'css', 'tailwind', 'javascript', 'react', 'redux',
      'nodejs', 'express', 'mongodb', 'jwt', 'fire'
    ]
  },
  {
    title: 'WunderLust',
    description:
      'Automated end-to-end deployment on AWS EKS with ArgoCD, Terraform, and Jenkins. Integrated CI/CD pipelines, implemented GitOps, and set up monitoring with Prometheus and Grafana.',
    image: '',
    githubLinks: [
      { label: 'Client', url: 'https://github.com/ryanmaruf615/Wanderlust-Mega-Project' }
    ],
    tech: [
      'aws', 'kubernetes', 'docker', 'jenkins', 'argocd',
      'prometheus', 'ansible', 'gitops', 'grafana', 'terraform'
    ]
  },
  {
    title: 'DevOps .NET on Azure',
    description:
      'DevOps-driven cloud deployment of a containerized .NET application using Azure services. Implemented Docker containerization, CI/CD deployment to Azure, and integrated Azure storage services.',
    image: '',
    githubLinks: [
      { label: 'Github', url: 'https://github.com/UniversityOfAppliedSciencesFrankfurt/se-cloud-2023-2024/tree/Unit-tester-group-cc/Source/MyCloudProjectSample' }
    ],
    tech: ['dotnet', 'docker', 'azure']
  },
  {
    title: 'Multi-Tech Voting App',
    description:
      'Developed a voting application using Python, .NET, Node.js, and PostgreSQL, optimized with AWS EC2 and Kubernetes. Used GitOps-based CI/CD with Argo CD to accelerate release cycles by 75%, improving stability by 30%.',
    image: '',
    githubLinks: [
      { label: 'Github', url: 'https://github.com/ryanmaruf615/k8s-kind-voting-app.git' }
    ],
    tech: ['python', 'dotnet', 'nodejs', 'postgres', 'aws', 'kubernetes', 'argocd']
  },

  {
    title: 'Multi-',
    description:
      'Developed a voting application using Python, .NET, Node.js, and PostgreSQL, optimized with AWS EC2 and Kubernetes. Used GitOps-based CI/CD with Argo CD to accelerate release cycles by 75%, improving stability by 30%.',
    image: '',
    githubLinks: [
      { label: 'Github', url: 'https://github.com/ryanmaruf615/k8s-kind-voting-app.git' }
    ],
    tech: ['python', 'dotnet', 'nodejs', 'postgres', 'aws', 'kubernetes', 'argocd']
  },

  {
  title: 'Enhanced Unit Testing Framework for Hierarchical Temporal Memory (HTM) Algorithms',
  description:
    'Developed a comprehensive suite of unit tests for the Temporal Memory algorithm using TDD principles and reflection. Simulated edge cases to validate spatiotemporal learning functions, including synapse creation, adaptation, and pruning. Collaborated in a three-member team to ensure industry-standard testing quality.',
  image: 'p_htm', // replace with actual image asset key
  githubLinks: [
    { label: 'GitHub', url: 'https://github.com/ryanmaruf615/neocortexapi/tree/dev/source/MySEProject/Documentation' }
  ],
  tech: [
     'dotnet'
  ]
}


];

const MyProject = ({ p1, p2, p3, p4, p5 }) => {
  const images = { p1, p2, p3, p4, p5 };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="flex justify-center mb-10">
        <h1 className="text-4xl font-semibold text-gray-200 border-b-2 inline-block p-2 rounded-xl">
          My Project
        </h1>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="hero bg-base-200 rounded-lg hover:-translate-y-1 duration-500"
            data-aos="fade-up"
          >
            <div className="hero-content flex-col xl:flex-row">
              <div className="p-3">
                {proj.image && (
                  <div
                    className="w-[300px] rounded-lg h-[250px] ease-in-out duration-[5000ms] bg-cover bg-top hover:bg-bottom"
                    style={{ backgroundImage: `url(${images[proj.image]})` }}
                  />
                )}
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-300">{proj.title}</h1>
                <p className="py-6">{proj.description}</p>

                <div className="flex items-center gap-3">
                  {proj.githubLinks.map((link, i) => (
                    <p key={i} className="flex items-center gap-1">
                      <span className="text-2xl"><FaGithubSquare /></span>
                      <a className="link-hover" href={link.url} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    </p>
                  ))}
                </div>

                <div className="flex items-center flex-wrap gap-3 mt-5">
                  {proj.tech.map((techKey, i) => (
                    <img
                      key={i}
                      className="w-[30px]"
                      src={icons[techKey]}
                      alt={techKey}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProject;
