import React from 'react'
import './index.css'
import Summary from './components/Summary.js'
import Education from './components/Education.js'
import Experience from './components/Experience.js'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top header bar */}
      <header className="flex flex-col items-center justify-center sm:flex-row sm:justify-between bg-navy text-white px-8 py-4 border-b-4 border-complement">
        <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-start items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <img src="./public/profile.jpg" alt="Profile" className="w-12 h-12 rounded-full mr-4 border-2 border-complement" />
          <h1 className="text-xl sm:text-2xl font-semibold">José M. Tristani</h1>
          <h3 className="mt-1 sm:mt-0 sm:ml-4 text-sm sm:text-2xl font-semibold text-center sm:text-left">Sr. Software Engineer - Lead</h3>
        </div>
      </header>

      <div className="flex flex-col-reverse md:flex-row flex-1 bg-white">
        {/* Sidebar */}
        <aside className="bg-navy text-white w-full md:w-64 p-6">
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
              <a href="https://github.com/jtristani" className="underline hover:text-gray-300">
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
        <main className="w-full md:flex-1 p-8">
          <Summary />

          <Education />

          <Experience />
        </main>
      </div>
    </div>
  )
}

export default App
