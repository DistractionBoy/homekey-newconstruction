import type { County } from './types'
import { getCommunitiesByCounty } from './communities'

const LOUDOUN_COMMUNITIES = getCommunitiesByCounty('loudoun-county')
const FAIRFAX_COMMUNITIES = getCommunitiesByCounty('fairfax-county')
const PW_COMMUNITIES = getCommunitiesByCounty('prince-william-county')
const FAUQUIER_COMMUNITIES = getCommunitiesByCounty('fauquier-county')

export const COUNTIES: County[] = [
  {
    name: 'Loudoun County',
    slug: 'loudoun-county',
    state: 'VA',
    metaDescription: 'Home inspection in Loudoun County, VA. ASHI-certified HomeKey inspectors serving Ashburn, Leesburg, Sterling, Brambleton, and all of Loudoun County.',
    description: [
      'Loudoun County is Northern Virginia\'s fastest-growing county and one of the most active home inspection markets on the East Coast. The housing stock spans everything from 1970s starter homes in Sterling to massive Toll Brothers estates in Brambleton and the ongoing new-construction wave along the Silver Line corridor.',
      'HomeKey is headquartered in Sterling — Loudoun County is home territory. We inspect more homes here than anywhere else, and our inspectors know the builders, the housing stock, and the specific issues that come up in each community.',
      'Radon levels in western Loudoun (Aldie, Ashburn, Dulles South) tend to run higher than in the eastern part of the county near the Potomac. We recommend radon testing on every inspection throughout the county.',
    ],
    housingStock: 'Mix of 1970s–present. Heavy new-construction activity especially along Silver Line and Route 50 corridor.',
    commonFindings: [
      'Polybutylene supply piping in 1980s–90s construction (Cascades, Countryside, Sugarland Run)',
      'Deferred HVAC maintenance on 15–20 year old systems in early 2000s communities',
      'Elevated radon levels in western Loudoun — especially Aldie, Dulles South, and Brambleton',
      'Moisture intrusion at finished basement walls in communities with clay-heavy soils',
      'Builder defects in active new-construction communities where QC oversight is thin',
    ],
    inspectorCoverage: ['Ian McNaught', 'Sebastian Aste', 'Jay Carrillo'],
    communities: LOUDOUN_COMMUNITIES,
    testimonials: [
      {
        reviewer: 'Michael T., Brambleton',
        text: 'Ian was incredibly thorough — spent nearly 4 hours on our Toll Brothers home and caught issues our agent didn\'t know about. The report helped us negotiate a $6,000 credit. Worth every penny.',
        platform: 'Google',
      },
      {
        reviewer: 'Sarah K., Ashburn',
        text: 'First-time buyer here. Ian walked me through everything he found in real time, and the report was in my inbox the same evening. I felt confident going into closing.',
        platform: 'Google',
      },
      {
        reviewer: 'Priya M., Dulles South',
        text: 'The pre-drywall report documented everything behind our walls. When we had an issue later during the warranty period, we had it in writing.',
        platform: 'Google',
      },
    ],
  },
  {
    name: 'Fairfax County',
    slug: 'fairfax-county',
    state: 'VA',
    metaDescription: 'Home inspection in Fairfax County, VA. ASHI-certified HomeKey inspectors serving Herndon, Centreville, Chantilly, Reston, and all of Fairfax County.',
    description: [
      'Fairfax County is Northern Virginia\'s most populous county — and one of its most diverse real estate markets. From the dense urban development near the Orange Line and Silver Line corridors to the established suburban neighborhoods of the 1960s–80s to active new-construction phases in Chantilly and along the Dulles corridor, no two inspections are alike.',
      'Older Fairfax County homes are entering critical maintenance cycles. Homes built in the 1970s–80s often have aging electrical panels, original HVAC equipment well past its service life, and mechanical systems that a seller\'s disclosure won\'t fully capture.',
      'Our Fairfax County inspectors — Ian McNaught and Mike Lawson — bring construction backgrounds and years of local experience to every inspection.',
    ],
    housingStock: 'Wide range: 1950s–present. High concentration of 1970s–90s stock in inner suburbs; active new construction along Dulles corridor.',
    commonFindings: [
      'Aging electrical panels with Federal Pacific or Zinsco equipment in 1960s–80s construction',
      'Original cast-iron or galvanized plumbing in pre-1970s homes',
      'Roofing systems at or past service life on 1990s–2000s construction',
      'Thermal imaging frequently reveals moisture intrusion at below-grade walls',
      'HVAC systems running on borrowed time — 15+ year old equipment is common',
    ],
    inspectorCoverage: ['Ian McNaught', 'Mike Lawson'],
    communities: FAIRFAX_COMMUNITIES,
    testimonials: [
      {
        reviewer: 'Marcus L., Centreville',
        text: 'I specifically chose HomeKey because thermal imaging is included. My previous inspector didn\'t use one and missed a moisture issue that cost me $3,000. Won\'t make that mistake again.',
        platform: 'Google',
      },
      {
        reviewer: 'Jennifer H., Herndon',
        text: 'Mike was incredibly thorough and professional. His military background really shows — systematic, detailed, and left no stone unturned.',
        platform: 'Google',
      },
    ],
  },
  {
    name: 'Prince William County',
    slug: 'prince-william-county',
    state: 'VA',
    metaDescription: 'Home inspection in Prince William County, VA. ASHI-certified HomeKey inspectors serving Haymarket, Gainesville, Bristow, Manassas, and all of Prince William County.',
    description: [
      'Prince William County spans a wide geographic and demographic range — from the dense new-construction activity in Haymarket and Gainesville to the established neighborhoods of Woodbridge and Dale City to the historic heart of Manassas. It\'s one of the most active new-construction markets in Northern Virginia.',
      'Western Prince William — Haymarket, Gainesville, and the Route 29 corridor — has seen some of the highest concentration of new-construction activity in the region over the past decade. Pre-drywall inspections are in particularly high demand here.',
      'Jay Carrillo, a retired Marine and bilingual (EN/ES) inspector, primarily covers Prince William and Fauquier counties and brings deep familiarity with the housing stock in this area.',
    ],
    housingStock: 'Heavy new construction in western PW (Haymarket, Gainesville). Established 1980s–2000s stock in Woodbridge, Dale City, Bristow.',
    commonFindings: [
      'Builder defects in active new-construction communities (pre-drywall and warranty inspections in demand)',
      'Foundation movement and settlement in areas with expansive clay soils',
      'Moisture intrusion at below-grade walls in Woodbridge and Dale City split-foyers',
      'Aging HVAC and roofing on early 2000s stock in Bristow, Gainesville, and Gainesville',
      'Elevated radon levels — especially in basement and below-grade finished spaces',
    ],
    inspectorCoverage: ['Jay Carrillo', 'Ian McNaught'],
    communities: PW_COMMUNITIES,
    testimonials: [
      {
        reviewer: 'Tom B., Haymarket',
        text: 'Jay was fantastic — thorough, on time, and incredibly detailed in his report. As a fellow veteran, I appreciated his work ethic and professionalism.',
        platform: 'Google',
      },
      {
        reviewer: 'Carlos M., Gainesville',
        text: 'Jay hizo un trabajo excelente. Muy profesional y detallado. Como ex-militar, tiene una atención al detalle que realmente se nota.',
        platform: 'Google',
      },
    ],
  },
  {
    name: 'Fauquier County',
    slug: 'fauquier-county',
    state: 'VA',
    metaDescription: 'Home inspection in Fauquier County, VA. ASHI-certified HomeKey inspectors serving Warrenton, Bealeton, New Baltimore, and rural Fauquier County properties.',
    description: [
      'Fauquier County is where Northern Virginia gives way to rural Virginia — horse country, historic estates, rural properties on acreage, and small-town communities like Warrenton and Remington. The housing stock is among the most varied in our service area.',
      'Rural properties in Fauquier often have well water and septic systems, older construction with aging or unusual mechanical systems, and conditions that a standard suburban inspector might not encounter regularly. Well water testing is essential on any rural property purchase here.',
      'Radon levels in Fauquier County consistently test among the higher concentrations in Northern Virginia. We recommend radon testing on every inspection in the county.',
    ],
    housingStock: 'Mix of historic and rural properties, 1970s–90s suburban development in Warrenton, and new construction along Route 29 corridor.',
    commonFindings: [
      'Well pump and pressure tank issues — well water testing strongly recommended',
      'Elevated radon levels throughout the county — among the highest in NoVA',
      'Aging septic system indicators (not inspected, but we flag signs for specialist evaluation)',
      'Older oil heat systems in rural properties — burner condition, tank integrity, venting',
      'Foundation movement in properties on rural lots with variable soil conditions',
    ],
    inspectorCoverage: ['Jay Carrillo', 'Ian McNaught'],
    communities: FAUQUIER_COMMUNITIES,
    testimonials: [
      {
        reviewer: 'Jennifer R., Warrenton',
        text: 'We bought a home on well water and HomeKey\'s water test found elevated coliform bacteria. The seller had the system shocked before closing and we retested to confirm.',
        platform: 'Google',
      },
      {
        reviewer: 'Steve M., Warrenton',
        text: 'Thorough and professional. Gave us confidence about a rural property that we would have been nervous buying without the inspection.',
        platform: 'Google',
      },
    ],
  },
  {
    name: 'Arlington County',
    slug: 'arlington-county',
    state: 'VA',
    metaDescription: 'Home inspection in Arlington County, VA. ASHI-certified HomeKey inspectors serving Clarendon, Ballston, Rosslyn, and all of Arlington.',
    description: [
      'Arlington County is Northern Virginia\'s most urban county — high-rise condos, townhomes, and single-family homes on small lots, often built on steep terrain above the Potomac. The housing stock skews older and denser than the rest of NoVA, with a significant concentration of pre-1970 construction.',
      'Condos and townhomes in Arlington require a different inspection mindset than suburban single-family homes — the inspector covers only the unit, not common elements, and the scope needs to be communicated clearly. Older Arlington SFHs often have aging electrical (pre-Federal Pacific in some cases), original plumbing, and foundation conditions shaped by the region\'s topology.',
      'Mike Lawson primarily serves Arlington and the inner Fairfax County corridor.',
    ],
    housingStock: 'Urban density. Wide range: 1930s–present. High concentration of condos and townhomes. Many pre-1970 SFHs.',
    commonFindings: [
      'Aging or non-standard electrical in pre-1970 construction',
      'Original galvanized or lead supply piping in older homes',
      'Moisture and drainage issues on steep lots above the Potomac',
      'Condo-specific scope clarity (unit vs. common elements)',
      'HVAC equipment in urban townhomes — often less accessible and deferred',
    ],
    inspectorCoverage: ['Mike Lawson', 'Ian McNaught'],
    communities: [],
    testimonials: [
      {
        reviewer: 'Diana P., Arlington',
        text: 'The thermal camera found moisture behind the master bedroom wall — no visible staining, just a cold spot. Turned out to be a slow roof flashing leak.',
        platform: 'Google',
      },
    ],
  },
  {
    name: 'Stafford County',
    slug: 'stafford-county',
    state: 'VA',
    metaDescription: 'Home inspection in Stafford County, VA. ASHI-certified HomeKey inspectors serving Aquia Harbour, Embrey Mill, Stafford Lakes, and all of Stafford County.',
    description: [
      'Stafford County is one of the fastest-growing counties in Virginia, with major new-construction activity in communities like Embrey Mill, Winding Creek, and Stafford Lakes Village. The county also has a significant stock of 1990s–2000s homes in established communities like Aquia Harbour.',
      'Pre-drywall and pre-settlement inspections are in high demand in active Stafford communities. For established neighborhoods, HVAC, roofing, and moisture are the most common inspection topics.',
      'Jay Carrillo covers Stafford County regularly and knows the major builders and communities in the area well.',
    ],
    housingStock: 'Heavy new-construction activity. Established 1990s–2000s stock in Aquia Harbour and surrounding communities.',
    commonFindings: [
      'Builder defects in active new-construction communities',
      'Moisture and drainage issues in lower-lying areas near the Rappahannock',
      'Aging HVAC on 15–20 year old Aquia Harbour and Embrey Mill stock',
      'Radon levels — Stafford has documented elevated concentrations',
      'Deferred maintenance on original roofing in 1990s construction',
    ],
    inspectorCoverage: ['Jay Carrillo', 'Ian McNaught'],
    communities: [],
    testimonials: [
      {
        reviewer: 'Nathan W., Stafford',
        text: 'Sewer scope revealed root intrusion and a belly in the line. The seller credited us $4,500 at closing. The scope cost $425. That\'s a 10x return.',
        platform: 'Google',
      },
    ],
  },
  {
    name: 'Montgomery County',
    slug: 'montgomery-county-md',
    state: 'MD',
    metaDescription: 'Home inspection in Montgomery County, MD. ASHI-certified HomeKey inspectors serving Rockville, Gaithersburg, Germantown, Potomac, and all of Montgomery County.',
    description: [
      'Montgomery County, Maryland is one of the most affluent and densely populated counties in the country — a diverse real estate market spanning from the urban edge cities of Rockville and Bethesda to established suburbs like Potomac and Chevy Chase to the more rural communities near the Pennsylvania border.',
      'HomeKey is Maryland-licensed and regularly serves buyers in Montgomery County, particularly in communities along the I-270 and MD-355 corridors. Mike Lawson covers Montgomery County primarily.',
      'Older Montgomery County homes — particularly in the inner suburbs of Bethesda, Chevy Chase, and Silver Spring — often have pre-modern electrical and plumbing that requires careful evaluation.',
    ],
    housingStock: 'Dense and varied: urban condos and townhomes in inner suburbs; 1950s–80s SFHs in established neighborhoods; newer construction in Germantown and Clarksburg.',
    commonFindings: [
      'Aging electrical in 1950s–70s construction — Federal Pacific and Zinsco panels in older homes',
      'Older knob-and-tube or aluminum branch circuit wiring in Bethesda/Chevy Chase stock',
      'Moisture in older basements — especially in below-grade finished spaces',
      'Lead paint and lead plumbing in pre-1978 construction (disclosure required in MD)',
      'Aging oil heat systems — common in Montgomery County\'s older stock',
    ],
    inspectorCoverage: ['Mike Lawson', 'Ian McNaught'],
    communities: [],
    testimonials: [
      {
        reviewer: 'Kevin P., Gaithersburg',
        text: 'Mike found issues that would have cost us thousands after closing. His construction background gives him a perspective that most inspectors don\'t have.',
        platform: 'Google',
      },
    ],
  },
  {
    name: 'Washington D.C.',
    slug: 'washington-dc',
    state: 'DC',
    metaDescription: 'Home inspection in Washington D.C. ASHI-certified HomeKey inspectors serving Capitol Hill, Georgetown, Shaw, Cleveland Park, and all DC neighborhoods.',
    description: [
      'Washington D.C. is one of the most complex inspection markets in the country — a dense urban environment with a high concentration of pre-1940 rowhouses, historic districts with specific preservation requirements, and a condo market that demands clear scope communication.',
      'Historic DC rowhouses require specialized knowledge: aging electrical (often knob-and-tube in the oldest stock), lead paint and lead plumbing, original steam or hot water radiator systems, and foundation conditions specific to DC\'s geology and dense urban construction.',
      'Mike Lawson and Ian McNaught serve the DC market. Condo buyers should note that our inspection covers only the unit interior — common elements (roof, building envelope, mechanicals) are outside scope and require a condo document review.',
    ],
    housingStock: 'Predominantly rowhouses and condos. High concentration of pre-1940 construction. Limited single-family inventory.',
    commonFindings: [
      'Knob-and-tube wiring in pre-1950 rowhouses',
      'Lead supply piping — widespread in pre-1986 DC construction',
      'Steam or hot water radiator systems — require specialized evaluation',
      'Foundation conditions shaped by DC\'s clay soils and dense construction',
      'Moisture and basement waterproofing issues common in below-grade spaces',
    ],
    inspectorCoverage: ['Mike Lawson', 'Ian McNaught'],
    communities: [],
    testimonials: [
      {
        reviewer: 'Lena P., Capitol Hill',
        text: 'The re-inspection caught that two of the three agreed items were not actually completed. We had the documentation we needed to go back to the seller before closing.',
        platform: 'Google',
      },
    ],
  },
]

export function getCountyBySlug(slug: string): County | undefined {
  return COUNTIES.find((c) => c.slug === slug)
}
