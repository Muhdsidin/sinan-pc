export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  image: string
  text: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    role: 'Marketing Director',
    company: 'Tech Innovations Ltd.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    text: 'Muhammad delivered an exceptional promotional video that exceeded our expectations. His attention to detail and creative vision transformed our product launch into a memorable campaign.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sarah Williams',
    role: 'Bride',
    company: 'Williams-Chen Wedding',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    text: 'Our wedding video is absolutely beautiful! Muhammad captured every special moment with such artistry. We watch it again and again. Highly recommended for any couple!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Michael Chen',
    role: 'Content Creator',
    company: 'Adventure Seekers',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    text: 'Working with Muhammad has been a game-changer for my YouTube channel. The editing quality and turnaround time are outstanding. My engagement has increased significantly!',
    rating: 5,
  },
  {
    id: '4',
    name: 'Emily Rodriguez',
    role: 'Brand Owner',
    company: 'Luxury Timepieces',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    text: 'The commercial video Muhammad created perfectly represents our brand\'s luxury and sophistication. His cinematic approach elevated our product presentation beautifully.',
    rating: 5,
  },
  {
    id: '5',
    name: 'James Mitchell',
    role: 'Founder',
    company: 'StartUp Ventures',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    text: 'Phenomenal work on our startup promo video. Muhammad understood our vision immediately and brought it to life with stunning visuals and perfect pacing. Worth every penny!',
    rating: 5,
  },
  {
    id: '6',
    name: 'Lisa Thompson',
    role: 'Documentary Producer',
    company: 'Culture Media Productions',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    text: 'Muhammad\'s skill in color grading and sound design brought our documentary to life. His professional approach and collaborative spirit made the entire process seamless.',
    rating: 5,
  },
]
