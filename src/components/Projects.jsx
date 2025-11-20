import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Voice Agent for Customer Support',
    desc: 'LLM-driven real-time voice assistant that plugs into CRMs and resolves tickets autonomously.',
    tags: ['LLM', 'WebRTC', 'NextJS', 'RAG'],
    link: '#',
  },
  {
    title: 'AI Code Reviewer',
    desc: 'Static analysis + LLM feedback loop to auto-suggest refactors on PRs.',
    tags: ['LLM', 'AST', 'GitHub Actions'],
    link: '#',
  },
  {
    title: 'Multimodal Search',
    desc: 'Vector search across text and images with hybrid ranking and semantic filters.',
    tags: ['Embeddings', 'OpenAI', 'Pinecone'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Selected Work</h2>
            <p className="text-slate-300 mt-2">A few highlights from recent builds.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 p-5 hover:border-white/20"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-fuchsia-500/10 via-indigo-500/10 to-sky-400/10" />
              <div className="relative z-10">
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-slate-300 text-sm">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs text-slate-200/90 rounded-full border border-white/10 bg-white/5 px-2 py-1">{t}</span>
                  ))}
                </div>
                <div className="mt-5 inline-flex items-center gap-1 text-sky-300 group-hover:gap-2 transition-all">
                  View project <ExternalLink size={16} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
