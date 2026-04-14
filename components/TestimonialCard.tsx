'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  image: string
  text: string
  rating?: number
}

export function TestimonialCard({
  name,
  role,
  company,
  image,
  text,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="glass rounded-xl p-6 border border-gray-700 hover-glow transition-all duration-300 h-full flex flex-col">
      {/* Rating Stars */}
      <div className="flex items-center space-x-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-300 text-base mb-6 flex-grow italic">"{text}"</p>

      {/* Divider */}
      <div className="border-t border-gray-700 my-4" />

      {/* Author Info */}
      <div className="flex items-center space-x-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm">{name}</h4>
          <p className="text-gray-500 text-xs">{role}</p>
          <p className="text-gray-500 text-xs">{company}</p>
        </div>
      </div>
    </div>
  )
}
