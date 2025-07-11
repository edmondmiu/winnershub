# WinnersHub - Bet9ja Big Winners Showcase

A modern, responsive web application showcasing the biggest winners across all Bet9ja betting categories. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🎯 Objective

Bet9ja has an issue surrounding low awareness of cash/bonuses/prizes awarded to customers. This application increases awareness and visibility by creating a dedicated section to visually advertise customers winning big across different betting opportunities.

## ✨ Features

### 🏆 Winner Categories
- **Biggest betBOOMs Wins** - Explosive high-stakes game winners
- **Biggest Cash Out Wins** - Strategic cash out champions
- **Biggest Sportsbook Wins** - Traditional sports betting winners
- **UCL Jackpot Winners** - Champions League jackpot champions
- **Biggest Casino Winners** - Slot machines and live casino champions
- **Biggest Stadium Winner** - Virtual sports champions
- **Biggest Simulate Winner** - Simulation game masters
- **Biggest Zoom Winner** - Fast-paced Zoom game champions

### 📊 Data Granularity
- **All-time** - Greatest wins of all time
- **Last 7 days** - This week's biggest winners (Monday 00:00 - Sunday 23:59)

### 🎨 Design Features
- **Brand Identity** - Black, acid green (#00FF41), white lightning bolt iconography
- **Typography** - Archivo SemiExpanded Bold font family
- **Responsive Design** - Mobile-first approach
- **Animations** - Smooth Framer Motion animations
- **Interactive Elements** - Hover effects and transitions

### 📈 Leaderboard Features
- Top 10 winners per category
- User ID, Stake, Payout, Bet ID display
- Multiplier information
- Visual progress bars
- Trophy icons for top 3 positions
- Real-time currency formatting (NGN)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd WinnersHub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🏗️ Project Structure

```
WinnersHub/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   └── winners/           # Winner category pages
│       └── [category]/    # Dynamic category pages
├── components/            # React components
│   ├── ui/               # UI components
│   ├── layout/           # Layout components
│   └── winners/          # Winner-specific components
├── data/                 # Data and mock data
├── lib/                  # Utility functions
├── types/                # TypeScript type definitions
└── public/               # Static assets
```

## 🎨 Brand Guidelines

### Colors
- **Primary Black**: #000000
- **Acid Green**: #00FF41
- **White**: #FFFFFF

### Typography
- **Primary Font**: Archivo SemiExpanded Bold
- **Fallback**: Archivo (Google Fonts)

### Icons
- **Primary**: Lightning bolt (Zap) from Lucide React
- **Secondary**: Trophy, Info, TrendingUp, ArrowLeft

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## �� Data Updates

- **Data Source**: Currently using mock data
- **Real Implementation**: Would connect to Bet9ja's backend APIs

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Archivo)

## 📋 Requirements Met

✅ **Dedicated pages** for each betting category  
✅ **Hero banner** at the top of each page  
✅ **Leaderboard** with top 10 winners  
✅ **User ID, Stake, Payout, Bet ID** display  
✅ **Time period toggle** (All-time / Last 7 days)  
✅ **Max stake limit** of ₦1,000,000  
✅ **Sorting by highest amount won**  
✅ **More Info section** with category summary  
✅ **Brand visual identity** with black, acid green, lightning bolts  
✅ **Archivo SemiExpanded Bold** typography  
✅ **Responsive design**  
✅ **Dummy data** for prototype demonstration  

## 🎯 Future Enhancements

- [ ] Real API integration with Bet9ja backend
- [ ] Social media post embedding
- [ ] Image/video asset uploads
- [ ] Admin panel for content management
- [ ] Real-time updates via WebSocket
- [ ] User authentication and profiles
- [ ] Push notifications for new winners
- [ ] Analytics and reporting dashboard

## 📄 License

This project is proprietary to Bet9ja.

## 🤝 Contributing

This is a prototype for Bet9ja. For questions or feedback, please contact the development team. 