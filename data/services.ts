export interface Service {
  id: string
  iconName: string
  title: string
  description: string
  features: string[]
}

export const services: Service[] = [
  {
    id: '1',
    iconName: 'Edit3',
    title: 'Video Editing',
    description: 'Professional video editing with color grading, sound design, and visual effects',
    features: [
      '4K/8K editing capability',
      'Color grading & correction',
      'Multi-format support',
      'Fast turnaround',
    ],
  },
  {
    id: '2',
    iconName: 'Camera',
    title: 'Cinematic Videography',
    description: 'High-quality videography services capturing moments in cinematic style',
    features: [
      'Professional equipment',
      'Creative composition',
      'Drone footage',
      'Multiple angles',
    ],
  },
  {
    id: '3',
    iconName: 'Clapperboard',
    title: 'Reels & Shorts Editing',
    description: 'Trending content creation optimized for social media platforms',
    features: [
      'Instagram Reels',
      'TikTok Videos',
      'YouTube Shorts',
      'Trending effects',
    ],
  },
  {
    id: '4',
    iconName: 'Film',
    title: 'YouTube Channel Editing',
    description: 'Complete YouTube video production and channel optimization',
    features: [
      'Thumbnail design',
      'Video optimization',
      'SEO optimization',
      'Consistent branding',
    ],
  },
  // {
  //   id: '5',
  //   iconName: 'Sparkles',
  //   title: 'Color Grading & Correction',
  //   description: 'Professional color grading to enhance visual aesthetics and mood',
  //   features: [
  //     'Color correction',
  //     'Grade matching',
  //     'LUT creation',
  //     'Creative grading',
  //   ],
  // },
  // {
  //   id: '6',
  //   iconName: 'Music2',
  //   title: 'Motion Graphics & Animation',
  //   description: 'Custom animations and motion graphics for enhanced storytelling',
  //   features: [
  //     '2D/3D animation',
  //     'Text animation',
  //     'Logo animation',
  //     'Kinetic typography',
  //   ],
  // },
]
