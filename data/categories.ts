import { CategoryInfo } from '@/types';

export const categories: CategoryInfo[] = [
  {
    id: 'betboom',
    name: 'Biggest betBOOMs Wins',
    description: 'Explosive wins from our high-stakes betBOOM games. Watch the biggest multipliers and payouts!',
    bannerImage: '/images/betboom-banner.jpg',
    maxStake: 1000000,
    color: '#FF6B35',
    icon: '💥',
    recentWinners: 3,
    avgPayout: 15000000
  },
  {
    id: 'cashout',
    name: 'Biggest Cash Out Wins',
    description: 'Strategic cash outs that turned small stakes into massive payouts. Smart betting pays off!',
    bannerImage: '/images/cashout-banner.jpg',
    maxStake: 1000000,
    color: '#4ECDC4',
    icon: '💰',
    recentWinners: 5,
    avgPayout: 8500000
  },
  {
    id: 'sportsbook',
    name: 'Biggest Sportsbook Wins',
    description: 'Traditional sports betting champions. From football to basketball, these winners know their sports!',
    bannerImage: '/images/sportsbook-banner.jpg',
    maxStake: 1000000,
    color: '#45B7D1',
    icon: '⚽',
    recentWinners: 8,
    avgPayout: 12000000
  },
  {
    id: 'ucl-jackpot',
    name: 'UCL Jackpot Winners',
    description: 'Champions League jackpot champions. The ultimate football betting glory!',
    bannerImage: '/images/ucl-banner.jpg',
    maxStake: 1000000,
    color: '#FFD93D',
    icon: '🏆',
    recentWinners: 2,
    avgPayout: 25000000
  },
  {
    id: 'casino',
    name: 'Biggest Casino Winners',
    description: 'Slot machines and live casino champions. Lady luck smiles on these players!',
    bannerImage: '/images/casino-banner.jpg',
    maxStake: 1000000,
    color: '#FF6B9D',
    icon: '🎰',
    recentWinners: 6,
    avgPayout: 18000000
  },
  {
    id: 'stadium',
    name: 'Biggest Stadium Winner',
    description: 'Virtual sports champions. Racing, football, and more in our digital stadium!',
    bannerImage: '/images/stadium-banner.jpg',
    maxStake: 1000000,
    color: '#6C5CE7',
    icon: '🏟️',
    recentWinners: 4,
    avgPayout: 9500000
  },
  {
    id: 'simulate',
    name: 'Biggest Simulate Winner',
    description: 'Simulation game masters. Strategy and luck combined for massive wins!',
    bannerImage: '/images/simulate-banner.jpg',
    maxStake: 1000000,
    color: '#A8E6CF',
    icon: '🎮',
    recentWinners: 3,
    avgPayout: 11000000
  },
  {
    id: 'zoom',
    name: 'Biggest Zoom Winner',
    description: 'Fast-paced Zoom game champions. Quick thinking leads to quick wins!',
    bannerImage: '/images/zoom-banner.jpg',
    maxStake: 1000000,
    color: '#FF8E53',
    icon: '⚡',
    recentWinners: 7,
    avgPayout: 7500000
  }
];

export const timePeriods = [
  {
    id: 'all-time' as const,
    label: 'All Time',
    description: 'Greatest wins of all time'
  },
  {
    id: 'last-7-days' as const,
    label: 'Last 7 Days',
    description: 'This week\'s biggest winners'
  }
];

// Additional realistic data
export const siteStats = {
  totalUsers: 2500000,
  dailyActiveUsers: 180000,
  totalBets: 15000000,
  averageBetSize: 2500,
  totalPayouts: 250000000,
  totalWinners: 5000,
  updateFrequency: '6 hours',
  lastUpdate: new Date().toISOString()
}; 