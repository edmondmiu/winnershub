'use client';

import { motion } from 'framer-motion';
import { Zap, Trophy, Users, TrendingUp, Shield, Award } from 'lucide-react';
import Header from '@/components/layout/Header';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bet9ja-black">
      <Header title="About WinnersHub" showBackButton={true} />
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-36 lg:pt-40 pb-12 md:pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-archivo-semiexpanded font-bold text-acid-green mb-6"
              animate={{ 
                textShadow: [
                  "0 0 20px #00FF41",
                  "0 0 40px #00FF41", 
                  "0 0 20px #00FF41"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              About WinnersHub
            </motion.h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              The ultimate destination for Bet9ja winners. We showcase the biggest wins, 
              celebrate champions, and inspire the next generation of winners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-archivo-semiexpanded font-bold text-center text-acid-green mb-12"
          >
            What We Offer
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Trophy,
                title: "Winner Showcase",
                description: "Discover the biggest winners across all Bet9ja categories with detailed stats and insights."
              },
              {
                icon: TrendingUp,
                title: "Real-time Updates",
                description: "Live updates every 6 hours to keep you informed about the latest winners and payouts."
              },
              {
                icon: Users,
                title: "Community Focus",
                description: "Celebrating the Bet9ja community and inspiring others to achieve their winning goals."
              },
              {
                icon: Shield,
                title: "Verified Data",
                description: "All winner data is verified and authenticated to ensure accuracy and transparency."
              },
              {
                icon: Award,
                title: "Multiple Categories",
                description: "Covering all betting categories including betBOOMs, Sportsbook, Casino, and more."
              },
              {
                icon: Zap,
                title: "Premium Experience",
                description: "Stunning visuals and smooth animations for an engaging user experience."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center p-6"
              >
                <motion.div
                  className="w-16 h-16 bg-acid-green/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  <feature.icon size={32} className="text-acid-green" />
                </motion.div>
                <h3 className="text-xl font-archivo-semiexpanded font-bold text-acid-green mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-archivo-semiexpanded font-bold text-acid-green mb-4">
              WinnersHub by the Numbers
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our platform showcases the incredible success stories from the Bet9ja community.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: "₦250M+", label: "Total Payouts" },
              { number: "5,000+", label: "Winners" },
              { number: "8", label: "Categories" },
              { number: "6h", label: "Update Cycle" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-acid-green mb-2"
                  animate={{ 
                    textShadow: [
                      "0 0 10px #00FF41",
                      "0 0 20px #00FF41",
                      "0 0 10px #00FF41"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm md:text-base text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 md:py-12 bg-gray-900/50 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap size={24} className="text-acid-green" />
              <span className="text-xl font-archivo-semiexpanded font-bold text-acid-green">
                WinnersHub
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Celebrating Bet9ja winners and inspiring the community
            </p>
            <p className="text-sm text-gray-500">
              © 2024 WinnersHub. All rights reserved.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 