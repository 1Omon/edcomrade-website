import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0F2537] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Top Newsletter & Brand Grid */}
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#2E8BC0] text-white flex items-center justify-center font-bold text-2xl shadow-md">
                E
              </div>
              <span className="font-serif text-3xl font-bold tracking-tight text-white">
                EdComrade
              </span>
            </div>
            <p className="text-white/70 text-base leading-relaxed max-w-md">
              The authoritative digital publication and software platform modernising Ghanaian schools. Built in Accra for Africa.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-[#2E8BC0]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
              <span>Pioneers&apos; Core ERP — 100% Free For Schools</span>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-8 text-sm">
            {/* Column 1: Software */}
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#2E8BC0] font-bold block">
                SOFTWARE & PLATFORM
              </span>
              <ul className="space-y-2.5 text-white/70">
                <li><Link href="/software#pioneers" className="hover:text-white transition-colors">Pioneers&apos; Free ERP</Link></li>
                <li><Link href="/software#custom" className="hover:text-white transition-colors">Custom Institutional App</Link></li>
                <li><Link href="/schoolpedia" className="hover:text-white transition-colors">Schoolpedia Directory</Link></li>
                <li><Link href="/parentaide" className="hover:text-white transition-colors">ParentAide Mobile</Link></li>
              </ul>
            </div>

            {/* Column 2: Publishing */}
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#B8973A] font-bold block">
                PUBLISHING & MEDIA
              </span>
              <ul className="space-y-2.5 text-white/70">
                <li><Link href="/edmedia" className="hover:text-white transition-colors">EdMedia Magazine</Link></li>
                <li><Link href="/manifesto" className="hover:text-white transition-colors">The Manifesto</Link></li>
                <li><Link href="/amplifiers" className="hover:text-white transition-colors">Amplifiers Programme</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Our Story & Founders</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#10B981] font-bold block">
                CONTACT & OFFICES
              </span>
              <div className="space-y-2 text-white/70 text-xs leading-relaxed">
                <p><strong className="text-white">Accra Office:</strong><br />New Legon, Greater Accra, Ghana</p>
                <p><strong className="text-white">Direct Line:</strong><br />+233 55 528 4923</p>
                <p><strong className="text-white">Email:</strong><br />partner@edcomrade.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/50 gap-4">
          <p>© 2026 S.A Edcomrade Ventures Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/manifesto" className="hover:text-white transition-colors">Manifesto</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Support & Callback</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
