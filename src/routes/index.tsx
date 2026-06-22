import { createFileRoute } from '@tanstack/react-router'
import { useState } from "react";
import { ScrambleText } from "@/components/ScrambleText";
import { Clock } from "@/components/Clock";
import { CursorGlow } from "@/components/CursorGlow";
import { BootSequence } from "@/components/BootSequence";

import circuitImg from "@/assets/project-circuit.jpg";
import topoImg from "@/assets/project-topo.jpg";
import hudImg from "@/assets/project-hud.jpg";
import neuralImg from "@/assets/project-neural.jpg";
import identityImg from "@/assets/identity.jpg";

export const Route = createFileRoute('/')({ component: App })

const PROJECTS = [
  {
    id: "0x442",
    name: "NEURAL_LIFT_V2",
    tag: "PROJECT_01",
    desc: "Decentralized memory architecture for biological uplink synchronization. 14ms median latency across 8,000 concurrent neural sessions.",
    stack: ["RUST", "WEB_ASSEMBLY", "POSTGRES"],
    img: circuitImg,
    label: "VISUAL_DATA",
  },
  {
    id: "0x901",
    name: "VOID_SHELL",
    tag: "PROJECT_02",
    desc: "Hardened terminal interface for deep-net navigation. Zero JS dependencies, sub-50kb gzip, ships with its own cryptographic primitives.",
    stack: ["C++", "OPEN_GL", "WS"],
    img: topoImg,
    label: "SURFACE_SCAN",
  },
  {
    id: "0x7AC",
    name: "CIPHER_BLOCK",
    tag: "PROJECT_03",
    desc: "Air-gapped key management appliance. Hardware root of trust with quantum-resistant signature schemes baked into the bootloader.",
    stack: ["GO", "ZK_SNARKS", "FPGA"],
    img: hudImg,
    label: "TRACE_OUTPUT",
  },
  {
    id: "0xBEE",
    name: "SWARM_NODE",
    tag: "PROJECT_04",
    desc: "Edge mesh runtime for autonomous drone clusters. Gossip protocol holds under 80% packet loss; reconverges in under 600ms.",
    stack: ["ZIG", "GRPC", "CRDTs"],
    img: neuralImg,
    label: "NETWORK_MAP",
  },
];

const SKILLS = [
  { k: "SYSTEMS", v: ["Rust", "C++", "Zig", "Go", "WebAssembly"] },
  { k: "INTERFACE", v: ["TypeScript", "React", "WebGL / GLSL", "Canvas"] },
  { k: "INFRA", v: ["Postgres", "Redis", "K8s", "NATS", "Tigris"] },
  { k: "PRIMITIVES", v: ["Crypto", "Distributed Sys", "Compilers", "DSP"] },
];

