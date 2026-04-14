import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar'
import { TestimonialCard } from '@/components/TestimonialCard'
import { testimonials } from '@/data/testimonials'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Testimonials - Muhammad Sinan PC',
  description: 'See what my clients say about working with me',
}

export default function TestimonialsPage() {
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
            Client <span className="gradient-text">Testimonials</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            See what my satisfied clients have to say about their experience working with me
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  company={testimonial.company}
                  image={testimonial.image}
                  text={testimonial.text}
                  rating={testimonial.rating}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50 border-y border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">50+</div>
              <p className="text-gray-400 text-lg">Happy Clients</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">150+</div>
              <p className="text-gray-400 text-lg">Projects Completed</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">5/5</div>
              <p className="text-gray-400 text-lg">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-12 border border-gray-700 text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Join My Growing List of
              <span className="block gradient-text">Satisfied Clients</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Ready to experience premium video production? Let&apos;s create something amazing together
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              <span>Start Your Project</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
