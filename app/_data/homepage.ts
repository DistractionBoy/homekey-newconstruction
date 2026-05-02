import type { NavData } from '@/components/NavBar'

export const homepageNav: NavData = {
  logo: 'HomeKey Inspections',
  links: [
    { label: 'Services', href: '/services' },
    { label: 'New Construction', href: '/new-construction' },
    { label: 'Realtors', href: '/realtors' },
    { label: 'About', href: '/about' },
    { label: 'Reports', href: '/sample-reports' },
  ],
  langToggle: { label: 'ES', href: '/es' },
  cta: 'Book inspection',
  ctaHref: '/schedule',
}

export const homepageTrustBar: string[] = [
  '★ 4.9/5 across 500+ reviews',
  'ASHI · InterNACHI · NRS',
  'Loudoun · Fairfax · Prince William · Fauquier',
  'A+ BBB · Google Guaranteed',
]

export type ServiceCardData = {
  iconName: string
  title: string
  description: string
  href: string
  badge?: string
}

export const SERVICE_CARDS: ServiceCardData[] = [
  {
    iconName: 'Home',
    title: 'Home Inspection',
    description:
      'Our bread and butter. ASHI-certified inspectors spend 3-5 hours on your home and deliver a photo and video-rich report within 24 hours.',
    href: '/services/home-inspection',
    badge: 'Most popular',
  },
  {
    iconName: 'HardHat',
    title: 'New Construction',
    description:
      'Pre-drywall, pre-settlement, and 11-month warranty — three inspections, one inspector. Continuous protection through the full build lifecycle.',
    href: '/new-construction',
    badge: 'Bundle available',
  },
  {
    iconName: 'Microscope',
    title: 'Mold Testing',
    description:
      'Air sampling sent to an ISO/IEC 17025-accredited lab. Results in 1-2 business days. Not "we sent it somewhere."',
    href: '/services/mold-testing',
    badge: 'ISO accredited lab',
  },
  {
    iconName: 'Wind',
    title: 'Radon Testing',
    description:
      'Northern Virginia sits in a high-radon zone. Accurate testing, fast turnaround, and plain-language explanation of your results.',
    href: '/services/radon-testing',
  },
  {
    iconName: 'Wrench',
    title: 'Sewer Scope',
    description:
      'Video inspection of the lateral sewer line. Catches root intrusion, cracks, and offset joints before they become your problem.',
    href: '/services/sewer-scope',
  },
  {
    iconName: 'Thermometer',
    title: 'Thermal Imaging',
    description:
      'Infrared scanning on every inspection — standard, not an add-on. Finds hidden moisture, missing insulation, and electrical hot spots.',
    href: '/services/leak-detection-thermal-imaging',
  },
]

export type DifferentiatorData = {
  heading: string
  body: string
}

export const DIFFERENTIATORS: DifferentiatorData[] = [
  {
    heading: '6-8 months of advanced in-house training',
    body: 'Most inspectors finish a multi-week online course and start working. Ours spend 6-8 months training in our workshop with real HVAC systems, electric panels, and roof samples — then shadow 100+ inspections before they ever lead one.',
  },
  {
    heading: 'Thermal imaging on every inspection',
    body: 'Other companies charge extra for thermal imaging or skip it entirely. Every HomeKey inspection includes infrared scanning to find leaks and missing insulation that aren\'t visible to the naked eye. ISO/IEC 17025-accredited mold lab analysis when you need it.',
  },
  {
    heading: '3-5 hours, not 60 minutes',
    body: 'Cheap inspections take an hour. Real ones take longer. Our inspectors take the time the home deserves, including time for you to ask questions. We work for you — not for the realtor\'s closing timeline.',
  },
]

export type ReviewData = {
  reviewer: string
  city: string
  stars: number
  text: string
  source: 'Google' | 'Yelp' | 'Angi'
  inspectorName?: string
  avatar?: string
}

