import { useState } from 'react';
import { X } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // In a real app, this would send to a backend
      setTimeout(() => {
        onClose();
        setSubmitted(false);
        setEmail('');
      }, 2000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md p-8 bg-gradient-to-b from-[#1A0033] to-[#0B0B0F] border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-500/20"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <h2 className="mb-2 text-3xl font-bold text-white uppercase tracking-wider" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Join the Waitlist
            </h2>
            <p className="mb-6 text-purple-200/80" style={{ fontFamily: "'Inter', sans-serif" }}>
              Be the first to know when AI Founders launches.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-purple-500/40 rounded-lg text-white placeholder:text-purple-300/40 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 transform hover:scale-[1.02]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Join Waitlist
              </button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="mb-4 text-5xl">🎉</div>
            <h3 className="mb-2 text-2xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              You're In!
            </h3>
            <p className="text-purple-200/80" style={{ fontFamily: "'Inter', sans-serif" }}>
              We'll notify you when AI Founders launches.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
