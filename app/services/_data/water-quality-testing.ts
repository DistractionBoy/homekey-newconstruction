import type { ServiceData } from './types'

export const waterQualityData: ServiceData = {
  slug: 'water-quality-testing',
  title: 'Water Quality Testing',
  subtitle: 'Know what\'s in your water before you make it your water.',
  metaDescription:
    'Water quality testing in Northern Virginia. Essential for well water, older homes, and buyers with health concerns. Test for bacteria, lead, nitrates, and more.',
  whyImportant: [
    'Municipal water is treated, but treatment is not perfect and delivery pipes can introduce contaminants. Well water has no treatment whatsoever. Either way, the only way to know what\'s in your water is to test it.',
    'Older homes may have lead service lines or lead solder in interior plumbing — even if the water at the treatment plant tests clean. Areas near agricultural land can have elevated nitrate levels from fertilizer runoff. Coliform bacteria, arsenic, and radon dissolved in water are all invisible and odorless.',
    'If you\'re buying a home on well water, this is not optional. If you\'re buying a home built before 1986 (when lead pipes were banned), it\'s a serious consideration. If you have young children or anyone immunocompromised in the household, it\'s worth knowing what you\'re drinking.',
  ],
  whatWeInspect: [
    {
      heading: 'Standard Water Quality Panel',
      bullets: [
        'Total and fecal coliform bacteria',
        'Nitrates and nitrites',
        'Lead and copper',
        'pH, hardness, and total dissolved solids',
        'Iron, manganese, and turbidity',
      ],
    },
    {
      heading: 'Extended Panels Available',
      bullets: [
        'Arsenic (common in some VA/MD aquifers)',
        'Radon in water (contributes to indoor radon)',
        'Volatile organic compounds (VOCs)',
        'Pesticides and herbicides (agricultural areas)',
        'Full EPA primary and secondary standards panel',
      ],
    },
    {
      heading: 'When Water Testing Is Critical',
      bullets: [
        'Any home on well water',
        'Homes built before 1986 (pre-lead ban)',
        'Areas near agricultural land or industrial sites',
        'Homes with recent flooding or septic issues',
        'Buyers with infants, young children, or immunocompromised household members',
      ],
    },
  ],
  whatToExpect: [
    {
      step: 1,
      title: 'Sample collection',
      description:
        'We collect water samples from the kitchen tap (first draw and after flush) following EPA-specified protocols. For well water, we also collect from the pressure tank.',
    },
    {
      step: 2,
      title: 'Lab submission',
      description:
        'Samples are submitted to a state-certified laboratory with chain-of-custody documentation.',
    },
    {
      step: 3,
      title: 'Results in 3–5 business days',
      description:
        'Standard panel results return within 3–5 business days. Rush processing is available for real estate transactions with tight timelines.',
    },
    {
      step: 4,
      title: 'Results explained',
      description:
        'We walk you through your results, explain which parameters matter and why, and advise on treatment options or next steps if any contaminants exceed standards.',
    },
  ],
  pricing: {
    rows: [
      { label: 'Standard water quality panel', price: '$400' },
      { label: 'Extended panel (includes arsenic, VOCs)', price: '$500' },
    ],
    note: 'State-certified lab. Chain-of-custody documentation included.',
  },
  sampleReports: [
    {
      label: 'Water quality sample report',
      href: 'https://homekeyinspections.com/wp-content/uploads/simplewaterdata_com_report_commercial_738a0bc6dc39a41a67b20c.pdf',
    },
  ],
  testimonials: [
    {
      reviewer: 'Jennifer R.',
      text: 'We bought a home on well water and HomeKey\'s water test found elevated coliform bacteria. The seller had the system shocked before closing and we retested to confirm. Glad we didn\'t skip it.',
      platform: 'Google',
    },
    {
      reviewer: 'Steve M.',
      text: 'Clear results, straightforward explanation. Gave us confidence about the water in our 1970s home. No surprises after closing.',
      platform: 'Google',
    },
  ],
  relatedServices: [
    {
      title: 'Radon Testing',
      href: '/services/radon-testing',
      description: 'Dissolved radon in well water contributes to indoor radon exposure.',
    },
    {
      title: 'VOC / IAQ Testing',
      href: '/services/voc-testing',
      description: 'Indoor air quality testing for volatile organic compounds.',
    },
    {
      title: 'Home Inspection',
      href: '/services/home-inspection',
      description: 'Add water quality testing to your full home inspection.',
    },
  ],
  faqs: [
    {
      question: 'Is water testing required for VA/FHA loans?',
      answer:
        'Well water testing is typically required for VA and FHA loans on homes with private wells. The specific parameters required depend on the loan type. Check with your lender, but our standard panel covers most requirements.',
    },
    {
      question: 'How long does well water testing take?',
      answer:
        'Standard panel results are returned within 3–5 business days. Rush processing is available for real estate transactions with tighter timelines.',
    },
    {
      question: 'What if my municipal water tests positive for something?',
      answer:
        'First, confirm with a repeat test. Coliform at first draw can sometimes be from the faucet fixture, not the supply. If the supply tests positive, we\'ll advise on treatment options. Point-of-use filters, whole-house filtration, or in some cases notification to the water authority.',
    },
    {
      question: 'Do you test water in homes that aren\'t on a well?',
      answer:
        'Yes. Municipal water testing is useful for older homes with lead plumbing, homes near contaminated sites, and for general peace of mind. The collection protocol differs from well water testing.',
    },
  ],
}
