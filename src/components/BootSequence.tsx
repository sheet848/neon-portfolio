import { useEffect, useState } from "react";

const LINES = [
  "BIOS v2.0.4 — NULL_STR SYSTEMS",
  "Checking memory ............ 14502 OK",
  "Mounting /dev/neural0 ...... OK",
  "Loading kernel modules ..... OK",
  "Establishing uplink ........ 35.6895N 139.6917E",
  "Decrypting payload ......... ████████ 100%",
  "Identity verified: KAIRO_V0ID",
  "> entering userspace ...",
];

export function BootSequence({ onDone }: { onDone: () => void }) {
  const [idx, setIdx] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (idx >= LINES.length) {
      const t = setTimeout(() => {
        setHidden(true);
        onDone();
      }, 380);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setIdx((i) => i + 1), 180 + Math.random() * 160);
    return () => clearTimeout(t);
  }, [idx, onDone]);

  if (hidden) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-bg-dark text-terminal font-mono text-sm flex items-start justify-center p-8 overflow-hidden">
      <div className="w-full max-w-2xl pt-24">
        {LINES.slice(0, idx).map((l, i) => (
          <div key={i} className="leading-relaxed">
            <span className="text-terminal-dim">[{String(i).padStart(2, "0")}]</span> {l}
          </div>
        ))}
        <div className="leading-relaxed">
          <span className="text-terminal-dim">&gt;</span> <span className="caret">&nbsp;</span>
        </div>
      </div>
    </div>
  );
}
