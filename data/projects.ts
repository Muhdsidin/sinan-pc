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
    thumbnail: 'https://static0.hotcarsimages.com/wordpress/wp-content/uploads/2022/07/Bugatti-La-Voiture-Noire-2-Cropped-(1).jpg',
    videoUrl: 'https://youtube.com/shorts/st4XeirgF-o?si=-iJTNdj5cD5S5DcJ',
    tools: ['DaVinci Resolve', 'Premiere Pro', 'After Effects'],
  },
  {
    id: '2',
    title: 'THEREFORE IM HAIR LOSS  TALKING HEAD',
    category: 'YouTube',
    description: '',
    clientName: 'Sarah & John Studios',
    thumbnail: 'https://www.shutterstock.com/shutterstock/videos/3784414565/thumb/1.jpg?ip=x480',
    videoUrl: 'https://www.youtube.com/shorts/cPSrtahfanc',
    tools: ['Premiere Pro', 'DaVinci Resolve'],
  },
  {
    id: '3',
    title: 'THEREFORE IM MOTHERS DAY - TALKING HEAD',
    category: 'YouTube',
    description: 'Talking Head video discussing the challenges and joys of motherhood, filmed in a cozy home setting',
    clientName: 'Adventure Seekers Channel',
    thumbnail: 'https://www.shutterstock.com/shutterstock/videos/1103067977/thumb/1.jpg?ip=x480',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tools: ['DaVinci Resolve', 'Premiere Pro', 'Color Grading'],
  },
  {
    id: '4',
    title: 'KLF 5 DAYS TO GO - INSTAGRAM REEL',
    category: 'Reels',
    description: 'KLF 5 DAYS TO GO Youtube Short Video',
    clientName: 'Content Creator',
    thumbnail: 'https://plus.unsplash.com/premium_photo-1682125771198-f7cbed7cb868?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcnQlMjBmaWxtfGVufDB8fDB8fHww',
    videoUrl: 'https://youtube.com/shorts/fO80Gy47cf8?si=Jf2L5ZrJov5yosoh',
    tools: ['Premiere Pro', 'Adobe Audition', 'Motion Graphics'],
  },
  {
    id: '5',
    title: 'Nissan gtr samurai',
    category: 'Commercial',
    description: 'Modern TYpe Car Editing / Cinematic Car Video/ Automotive Car Video',
    clientName: 'TechVision Inc.',
    thumbnail: 'https://images.pexels.com/photos/30599330/pexels-photo-30599330/free-photo-of-nissan-gt-r-nismo-in-parking-garage-at-dusk.png?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
    thumbnail: 'https://cdn2.shopify.com/s/files/1/0163/6622/files/How_to_Edit_Car_Photos_in_Lightroom_2_1024x1024.jpg?v=1562942625',
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
