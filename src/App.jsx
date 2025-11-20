import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.08),transparent_60%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <footer className="py-10 text-center text-slate-400">© {new Date().getFullYear()} Your Name — AI Software Engineer</footer>
      </main>
    </div>
  );
}

export default App;
