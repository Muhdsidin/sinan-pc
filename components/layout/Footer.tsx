'use client'

import Link from 'next/link'
import { Mail, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/mhd.sin4n/',
      label: 'Instagram',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/muhammed-sinan-pc-107a43378/',
      label: 'LinkedIn',
    },
    {
      icon: Youtube,
      href: 'https://www.youtube.com/@msedits2122/shorts',
      label: 'YouTube',
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/7306539054',
      label: 'WhatsApp',
    },
  ]

  return (
    <footer className="bg-black border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center font-bold text-white">
                MS
              </div>
              <span className="text-white font-bold">Muhammad Sinan</span>
            </div>
            <p className="text-gray-400 text-sm">Professional video editor & videographer. Crafting cinematic stories through visual excellence.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/projects" className="text-gray-400 hover:text-white transition-colors duration-300 block text-sm">
                Projects
              </Link>
              <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300 block text-sm">
                Services
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300 block text-sm">
                About Me
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 block text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Video Editing</p>
              <p className="text-gray-400 text-sm">Videography</p>
              <p className="text-gray-400 text-sm">Color Grading</p>
              <p className="text-gray-400 text-sm">Motion Graphics</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a href="mailto:sinan@example.com" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 text-sm">
                <Mail size={16} />
                <span>muhdsinanpc2257@gmail.com</span>
              </a>
              <a href="https://wa.me/7306539054" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 text-sm">
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Muhammad Sinan PC. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white hover:bg-purple-500/10 rounded-full p-2 transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
