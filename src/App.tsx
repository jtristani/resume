import React, { useState } from 'react'
import './index.css'

interface Detail {
  heading?: string
  content?: string
  list?: string[]
}

interface ExperienceEntry {
  title: string
  company: string
  date: string
  details: Detail[]
}

const experienceData: ExperienceEntry[] = [
  {
    title: 'Sr. Software Engineer – Lead',
    company: 'ReliaQuest',
    date: 'Juy 2021 – Present',
    details: [
      {
        heading: 'Designed & lead the engineering of a content management system for the GreyMatter platform',
        content:
          'The GreyMatter platform is composed of over 200 microservices with user generated content scattered across multiple of these services. The Content Management team engineered a first-party solution to not only version content through an integration with a new global content service, but also distribute Global content and configuration across the different GreyMatter regions.'
      },
      {
        heading: 'Implemented the Ray (ray.io) framework to train/host internal and open-source models',
        content:
          'As part of an AI driven product pipeline, lead the implementation of Ray infrastructure & CI pipelines to train multiple internal ML models, ranging from fine-tuned LLMs, embedding, and classifier models for internal use cases. Designed a region agnostic solution to route traffic to models hosted in multiple regions to provide High-Availability and allieviate compute constraints in regions.'
      },
      {
        heading: 'Mentoring others',
        content:
          'Onboarded and mentored associates into the GreyMatter platform, explained core services, functionalities and concepts. Lead and mentored interns with the creation of an internal developer CLI for interacting with developer environments and the creation of a classical machine learning classification model to improve existing approaches in reducing the alert noise and fatigue, and close incidents based on the included artifacts.'
      },
      {
        heading: 'Developing AI integration services on the core GreyMatter platform',
        content:
          'Contributed in creating the initial set of AI specific services for interacting with LLMs; services centered around the creation of a prompt management service for the compilation of system prompts to be executed by an internal service for interfacing with multiple LLM providers.'
      },
      {
        heading: 'Contributions as part of the Platform team',
        list: [
          'Improved platform libraries for microservice architecture.',
          'Led transition to JWT-based authentication with Auth0.',
          'Enhanced scalability using Kafka for a multi-stage data pipeline.'
        ]
      }
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Self-Employed',
    date: 'Jan 2021 – Jun 2021',
    details: [
      {
        list: [
          'Designed and implemented features in FinTech and ticket-booking apps.',
          'Expanded CI/CD pipelines across Heroku, GitHub, and Netlify.',
          'Maintained and refactored existing codebases for diverse clients.'
        ]
      }
    ]
  },
  {
    title: 'Sr. Software Expert',
    company: 'Evertec, Inc',
    date: 'Apr 2020 – Dec 2020',
    details: [
      {
        list: [
          'Migrated legacy services to Docker-based microservices using 12-factor principles.',
          'Integrated new CI/CD workflows in the cloud.'
        ]
      }
    ]
  },
  {
    title: 'Sr. Software Engineer',
    company: 'Connect Assistance',
    date: 'Apr 2018 – Apr 2020',
    details: [
      {
        list: [
          'Developed Android app for fleet tracking with real-time WebSocket communication.',
          'Built backend APIs for real-time data and payment processing.'
        ]
      }
    ]
  },
  {
    title: 'Software Developer',
    company: 'PR Institute of Statistics',
    date: 'Nov 2014 – May 2018',
    details: [
      {
        list: [
          'Built Android applications for Puerto Rico Department of Labor’s statistics division.',
          'Developed Drupal 8 website, custom newsletter API, and plugins.',
          'Supported joint Android/.NET projects with Puerto Rico government agencies.'
        ]
      }
    ]
  }
]

function App() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top header bar */}
      <header className="flex items-center justify-between bg-navy text-white px-8 py-4">
        <h1 className="text-2xl font-semibold">José M. Tristani</h1>
        <span className="text-xl">//</span>
        <p className="text-sm font-medium uppercase">Sr Software Engineer</p>
      </header>

      <div className="flex flex-1 bg-white">
        {/* Sidebar */}
        <aside className="bg-navy text-white w-64 p-6">
          <h2 className="text-lg font-semibold border-b border-accent pb-2 mb-4">Contact</h2>
          <ul className="space-y-2 mb-6 text-sm">
            <li>✉️ j@tristani.io</li>
            <li>📞 (787) 484-4044</li>
            <li>
              🔗{' '}
              <a
                href="https://linkedin.com/in/jtristani"
                className="underline hover:text-gray-300"
              >
                LinkedIn
              </a>
            </li>
            <li>
              🖥️{' '}
              <a href="https://github.com/frostai" className="underline hover:text-gray-300">
                GitHub
              </a>
            </li>
          </ul>

          <h2 className="text-lg font-semibold border-b border-accent pb-2 mb-4">Languages</h2>
          <ul className="list-disc list-inside mb-6 space-y-1 text-sm">
            <li>Java</li>
            <li>JavaScript / TypeScript</li>
            <li>Python</li>
            <li>Go</li>
          </ul>

          <h2 className="text-lg font-semibold border-b border-accent pb-2 mb-4">
            Frameworks & Stacks
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-1 text-sm">
            <li>Spring Boot</li>
            <li>Node.js / Express</li>
            <li>React.js</li>
            <li>Android Native</li>
            <li>NumPy & Ray</li>
          </ul>

          <h2 className="text-lg font-semibold border-b border-accent pb-2 mb-4">Tools</h2>
          <ul className="list-disc list-inside mb-6 space-y-1 text-sm">
            <li>macOS | Linux | Windows</li>
            <li>Asana | Jira | Trello</li>
            <li>Git | Docker</li>
            <li>AWS Cloud | Azure | Heroku | Netlify</li>
            <li>Vim | Nvim</li>
          </ul>

          <h2 className="text-lg font-semibold border-b border-accent pb-2 mb-4">Databases</h2>
          <ul className="list-disc list-inside mb-6 space-y-1 text-sm">
            <li>PostgreSQL | MySQL</li>
            <li>SnowFlake</li>
            <li>MongoDB</li>
          </ul>

          <h2 className="text-lg font-semibold border-b border-accent pb-2 mb-4">
            Other Languages
          </h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>English</li>
            <li>Spanish</li>
          </ul>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8">
          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold border-b-2 border-accent pb-2 mb-4">Summary</h2>
            <p className="text-gray-800 text-sm leading-relaxed">
              Dedicated engineer with extensive full-stack experience across multiple technologies.
              Enthusiastic about joining a fast-paced team to deliver well-designed, scalable, and
              resilient software solutions. Proven track record in designing, refactoring, and
              scaling applications proactively to address increasing demand and scalability
              challenges.
            </p>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold border-b-2 border-accent pb-2 mb-4">Education</h2>
            <ul className="text-gray-800 text-sm space-y-2">
              <li>
                <strong>Georgia Institute of Technology</strong> | 2019 – 2022
                <br />
                Master of Science in Computer Science, AI/ML | Human–Computer Interaction
              </li>
              <li>
                <strong>Polytechnic University of Puerto Rico</strong> | 2011 – 2016
                <br />
                Bachelor of Science in Computer Engineering
              </li>
            </ul>
          </section>

          {/* Experience with accordion */}
          <section>
            <h2 className="text-xl font-semibold border-b-2 border-accent pb-2 mb-4">Experience</h2>
            <div className="space-y-4">
              {experienceData.map((entry, i) => (
                <div key={i}>
                  <div
                    className="flex justify-between items-center bg-gray-100 p-4 rounded cursor-pointer"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    <p className="font-semibold">{`${entry.title} | ${entry.company} | ${entry.date}`}</p>
                    <span className="text-2xl">{openIndex === i ? '−' : '+'}</span>
                  </div>
                  {openIndex === i && (
                    <div className="border border-t-0 border-gray-200 bg-white p-4">
                      {entry.details.map((detail, j) => (
                        <div key={j} className="mb-3">
                          {detail.heading && (
                            <p className="font-semibold">{detail.heading}</p>
                          )}
                          {detail.content && (
                            <p className="text-gray-800 text-sm leading-relaxed mt-1">
                              {detail.content}
                            </p>
                          )}
                          {detail.list && (
                            <ul className="list-disc list-inside mt-1 space-y-1">
                              {detail.list.map((li, k) => (
                                <li key={k}>{li}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
