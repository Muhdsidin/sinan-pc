import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar'
import { ArrowLeft, Download } from 'lucide-react'

export const metadata = {
  title: 'About - Muhammad Sinan PC',
  description: 'Learn about Muhammad Sinan PC, professional video editor and videographer',
}

export default function AboutPage() {
  const skills = [
    'Video Editing',
    'Color Grading',
    // 'Motion Graphics',
    'Cinematography',
    // 'Audio Design',
    // 'VFX Editing',
    '4K/8K Production',
    'DaVinci Resolve',
    'Premiere Pro',
    'After Effects',
    'Final Cut Pro',
    'Cinematography',
  ]

  const timeline = [
    {
      year: '2016',
      title: 'Started Video Editing',
      description: 'Began my journey in video editing with passion and dedication',
    },
    {
      year: '2018',
      title: 'Professional Studio Setup',
      description: 'Established professional studio with 4K capable equipment',
    },
    {
      year: '2020',
      title: 'Expanded Services',
      description: 'Added videography and color grading services to portfolio',
    },
    {
      year: '2022',
      title: 'Milestone Achievement',
      description: 'Completed 100+ projects with 50+ satisfied clients',
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Recognized for excellence in cinematic video production',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgressBar />
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 mb-6 transition-colors duration-300"
          >
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            {/* Text Content */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Professional Video Editor &<span className="block gradient-text">Videographer</span>
              </h2>

              <p className="text-gray-400 text-lg mb-4 leading-relaxed">
                Hi, I&apos;m Muhammad Sinan, a passionate video editor and videographer  in creating stunning cinematic content. My journey in video production has taken me from
                small YouTube channels to major commercial projects.
              </p>

              <p className="text-gray-400 text-lg mb-4 leading-relaxed">
                I specialize in transforming raw footage into compelling visual stories through meticulous editing,
                color grading, and visual effects. My work has reached millions of viewers across various platforms,
                and I take pride in delivering exceptional quality every single time.
              </p>

              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                What drives me is the opportunity to collaborate with clients and bring their visions to life. I
                believe that great video production is a blend of technical expertise and creative storytelling.
              </p>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group mb-6"
              >
                <span>Let&apos;s Work Together</span>
              </Link>

              {/* Download Resume */}
              <a
                href="#"
                className="inline-flex items-center space-x-2 px-8 py-4 border border-purple-500/50 text-white rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300 ml-4 group"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Profile Image */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="relative h-96 md:h-full rounded-2xl overflow-hidden border border-gray-700 glass group">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-700/20"
                  style={{
                    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"><defs><pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="2" fill="%238b5cf6" opacity="0.3"/></pattern></defs><rect width="400" height="500" fill="none"/><rect width="400" height="500" fill="url(%23dots)"/></svg>')`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-black/80" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                      <span className="text-4xl font-bold text-white">MS</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Muhammad Sinan PC</h3>
                    <p className="text-purple-400 font-semibold">Video Editor & Videographer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50 border-y border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center animate-fade-in-up">
            My <span className="gradient-text">Skills</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="glass rounded-lg p-4 border border-gray-700 text-center hover-glow transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <p className="text-white font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center animate-fade-in-up">
            My <span className="gradient-text">Journey</span>
          </h2>

          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className="glass rounded-xl p-8 border border-gray-700 hover-glow transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{item.year}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
