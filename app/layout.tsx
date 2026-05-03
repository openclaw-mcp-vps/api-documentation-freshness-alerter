import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Docs Freshness Alerter — Know When Your Docs Go Stale',
  description: 'Automatically compare API documentation against live endpoints. Get alerted when schemas drift, examples break, or endpoints go missing.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="871d6feb-2513-435d-b1a4-e078b831686e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
