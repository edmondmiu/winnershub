'use client';

import { motion } from 'framer-motion';
import { timePeriods } from '@/data/categories';

interface TimePeriodToggleProps {
  selectedPeriod: 'all-time' | 'last-7-days';
  onPeriodChange: (period: 'all-time' | 'last-7-days') => void;
}

export default function TimePeriodToggle({ selectedPeriod, onPeriodChange }: TimePeriodToggleProps) {
  return (
    <motion.div 
      className="flex bg-gray-800 rounded-lg p-1 mb-8 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-acid-green/10 to-transparent"
        animate={{
          background: [
            "linear-gradient(90deg, rgba(0, 255, 65, 0.1) 0%, transparent 50%)",
            "linear-gradient(90deg, transparent 0%, rgba(0, 255, 65, 0.1) 50%)",
            "linear-gradient(90deg, rgba(0, 255, 65, 0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      {timePeriods.map((period, index) => (
        <motion.button
          key={period.id}
          onClick={() => onPeriodChange(period.id)}
          className={`flex-1 py-3 px-6 rounded-md font-archivo-semiexpanded font-bold transition-all duration-200 relative overflow-hidden ${
            selectedPeriod === period.id
              ? 'text-bet9ja-black relative z-10'
              : 'text-gray-400 hover:text-bet9ja-white'
          }`}
          whileHover={{ 
            scale: 1.02,
            boxShadow: selectedPeriod === period.id ? "0 0 20px rgba(0, 255, 65, 0.5)" : "none"
          }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          {/* Selected state background */}
          {selectedPeriod === period.id && (
            <motion.div
              className="absolute inset-0 bg-acid-green rounded-md"
              layoutId="selectedPeriod"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          
          {/* Text content */}
          <motion.span
            className="relative z-10"
            animate={selectedPeriod === period.id ? {
              textShadow: [
                "0 0 5px rgba(0, 0, 0, 0.5)",
                "0 0 10px rgba(0, 0, 0, 0.5)",
                "0 0 5px rgba(0, 0, 0, 0.5)"
              ]
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {period.label}
          </motion.span>
          
          {/* Hover effect */}
          <motion.div
            className="absolute inset-0 bg-acid-green/20 rounded-md opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        </motion.button>
      ))}
    </motion.div>
  );
} 