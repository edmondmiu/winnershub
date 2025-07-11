'use client';

import { motion } from 'framer-motion';
import { Zap, Home, Trophy, Info, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { LiveIndicator } from '@/components/ui/Graphics';

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
}

export default function Header({ title, showBackButton = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-bet9ja-black/95 backdrop-blur-md border-b border-acid-green/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2 md:gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/" className="flex items-center gap-2 md:gap-3">
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Zap size={24} className="md:w-8 md:h-8 text-acid-green" />
              </motion.div>
              <div className="hidden sm:block">
                <div className="text-lg md:text-xl font-archivo-semiexpanded font-bold text-acid-green">
                  WinnersHub
                </div>
                <div className="text-xs text-gray-400">Bet9ja Champions</div>
              </div>
            </Link>
          </motion.div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 text-gray-300 hover:text-acid-green transition-colors">
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link href="/winners/betboom" className="flex items-center gap-2 text-gray-300 hover:text-acid-green transition-colors">
              <Trophy size={18} />
              <span>Winners</span>
            </Link>
            <Link href="/about" className="flex items-center gap-2 text-gray-300 hover:text-acid-green transition-colors">
              <Info size={18} />
              <span>About</span>
            </Link>
            <LiveIndicator />
          </nav>

          {/* Page Title - Mobile */}
          {title && (
            <div className="md:hidden text-center flex-1">
              <h1 className="text-lg font-archivo-semiexpanded font-bold text-acid-green truncate">
                {title}
              </h1>
            </div>
          )}

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-gray-300 hover:text-acid-green transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4 border-t border-gray-700">
            <Link 
              href="/" 
              className="flex items-center gap-3 text-gray-300 hover:text-acid-green transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link 
              href="/winners/betboom" 
              className="flex items-center gap-3 text-gray-300 hover:text-acid-green transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Trophy size={20} />
              <span>Winners</span>
            </Link>
            <Link 
              href="/about" 
              className="flex items-center gap-3 text-gray-300 hover:text-acid-green transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Info size={20} />
              <span>About</span>
            </Link>
            <div className="flex items-center gap-3 py-2">
              <LiveIndicator />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Page Title - Desktop */}
      {title && (
        <motion.div 
          className="hidden md:block bg-gray-900/50 border-b border-gray-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-3">
              {showBackButton && (
                <Link 
                  href="/"
                  className="text-gray-400 hover:text-acid-green transition-colors"
                >
                  ← Back
                </Link>
              )}
              <h1 className="text-xl font-archivo-semiexpanded font-bold text-acid-green">
                {title}
              </h1>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
} 