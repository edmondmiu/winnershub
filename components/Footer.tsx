'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-bet9ja-black border-t border-acid-green/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/bet9ja-logo-simple.svg"
                alt="Bet9ja Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
              <span className="ml-3 text-xl font-archivo-semiexpanded font-bold text-acid-green">
                WinnersHub
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4 max-w-md">
              Discover the biggest winners across all Bet9ja betting categories. 
              From explosive betBOOMs to strategic cash outs, see who's taking home the massive prizes!
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-acid-green">
                <div className="w-2 h-2 bg-acid-green rounded-full animate-pulse mr-2"></div>
                <span className="text-sm">Live Updates</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-acid-green font-archivo-semiexpanded font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-acid-green transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-acid-green transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/winners/betboom" className="text-gray-400 hover:text-acid-green transition-colors text-sm">
                  betBOOM Winners
                </Link>
              </li>
              <li>
                <Link href="/winners/sportsbook" className="text-gray-400 hover:text-acid-green transition-colors text-sm">
                  Sportsbook Winners
                </Link>
              </li>
              <li>
                <Link href="/winners/casino" className="text-gray-400 hover:text-acid-green transition-colors text-sm">
                  Casino Winners
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-acid-green font-archivo-semiexpanded font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/winners/cashout" className="text-gray-400 hover:text-acid-green transition-colors text-sm">
                  Cash Out Wins
                </Link>
              </li>
              <li>
                <Link href="/winners/ucl-jackpot" className="text-gray-400 hover:text-acid-green transition-colors text-sm">
                  UCL Jackpot
                </Link>
              </li>
              <li>
                <Link href="/winners/stadium" className="text-gray-400 hover:text-acid-green transition-colors text-sm">
                  Stadium Winners
                </Link>
              </li>
              <li>
                <Link href="/winners/simulate" className="text-gray-400 hover:text-acid-green transition-colors text-sm">
                  Simulate Winners
                </Link>
              </li>
              <li>
                <Link href="/winners/zoom" className="text-gray-400 hover:text-acid-green transition-colors text-sm">
                  Zoom Winners
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-acid-green/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2024 WinnersHub. All rights reserved. Powered by Bet9ja.
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-gray-500 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
                <span>Official Partner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 