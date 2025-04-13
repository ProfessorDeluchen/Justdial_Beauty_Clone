import { Scissors, Sparkles, Camera, BellRing as Ring, Palette, Heart } from 'lucide-react';

export const categories = [
  {
    id: 'salon',
    name: 'Hair Salon',
    icon: Scissors
  },
  {
    id: 'spa',
    name: 'Spa & Wellness',
    icon: Sparkles
  },
  {
    id: 'makeup',
    name: 'Makeup Artist',
    icon: Palette
  },
  {
    id: 'wedding',
    name: 'Wedding Services',
    icon: Ring
  },
  {
    id: 'tattoo',
    name: 'Tattoo Studio',
    icon: Heart
  },
  {
    id: 'photography',
    name: 'Beauty Photography',
    icon: Camera
  }
];

export const subcategories = {
  salon: [
    { id: 'haircut', name: 'Haircut & Styling' },
    { id: 'coloring', name: 'Hair Coloring' },
    { id: 'treatment', name: 'Hair Treatment' },
    { id: 'extensions', name: 'Hair Extensions' }
  ],
  spa: [
    { id: 'massage', name: 'Massage' },
    { id: 'facial', name: 'Facial' },
    { id: 'body', name: 'Body Treatment' },
    { id: 'nails', name: 'Nail Care' }
  ],
  makeup: [
    { id: 'bridal', name: 'Bridal Makeup' },
    { id: 'party', name: 'Party Makeup' },
    { id: 'special', name: 'Special Effects' },
    { id: 'lessons', name: 'Makeup Lessons' }
  ],
  wedding: [
    { id: 'bridal-package', name: 'Bridal Package' },
    { id: 'party-prep', name: 'Wedding Party' },
    { id: 'trial', name: 'Makeup Trial' },
    { id: 'consultation', name: 'Consultation' }
  ],
  tattoo: [
    { id: 'custom', name: 'Custom Design' },
    { id: 'cover', name: 'Cover Up' },
    { id: 'removal', name: 'Tattoo Removal' },
    { id: 'piercing', name: 'Piercing' }
  ],
  photography: [
    { id: 'portrait', name: 'Portrait' },
    { id: 'wedding', name: 'Wedding' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'portfolio', name: 'Portfolio' }
  ]
};

export const businesses = [
  {
    id: '1',
    name: 'Glamour Haven Salon',
    category: 'salon',
    subcategory: 'haircut',
    rating: 4.8,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920',
    location: '123 Beauty Lane, New York',
    phone: '(555) 123-4567',
    hours: 'Mon-Sat: 9AM-8PM',
    description: 'Luxury hair salon offering cutting-edge styles and treatments.',
    isPopular: true,
    discount: null
  },
  {
    id: '2',
    name: 'Zen Wellness Spa',
    category: 'spa',
    subcategory: 'massage',
    rating: 4.9,
    reviews: 256,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1920',
    location: '456 Relaxation Ave, New York',
    phone: '(555) 234-5678',
    hours: 'Daily: 10AM-9PM',
    description: 'Premium spa services for ultimate relaxation and rejuvenation.',
    isPopular: true,
    discount: '20% off on all massages this week'
  },
  {
    id: '3',
    name: 'Artistic Ink Tattoo',
    category: 'tattoo',
    subcategory: 'custom',
    rating: 4.7,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=1920',
    location: '789 Creative St, New York',
    phone: '(555) 345-6789',
    hours: 'Tue-Sun: 12PM-10PM',
    description: 'Custom tattoo designs by award-winning artists.',
    isPopular: false,
    discount: null
  },
  {
    id: '4',
    name: 'Bridal Beauty Studio',
    category: 'wedding',
    subcategory: 'bridal-package',
    rating: 5.0,
    reviews: 164,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920',
    location: '321 Wedding Plaza, New York',
    phone: '(555) 456-7890',
    hours: 'By Appointment',
    description: 'Complete bridal beauty services for your special day.',
    isPopular: true,
    discount: 'Free trial makeup session with package booking'
  },
  {
    id: '5',
    name: 'Makeup by Maria',
    category: 'makeup',
    subcategory: 'bridal',
    rating: 4.9,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=1920',
    location: '567 Glam Street, New York',
    phone: '(555) 567-8901',
    hours: 'Mon-Sun: 8AM-7PM',
    description: 'Professional makeup services for all occasions.',
    isPopular: true,
    discount: null
  },
  {
    id: '6',
    name: 'Beauty Lens Photography',
    category: 'photography',
    subcategory: 'portrait',
    rating: 4.8,
    reviews: 142,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1920',
    location: '890 Camera Road, New York',
    phone: '(555) 678-9012',
    hours: 'By Appointment',
    description: 'Capturing your most beautiful moments with artistic flair.',
    isPopular: false,
    discount: '15% off on portfolio shoots'
  },
  {
    id: '7',
    name: 'Serene Day Spa',
    category: 'spa',
    subcategory: 'facial',
    rating: 4.9,
    reviews: 178,
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=1920',
    location: '234 Tranquil Road, New York',
    phone: '(555) 789-0123',
    hours: 'Daily: 9AM-8PM',
    description: 'Luxurious spa treatments in a peaceful environment.',
    isPopular: true,
    discount: 'Book any facial, get free hand massage'
  },
  {
    id: '8',
    name: 'Style & Scissors',
    category: 'salon',
    subcategory: 'coloring',
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1920',
    location: '567 Fashion Ave, New York',
    phone: '(555) 890-1234',
    hours: 'Tue-Sat: 10AM-7PM',
    description: 'Expert hair coloring and styling services.',
    isPopular: true,
    discount: '25% off on all color services'
  },
  {
    id: '9',
    name: 'Elegant Events Makeup',
    category: 'makeup',
    subcategory: 'party',
    rating: 4.8,
    reviews: 92,
    image: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?auto=format&fit=crop&q=80&w=1920',
    location: '789 Glamour St, New York',
    phone: '(555) 901-2345',
    hours: 'Mon-Sun: 9AM-6PM',
    description: 'Specialized in party and event makeup.',
    isPopular: false,
    discount: 'Group bookings get 20% off'
  },
  {
    id: '10',
    name: 'Classic Cuts',
    category: 'salon',
    subcategory: 'haircut',
    rating: 4.6,
    reviews: 143,
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=1920',
    location: '123 Traditional Ave, New York',
    phone: '(555) 012-3456',
    hours: 'Mon-Sat: 8AM-6PM',
    description: 'Traditional barbershop with modern expertise.',
    isPopular: false,
    discount: 'Student discount - 15% off'
  },
  {
    id: '11',
    name: 'Pure Bliss Massage',
    category: 'spa',
    subcategory: 'massage',
    rating: 4.9,
    reviews: 267,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1920',
    location: '456 Wellness Way, New York',
    phone: '(555) 123-4567',
    hours: 'Daily: 9AM-9PM',
    description: 'Therapeutic massage and bodywork services.',
    isPopular: true,
    discount: 'First-time clients: 30% off'
  },
  {
    id: '12',
    name: 'Wedding Dreams Studio',
    category: 'photography',
    subcategory: 'wedding',
    rating: 5.0,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=1920',
    location: '890 Romance Road, New York',
    phone: '(555) 234-5678',
    hours: 'By Appointment',
    description: 'Capturing your special moments with style.',
    isPopular: true,
    discount: 'Book 6 months ahead, get 20% off'
  }
];