import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    try {
      setStatus('Sending...');
      // Demo only: simply wait and show success. Backend hook can be wired later.
      await new Promise(r => setTimeout(r, 800));
      setStatus('Thanks — I will get back to you soon.');
      e.currentTarget.reset();
    } catch (e) {
      setStatus('Something went wrong. Please try again.');
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-xl px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Let’s build something</h2>
        <p className="text-slate-300 mt-2">Tell me about your project, timeline, and goals.</p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4 text-left">
          <input name="name" required placeholder="Your name" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <input type="email" name="email" required placeholder="Email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <textarea name="message" required rows="4" placeholder="What are you building?" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <button className="w-full rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold">Send message</button>
        </form>
        {status && <p className="mt-4 text-slate-300">{status}</p>}
      </div>
    </section>
  );
}
