import { motion } from 'framer-motion';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-black">
  
      <motion.div
        className="absolute -top-1/2 left-1/4 w-[70vw] h-[70vw] rounded-full bg-cyan-500/8 blur-[140px]"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 -right-1/4 w-[50vw] h-[50vw] rounded-full bg-sky-400/6 blur-[120px]"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 w-full h-1/3 bg-gradient-to-t from-white/[0.02] to-transparent pointer-events-none"
        aria-hidden
      />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  );
}
