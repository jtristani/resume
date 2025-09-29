import React from 'react'
import './index.css'
import Summary from './components/Summary.js'
import Education from './components/Education.js'
import Experience from './components/Experience.js'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top header bar */}
      <header className="flex items-center justify-between bg-navy text-white px-8 py-4 border-b-4 border-complement">
        <div className="flex items-center">
          <img src="/profile.jpg" alt="Profile" className="w-12 h-12 rounded-full mr-4 border-2 border-complement" />
          <h1 className="text-2xl font-semibold">José M. Tristani</h1>
          <h3 className="text-2xl font-semibold">&nbsp;&nbsp;| Sr. Software Engineer - Lead</h3>
        </div>
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
          <Summary />

          <Education />

          <Experience />
        </main>
      </div>
    </div>
  )
}

export default App