export const SEED_REVIEWS: ReviewData[] = [
  {
    reviewer: 'Wendy Coplen',
    city: 'Ashburn',
    stars: 5,
    text: 'Sebastian was thoughtful and thorough and, when he quickly realized there may be a piping issue, enlisted Ian for a same-day sewer scope. HomeKey identified major issues unknown to the seller. I highly recommend anyone needing inspection services to go with HomeKey.',
    source: 'Google',
    inspectorName: 'Sebastian Aste',
    avatar: '/images/reviewers/wendy-coplen.png',
  },
  {
    reviewer: 'Aaron Jackson',
    city: 'Leesburg',
    stars: 5,
    text: 'As a first-time homebuyer this process can be overwhelming. Jay went above and beyond to make sure I understood everything from start to finish. I am certain he didn\'t miss a single square inch of the property. Thank you HomeKey Inspections!',
    source: 'Google',
    inspectorName: 'Jay Carrillo',
    avatar: '/images/reviewers/aaron-jackson.png',
  },
  {
    reviewer: 'Katrina Sullivan',
    city: 'Haymarket',
    stars: 5,
    text: 'HomeKey rearranged their schedules to do an inspection the Saturday before Christmas! We spent 5 hours at the home. Their findings let us avoid a bad contract and saved us a lot of headache. A huge thank you to Ian and Jay!',
    source: 'Google',
    inspectorName: 'Ian McNaught',
    avatar: '/images/reviewers/katrina-sullivan.png',
  },
  {
    reviewer: 'Marcus L.',
    city: 'Brambleton',
    stars: 5,
    text: "Ian found a significant HVAC issue the builder had patched over. Would have cost $8,000 after closing. Because of HomeKey we got it fixed before we signed. Worth every penny and then some.",
    source: 'Google',
    inspectorName: 'Ian McNaught',
  },
  {
    reviewer: 'Patricia K.',
    city: 'Fairfax',
    stars: 5,
    text: "Third time using HomeKey across two different homes. The thermal imaging alone has caught things no other inspector I've used has ever flagged. They truly work for the buyer — not for the deal.",
    source: 'Yelp',
  },
  {
    reviewer: 'David R.',
    city: 'Gainesville',
    stars: 5,
    text: "Mike was incredibly professional and thorough on our pre-drywall inspection. He spent over 3 hours on a home other inspectors would have walked through in 45 minutes. Real peace of mind.",
    source: 'Angi',
    inspectorName: 'Mike Lawson',
  },
]

export type BlogPostData = {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
}

export const BLOG_POSTS: BlogPostData[] = [
  {
    slug: 'top-10-defects-new-construction',
    title: 'The 10 Most Expensive Defects We Find in New Construction',
    excerpt:
      "New homes aren't perfect. These are the defects that cost buyers the most when they're not caught before closing.",
    date: '2025-11-15',
    readTime: '6 min read',
  },
  {
    slug: 'how-to-read-inspection-report',
    title: 'How to Actually Read Your Home Inspection Report',
    excerpt:
      "Your inspector hands you a 100-page document the day before closing. Here's how to find what matters in under 20 minutes.",
    date: '2025-10-28',
    readTime: '4 min read',
  },
  {
    slug: 'pre-drywall-why-it-matters',
    title: 'Pre-Drywall Inspections: Your One Chance to See Inside the Walls',
    excerpt:
      "Once the drywall goes up, most of what's behind it is sealed in for 30 years. Here's why the timing of this inspection is everything.",
    date: '2025-10-10',
    readTime: '5 min read',
  },
]

export const FEATURED_INSPECTOR = {
  name: 'Ian McNaught',
  slug: 'ian-mcnaught',
  title: 'Principal Inspector',
  certifications: ['ASHI ACI', 'InterNACHI CPI', 'AHIT'],
  bio: 'Ian founded HomeKey after seeing too many buyers close on homes with serious issues a better inspection would have caught. He leads the training program that every HomeKey inspector goes through before their first solo inspection.',
  areasServed: ['Loudoun', 'Fairfax', 'Fauquier', 'Prince William'],
}
