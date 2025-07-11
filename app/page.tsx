'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Trophy, TrendingUp, Star, Crown, Award, Clock, Users, DollarSign } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/data/categories';
import { useEffect, useRef, useState } from 'react';

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Animated counters with more realistic values
  const [counts, setCounts] = useState({ total: 0, winners: 0, avgPayout: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Start animation immediately when component mounts
    setTimeout(() => {
      setHasAnimated(true);
      animateCounters();
    }, 500);
  }, []);

  const animateCounters = () => {
    const duration = 3000;
    const steps = 100;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts({
        total: Math.floor(250000000 * progress), // More realistic total
        winners: Math.floor(5000 * progress), // More realistic winner count
        avgPayout: Math.floor(75000 * progress) // Realistic average payout
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);
  };

  return (
    <div className="min-h-screen bg-bet9ja-black" ref={containerRef}>
      {/* Hero Section with Integrated Stats */}
      <section className="hero-gradient relative overflow-hidden min-h-screen flex items-center justify-center pt-16 md:pt-20">
        {/* Animated Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-bet9ja-black via-gray-900 to-bet9ja-black opacity-90"></div>
        
        {/* Parallax Background Elements */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0"
        >
          {/* Static Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-8 md:grid-cols-12 gap-4 h-full">
              {Array.from({ length: 64 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-acid-green rounded-full opacity-20"
                />
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Lightning bolt decorations with parallax */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
          className="absolute top-10 left-5 md:top-20 md:left-10 lightning-bolt"
        >
          <Zap size={40} className="md:w-[60px] md:h-[60px]" />
        </motion.div>
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]) }}
          className="absolute top-20 right-5 md:top-40 md:right-20 lightning-bolt"
        >
          <Zap size={30} className="md:w-[40px] md:h-[40px]" />
        </motion.div>
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "75%"]) }}
          className="absolute bottom-20 left-1/4 lightning-bolt"
        >
          <Zap size={35} className="md:w-[50px] md:h-[50px]" />
        </motion.div>
        
        {/* Floating particles */}
        <motion.div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 md:w-2 md:h-2 bg-acid-green rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 0.3, 0],
                scale: [0, 0.8, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Main Content */}
        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto"
        >
          {/* Bet9ja Logo */}
          <motion.div
            className="mb-6 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Image
              src="/bet9ja-logo.svg"
              alt="Bet9ja Logo"
              width={200}
              height={60}
              className="h-12 md:h-16 w-auto mx-auto"
            />
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-archivo-semiexpanded font-bold text-acid-green mb-4 md:mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.span
              animate={{ 
                textShadow: [
                  "0 0 20px #00FF41",
                  "0 0 40px #00FF41", 
                  "0 0 60px #00FF41",
                  "0 0 40px #00FF41",
                  "0 0 20px #00FF41"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              WINNERS
            </motion.span>
            <span className="text-bet9ja-white">HUB</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover the biggest winners across all Bet9ja betting categories. 
            From explosive betBOOMs to strategic cash outs, see who's taking home the massive prizes!
          </motion.p>

          {/* Animated Stats Section */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Total Payouts */}
            <motion.div 
              className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-acid-green/20 p-4 md:p-6"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 255, 65, 0.3)"
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-acid-green/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <motion.div 
                  className="flex items-center justify-center mb-2"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <DollarSign size={24} className="md:w-8 md:h-8 text-acid-green" />
                </motion.div>
                <motion.div 
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-acid-green mb-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: hasAnimated ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  ₦{counts.total.toLocaleString()}+
                </motion.div>
                <div className="text-sm md:text-base text-gray-400">Total Payouts</div>
              </div>
            </motion.div>
            
            {/* Winners Count */}
            <motion.div 
              className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-acid-green/20 p-4 md:p-6"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 255, 65, 0.3)"
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-acid-green/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <motion.div 
                  className="flex items-center justify-center mb-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <Users size={24} className="md:w-8 md:h-8 text-acid-green" />
                </motion.div>
                <motion.div 
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-acid-green mb-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: hasAnimated ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  {counts.winners.toLocaleString()}+
                </motion.div>
                <div className="text-sm md:text-base text-gray-400">Winners</div>
              </div>
            </motion.div>
            
            {/* Average Payout */}
            <motion.div 
              className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-acid-green/20 p-4 md:p-6"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 255, 65, 0.3)"
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-acid-green/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <motion.div 
                  className="flex items-center justify-center mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <TrendingUp size={24} className="md:w-8 md:h-8 text-acid-green" />
                </motion.div>
                <motion.div 
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-acid-green mb-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: hasAnimated ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  ₦{counts.avgPayout.toLocaleString()}
                </motion.div>
                <div className="text-sm md:text-base text-gray-400">Avg Payout</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Live Status section completely removed */}

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-acid-green rounded-full flex justify-center bg-bet9ja-black/80 backdrop-blur-sm">
              <motion.div
                className="w-1 h-3 bg-acid-green rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-gray-900 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-8 h-full">
            {Array.from({ length: 32 }).map((_, i) => (
              <motion.div 
                key={i} 
                className="bg-acid-green rounded-lg"
                animate={{ 
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-archivo-semiexpanded font-bold text-center text-acid-green mb-8 md:mb-12"
          >
            WINNER CATEGORIES
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(0, 255, 65, 0.2)"
                }}
              >
                <Link href={`/winners/${category.id}`}>
                  <div className="card group cursor-pointer transform transition-all duration-300 relative overflow-hidden">
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-acid-green/0 to-acid-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div 
                      className="h-24 md:h-32 rounded-lg mb-4 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center relative overflow-hidden"
                      style={{ background: `linear-gradient(135deg, ${category.color}20, ${category.color}40)` }}
                    >
                      {/* Animated background */}
                      <motion.div
                        className="absolute inset-0"
                        animate={{ 
                          background: [
                            `linear-gradient(45deg, ${category.color}10, ${category.color}20)`,
                            `linear-gradient(45deg, ${category.color}20, ${category.color}10)`,
                            `linear-gradient(45deg, ${category.color}10, ${category.color}20)`
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      
                      <div className="text-center relative z-10">
                        <div className="text-3xl md:text-4xl mb-2">
                          {category.icon}
                        </div>
                        <div className="text-lg md:text-2xl font-bold text-acid-green mb-1 md:mb-2">
                          {category.name.split(' ')[0]}
                        </div>
                        <div className="text-xs md:text-sm text-gray-400">
                          {category.name.split(' ').slice(1).join(' ')}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-base md:text-lg font-archivo-semiexpanded font-bold text-acid-green mb-2 group-hover:text-white transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400 mb-3 line-clamp-2">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                      <span className="hidden sm:inline">Max Stake: {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(category.maxStake)}</span>
                      <span className="sm:hidden">₦1M Max</span>
                      <span className="text-acid-green">{category.recentWinners} recent winners</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Avg: {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(category.avgPayout)}</span>
                      <motion.span 
                        className="text-acid-green"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 