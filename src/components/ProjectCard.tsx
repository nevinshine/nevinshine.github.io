import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  status: string;
  variant?: 'default' | 'ghost';
}

export function ProjectCard({ title, description, tags, link, status, variant = 'default' }: ProjectCardProps) {
  if (variant === 'ghost') {
    return (
      <div className="p-6 border border-dashed border-blue-900/40 bg-blue-950/5 rounded-sm opacity-80 hover:opacity-100 transition-opacity">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-slate-500 font-mono italic">{title}</h3>
          <span className="text-[10px] font-mono text-slate-600 uppercase tracking-wider">{status}</span>
        </div>
        <p className="text-sm text-slate-500 italic leading-relaxed">{description}</p>
      </div>
    );
  }

  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group p-6 border border-blue-900/30 bg-blue-950/10 rounded-sm hover:border-blue-500/50 hover:bg-blue-950/20 transition-all duration-300 block"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-white font-mono group-hover:text-blue-400 transition-colors">{title}</h3>
        <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100" />
      </div>
      <p className="text-sm text-slate-400 mb-4 leading-relaxed">{description}</p>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-[10px] font-mono px-2 py-1 bg-blue-950/50 text-blue-400/80 rounded-sm border border-blue-900/30"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-[10px] font-mono text-blue-500/80 uppercase tracking-wider">{status}</span>
      </div>
    </a>
  );
}
