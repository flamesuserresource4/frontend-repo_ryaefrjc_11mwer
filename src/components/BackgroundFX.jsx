import { motion } from 'framer-motion';
import { Brain, Cpu, Database, Bot } from 'lucide-react';

// Global background effects to add texture and subtle motion
export default function BackgroundFX() {
  const float = (delay = 0) => ({
    initial: { y: 0 },
    animate: { y: [0, -12, 0] },
    transition: { repeat: Infinity, duration: 6, ease: 'easeInOut', delay },
  });

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient glow blobs */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-tr from-fuchsia-500/25 via-indigo-500/20 to-sky-400/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-sky-400/20 via-teal-400/20 to-emerald-400/20 blur-3xl" />

      {/* Subtle grid */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.08]" aria-hidden>
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" className="text-white" />
      </svg>

      {/* Moving light sweep */}
      <motion.div
        initial={{ y: '-100%' }}
        animate={{ y: ['-100%', '120%'] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-white/6 to-transparent"/>

      {/* Floating AI icons as ambient nodes */}
      <div className="absolute inset-0">
        <motion.div {...float(0)} className="absolute left-[10%] top-[25%] text-indigo-300/30">
          <Brain size={26} />
        </motion.div>
        <motion.div {...float(1)} className="absolute left-[78%] top-[30%] text-sky-300/30">
          <Cpu size={24} />
        </motion.div>
        <motion.div {...float(2)} className="absolute left-[20%] top-[70%] text-fuchsia-300/30">
          <Database size={22} />
        </motion.div>
        <motion.div {...float(0.5)} className="absolute left-[60%] top-[75%] text-teal-300/30">
          <Bot size={24} />
        </motion.div>
      </div>

      {/* Fine noise texture using CSS gradients */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.6) 0, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 2px),\nrepeating-linear-gradient(90deg, rgba(255,255,255,0.5) 0, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 2px)'
        }}
      />
    </div>
  );
}
