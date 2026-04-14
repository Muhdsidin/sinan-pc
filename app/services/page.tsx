import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar'
import { ServiceCard } from '@/components/ServiceCard'
import { services } from '@/data/services'
import { ArrowLeft, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Services - Muhammad Sinan PC',
  description: 'Professional video editing, videography, and creative services',
}

export default function ServicesPage() {
  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Understand your vision, goals, and requirements in detail',
    },
    {
      number: '02',
      title: 'Planning & Concept',
      description: 'Develop creative concepts and detailed project plans',
    },
    {
      number: '03',
      title: 'Production',
      description: 'Execute the vision with professional equipment and techniques',
    },
    {
      number: '04',
      title: 'Post-Production',
      description: 'Edit, color grade, and enhance with premium finishing',
    },
    {
      number: '05',
      title: 'Review & Revision',
      description: 'Collaborate on revisions until perfect results are achieved',
    },
    {
      number: '06',
      title: 'Delivery',
      description: 'Final delivery in all required formats and resolutions',
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
            My <span className="gradient-text">Services</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Comprehensive video production services designed to meet all your creative needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50 border-y border-gray-800">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="gradient-text">Process</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A structured approach to deliver exceptional results every time
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="glass rounded-xl p-6 border border-gray-700 hover-glow transition-all duration-300 group"
              >
                <div className="text-5xl font-bold gradient-text mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="gradient-text">Me</span>
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Cinematic Quality',
                description: 'Premium production standards with attention to every detail',
              },
              {
                title: 'Fast Turnaround',
                description: 'Efficient workflow ensuring timely delivery without compromise',
              },
              {
                title: 'Creative Vision',
                description: 'Transforming your ideas into stunning visual narratives',
              },
              {
                title: 'Professional Equipment',
                description: '4K/8K capable gear with latest editing software',
              },
              {
                title: 'Unlimited Revisions',
                description: 'Work together until you&apos;re completely satisfied',
              },
              {
                title: 'Competitive Pricing',
                description: 'Transparent pricing with flexible payment options',
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="glass rounded-xl p-6 border border-gray-700 hover-glow transition-all duration-300 flex items-start space-x-4 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CheckCircle className="text-purple-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-12 border border-gray-700 text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Start Your
              <span className="block gradient-text">Video Project?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Let&apos;s discuss your vision and create something amazing together
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              <span>Get In Touch</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
