import { useState } from 'react';
import { ProjectCard } from './components/ProjectCard';
import { FileText, Download, Cpu, Code2, Microscope, Github, Linkedin, Mail } from 'lucide-react';

const dossierLink = "https://nevinshine.github.io/research-dossier/";

function App() {
  const [showMain] = useState(true);










  // Main OS Interface
  return (
    <div className={`min-h-screen bg-[#020617] text-slate-400 bg-grid transition-opacity duration-700 ${showMain ? 'opacity-100' : 'opacity-0'}`}>


      <div className="w-full max-w-4xl mx-auto px-6 pt-16 pb-16">
        {/* Status bar above name */}
        <nav className="flex items-center justify-between mb-8 select-none">
          <span className="text-slate-500 font-mono text-xs tracking-widest opacity-80" style={{letterSpacing: '0.13em'}}>NÜRNBERG,  DE  //  GRAD  2028</span>
          <span className="flex items-center gap-2 text-slate-500 font-mono text-xs tracking-widest opacity-80">
            <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-1"></span>
            RESEARCH SESSION ACTIVE
          </span>
        </nav>
        
        {/* ...existing code... */}

        {/* Header */}
        <header className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            {/* ...existing code... */}
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-4">
              Nevin Shine
            </h1>
            <p className="text-xl text-slate-400 font-light max-w-lg leading-relaxed">
              Systems Security Student <span className="text-slate-700 mx-2">/</span> Engineering Researcher
            </p>
            <p className="text-sm text-blue-500/80 mt-2 font-mono uppercase tracking-wider">
              Focus: eBPF-LSM, LLVM-PCC & AI Safety
            </p>
          </div>
          <div className="flex gap-3">
            <a 
              href={dossierLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-5 py-3 border border-blue-900/50 bg-blue-950/20 rounded-sm hover:border-blue-400 hover:bg-blue-950/40 transition-all"
            >
              <span className="block text-[10px] text-slate-500 uppercase flex items-center gap-1">
                <FileText className="w-3 h-3" />
                Archive
              </span>
              <span className="block text-sm font-semibold text-gray-200 group-hover:text-white">View Dossier</span>
            </a>
            <a 
              href="/Nevin_Shine_CV.pdf"
              download
              className="group px-5 py-3 border border-slate-800 bg-slate-900/50 rounded-sm hover:border-white hover:bg-slate-800/50 transition-all"
            >
              <span className="block text-[10px] text-slate-500 uppercase flex items-center gap-1">
                <Download className="w-3 h-3" />
                Reference
              </span>
              <span className="block text-sm font-semibold text-gray-200 group-hover:text-white">Download CV</span>
            </a>
          </div>
        </header>

        {/* Technical Skills Matrix */}
        <section className="mb-20 p-6 border border-blue-900/30 bg-blue-950/10 rounded-sm">
          <h2 className="text-xs font-bold text-blue-500 mb-6 flex items-center tracking-widest uppercase">
            <Cpu className="w-3 h-3 mr-2" />
            Technical Skills Matrix
            <span className="ml-4 h-px bg-blue-900/30 flex-grow"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="group">
              <h4 className="text-white text-[10px] font-mono uppercase tracking-widest mb-3 font-bold flex items-center gap-2">
                <Code2 className="w-3 h-3 text-blue-500" />
                Low-Level
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                eBPF, XDP, LSM, LLVM Pass Dev, x86_64 ASM, Kernel Hooking
              </p>
            </div>
            <div className="group">
              <h4 className="text-white text-[10px] font-mono uppercase tracking-widest mb-3 font-bold flex items-center gap-2">
                <Code2 className="w-3 h-3 text-blue-500" />
                Languages
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                C, C++, Go, Python, SQL, Java, Bash, Docker
              </p>
            </div>
            <div className="group">
              <h4 className="text-white text-[10px] font-mono uppercase tracking-widest mb-3 font-bold flex items-center gap-2">
                <Microscope className="w-3 h-3 text-blue-500" />
                Research
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                CFI, ASLR Evasion Defense, Prompt Injection Mitigation
              </p>
            </div>
          </div>
        </section>

        {/* Research Portfolio */}
        <section className="mb-24">
          <h2 className="text-xs font-bold text-blue-500 mb-8 flex items-center tracking-widest uppercase">
            <Cpu className="w-3 h-3 mr-2" />
            Research Portfolio
            <span className="ml-4 h-px bg-blue-900/30 flex-grow"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            
            {/* TELOS Umbrella - clickable box */}
            <a
              href="https://github.com/nevinshine/telos-runtime"
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-2 p-6 border border-blue-900/40 bg-gradient-to-br from-blue-950/20 to-blue-950/5 rounded-sm relative overflow-hidden transition-all hover:border-blue-400 hover:bg-blue-950/40 focus:outline-none"
              style={{ display: 'block' }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono text-green-500 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/30">
                  ACTIVE
                </span>
              </div>
              <h3 className="text-lg font-bold text-white font-mono mb-2 italic flex items-center gap-2">
                <span className="text-blue-500">TELOS:</span> Unified Defense Architecture
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
                A split-plane runtime securing AI agents by verifying semantic intent at the kernel and network boundaries. 
                The TELOS architecture integrates build-time protection, host-level enforcement, and network border patrol 
                into a cohesive defense system.
              </p>
            </a>

            {/* Project Cards */}
            <ProjectCard 
              title="Sentinel-CC" 
              description="LLVM-based Policy-Carrying Code featuring Phase 2 Deep CFI and ASLR-aware enforcement for compile-time security guarantees." 
              tags={['LLVM', 'C++', 'CFI']} 
              link="https://github.com/nevinshine/sentinel-cc" 
              status="Phase 2 Stable" 
            />
            <ProjectCard 
              title="Sentinel Runtime" 
              description="M8.2 Active. Pure eBPF-LSM engine featuring recursive process bloodline tracking and atomic inheritance for real-time protection." 
              tags={['eBPF-LSM', 'C', 'Kernel']} 
              link="https://github.com/nevinshine/sentinel-runtime" 
              status="M8.2 Active" 
            />
            <ProjectCard 
              title="Hyperion XDP" 
              description="Network Border Patrol achieving ~65 Gbps throughput with zero-copy telemetry and eBPF-powered packet filtering." 
              tags={['XDP', 'Go', 'eBPF']} 
              link="https://github.com/nevinshine/hyperion-xdp" 
              status="M5.0 Stable" 
            />
            <ProjectCard 
              title="New Project: TBD" 
              description="Adaptive kernel-level defense systems for Space Cybersecurity. Research initiative for satellite communication security." 
              tags={['Research', 'Space', 'Kernel']} 
              link="#" 
              status="Later 2026"
              variant="ghost"
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-10 border-t border-blue-900/20">
          <div className="flex flex-col items-center gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-blue-500 font-mono text-sm font-bold tracking-wider">◆ NEVIN</span>
              <span className="text-slate-500 font-mono text-xs">Systems Security</span>
            </div>
            
            {/* Links */}
            <div className="flex items-center gap-8">
              <a 
                href="https://github.com/nevinshine" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors group"
              >
                <Github className="w-4 h-4 group-hover:text-blue-400" />
                <span className="text-xs font-mono uppercase tracking-wider">GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/nevin-shine-b403b932b/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors group"
              >
                <Linkedin className="w-4 h-4 group-hover:text-blue-400" />
                <span className="text-xs font-mono uppercase tracking-wider">LinkedIn</span>
              </a>
              <a 
                href="mailto:nevinshine05@outlook.com" 
                className="flex items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:text-blue-400" />
                <span className="text-xs font-mono uppercase tracking-wider">Contact</span>
              </a>
            </div>
            
            {/* Divider */}
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-900/50 to-transparent"></div>
            
            {/* Copyright */}
            <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest text-center">
              <p>© 2025 Nevin Shine</p>
              <p className="mt-1 text-slate-700">Engineered with precision in Nürnberg, DE</p>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;
