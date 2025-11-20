import { Brain, Database, Cpu, Cloud, Code2 } from 'lucide-react';

const skills = [
  { icon: Brain, label: 'LLMs & Prompting' },
  { icon: Database, label: 'Vector DBs & RAG' },
  { icon: Cpu, label: 'MLOps & Serving' },
  { icon: Cloud, label: 'Cloud & DevOps' },
  { icon: Code2, label: 'Frontend & DX' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Capabilities</h2>
        <p className="text-slate-300 mt-2">End-to-end product engineering with an AI-first mindset.</p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-center">
              <s.icon className="mx-auto text-indigo-300" />
              <div className="mt-3 text-sm text-slate-200">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
