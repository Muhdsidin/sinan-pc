import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { ServiceCard } from '@/components/ServiceCard'
import { VideoCard } from '@/components/VideoCard'
import { stats } from '@/data/stats'
import { services } from '@/data/services'
import { projects } from '@/data/projects'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Home() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgressBar />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
                <Sparkles size={16} className="text-purple-400" />
                <span className="text-sm font-semibold text-purple-300">Welcome to Creative Excellence</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Cinematic
                <span className="block gradient-text">Video Excellence</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
                Professional video editing and videography. Transforming your stories into stunning
                visual experiences that captivate and inspire.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/projects"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>View My Work</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-purple-500/50 text-white rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            {/* Right - Profile Image */}
            <div className="relative animate-slide-in-right">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-purple-500/30 group">
                <Image
                  src="/profile.png"
                  alt="Muhammad Sinan PC - Video Editor & Videographer"
                  fill
                  className="object-center group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl border border-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300 animate-glow" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl p-6 text-white shadow-2xl shadow-purple-500/50">
                <p className="font-bold text-2xl">6+</p>
                <p className="text-sm text-purple-100">Months Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50 border-y border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="animate-fade-in">
                <AnimatedCounter
                  target={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore some of my latest cinematic creations and professional video productions
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <div key={project.id} className="animate-fade-in-up">
                <VideoCard
                  thumbnail={project.thumbnail}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  clientName={project.clientName}
                  tools={project.tools}
                />
              </div>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 px-8 py-4 border border-purple-500/50 text-white rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300 group"
            >
              <span>View All Projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50 border-y border-gray-800">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="gradient-text">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive video production services tailored to bring your vision to life
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={service.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <ServiceCard
                  iconName={service.iconName}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-12 border border-gray-700 text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Elevate Your<span className="block gradient-text">Visual Story?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Let&apos;s collaborate to create stunning video content that resonates with your audience
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group"
            >
              <span>Start Your Project</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
