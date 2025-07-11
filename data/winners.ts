import { Winner } from '@/types';

// Helper function to generate random winners
const generateWinners = (category: Winner['category'], timePeriod: 'all-time' | 'last-7-days', count: number = 10): Winner[] => {
  const winners: Winner[] = [];
  
  for (let i = 0; i < count; i++) {
    const stake = Math.floor(Math.random() * 1000000) + 1000; // 1K to 1M
    const multiplier = Math.random() * 100 + 1; // 1x to 100x
    const payout = Math.floor(stake * multiplier);
    
    winners.push({
      id: `${category}-${timePeriod}-${i + 1}`,
      userId: `USER${String(Math.floor(Math.random() * 999999)).padStart(6, '0')}`,
      stake,
      payout,
      betId: `BET${String(Math.floor(Math.random() * 999999999)).padStart(9, '0')}`,
      multiplier: Math.round(multiplier * 100) / 100,
      date: timePeriod === 'last-7-days' 
        ? new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString()
        : new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toISOString(),
      category,
      timePeriod
    });
  }
  
  // Sort by payout (highest first)
  return winners.sort((a, b) => b.payout - a.payout);
};

// Generate winners for all categories and time periods
export const allWinners: Winner[] = [
  // betBOOM winners
  ...generateWinners('betboom', 'all-time'),
  ...generateWinners('betboom', 'last-7-days'),
  
  // Cash Out winners
  ...generateWinners('cashout', 'all-time'),
  ...generateWinners('cashout', 'last-7-days'),
  
  // Sportsbook winners
  ...generateWinners('sportsbook', 'all-time'),
  ...generateWinners('sportsbook', 'last-7-days'),
  
  // UCL Jackpot winners (manual data as specified)
  {
    id: 'ucl-all-time-1',
    userId: 'USER123456',
    stake: 50000,
    payout: 2500000,
    betId: 'BET123456789',
    multiplier: 50,
    date: '2024-01-15T10:30:00Z',
    category: 'ucl-jackpot',
    timePeriod: 'all-time'
  },
  {
    id: 'ucl-all-time-2',
    userId: 'USER789012',
    stake: 75000,
    payout: 1875000,
    betId: 'BET987654321',
    multiplier: 25,
    date: '2024-02-20T15:45:00Z',
    category: 'ucl-jackpot',
    timePeriod: 'all-time'
  },
  
  // Casino winners
  ...generateWinners('casino', 'all-time'),
  ...generateWinners('casino', 'last-7-days'),
  
  // Stadium winners
  ...generateWinners('stadium', 'all-time'),
  ...generateWinners('stadium', 'last-7-days'),
  
  // Simulate winners
  ...generateWinners('simulate', 'all-time'),
  ...generateWinners('simulate', 'last-7-days'),
  
  // Zoom winners
  ...generateWinners('zoom', 'all-time'),
  ...generateWinners('zoom', 'last-7-days'),
];

// Helper function to get winners by category and time period
export const getWinnersByCategory = (category: Winner['category'], timePeriod: 'all-time' | 'last-7-days'): Winner[] => {
  return allWinners
    .filter(winner => winner.category === category && winner.timePeriod === timePeriod)
    .sort((a, b) => b.payout - a.payout)
    .slice(0, 10); // Top 10
}; 