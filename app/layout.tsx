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
        {children}
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-135443324-1"
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-135443324-1');
      `}</Script>
    </html>
  )
}
