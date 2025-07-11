export interface Winner {
  id: string;
  userId: string;
  stake: number;
  payout: number;
  betId: string;
  multiplier?: number;
  date: string;
  category: WinnerCategory;
  timePeriod: 'all-time' | 'last-7-days';
}

export type WinnerCategory = 
  | 'betboom'
  | 'cashout'
  | 'sportsbook'
  | 'ucl-jackpot'
  | 'casino'
  | 'stadium'
  | 'simulate'
  | 'zoom';

export interface CategoryInfo {
  id: WinnerCategory;
  name: string;
  description: string;
  bannerImage: string;
  maxStake: number;
  color: string;
  icon: string;
  recentWinners: number;
  avgPayout: number;
}

export interface TimePeriod {
  id: 'all-time' | 'last-7-days';
  label: string;
  description: string;
} 