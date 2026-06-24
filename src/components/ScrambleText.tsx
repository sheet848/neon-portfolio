import { useEffect, useRef, useState } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#________ABCDEF0123456789";

interface Props {
  text: string;
  className?: string;
  trigger?: "mount" | "hover" | "view";
  duration?: number;
  as?: "span" | "div" | "h1" | "h2" | "h3" | "p" | "a";
}

export function ScrambleText({ text, className, trigger = "view", duration = 900, as: Tag = "span" }: Props) {
  const [out, setOut] = useState(text);
  const ref = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const run = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const reveal = Math.floor(t * text.length);
      let s = "";
      for (let i = 0; i < text.length; i++) {
        if (i < reveal || text[i] === " ") s += text[i];
        else s += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      setOut(s);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
      else setOut(text);
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    if (trigger === "mount") run();
    if (trigger === "view" && ref.current) {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && run()),
        { threshold: 0.4 },
      );
      io.observe(ref.current);
      return () => io.disconnect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const handlers =
    trigger === "hover"
      ? { onMouseEnter: run, onFocus: run }
      : {};

  return (
    <Tag
      ref={ref as never}
      className={className}
      {...handlers}
    >
      {out}
    </Tag>
  );
}