function App() {
  const [booted, setBooted] = useState(false);

  return (
    <div className="min-h-screen bg-bg-dark text-terminal antialiased relative">
      {!booted && <BootSequence onDone={() => setBooted(true)} />}

      {/* Global overlays */}
      <div className="crt-overlay fixed inset-0" />
      <div className="noise fixed inset-0" />
      <div className="vignette fixed inset-0" />
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
        <div className="scanline-bar" />
      </div>
      <CursorGlow />

      {/* HUD frame markers */}
      <div className="pointer-events-none fixed inset-0 z-30">
        <Corner className="top-3 left-3" />
        <Corner className="top-3 right-3 rotate-90" />
        <Corner className="bottom-3 right-3 rotate-180" />
        <Corner className="bottom-3 left-3 -rotate-90" />
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-bg-dark/85 backdrop-blur-sm border-b border-terminal/20">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold tracking-tighter flicker">[ SYS.NULL_STR ]</span>
            <div className="hidden sm:block h-3 w-px bg-terminal/30" />
            <span className="hidden sm:block text-[10px] text-terminal/60">EST. 2024_v2.0.4</span>
          </div>
          <nav className="flex items-center gap-8">
            <a href="#work" className="text-xs hover:text-white transition-colors">DIRECTORY</a>
            <a href="#about" className="text-xs hover:text-white transition-colors">ARCHIVE</a>
            <a href="#contact" className="text-xs hover:text-white transition-colors">COMMS</a>
          </nav>
          <div className="hidden md:flex items-center gap-3 text-[10px] text-terminal/60">
            <span className="size-1.5 bg-terminal animate-pulse" />
            <Clock />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-20 pb-40 relative z-10">
        {/* HERO */}
        <section className="mb-32">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-2 py-1 bg-terminal/10 border border-terminal/30 mb-8">
                <div className="size-2 bg-terminal animate-pulse" />
                <span className="text-[10px] uppercase tracking-widest">Status: Online / Decrypting</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-medium tracking-tighter leading-none mb-8 text-balance">
                <ScrambleText as="div" text="SYSTEM ARCHITECT" trigger="mount" duration={700} />
                <ScrambleText
                  as="div"
                  text="KAIRO_V0ID"
                  trigger="mount"
                  duration={1100}
                  className="text-white"
                />
              </h1>
              <p className="max-w-[52ch] text-terminal-dim text-pretty leading-relaxed mb-10">
                Building resilient digital infrastructure for the post-physical era. Specialized in
                high-throughput neural interfaces and hardened cryptographic protocols. No dependencies,
                no legacy.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <a
                  href="#contact"
                  className="h-10 px-6 inline-flex items-center bg-terminal text-bg-dark text-sm font-medium ring-1 ring-terminal hover:bg-terminal-bright transition-all active:scale-95 glow-pulse"
                >
                  INITIATE_CONTACT
                </a>
                <a
                  href="#work"
                  className="h-10 px-6 inline-flex items-center border border-terminal/40 text-terminal text-sm font-medium hover:bg-terminal/10 transition-colors"
                >
                  VIEW_LOGS
                </a>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col justify-end">
              <div className="border-l border-terminal/30 pl-6 py-2">
                <div className="text-[10px] mb-3 text-terminal/50">// SYSTEM_STATS</div>
                <div className="space-y-1.5">
                  <Stat k="CORES" v="08" />
                  <Stat k="LOAD" v="2.44ms" />
                  <Stat k="LOC" v="14,502" />
                  <Stat k="UPTIME" v="99.99%" />
                  <div className="mt-4 h-1 bg-terminal/10 w-full">
                    <div className="h-full bg-terminal w-[65%]" />
                  </div>
                  <div className="flex justify-between text-[9px] text-terminal/40 pt-1">
                    <span>MEM_USED</span>
                    <span>65 / 100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE TICKER */}
        <section className="mb-32 border-y border-terminal/15 bg-terminal/[0.02] overflow-hidden">
          <div className="flex whitespace-nowrap py-3 marquee text-[11px] tracking-[0.3em] text-terminal/70">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex shrink-0">
                {["AVAILABLE FOR Q3_2026 CONTRACTS", "REMOTE / UTC+9", "SIGNAL: OPTIMAL", "NO_DEPENDENCIES", "RAW.FOCUSED.FAST", "BUILT FROM PRIMITIVES", "ZERO LEGACY"].map((t, i) => (
                  <span key={i} className="px-8 flex items-center gap-8">
                    <span className="size-1 bg-terminal" /> {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="work" className="mb-32 scroll-mt-20">
          <div className="flex items-end justify-between mb-12 border-b border-terminal/15 pb-4">
            <h2 className="text-xl font-medium">SELECTED_WORK.exe</h2>
            <span className="text-[10px] text-terminal/50">004_ITEMS_FOUND</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-terminal/15 border border-terminal/15">
            {PROJECTS.map((p) => (
              <article
                key={p.id}
                className="group bg-bg-dark p-8 hover:bg-terminal/[0.03] transition-colors relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="text-[10px] text-terminal-dim mb-1">[ {p.tag} ]</div>
                    <ScrambleText
                      as="h3"
                      text={p.name}
                      trigger="hover"
                      duration={500}
                      className="text-lg font-medium text-white"
                    />
                  </div>
                  <div className="text-[10px] border border-terminal/30 px-2 py-0.5">{p.id}</div>
                </div>
                <div className="w-full aspect-video bg-terminal/5 ring-1 ring-terminal/15 mb-8 overflow-hidden relative">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={1280}
                    height={720}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute bottom-2 left-2 text-[9px] tracking-widest text-terminal/70 bg-bg-dark/70 px-1.5 py-0.5">
                    {p.label}
                  </div>
                </div>
                <p className="text-sm text-terminal-dim max-w-[44ch] mb-6 leading-relaxed">{p.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[9px] px-2 py-0.5 border border-terminal/20">
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS GRID */}
        <section className="mb-32">
          <div className="flex items-end justify-between mb-8 border-b border-terminal/15 pb-4">
            <h2 className="text-xl font-medium">CAPABILITIES.cfg</h2>
            <span className="text-[10px] text-terminal/50">016_MODULES_LOADED</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-terminal/15 border border-terminal/15">
            {SKILLS.map((s) => (
              <div key={s.k} className="bg-bg-dark p-6">
                <div className="text-[10px] text-terminal-dim mb-4">// {s.k}</div>
                <ul className="space-y-1.5">
                  {s.v.map((item) => (
                    <li key={item} className="text-sm text-white flex items-center gap-2">
                      <span className="size-1 bg-terminal" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mb-32 grid grid-cols-12 gap-8 items-center scroll-mt-20">
          <div className="col-span-12 md:col-span-5">
            <div className="aspect-square bg-terminal/5 ring-1 ring-terminal/15 relative p-4">
              <div className="w-full h-full overflow-hidden bg-neutral-900">
                <img
                  src={identityImg}
                  alt="Identity probe"
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover grayscale-[40%] contrast-110"
                />
              </div>
              <div className="absolute -top-2 -right-2 size-4 bg-terminal" />
              <div className="absolute -bottom-2 -left-2 size-4 border border-terminal" />
              <div className="absolute top-2 left-2 text-[9px] bg-bg-dark/80 text-terminal px-1.5 py-0.5 border border-terminal/30">
                IDENTITY_PROBE • 0xKAIRO
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="text-[10px] text-terminal/50 mb-4">&gt; WHO_AM_I?</div>
            <ScrambleText
              as="div"
              text="A developer raised in the static, designing interfaces for the next iteration of the web."
              trigger="view"
              duration={1400}
              className="text-xl md:text-2xl font-medium leading-relaxed text-pretty text-white mb-6"
            />
            <div className="text-sm text-terminal-dim space-y-4 max-w-[60ch] leading-relaxed">
              <p>
                I operate at the intersection of performance and aesthetics. My work focuses on
                low-latency systems that don&apos;t sacrifice visual fidelity. The future of the web
                is raw, focused, and uncomfortably fast.
              </p>
              <p>
                Current coordinates: 35.6895° N, 139.6917° E. Operating on a strict UTC+9 cycle.
                Currently consulting for two infrastructure teams; accepting one new engagement for
                Q3 2026.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <footer id="contact" className="border-t border-terminal/15 pt-16 scroll-mt-20">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div>
              <div className="text-[10px] text-terminal/50 mb-6 uppercase tracking-widest">
                Establish Connection
              </div>
              <a
                href="mailto:hello@kairo.v0id"
                className="text-3xl md:text-5xl font-medium text-white hover:text-terminal transition-colors break-all"
              >
                <ScrambleText as="span" text="HELLO@KAIRO.V0ID" trigger="hover" duration={600} />
              </a>
              <div className="mt-6 text-[11px] text-terminal-dim">
                PGP_FINGERPRINT: 0xA4F3 7C29 9B81 442E 0F1A — verify before transmit.
              </div>
            </div>
            <div className="flex gap-16">
              <div className="space-y-2">
                <div className="text-[10px] text-terminal/50">NODES</div>
                <div className="flex flex-col gap-1">
                  <a href="#" className="text-xs hover:text-white transition-colors">GITHUB</a>
                  <a href="#" className="text-xs hover:text-white transition-colors">LINKEDIN</a>
                  <a href="#" className="text-xs hover:text-white transition-colors">READ.CV</a>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-[10px] text-terminal/50">PROTOCOLS</div>
                <div className="flex flex-col gap-1 text-[11px] text-terminal-dim">
                  <span>TCP/IP</span>
                  <span>SSH_ENCRYPTED</span>
                  <span>P2P_ONLY</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24 flex justify-between items-end text-[9px] text-terminal/40">
            <div>© 2026 KAIRO_V0ID // NO RIGHTS RESERVED</div>
            <div className="text-right">
              SYSTEM_STABLE: 99.99% UP
              <br />
              SIGNAL_STRENGTH: OPTIMAL
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between text-[11px]">
      <span className="text-terminal/60">{k}:</span>
      <span className="text-white">{v}</span>
    </div>
  );
}

function Corner({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute size-6 text-terminal/40 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M2 8 V2 H8" />
    </svg>
  );
}