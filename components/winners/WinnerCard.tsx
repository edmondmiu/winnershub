'use client';

import { motion } from 'framer-motion';
import { Trophy, Star, Zap, TrendingUp, Calendar, Hash } from 'lucide-react';
import { Winner } from '@/types';
import { formatCurrency, formatDate } from '@/lib/utils';
import { TrophyBadge } from '@/components/ui/Graphics';

interface WinnerCardProps {
  winner: Winner;
  rank: number;
}

export default function WinnerCard({ winner, rank }: WinnerCardProps) {
  const multiplier = winner.multiplier || (winner.payout / winner.stake);
  const isTopThree = rank <= 3;
  
  return (
    <motion.div
      className="card group cursor-pointer transform transition-all duration-300 relative overflow-hidden"
      whileHover={{ 
        scale: 1.02,
        rotateY: 2,
        boxShadow: "0 20px 40px rgba(0, 255, 65, 0.15)"
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-acid-green/0 to-acid-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Animated background */}
      <motion.div
        className="absolute inset-0"
        animate={{ 
          background: [
            "linear-gradient(45deg, rgba(0, 255, 65, 0.02), rgba(0, 255, 65, 0.05))",
            "linear-gradient(45deg, rgba(0, 255, 65, 0.05), rgba(0, 255, 65, 0.02))",
            "linear-gradient(45deg, rgba(0, 255, 65, 0.02), rgba(0, 255, 65, 0.05))"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      <div className="relative z-10">
        {/* Header with Rank and Category */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <TrophyBadge rank={rank} />
            <div className="flex items-center gap-1">
              <motion.div
                animate={isTopThree ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: rank * 0.2 }}
              >
                {isTopThree && <Star size={12} className="text-yellow-500" />}
              </motion.div>
              <span className="text-xs text-gray-400 font-medium">
                #{rank} {isTopThree ? 'TOP WINNER' : 'WINNER'}
              </span>
            </div>
          </div>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Zap size={16} className="text-acid-green" />
          </motion.div>
        </div>

        {/* User ID and Bet Info */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Hash size={14} className="text-gray-500" />
            <span className="text-sm font-mono text-bet9ja-white">
              {winner.userId}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} className="text-gray-500" />
            <span className="text-xs text-gray-400">
              {formatDate(winner.date)}
            </span>
          </div>
        </div>

        {/* Bet Details */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="bg-gray-800/50 rounded-lg p-2 border border-gray-700">
            <div className="text-xs text-gray-400 mb-1">Stake</div>
            <div className="text-sm font-bold text-bet9ja-white">
              {formatCurrency(winner.stake)}
            </div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-2 border border-gray-700">
            <div className="text-xs text-gray-400 mb-1">Payout</div>
            <div className="text-sm font-bold text-acid-green">
              {formatCurrency(winner.payout)}
            </div>
          </div>
        </div>

        {/* Multiplier and Profit */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <TrendingUp size={14} className="text-acid-green" />
            <span className="text-xs text-gray-400">Multiplier:</span>
            <span className="text-sm font-bold text-acid-green">
              {multiplier.toFixed(2)}x
            </span>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-400">Profit</div>
            <div className="text-sm font-bold text-acid-green">
              +{formatCurrency(winner.payout - winner.stake)}
            </div>
          </div>
        </div>

        {/* Bet ID */}
        <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-700 pt-2">
          <span>Bet ID: {winner.betId}</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-acid-green">→</span>
          </motion.div>
        </div>

        {/* Special indicators for top winners */}
        {isTopThree && (
          <motion.div
            className="absolute top-2 right-2"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Trophy size={16} className="text-yellow-500" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
} 