import Link from "next/link";
import { Globe, Camera, Link as LinkIcon, Video, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-subtle pt-16 pb-8 mt-24">
      <div className="max-w-[1200px] mx-auto px-[24px] lg:px-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Brand & Socials */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-8 h-8 relative flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M6 6H18V18H6V6Z" fill="#1B212D" stroke="#8B5CF6" strokeWidth="2" />
                  <rect x="10" y="2" width="4" height="4" fill="#8B5CF6" />
                  <rect x="8" y="2" width="2" height="2" fill="#8B5CF6" />
                  <rect x="14" y="2" width="2" height="2" fill="#8B5CF6" />
                  <rect x="10" y="18" width="4" height="4" fill="#8B5CF6" />
                  <rect x="8" y="20" width="2" height="2" fill="#8B5CF6" />
                  <rect x="14" y="20" width="2" height="2" fill="#8B5CF6" />
                  <rect x="2" y="10" width="4" height="4" fill="#8B5CF6" />
                  <rect x="2" y="8" width="2" height="2" fill="#8B5CF6" />
                  <rect x="2" y="14" width="2" height="2" fill="#8B5CF6" />
                  <rect x="18" y="10" width="4" height="4" fill="#8B5CF6" />
                  <rect x="20" y="8" width="2" height="2" fill="#8B5CF6" />
                  <rect x="20" y="14" width="2" height="2" fill="#8B5CF6" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-sm font-bold tracking-tight text-primary leading-tight group-hover:text-purple transition-colors">
                  AWS Student Builder Group
                </span>
                <span className="font-mono text-[11px] text-secondary leading-tight">
                  MIT ADT University
                </span>
              </div>
            </Link>
            <p className="text-secondary text-sm max-w-sm mb-6 leading-relaxed">
              A student-led cloud community focused on learning, building projects, hosting events, and sharing technical resources.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-secondary hover:text-purple transition-colors p-2 -ml-2">
                <LinkIcon size={20} />
              </a>
              <a href="#" className="text-secondary hover:text-purple transition-colors p-2">
                <Camera size={20} />
              </a>
              <a href="#" className="text-secondary hover:text-purple transition-colors p-2">
                <Globe size={20} />
              </a>
              <a href="#" className="text-secondary hover:text-purple transition-colors p-2">
                <Video size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h3 className="font-mono text-sm font-bold text-primary uppercase tracking-wider mb-6">
              Explore
            </h3>
            <ul className="flex flex-col gap-3">
              {['Home', 'About', 'Team', 'Services', 'Events', 'Blogs', 'Resources'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-secondary hover:text-primary transition-colors text-sm flex items-center"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="font-mono text-sm font-bold text-primary uppercase tracking-wider mb-6">
              AWS Resources
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: 'AWS Documentation', url: '#' },
                { name: 'AWS Skill Builder', url: '#' },
                { name: 'AWS Builder Center', url: '#' },
                { name: 'AWS Training', url: '#' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-purple transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-subtle pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary text-xs">
            © 2026 AWS Student Builder Group — MIT ADT University.
          </p>
          <p className="text-secondary text-xs text-center md:text-right">
            This is an independent student community and is not an official AWS entity.
          </p>
        </div>
      </div>
    </footer>
  );
}
