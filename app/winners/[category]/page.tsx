import { categories } from '@/data/categories';
import { getWinnersByCategory } from '@/data/winners';
import { WinnerCategory } from '@/types';
import WinnerCategoryClient from './WinnerCategoryClient';

// Generate static params for all categories
export async function generateStaticParams() {
  return [
    { category: 'betboom' },
    { category: 'sportsbook' },
    { category: 'casino' },
    { category: 'virtual' },
    { category: 'live-casino' },
    { category: 'pool' },
    { category: 'toto' },
    { category: 'instant' }
  ];
}

interface WinnerPageProps {
  params: {
    category: WinnerCategory;
  };
}

export default function WinnerPage({ params }: WinnerPageProps) {
  const category = categories.find(cat => cat.id === params.category);
  const winners = getWinnersByCategory(params.category, 'all-time');

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

  return (
    <WinnerCategoryClient category={category} winners={winners} initialPeriod="all-time" />
  );
} 