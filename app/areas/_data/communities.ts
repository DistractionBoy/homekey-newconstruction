import type { Community } from './types'

const WHY_HOMEKEY = [
  'ASHI ACI-certified inspectors — not just licensed, certified',
  'Thermal imaging included on every inspection at no extra charge',
  'ISO/IEC 17025-accredited mold lab — not "we sent it somewhere"',
  'Bilingual inspectors available in English and Spanish',
  'Photo-and-video-rich reports delivered within 24 hours',
  'We work for the buyer, not the closing timeline',
]

export const COMMUNITIES: Community[] = [
  // Loudoun
  {
    name: 'Brambleton',
    slug: 'brambleton',
    countySlug: 'loudoun-county',
    countyName: 'Loudoun County',
    metaDescription: 'Home inspection in Brambleton, VA. Toll Brothers, Miller & Smith, and Pulte homes inspected by ASHI-certified HomeKey inspectors. New construction specialists.',
    description: [
      'Brambleton is one of Loudoun County\'s largest planned communities, with thousands of homes built from the early 2000s through the present. The mix of builder-grade townhomes, single-family homes, and newer construction means buyers encounter a wide range of conditions — from early-aughts deferred maintenance to recently completed new builds that still need a pre-settlement or warranty inspection.',
      'We inspect more homes in Brambleton than almost anywhere else in Northern Virginia. Our inspectors know the common builder patterns in this community, the drainage issues that affect lower-lying sections near the Brambleton Trail, and the townhome construction details that often get rushed.',
    ],
    builders: ['Toll Brothers', 'Miller & Smith', 'Pulte Homes', 'NVR / Ryan Homes', 'Stanley Martin'],
    whyHomeKey: WHY_HOMEKEY,
  },
  {
    name: 'Ashburn',
    slug: 'ashburn',
    countySlug: 'loudoun-county',
    countyName: 'Loudoun County',
    metaDescription: 'Home inspection in Ashburn, VA. One Loudoun, Ashburn Farm, Broadlands — ASHI-certified inspectors who know Loudoun\'s newest developments.',
    description: [
      'Ashburn spans decades of development — from the established neighborhoods of Ashburn Farm and Broadlands built in the 1990s and early 2000s, to the newer high-density developments around the Silver Line corridor near Moorefield Station and One Loudoun.',
      'Older Ashburn homes are entering the age range where deferred maintenance becomes expensive: HVAC systems, roofing, and plumbing upgrades are common findings. Newer construction around the Metro stations demands new construction expertise — pre-settlement and warranty inspections before the builder\'s obligation expires.',
    ],
    builders: ['Toll Brothers', 'K. Hovnanian', 'Pulte Homes', 'Van Metre', 'NVR / Ryan Homes'],
    whyHomeKey: WHY_HOMEKEY,
  },
  {
    name: 'Leesburg',
    slug: 'leesburg',
    countySlug: 'loudoun-county',
    countyName: 'Loudoun County',
    metaDescription: 'Home inspection in Leesburg, VA. Historic downtown properties, Lansdowne, and new construction — ASHI-certified HomeKey inspectors serving all of Leesburg.',
    description: [
      'Leesburg\'s housing stock ranges from historic properties near downtown — some dating to the 1800s — to the newer planned communities like Lansdowne on the Potomac, Tuscarora Creek, and the growing developments east of Route 15. That range demands an inspector who can navigate both a century-old foundation and a brand-new builder home.',
      'Historic and older Leesburg homes often present with knob-and-tube or aluminum wiring, aging oil or propane systems, and moisture issues in older crawl spaces. New construction communities need pre-drywall and pre-settlement inspections before the builder\'s warranty window closes.',
    ],
    builders: ['Toll Brothers', 'Miller & Smith', 'Van Metre', 'Brookfield Residential', 'Pulte Homes'],
    whyHomeKey: WHY_HOMEKEY,
  },
  {
    name: 'Sterling',
    slug: 'sterling',
    countySlug: 'loudoun-county',
    countyName: 'Loudoun County',
    metaDescription: 'Home inspection in Sterling, VA. Cascades, Countryside, and Sugarland Run — ASHI-certified HomeKey inspectors. HomeKey is headquartered in Sterling.',
    description: [
      'HomeKey Inspections is headquartered in Sterling — this is home territory. We\'ve inspected hundreds of homes in Cascades, Countryside, Sugarland Run, and the surrounding neighborhoods, and we know the housing stock here exceptionally well.',
      'Sterling homes range from the 1970s–80s townhomes and SFHs in Sugarland Run and Countryside to the larger newer homes in Cascades built in the 1990s and 2000s. Common findings include aging HVAC systems, polybutylene plumbing in 1980s–90s construction, and deferred roof maintenance.',
    ],
    builders: ['Toll Brothers', 'NVR / Ryan Homes', 'Centex', 'Pulte Homes'],
    whyHomeKey: WHY_HOMEKEY,
  },
  {
    name: 'Aldie',
    slug: 'aldie',
    countySlug: 'loudoun-county',
    countyName: 'Loudoun County',
    metaDescription: 'Home inspection in Aldie, VA. South Riding, Stone Ridge, and Westridge — ASHI-certified inspectors for new and established Loudoun communities.',
    description: [
      'Aldie and the communities surrounding it — South Riding, Stone Ridge, Westridge, and newer developments further west — represent a large portion of Loudoun\'s 2000s and 2010s housing boom. Many of these homes are reaching the age where major systems begin needing attention.',
      'Radon levels in western Loudoun tend to run higher than in the eastern part of the county — we recommend radon testing on every inspection in this area. New construction continues in communities like Regency at Creeks Edge, and pre-drywall and warranty inspections are in high demand.',
    ],
    builders: ['Toll Brothers', 'Pulte Homes', 'NVR / Ryan Homes', 'Brookfield Residential', 'K. Hovnanian'],
    whyHomeKey: WHY_HOMEKEY,
  },
  {
    name: 'Dulles South',
    slug: 'dulles-south',
    countySlug: 'loudoun-county',
    countyName: 'Loudoun County',
    metaDescription: 'Home inspection in Dulles South, VA — Arcola, Belmont Country Club, Moorfield Station. ASHI-certified HomeKey inspectors serving southern Loudoun County.',
    description: [
      'The Dulles South corridor — encompassing Arcola, Moorfield Station, Belmont Country Club, and the communities along Route 50 toward Chantilly — is among the most active new-construction markets in Northern Virginia. Large builder communities are completing phases here continuously.',
      'Our inspectors are well-versed in the construction practices of every major builder active in Dulles South. Pre-drywall inspections are strongly recommended before drywall closes up the wall cavities in these high-volume subdivisions.',
    ],
    builders: ['Toll Brothers', 'Beazer Homes', 'NVR / Ryan Homes', 'Pulte Homes', 'M/I Homes'],
    whyHomeKey: WHY_HOMEKEY,
  },
  // Fairfax
  {
    name: 'Oak Hill',
    slug: 'oak-hill',
    countySlug: 'fairfax-county',
    countyName: 'Fairfax County',
    metaDescription: 'Home inspection in Oak Hill, VA. Fox Mill, North Point, and surrounding communities — ASHI-certified HomeKey inspectors.',
    description: [
      'Oak Hill is a collection of established communities in northern Fairfax County — Fox Mill, North Point, Floris, and neighboring subdivisions built primarily in the 1970s through 1990s. Homes in this range are prime candidates for a thorough inspection: the systems are aging, deferred maintenance is common, and hidden defects are the norm, not the exception.',
      'Common findings in Oak Hill-area homes include aging HVAC systems, original windows approaching end-of-life, polybutylene supply piping in 1980s–90s construction, and evidence of moisture in crawl spaces. Our thermal imaging frequently catches moisture behind walls that isn\'t visible on a standard walkthrough.',
    ],
    builders: ['Various custom and production builders (1970s–1990s)'],
    whyHomeKey: WHY_HOMEKEY,
  },
  {
    name: 'Herndon',
    slug: 'herndon',
    countySlug: 'fairfax-county',
    countyName: 'Fairfax County',
    metaDescription: 'Home inspection in Herndon, VA. ASHI-certified inspectors for established neighborhoods and new development near the Herndon Metro station.',
    description: [
      'Herndon combines established 1970s–80s neighborhoods near downtown with newer townhome and condo developments along the Silver Line corridor near the Herndon Metro station. The older housing stock requires careful inspection of aging systems; the new construction near the Metro demands new-build expertise.',
      'Townhomes and condos in Herndon often have HOA-maintained common elements — understanding what the inspector\'s scope covers (the unit, not the common elements) is important. We\'ll clearly communicate what we inspected and what falls outside scope.',
    ],
    builders: ['NVR / Ryan Homes', 'Toll Brothers', 'Pulte Homes', 'EYA'],
    whyHomeKey: WHY_HOMEKEY,
  },
  {
    name: 'Centreville',
    slug: 'centreville',
    countySlug: 'fairfax-county',
    countyName: 'Fairfax County',
    metaDescription: 'Home inspection in Centreville, VA. Rocky Run, Bull Run, and surrounding communities — ASHI-certified HomeKey inspectors.',
    description: [
      'Centreville\'s housing stock spans late 1980s through early 2000s construction — predominantly single-family homes and townhomes in planned communities like Rocky Run, Bull Run Mountain Estates, and Union Mill. These homes are entering a critical maintenance window.',
      'In Centreville-area homes, we commonly find aging HVAC equipment, original roofing approaching or past its service life, and moisture intrusion at below-grade walls in split-foyer and walkout basement configurations. Radon testing is recommended — this area has documented elevated levels.',
    ],
    builders: ['Centex', 'NVR / Ryan Homes', 'Pulte Homes', 'Various 1990s production builders'],
    whyHomeKey: WHY_HOMEKEY,
  },
  {
    name: 'Chantilly',
    slug: 'chantilly',
    countySlug: 'fairfax-county',
    countyName: 'Fairfax County',
    metaDescription: 'Home inspection in Chantilly, VA. Westfield, South Riding adjacent, and Dulles corridor communities — ASHI-certified HomeKey inspectors.',
    description: [
      'Chantilly spans a wide range of housing eras — from 1980s neighborhoods near Route 50 to newer communities along the Dulles Toll Road corridor. The area\'s proximity to the data center belt and major employment centers makes it one of the most active real estate markets in Fairfax County.',
      'Older Chantilly homes often have original mechanical systems that are significantly past expected service life. Newer developments adjacent to the Dulles South corridor have active new-construction phases where pre-drywall inspections are valuable.',
    ],
    builders: ['Toll Brothers', 'NVR / Ryan Homes', 'Pulte Homes', 'Stanley Martin'],
    whyHomeKey: WHY_HOMEKEY,
  },
  // Prince William
  {
    name: 'Haymarket',
    slug: 'haymarket',
    countySlug: 'prince-william-county',
    countyName: 'Prince William County',
    metaDescription: 'Home inspection in Haymarket, VA. Dominion Valley, Carter\'s Mill, and Regency — ASHI-certified HomeKey inspectors serving western Prince William County.',
    description: [
      'Haymarket is western Prince William\'s fastest-growing area, anchored by communities like Dominion Valley Country Club, Carter\'s Mill, and the newer age-restricted community Regency at Carter\'s Mill. New construction is ongoing from multiple national builders.',
      'Pre-drywall and pre-settlement inspections are in high demand here — the volume of new construction means individual builder QC attention can be thin. Our inspectors catch framing, mechanical, and insulation defects before drywall closes them in permanently.',
    ],
    builders: ['Toll Brothers', 'Pulte Homes', 'NVR / Ryan Homes', 'K. Hovnanian', 'Beazer Homes'],
    whyHomeKey: WHY_HOMEKEY,
  },
  {
    name: 'Gainesville',
    slug: 'gainesville',
    countySlug: 'prince-william-county',
    countyName: 'Prince William County',
    metaDescription: 'Home inspection in Gainesville, VA. Heritage Hunt, Meadows at Morris Farm, and Broad Run — ASHI-certified HomeKey inspectors.',
    description: [
      'Gainesville sits at the intersection of established communities and active new-construction phases. Heritage Hunt, the established 55+ community, and the surrounding neighborhoods from the late 1990s through 2000s are well into their second inspection generation. New communities like Meadows at Morris Farm continue to develop.',
      'We inspect homes across the full Gainesville housing spectrum. For older Heritage Hunt homes, deferred maintenance on HVAC and roofing is common. For active new construction, our pre-drywall service catches defects before walls close.',
    ],
    builders: ['Pulte Homes', 'NVR / Ryan Homes', 'Toll Brothers', 'Van Metre'],
    whyHomeKey: WHY_HOMEKEY,
  },
  {
    name: 'Bristow',
    slug: 'bristow',
    countySlug: 'prince-william-county',
    countyName: 'Prince William County',
    metaDescription: 'Home inspection in Bristow, VA. Braemar, Victory Lakes, and Avendale — ASHI-certified HomeKey inspectors serving central Prince William County.',
    description: [
      'Bristow\'s communities — Braemar, Victory Lakes, Avendale, and surrounding neighborhoods — were built predominantly in the early 2000s. These homes are now 20+ years old and entering a significant maintenance cycle. HVAC, roofing, and plumbing upgrades are common topics in our inspection reports.',
      'The soil composition in parts of central Prince William County contributes to foundation movement and settlement. Our inspectors pay particular attention to foundation walls, floor levelness, and door/window operation as indicators of settlement activity.',
    ],
    builders: ['Centex', 'NVR / Ryan Homes', 'Pulte Homes', 'K. Hovnanian'],
    whyHomeKey: WHY_HOMEKEY,
  },
  {
    name: 'Manassas',
    slug: 'manassas',
    countySlug: 'prince-william-county',
    countyName: 'Prince William County',
    metaDescription: 'Home inspection in Manassas, VA. Historic district homes and newer development — ASHI-certified HomeKey inspectors.',
    description: [
      'Manassas offers some of the most diverse housing stock in Northern Virginia — from historic properties near the Manassas Museum dating to the 19th century, to established 1970s–90s neighborhoods, to newer development on the city\'s outskirts.',
      'Older Manassas homes require careful evaluation of aging electrical (some pre-dates modern panel standards), original plumbing, and foundation conditions. Our inspectors approach each property appropriate to its era and construction type.',
    ],
    builders: ['Various — wide range of eras from historic to contemporary'],
    whyHomeKey: WHY_HOMEKEY,
  },
  // Fauquier
  {
    name: 'Warrenton',
    slug: 'warrenton',
    countySlug: 'fauquier-county',
    countyName: 'Fauquier County',
    metaDescription: 'Home inspection in Warrenton, VA. Fauquier County seat — ASHI-certified HomeKey inspectors serving Warrenton and surrounding communities.',
    description: [
      'Warrenton, the Fauquier County seat, has a wide range of housing — from older historic properties near the downtown core to newer subdivisions on the town\'s outskirts. Rural properties on acreage are common in the broader Warrenton area, often with well water, septic systems, and older construction.',
      'Well water testing is especially important in the Warrenton area — we recommend it on every rural property purchase. Radon levels in Fauquier County trend elevated, and we recommend testing on every inspection. Septic systems are outside the scope of a standard inspection but we can refer to qualified inspectors.',
    ],
    builders: ['Various local and regional builders'],
    whyHomeKey: WHY_HOMEKEY,
  },
  {
    name: 'Bealeton',
    slug: 'bealeton',
    countySlug: 'fauquier-county',
    countyName: 'Fauquier County',
    metaDescription: 'Home inspection in Bealeton, VA. Rural Fauquier County — ASHI-certified HomeKey inspectors for homes and farms in southern Fauquier.',
    description: [
      'Bealeton and the communities of southern Fauquier County are predominantly rural — a mix of older farmhouses, newer subdivisions on large lots, and rural estate properties. Many are on well water and septic systems.',
      'Our inspectors are well-versed in rural property inspection. We flag well pump operation, pressure tank condition, and any signs that a well or septic evaluation should be added to the inspection scope.',
    ],
    builders: ['Various local builders and custom construction'],
    whyHomeKey: WHY_HOMEKEY,
  },
  {
    name: 'New Baltimore',
    slug: 'new-baltimore',
    countySlug: 'fauquier-county',
    countyName: 'Fauquier County',
    metaDescription: 'Home inspection in New Baltimore, VA. Gateway communities and rural Fauquier — ASHI-certified HomeKey inspectors.',
    description: [
      'New Baltimore sits along the Route 29 corridor between Gainesville and Warrenton — a growth area that has seen significant new-construction activity as buyers seek more space within commuting distance of the DC metro area.',
      'New construction here often moves quickly with fewer quality-control checkpoints than larger urban communities. Pre-drywall and pre-settlement inspections catch issues while they\'re still easy to fix. Our inspectors serve this area regularly.',
    ],
    builders: ['NVR / Ryan Homes', 'Toll Brothers', 'Various local builders'],
    whyHomeKey: WHY_HOMEKEY,
  },
]

export function getCommunitiesByCounty(countySlug: string): Community[] {
  return COMMUNITIES.filter((c) => c.countySlug === countySlug)
}

export function getCommunityBySlug(countySlug: string, communitySlug: string): Community | undefined {
  return COMMUNITIES.find((c) => c.countySlug === countySlug && c.slug === communitySlug)
}
