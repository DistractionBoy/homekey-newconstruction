import type { Metadata } from 'next'
import { Raleway, Lato } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HomeKey Inspections — The Key to Knowing More®',
  description:
    'Independent home inspections in Northern Virginia, Maryland, DC & Texas. ASHI ACI certified. ISO/IEC 17025 lab. Thermal imaging standard.',
  verification: {
    google: 'yGWwqTaiAvSIlxNZQ2ue7mc-i-muKdSAqoAhx3OXUjo',
  },
  icons: {
    icon: '/logo-32x32.jpg',
    apple: '/Main-logo-Registered.jpg',
  },
}

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {children}
      </body>

      {/* Google Tag Manager */}
      {GTM_ID && (
        <Script id="gtm-init" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}</Script>
      )}

      {/* Google Analytics 4 (direct, used when GTM is not configured) */}
      {GA4_ID && !GTM_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_ID}');
          `}</Script>
        </>
      )}

      {/* Legacy UA — kept until GA4 is confirmed live */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-135443324-1"
        strategy="afterInteractive"
      />
      <Script id="ga-ua-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-135443324-1');
      `}</Script>

      {/* Microsoft Clarity */}
      {CLARITY_ID && (
        <Script id="clarity-init" strategy="afterInteractive">{`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_ID}");
        `}</Script>
      )}
    </html>
  )
}
