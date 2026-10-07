import { Link } from "react-router-dom";
import { Mark } from "./Mark.tsx";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Mark className="h-8 w-10 text-gold" />
          <p className="mt-6 max-w-sm font-display text-3xl leading-snug">
            The indigenous communities of the Nilgiris. Six, and three.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3">
          <div>
            <p className="kicker text-gold">About</p>
            <ul className="mt-4 space-y-2 font-display text-lg">
              <li><Link to="/about" className="hover:italic">Intro</Link></li>
              <li><Link to="/about/groups" className="hover:italic">Nine groups</Link></li>
              <li><Link to="/about/todas" className="hover:italic">Todas of the Nilgiris</Link></li>
            </ul>
          </div>
          <div>
            <p className="kicker text-gold">Programmes</p>
            <ul className="mt-4 space-y-2 font-display text-lg">
              <li><Link to="/programmes/livelihood" className="hover:italic">Livelihood</Link></li>
              <li><Link to="/programmes/conservation" className="hover:italic">Conservation</Link></li>
              <li><Link to="/programmes/education" className="hover:italic">Education</Link></li>
              <li><Link to="/programmes/rights" className="hover:italic">Rights</Link></li>
            </ul>
          </div>
          <div>
            <p className="kicker text-gold">Visit</p>
            <ul className="mt-4 space-y-2 font-display text-lg">
              <li><Link to="/projects" className="hover:italic">Project</Link></li>
              <li><Link to="/products" className="hover:italic">Products</Link></li>
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-ivory/70">The Nilgiris, Tamil Nadu</p>
          </div>
        </div>
      </div>
      <div className="container-site flex flex-col gap-2 border-t border-white/10 py-6 font-sans text-[11px] uppercase tracking-[0.18em] text-ivory/60 sm:flex-row sm:justify-between">
        <p>TNTHCPS</p>
        <p>Toda buffalo ghee, from the Nilgiris</p>
      </div>
    </footer>
  );
}
