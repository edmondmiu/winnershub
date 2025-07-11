'use client';

import { motion } from 'framer-motion';

interface ChartBarProps {
  height: number;
  delay: number;
  color: string;
}

const ChartBar = ({ height, delay, color }: ChartBarProps) => (
  <motion.div
    className="w-full bg-gray-700 rounded-t"
    style={{ height: `${height}%` }}
    initial={{ height: 0 }}
    animate={{ height: `${height}%` }}
    transition={{ duration: 1, delay }}
  >
    <div 
      className="w-full h-full rounded-t"
      style={{ background: `linear-gradient(to top, ${color}, ${color}80)` }}
    />
  </motion.div>
);

export const MiniChart = () => (
  <div className="flex items-end justify-between h-16 gap-1">
    <ChartBar height={40} delay={0.1} color="#00FF41" />
    <ChartBar height={65} delay={0.2} color="#00FF41" />
    <ChartBar height={85} delay={0.3} color="#00FF41" />
    <ChartBar height={60} delay={0.4} color="#00FF41" />
    <ChartBar height={90} delay={0.5} color="#00FF41" />
    <ChartBar height={75} delay={0.6} color="#00FF41" />
    <ChartBar height={95} delay={0.7} color="#00FF41" />
  </div>
);

export const ProgressRing = ({ progress, size = 60 }: { progress: number; size?: number }) => (
  <div className="relative" style={{ width: size, height: size }}>
    <svg className="w-full h-full transform -rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={(size - 4) / 2}
        stroke="#374151"
        strokeWidth="2"
        fill="none"
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={(size - 4) / 2}
        stroke="#00FF41"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        initial={{ strokeDasharray: "0 100" }}
        animate={{ strokeDasharray: `${progress} 100` }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-acid-green">
      {progress}%
    </div>
  </div>
);

export const LiveIndicator = () => (
  <div className="flex items-center gap-2">
    <motion.div
      className="w-2 h-2 bg-red-500 rounded-full"
      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <span className="text-xs text-red-500 font-semibold">LIVE</span>
  </div>
);

export const TrophyBadge = ({ rank }: { rank: number }) => {
  const colors = {
    1: 'text-yellow-500',
    2: 'text-gray-400', 
    3: 'text-amber-600'
  };
  
  return (
    <motion.div
      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${colors[rank as keyof typeof colors] || 'text-gray-600'}`}
      whileHover={{ scale: 1.2 }}
    >
      {rank}
    </motion.div>
  );
};

export const StatsCard = ({ 
  title, 
  value, 
  icon: Icon, 
  trend = 'up',
  percentage = 0 
}: { 
  title: string; 
  value: string; 
  icon: any; 
  trend?: 'up' | 'down';
  percentage?: number;
}) => (
  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
    <div className="flex items-center justify-between mb-2">
      <Icon size={20} className="text-acid-green" />
      <div className="flex items-center gap-1">
        <span className={`text-xs ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
          {trend === 'up' ? '↗' : '↘'}
        </span>
        <span className={`text-xs ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
          {percentage}%
        </span>
      </div>
    </div>
    <div className="text-2xl font-bold text-bet9ja-white mb-1">{value}</div>
    <div className="text-sm text-gray-400">{title}</div>
  </div>
); 