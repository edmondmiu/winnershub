import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'WinnersHub - Bet9ja Big Winners Showcase',
  description: 'Discover the biggest winners across all Bet9ja betting categories. From betBOOMs to Casino wins, see who\'s taking home the biggest prizes!',
  keywords: 'Bet9ja, winners, betting, casino, sportsbook, jackpot',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bet9ja-black">
        {children}
        <Footer />
      </body>
    </html>
  )
} 