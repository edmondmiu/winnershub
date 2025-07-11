'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Trophy, Info, Zap, Star, TrendingUp, Users, Clock } from 'lucide-react';
import { categories, timePeriods } from '@/data/categories';
import { getWinnersByCategory } from '@/data/winners';
import { WinnerCategory } from '@/types';
import Header from '@/components/layout/Header';
import TimePeriodToggle from '@/components/ui/TimePeriodToggle';
import WinnerCard from '@/components/winners/WinnerCard';
import { MiniChart, ProgressRing, LiveIndicator, StatsCard } from '@/components/ui/Graphics';
import { formatCurrency } from '@/lib/utils';

interface WinnerPageProps {
  params: {
    category: WinnerCategory;
  };
}

export default function WinnerPage({ params }: WinnerPageProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<'all-time' | 'last-7-days'>('all-time');
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  
  const category = categories.find(cat => cat.id === params.category);
  const winners = getWinnersByCategory(params.category, selectedPeriod);
  
  if (!category) {
    return (
      <div className="min-h-screen bg-bet9ja-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-acid-green mb-4">Category Not Found</h1>
          <p className="text-gray-400">The requested category does not exist.</p>
        </div>
      </div>
    );
  }

  const totalPayout = winners.reduce((sum, winner) => sum + winner.payout, 0);
  const avgStake = winners.reduce((sum, winner) => sum + winner.stake, 0) / winners.length;
  const winRate = winners.length > 0 ? Math.round((winners.filter(w => w.payout > w.stake).length / winners.length) * 100) : 0;

  return (
    <div className="min-h-screen bg-bet9ja-black" ref={containerRef}>
      <Header title={category.name} showBackButton={true} />
      
      {/* Hero Banner with Parallax */}
      <section className="relative overflow-hidden pt-32 md:pt-36 lg:pt-40">
        <motion.div 
          style={{ 
            y,
            background: `linear-gradient(135deg, ${category.color}20, ${category.color}40)`
          }}
          className="h-48 md:h-64 bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-bet9ja-black via-gray-900 to-bet9ja-black opacity-80"></div>
          
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-acid-green rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -50, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          
          {/* Lightning bolt decorations with parallax */}
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
            className="absolute top-5 left-5 md:top-10 md:left-10 lightning-bolt"
          >
            <Zap size={30} className="md:w-10 md:h-10" />
          </motion.div>
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]) }}
            className="absolute bottom-5 right-5 md:bottom-10 md:right-10 lightning-bolt"
          >
            <Zap size={25} className="md:w-8 md:h-8" />
          </motion.div>
          
          <motion.div
            style={{ opacity, scale }}
            className="relative z-10 text-center px-4"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-archivo-semiexpanded font-bold text-acid-green mb-2 md:mb-4"
            >
              <motion.span
                animate={{ 
                  textShadow: [
                    "0 0 20px #00FF41",
                    "0 0 40px #00FF41", 
                    "0 0 20px #00FF41"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {category.name}
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm md:text-xl text-gray-300 max-w-2xl mx-auto px-4"
            >
              {category.description}
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-6 md:py-8 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-4 md:grid-cols-6 gap-4 md:gap-6 h-full">
            {Array.from({ length: 24 }).map((_, i) => (
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
          {/* Time Period Toggle */}
          <div className="flex justify-center mb-6 md:mb-8">
            <TimePeriodToggle 
              selectedPeriod={selectedPeriod}
              onPeriodChange={setSelectedPeriod}
            />
          </div>

          {/* Enhanced Stats Cards with Graphics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            <StatsCard
              title="Total Payouts"
              value={formatCurrency(totalPayout)}
              icon={TrendingUp}
              trend="up"
              percentage={12}
            />
            <StatsCard
              title="Winners"
              value={winners.length.toString()}
              icon={Users}
              trend="up"
              percentage={8}
            />
            <StatsCard
              title="Avg Stake"
              value={formatCurrency(avgStake)}
              icon={Trophy}
              trend="up"
              percentage={5}
            />
            <StatsCard
              title="Win Rate"
              value={`${winRate}%`}
              icon={Star}
              trend="up"
              percentage={15}
            />
          </div>

          {/* Category Info with Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="card mb-6 md:mb-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-acid-green/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-3 md:gap-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Info size={20} className="md:w-6 md:h-6 text-acid-green mt-1 flex-shrink-0" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-archivo-semiexpanded font-bold text-acid-green mb-2">
                    Category Overview
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                    {category.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-xs md:text-sm">
                    <div>
                      <span className="text-gray-400">Max Stake:</span>
                      <span className="text-bet9ja-white ml-2">{formatCurrency(category.maxStake)}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Avg Payout:</span>
                      <span className="text-bet9ja-white ml-2">{formatCurrency(category.avgPayout)}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Recent Winners:</span>
                      <span className="text-bet9ja-white ml-2">{category.recentWinners}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="text-4xl">{category.icon}</div>
                  <LiveIndicator />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Performance Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="card mb-6 md:mb-8"
          >
            <h3 className="text-lg font-archivo-semiexpanded font-bold text-acid-green mb-4">
              Performance Trend
            </h3>
            <MiniChart />
            <div className="flex items-center justify-between mt-4 text-sm text-gray-400">
              <span>Last 7 days</span>
              <span>Winning trend</span>
            </div>
          </motion.div>

          {/* Leaderboard with Enhanced Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Trophy size={24} className="md:w-8 md:h-8 text-acid-green" />
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-archivo-semiexpanded font-bold text-acid-green">
                Top 10 Winners
              </h2>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              >
                <Star size={18} className="md:w-6 md:h-6 text-acid-green" />
              </motion.div>
            </motion.div>
            
            {winners.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                {winners.map((winner, index) => (
                  <motion.div
                    key={winner.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <WinnerCard 
                      winner={winner} 
                      rank={index + 1} 
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div 
                className="card text-center py-8 md:py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Trophy size={40} className="md:w-12 md:h-12 text-gray-600 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold text-gray-400 mb-2">No Winners Yet</h3>
                <p className="text-sm md:text-base text-gray-500">Check back later for the latest winners!</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
} 