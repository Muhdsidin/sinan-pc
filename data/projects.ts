export interface Project {
  id: string
  title: string
  category: string
  description: string
  clientName: string
  thumbnail: string
  videoUrl: string
  tools: string[]
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Luxury Car Commercial',
    category: 'Commercial',
    description: 'Premium cinematic commercial for luxury car and lifestyle brand',
    clientName: 'Luxury Timepieces Co.',
    thumbnail: 'https://images.unsplash.com/photo-1523170335684-f242b73e6fcf?w=500&h=300&fit=crop',
    videoUrl: 'https://youtube.com/shorts/st4XeirgF-o?si=-iJTNdj5cD5S5DcJ',
    tools: ['DaVinci Resolve', 'Premiere Pro', 'After Effects'],
  },
  {
    id: '2',
    title: 'THEREFORE IM HAIR LOSS  TALKING HEAD',
    category: 'YouTube',
    description: '',
    clientName: 'Sarah & John Studios',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=300&fit=crop',
    videoUrl: 'https://www.youtube.com/shorts/cPSrtahfanc',
    tools: ['Premiere Pro', 'DaVinci Resolve'],
  },
  {
    id: '3',
    title: 'THEREFORE IM MOTHERS DAY - TALKING HEAD',
    category: 'YouTube',
    description: 'Talking Head video discussing the challenges and joys of motherhood, filmed in a cozy home setting',
    clientName: 'Adventure Seekers Channel',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tools: ['DaVinci Resolve', 'Premiere Pro', 'Color Grading'],
  },
  {
    id: '4',
    title: 'KLF 5 DAYS TO GO - INSTAGRAM REEL',
    category: 'Reels',
    description: 'KLF 5 DAYS TO GO Youtube Short Video',
    clientName: 'Content Creator',
    thumbnail: 'https://images.unsplash.com/photo-1611339555312-e607c90352fd?w=500&h=300&fit=crop',
    videoUrl: 'https://youtube.com/shorts/fO80Gy47cf8?si=Jf2L5ZrJov5yosoh',
    tools: ['Premiere Pro', 'Adobe Audition', 'Motion Graphics'],
  },
  {
    id: '5',
    title: 'Nissan gtr samurai',
    category: 'Commercial',
    description: 'Modern TYpe Car Editing / Cinematic Car Video/ Automotive Car Video',
    clientName: 'TechVision Inc.',
    thumbnail: 'https://images.unsplash.com/photo-1563206767-5ac1b757c4c7?w=500&h=300&fit=crop',
    videoUrl: 'https://www.youtube.com/shorts/kFWQEgnPP8I',
    tools: ['DaVinci Resolve', 'After Effects', 'Motion Design'],
  },
  // {
  //   id: '6',
  //   title: 'YouTube Channel Intro',
  //   category: 'YouTube',
  //   description: 'Professional intro sequence for gaming YouTube channel',
  //   clientName: 'GamerPro Studios',
  //   thumbnail: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&h=300&fit=crop',
  //   videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  //   tools: ['After Effects', 'Cinema 4D', 'Premiere Pro'],
  // },
  {
    id: '6',
    title: 'Speed ramp Car',
    category: 'Youtube',
    description: 'Speed ramp Car Video / Cinematic Car Video / Automotive Car Video',
    clientName: 'Culture Preservation Project',
    thumbnail: 'https://images.unsplash.com/photo-1440404653325-ab127d49b470?w=500&h=300&fit=crop',
    videoUrl: 'https://www.youtube.com/shorts/YVpO-l-K3Es',
    tools: ['DaVinci Resolve', 'Premiere Pro', 'Sound Design'],
  },
  // {
  // //   id: '7',
  // //   title: 'Product Launch Campaign',
  // //   category: 'Commercial',
  // //   description: 'Multi-platform product launch campaign with cinematic visuals',
  // //   clientName: 'Fashion Brand X',
  // //   thumbnail: 'https://images.unsplash.com/photo-1581291518633-83b6b2065dba?w=500&h=300&fit=crop',
  // //   videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  // //   tools: ['DaVinci Resolve', 'Premiere Pro', 'Motion Graphics'],
  // // },
]

export const categories = ['All', 'Commercial', 'Wedding', 'Travel', 'Reels', 'YouTube', 'Documentary']
