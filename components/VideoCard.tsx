'use client'

import Image from 'next/image'
import { Play } from 'lucide-react'

interface VideoCardProps {
  thumbnail: string
  title: string
  category: string
  description: string
  clientName: string
  tools: string[]
  onPlay?: () => void
}

export function VideoCard({
  thumbnail,
  title,
  category,
  description,
  clientName,
  tools,
  onPlay,
}: VideoCardProps) {
  return (
    <div className="group cursor-pointer h-full" onClick={onPlay}>
      {/* Thumbnail with Overlay */}
      <div className="relative overflow-hidden rounded-xl mb-4 h-48 bg-gray-800">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
          <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Play className="text-white ml-1" size={24} fill="white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="glass rounded-lg p-4 border border-gray-700 hover-glow transition-all duration-300">
        {/* Category Badge */}
        <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-semibold rounded-full mb-3">
          {category}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{description}</p>

        {/* Client */}
        {/* <p className="text-gray-500 text-xs mb-3">Client: <span className="text-gray-300">{clientName}</span></p> */}

        {/* Tools */}
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded border border-gray-700"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
