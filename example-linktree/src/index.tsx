"use client"

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./css/normalize.css";
import "./css/deedtube.css"; // Created this file for styles
import { Analytics } from "@vercel/analytics/react";

// ================ 🎨 DEEDTUBE THEME ================
const COLORS = {
  skyBlue: "#A0D7E7",
  bubblegumPink: "#F7A9A8",
  lilacPurple: "#C7B5FF",
  pastelYellow: "#FFE07D",
  mintGreen: "#B4F0A7",
  cloudWhite: "#FDFDFD",
  spiritualLight: "#FFF9F0",
  creativeCoral: "#FF9AA2",
  joyfulOrange: "#FFB347",
  deedGold: "#D4AF37"
};

// ================ 🏠 PROPERTY CATEGORIES ================
const REEL_CATEGORIES = [
  { 
    emoji: "📍 ATL", 
    label: "LAND", 
    color: COLORS.mintGreen,
    ids: ["JdHLFyMfjJ0", "whVlCRbqvWQ", "wQwpriB2EP0"],
    description: "Raw acreage and development plots"
  },
  { 
    emoji: "📍 CHI", 
    label: "Chicago", 
    color: COLORS.bubblegumPink,
    ids: ["48XG8AcVUv4", "5LrQ9I25PRI", "JbQsxbF5v1E"],
    description: "Residential properties and multi-family"
  },
  { 
    emoji: "📍 HOU", 
    label: "Houston", 
    color: COLORS.skyBlue,
    ids: ["WCPJ4zUOM58", "onBHWdVAsIA", "P3O7Qr2St1Y"],
    description: "Industrial and logistics spaces"
  },
  { 
    emoji: "📍 LA", 
    label: "Los Angeles", 
    color: COLORS.pastelYellow,
    ids: ["OPf0YbXqDm0", "E6Dj9bav3lM", "T9U5FbQj7xN"],
    description: "Retail and street-front commercial"
  },
  { 
    emoji: "📍 MIA", 
    label: "Miami", 
    color: COLORS.creativeCoral,
    ids: ["DTO8WF5pjZY", "9bZkp7q19f0", "rFSQfMyrgM4"],
    description: "Corporate suites and coworking hubs"
  },
  { 
    emoji: "📍 NYC", 
    label: "New York City", 
    color: COLORS.lilacPurple,
    ids: ["xOVj-JCwRCY", "dQw4w9WgXcQ", "6BWeiXgG6IA"],
    description: "Parking lots and automotive storage"
  }
];

interface ReelPlayerProps {
  id: string;
  borderColor: string;
}

// ================ 🎞️ DEED PLAYER COMPONENT ================
const ReelPlayer = ({ id, borderColor }: ReelPlayerProps) => {
  return (
    <div className="reel-container" style={{ borderColor }}>
      <div className="video-wrapper">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&playsinline=1`}
          className="reel-iframe"
          title={`DeedTube Tour ${id}`}
          loading="lazy"
          allowFullScreen
        />
      </div>
      {/* Actions section removed */}
    </div>
  );
};

// ================ 📱 DEEDTUBE APP ================
const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = REEL_CATEGORIES[activeTab];

  const CategoryTabs = ({ position }: { position: 'top' | 'bottom' }) => (
    <div className={`category-tabs ${position}`}>
      {REEL_CATEGORIES.map((category, index) => (
        <button
          key={`${position}-${category.label}`}
          className={`category-tab ${activeTab === index ? 'active' : ''}`}
          onClick={() => {
            setActiveTab(index);
            if (position === 'bottom') window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            backgroundColor: activeTab === index ? category.color : COLORS.cloudWhite,
            borderColor: category.color
          }}
        >
          <span className="category-emoji">{category.emoji}</span>
          <span className="category-label">{category.label}</span>
        </button>
      ))}
    </div>
  );

  return (
    <div className="app" style={{ backgroundColor: COLORS.spiritualLight }}>
      <Analytics />
      
      {/* Header Section - FIXED: Removed extra closing div */}
      <header className="header">
        <h1 className="app-title" style={{ letterSpacing: '2px' }}>NeBruh TV</h1>
        <p className="app-description">
          🎥 <strong>Challenges</strong> → 📜 <strong>Deeds</strong> → 🕹️ <strong>Games</strong>
          <br />
          <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>
            Let&apos;s see what city has the best content creators and the most Love For They Nebruhs!
          </span>
        </p>

        {/* Social & Direct Mint Buttons */}
        <a 
          href="https://deedtube.com" 
          className="bio-btn tiktok-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          📜 Claim a Deed
        </a>
        <a 
          href="https://tiktok.com/@nebruhtv" 
          className="bio-btn tiktok-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          📱 @NeBruhTV TikTok
        </a>
        <a 
          href="https://t.me/nebruhtv" 
          className="bio-btn telegram-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 Telegram Group
        </a>
      </header>

      <CategoryTabs position="top" />

      {/* Main Property Feed */}
      <main className="reel-grid">
        {activeCategory.ids.map(id => (
          <ReelPlayer 
            key={id} 
            id={id} 
            borderColor={activeCategory.color}
          />
        ))}
      </main>

      <CategoryTabs position="bottom" />

      {/* Main CTA */}
      <nav className="services-nav">
        <a 
          href="https://market.nebruh.com" 
          className="service-link highlight"
          style={{ 
            backgroundColor: COLORS.joyfulOrange,
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}
        >
          🛍️ Market
        </a>
      </nav>

      {/* Styles moved to separate CSS file - this block is now empty */}
    </div>
  );
};

// ================ 🛠️ RENDER ================
const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}