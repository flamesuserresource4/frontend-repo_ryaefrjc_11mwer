import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* softly glowing gradient rings overlay - pointer events none per instructions */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-40 bg-[radial-gradient(closest-side,_rgba(124,58,237,0.18),_transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(56,189,248,0.18),transparent_60%)]" />

        {/* Aurora sweep */}
        <motion.div
          initial={{ x: '-20%' }}
          animate={{ x: ['-20%', '120%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 h-40 w-2/3 bg-gradient-to-r from-fuchsia-500/10 via-indigo-400/10 to-sky-400/10 blur-2xl"/>

        {/* Scanning beam */}
        <motion.div
          initial={{ y: '-30%' }}
          animate={{ y: ['-30%', '110%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-x-0 mx-auto h-24 w-full bg-gradient-to-b from-transparent via-white/5 to-transparent"/>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-slate-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-sky-400 animate-pulse" />
            Available for Freelance & Collaborations
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Building intelligent products with code and creativity
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            I’m a software engineer specialized in AI — transforming data and models into polished, human-centered experiences.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#projects" className="w-full sm:w-auto rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-shadow">Explore Work</a>
            <a href="#contact" className="w-full sm:w-auto rounded-xl bg-white/10 text-white px-5 py-3 font-semibold border border-white/10 hover:bg-white/15 transition-colors">Get in touch</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
