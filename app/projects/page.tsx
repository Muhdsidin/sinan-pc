'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar'
import { VideoCard } from '@/components/VideoCard'
import { projects, categories } from '@/data/projects'
import { ArrowLeft } from 'lucide-react'

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

      const getYoutubeId = (url: string) => {
  const regExp =
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([^&\n?#/]+)/;

  return url.match(regExp)?.[1];
};

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
            Portfolio <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Explore my complete portfolio of cinematic video projects across various categories
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Category Filter */}
          <div className="mb-12">
            <h3 className="text-white font-semibold mb-4">Filter by Category</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg shadow-purple-500/50'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="animate-fade-in-up"
                onClick={() => setSelectedProject(project)}
              >
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

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No projects found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden bg-black animate-slide-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors duration-300"
            >
              ✕
            </button>

            {/* Video Embed */}
           <iframe
  src={`https://www.youtube.com/embed/${getYoutubeId(selectedProject.videoUrl)}`}
  className="w-full h-full"
  allowFullScreen
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
/>

            {/* Project Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="text-white text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-gray-300">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
