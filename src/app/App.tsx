import { useState } from 'react';
import { WaitlistModal } from './components/WaitlistModal';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-[#F5F5F5]">
      {/* HERO SECTION - Full Screen Cinematic */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1550615511-c317ce7f1d03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxldmlzaW9uJTIwYnJvYWRjYXN0JTIwc3R1ZGlvJTIwcGFuZWwlMjBwcm9kdWN0aW9uJTIwY2FtZXJhc3xlbnwxfHx8fDE3NzIyMTU0NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="AI Founders Studio"
            className="w-full h-full object-cover blur-[2px]"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#1A0033]/70 to-black/90"></div>
          {/* Edge blur for focus */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          {/* Logo/Title Mark */}
          <div className="mb-8">
            <div 
              className="inline-block text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-[0.2em] text-white drop-shadow-2xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              AI
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                FOUNDERS
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 
            className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-[0.15em] text-white leading-tight drop-shadow-lg"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            One Man
            <br />
            One Mission
            <br />
            One Billion
          </h1>

          {/* Subheadline */}
          <p 
            className="mb-12 text-lg md:text-xl lg:text-2xl text-purple-100/90 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            AI Founders is the world's first AI-powered reality show, launching soon on one of the leading business channels.
          </p>

          {/* Primary CTA */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="group px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white text-xl font-semibold uppercase tracking-wider rounded-full shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/80 transition-all duration-300 transform hover:scale-105 active:scale-95"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Join Waitlist
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-purple-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* SECOND SECTION - Minimal & Dramatic */}
      <section className="relative min-h-screen w-full flex items-center justify-center px-4 py-24 overflow-hidden">
        {/* Background with purple LED-inspired lines */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F] via-[#1A0033] to-[#0B0B0F]">
          {/* Animated purple lines */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>
          
          {/* Radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[100px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-[0.1em] text-white leading-tight mb-8"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Ready to Build the Future
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              and become the Next Unicorn?
            </span>
          </h2>

          <p 
            className="text-2xl md:text-3xl text-purple-200/80 tracking-wide"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            The full story is coming soon. Stay Tuned.
          </p>

          {/* Secondary CTA */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="group mt-8 px-8 py-3 border-2 border-purple-500/50 hover:border-purple-400 text-purple-200 hover:text-white text-lg font-semibold uppercase tracking-wider rounded-full backdrop-blur-sm hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Join Waitlist
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </section>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}