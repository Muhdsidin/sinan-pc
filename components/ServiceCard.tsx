'use client'

import * as Icons from 'lucide-react'

interface ServiceCardProps {
  iconName: string
  title: string
  description: string
  features?: string[]
}

export function ServiceCard({ iconName, title, description, features }: ServiceCardProps) {
  const Icon = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ size: number; className: string }>

  return (
    <div className="group glass rounded-xl p-6 hover-glow border border-gray-700 transition-all duration-300 h-full">
      {/* Icon */}
      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {Icon && <Icon size={24} className="text-white" />}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4">{description}</p>

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="text-gray-500 text-sm flex items-start space-x-2">
              <span className="text-purple-500 font-bold">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
