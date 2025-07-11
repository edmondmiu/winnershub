import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-NG', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export function formatMultiplier(multiplier: number): string {
  return `${multiplier.toFixed(2)}x`;
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    betboom: '#FF6B35',
    cashout: '#4ECDC4',
    sportsbook: '#45B7D1',
    'ucl-jackpot': '#FFD93D',
    casino: '#FF6B9D',
    stadium: '#6C5CE7',
    simulate: '#A8E6CF',
    zoom: '#FF8E53',
  };
  
  return colors[category] || '#00FF41';
} 