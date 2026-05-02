declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

function push(event: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...params })
}

export const analytics = {
  phoneClick(location: string) {
    push('phone_click', { location })
  },
  whatsAppClick(location: string) {
    push('whatsapp_click', { location })
  },
  languageToggle(from: 'en' | 'es', to: 'en' | 'es') {
    push('language_toggle', { from, to })
  },
  sampleReportView(reportLabel: string) {
    push('sample_report_view', { report_label: reportLabel })
  },
  pdfDownload(fileName: string) {
    push('pdf_download', { file_name: fileName })
  },
  bookingStarted(propertyType: string) {
    push('booking_started', { property_type: propertyType })
  },
  bookingSubmitted(propertyType: string) {
    push('booking_submitted', { property_type: propertyType })
  },
}
