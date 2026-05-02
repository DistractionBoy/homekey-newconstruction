export type InspectorTestimonial = {
  reviewer: string
  text: string
  platform?: string
}

export type Inspector = {
  id: string
  slug: string
  name: string
  title: string
  photo: string
  certifications: string[]
  bio: string[]
  areasServed: string[]
  specialties: string[]
  languages?: string[]
  testimonials: InspectorTestimonial[]
  primaryCounty?: string
}

export const INSPECTORS: Inspector[] = [
  {
    id: 'ian-mcnaught',
    slug: 'ian-mcnaught',
    name: 'Ian McNaught',
    title: 'Principal Inspector',
    photo: '/images/inspectors/ian-mcnaught.jpg',
    primaryCounty: 'Loudoun County',
    certifications: [
      'ASHI Certified Inspector (ACI)',
      'Virginia State Certified Home Inspector',
      'Maryland State Licensed Home Inspector',
      'New Residential Structure Licensed (NRS)',
      'Sewer Scope Certified Inspector',
      'Radon Measurement Specialist',
      'Certified Residential Thermographer',
      'ASHI Deck Inspector',
      'AHIT Graduate',
    ],
    bio: [
      'Ian founded HomeKey Inspections in 2012 after relocating from Southern California, where he operated a home improvement and remodeling business for seven years. That hands-on construction background — knowing how homes are built from the inside out — became the foundation for the way he inspects.',
      'As principal inspector, Ian performs specialty inspections and is responsible for training and leading the HomeKey inspection team. Every inspector on staff has completed the HomeKey Advanced Training course that Ian developed, which goes well beyond the state licensing requirements.',
      'Ian prides himself on engaging clients throughout the inspection and making the time at the home educational and informative. Whether you\'re a first-time buyer or an experienced homeowner, his goal is the same: make sure you fully understand the condition of the home you\'re buying before you close.',
      'He has served on the Board of Directors of the Northern Virginia ASHI chapter and holds certifications across every major inspection discipline — thermal imaging, radon, sewer scope, deck inspection, and new residential construction.',
    ],
    areasServed: ['Loudoun County', 'Fairfax County', 'Fauquier County', 'Prince William County', 'Virginia', 'Maryland', 'Washington D.C.'],
    specialties: [
      'Specialty inspections',
      'Inspector training and team leadership',
      'Thermal imaging',
      'Sewer scope inspections',
      'New construction (pre-drywall, pre-settlement, warranty)',
      'Deck inspections',
    ],
    testimonials: [
      {
        reviewer: 'Michael T.',
        text: 'Ian was incredibly thorough — spent nearly 4 hours on our 2,400 sq ft home and caught issues our agent didn\'t know about. The report was detailed, easy to read, and helped us negotiate a $6,000 credit. Worth every penny.',
        platform: 'Google',
      },
      {
        reviewer: 'Sarah K.',
        text: 'I was nervous as a first-time buyer but Ian walked me through everything he found in real time. He answered all my questions patiently and the report was in my inbox the same evening. I felt confident going into closing.',
        platform: 'Google',
      },
      {
        reviewer: 'David R.',
        text: 'Professional, punctual, and thorough. The thermal imaging caught a water intrusion issue behind the master bath wall that wouldn\'t have been visible otherwise.',
        platform: 'Google',
      },
    ],
  },
  {
    id: 'sebastian-aste',
    slug: 'sebastian-aste',
    name: 'Sebastian Aste',
    title: 'ASHI Certified Inspector',
    photo: '/images/inspectors/sebastian-aste.jpg',
    primaryCounty: 'Loudoun County',
    certifications: [
      'ASHI Certified Inspector (ACI)',
      'Virginia Licensed Home Inspector',
      'New Residential Structure Licensed (NRS)',
      'AHIT Certified Inspector',
      'Radon Measurement Specialist',
      'Certified Residential Thermographer',
    ],
    languages: ['English', 'Spanish'],
    bio: [
      'Sebastian is one of HomeKey\'s most experienced inspectors, bringing exceptional communication skills and bilingual capability to every inspection. He completed the AHIT Home Inspection Master Course and HomeKey\'s rigorous Advanced Training program.',
      'His background in a field that demanded clear, precise communication under pressure translates directly to home inspection — where being able to explain complex findings in plain language to a nervous buyer is just as important as finding them.',
      'Sebastian is fully bilingual in English and Spanish, making him an ideal inspector for clients who prefer to conduct their inspection in Spanish. He serves clients across Loudoun, Fairfax, and Prince William counties.',
    ],
    areasServed: ['Loudoun County', 'Fairfax County', 'Prince William County'],
    specialties: [
      'Bilingual inspections (English/Spanish)',
      'New construction inspections',
      'Thermal imaging',
      'Radon testing',
    ],
    testimonials: [
      {
        reviewer: 'Maria G.',
        text: 'Sebastian hizo la inspección en español y fue increíblemente detallado. Me explicó todo lo que encontró de manera clara y profesional. Lo recomiendo ampliamente.',
        platform: 'Google',
      },
      {
        reviewer: 'Robert C.',
        text: 'Sebastian was thorough, professional, and took the time to explain every finding. His report was comprehensive and easy to read. Highly recommend.',
        platform: 'Google',
      },
    ],
  },
  {
    id: 'jay-carrillo',
    slug: 'jay-carrillo',
    name: 'Jay (Jorge) Carrillo',
    title: 'ASHI Certified Inspector',
    photo: '/images/inspectors/jay-carrillo.jpg',
    primaryCounty: 'Prince William County',
    certifications: [
      'ASHI Certified Inspector (ACI)',
      'Virginia Licensed Home Inspector',
      'New Residential Structure Licensed (NRS)',
      'AHIT Certified Inspector',
      'Virginia Professional Home Inspector',
    ],
    languages: ['English', 'Spanish'],
    bio: [
      'Jay brings 20 years of active military service in the United States Marine Corps to every inspection he performs. The attention to detail, discipline, and commitment to thoroughness that the Marines demand are exactly the qualities that make a great home inspector — and Jay has them in abundance.',
      'After retiring from the USMC, Jay completed the Virginia Professional Home Inspector Course, AHIT certification, and HomeKey\'s Advanced Training program. He earned his ASHI Certified Inspector designation and Virginia license, and specializes in military relocation inspections for service members navigating a PCS move.',
      'Jay is fully bilingual in English and Spanish and regularly conducts inspections for Spanish-speaking clients across Prince William, Fauquier, and Stafford counties. As a homeowner and father himself, he understands what\'s at stake in every inspection.',
    ],
    areasServed: ['Prince William County', 'Fauquier County', 'Stafford County', 'Northern Virginia'],
    specialties: [
      'Military relocation (PCS) inspections',
      'Bilingual inspections (English/Spanish)',
      'New construction inspections',
    ],
    testimonials: [
      {
        reviewer: 'Carlos M.',
        text: 'Jay hizo un trabajo excelente. Muy profesional y detallado. Como ex-militar, tiene una atención al detalle que realmente se nota en su trabajo.',
        platform: 'Google',
      },
      {
        reviewer: 'Tom B.',
        text: 'Jay was fantastic — thorough, on time, and incredibly detailed in his report. As a fellow veteran, I appreciated his work ethic and professionalism.',
        platform: 'Google',
      },
    ],
  },
  {
    id: 'mike-lawson',
    slug: 'mike-lawson',
    name: 'Mike Lawson',
    title: 'ASHI Certified Inspector',
    photo: '/images/inspectors/mike-lawson.jpg',
    primaryCounty: 'Fairfax County',
    certifications: [
      'ASHI Certified Inspector (ACI)',
      'Virginia Licensed Home Inspector',
      'AHIT Certified Inspector',
      'Radon Measurement Provider (NRPP)',
      'New Residential Structure Licensed (NRS)',
      'Certified Residential Thermographer',
    ],
    bio: [
      'Mike spent 21 years as a United States Marine, including time as a Marine Corps Shooting Team instructor and competitor. That career demanded precision, attention to detail, and performing under pressure — qualities that translate directly to the thorough, methodical approach he brings to every home inspection.',
      'Beyond the military, Mike has a diverse background in construction and hands-on homeownership. He completed Virginia\'s Professional Home Inspection and New Residential Construction courses and earned his AHIT certification before joining the HomeKey team.',
      'Mike holds National Radon Proficiency Program (NRPP) certification as a Radon Residential Measurement Provider and is a certified residential thermographer for leak detection. As a father of four and homeowner himself, he approaches every inspection with the mindset of someone who cares deeply about making sure families know exactly what they\'re buying.',
    ],
    areasServed: ['Fairfax County', 'Arlington County', 'Montgomery County MD', 'Northern Virginia', 'Maryland'],
    specialties: [
      'Pre-drywall inspections (construction background)',
      'Radon testing and measurement (NRPP)',
      'Thermal imaging and leak detection',
    ],
    testimonials: [
      {
        reviewer: 'Jennifer H.',
        text: 'Mike was incredibly thorough and professional. His military background really shows — he was systematic, detailed, and left no stone unturned. The report was comprehensive and easy to understand.',
        platform: 'Google',
      },
      {
        reviewer: 'Kevin P.',
        text: 'Mike found issues that would have cost us thousands after closing. His construction background gives him a perspective that most inspectors don\'t have.',
        platform: 'Google',
      },
    ],
  },
  {
    id: 'darren-melnar',
    slug: 'darren-melnar',
    name: 'Darren Melnar',
    title: 'Texas Branch Principal Inspector',
    photo: '/images/inspectors/darren-melnar.jpg',
    primaryCounty: 'Williamson County',
    certifications: [
      'ASHI Certified Inspector (ACI)',
      'InterNACHI Certified Professional Inspector (CPI)',
      'Texas Licensed Inspector (TREC #22702)',
      'AHIT Certified Inspector',
      'NRSB Radon Measurement Specialist',
      'Certified Residential Thermographer',
    ],
    bio: [
      'Darren is the principal inspector for HomeKey\'s Austin, Texas branch. He launched his home inspection career in 2014 after 14 years in engineering and logistics management at a multinational technology firm — bringing an analytical, process-driven mindset that shapes how he approaches every inspection.',
      'Darren earned a B.S. in Mechanical Engineering from The University of Texas at Austin and completed his inspection training through AHIT. He is certified by both ASHI and InterNACHI, holds a Texas TREC license (#22702), and is licensed in Texas, Virginia, and Maryland.',
      'As an active real estate investor with multiple transactions under his belt, Darren understands the stakes from both sides of the table. His goal is always the same: give clients the information they need to make a fully informed decision about the home they\'re buying.',
    ],
    areasServed: ['Williamson County TX', 'Travis County TX', 'Hays County TX', 'Austin Metro Area'],
    specialties: [
      'Texas market (Austin metro)',
      'New construction (Austin area)',
      'Engineering perspective',
      'Radon testing',
    ],
    testimonials: [
      {
        reviewer: 'Amanda L.',
        text: 'Darren was incredibly thorough and his engineering background really shows. He explained every finding clearly and gave us a complete picture of the home before we closed.',
        platform: 'Google',
      },
      {
        reviewer: 'Mark T.',
        text: 'Best inspector in Austin. Darren is meticulous, professional, and communicates everything clearly. His report gave us everything we needed to negotiate repairs.',
        platform: 'Google',
      },
    ],
  },
  {
    id: 'janet-campana',
    slug: 'janet-campana',
    name: 'Janet Campana',
    title: 'Office Manager',
    photo: '/images/inspectors/janet-campana.jpg',
    certifications: [],
    bio: [
      'Janet is HomeKey\'s office manager and the first person most clients talk to when they reach out to schedule an inspection. She has been with HomeKey Inspections since early 2021 and brings years of administrative and customer service experience to the role.',
      'Janet manages weekday operations and handles all customer communications — phone inquiries, email correspondence, scheduling, and coordination between clients and inspectors. If you\'ve called or emailed HomeKey, you\'ve probably already talked to Janet.',
      'Her approachable style and genuine care for clients makes the scheduling process smooth and stress-free. She\'s committed to making sure every client feels confident and informed from the moment they book to the day they receive their report.',
    ],
    areasServed: ['Sterling, VA (Office)'],
    specialties: [
      'Client communications',
      'Inspection scheduling',
      'Office operations',
    ],
    testimonials: [
      {
        reviewer: 'Lisa M.',
        text: 'Janet was so helpful when I called to schedule. She walked me through everything, answered all my questions, and made the whole process easy. Great customer service.',
        platform: 'Google',
      },
    ],
  },
]

export function getInspectorBySlug(slug: string): Inspector | undefined {
  return INSPECTORS.find((i) => i.slug === slug)
}
