"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Check,
  ChevronLeft,
  FileCode,
  MoreHorizontal,
  Plus,
  Sparkles,
  Wrench,
} from "lucide-react";
import {
  MESSAGES,
  SKINS,
  STREAMING_REPLY,
  type Message,
  type Skin,
} from "./chat-data";

export default function Page() {
  const [skin, setSkin] = useState<Skin>("toss");

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-8"
      style={{
        background:
          "radial-gradient(ellipse at top, #1a1a1a 0%, #0a0a0a 60%)",
      }}
    >
      <SkinSwitcher skin={skin} setSkin={setSkin} />
      <PhoneFrame>
        <ChatScreen skin={skin} />
      </PhoneFrame>
      <Link
        href="/pricing"
        className="mt-6 text-xs text-white/50 hover:text-white/80 transition-colors"
      >
        View pricing demo →
      </Link>
    </div>
  );
}

function SkinSwitcher({
  skin,
  setSkin,
}: {
  skin: Skin;
  setSkin: (s: Skin) => void;
}) {
  return (
    <div
      className="mb-6 inline-flex items-center gap-1 p-1.5 rounded-full"
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(12px)",
      }}
    >
      {SKINS.map((s) => {
        const active = skin === s.id;
        return (
          <button
            key={s.id}
            onClick={() => setSkin(s.id)}
            className="relative px-4 py-1.5 text-xs font-semibold rounded-full transition-colors"
            style={{
              color: active ? "#fff" : "rgba(255,255,255,0.6)",
            }}
          >
            {active && (
              <motion.span
                layoutId="skin-pill-outer"
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    s.id === "toss"
                      ? "linear-gradient(135deg, #3182F6, #4A90F7)"
                      : s.id === "raycast"
                        ? "linear-gradient(135deg, #FF6363, #FF8E3C 30%, #E84A8E 65%, #A855F7)"
                        : "linear-gradient(135deg, #FF5E7E, #FFB84D 30%, #4ECDC4 65%, #6C5CE7)",
                }}
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative z-10">{s.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative"
      style={{
        width: "390px",
        height: "780px",
        padding: "12px",
        borderRadius: "52px",
        background:
          "linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)",
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.08), 0 50px 100px -20px rgba(0,0,0,0.8), 0 30px 60px -30px rgba(0,0,0,0.6)",
      }}
    >
      <div
        className="relative w-full h-full overflow-hidden"
        style={{ borderRadius: "40px" }}
      >
        {/* notch */}
        <div
          className="absolute top-2 left-1/2 -translate-x-1/2 z-50 h-6 w-28 rounded-full"
          style={{ background: "#000" }}
        />
        {children}
      </div>
    </div>
  );
}

function ChatScreen({ skin }: { skin: Skin }) {
  const [streamedWords, setStreamedWords] = useState<string[]>([]);
  const [showStreaming, setShowStreaming] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setStreamedWords([]);
    setShowStreaming(true);
    const words = STREAMING_REPLY.split(" ");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setStreamedWords(words.slice(0, i));
      scrollRef.current?.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
      if (i >= words.length) {
        clearInterval(id);
        setTimeout(() => setShowStreaming(false), 2200);
      }
    }, 75);
    return () => clearInterval(id);
  }, [skin]);

  return (
    <div
      data-skin={skin}
      className="w-full h-full flex flex-col"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <MobileHeader />

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 pt-4 pb-6">
        <div className="space-y-4">
          {MESSAGES.map((m, i) => (
            <MessageRow key={skin + m.id} message={m} index={i} />
          ))}
          {showStreaming && <StreamingMessage words={streamedWords} />}
        </div>
      </div>

      <MobileComposer />
    </div>
  );
}

function MobileHeader() {
  return (
    <header
      className="shrink-0 pt-12 pb-3 px-4 flex items-center gap-3 border-b"
      style={{ borderColor: "var(--border)" }}
    >
      <button
        className="h-9 w-9 flex items-center justify-center -ml-2"
        style={{ color: "var(--foreground)" }}
      >
        <ChevronLeft size={22} />
      </button>
      <div
        className="h-9 w-9 rounded-full flex items-center justify-center shrink-0"
        style={{
          background: "var(--gradient-brand)",
          color: "var(--brand-foreground)",
        }}
      >
        <Sparkles size={15} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[15px] font-semibold truncate leading-tight">
          StyleSeed
        </div>
        <div
          className="text-[11px] flex items-center gap-1.5 leading-tight mt-0.5"
          style={{ color: "var(--text-secondary)" }}
        >
          <motion.span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "#4ADE80" }}
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
          online · Sonnet 4.6
        </div>
      </div>
      <button
        className="h-9 w-9 flex items-center justify-center -mr-1"
        style={{ color: "var(--text-secondary)" }}
      >
        <MoreHorizontal size={20} />
      </button>
    </header>
  );
}

function MessageRow({
  message,
  index,
}: {
  message: Message;
  index: number;
}) {
  const isUser = message.role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`flex gap-2 ${isUser ? "flex-row-reverse" : "flex-row"} max-w-[88%]`}
      >
        {!isUser && (
          <div
            className="h-7 w-7 rounded-full shrink-0 flex items-center justify-center mt-auto"
            style={{
              background: "var(--gradient-brand)",
              color: "var(--brand-foreground)",
            }}
          >
            <Sparkles size={12} />
          </div>
        )}

        <div
          className={`min-w-0 flex flex-col gap-1.5 ${isUser ? "items-end" : "items-start"}`}
        >
          <div
            className="px-3.5 py-2.5 text-[14px] leading-snug"
            style={{
              background: isUser ? "var(--gradient-brand)" : "var(--card)",
              color: isUser
                ? "var(--brand-foreground)"
                : "var(--card-foreground)",
              border: isUser
                ? "1px solid transparent"
                : "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              borderBottomRightRadius: isUser ? "6px" : undefined,
              borderBottomLeftRadius: !isUser ? "6px" : undefined,
              boxShadow: isUser
                ? "var(--shadow-button)"
                : "var(--shadow-card)",
            }}
          >
            {message.text}
          </div>

          {!isUser && message.toolCall && (
            <ToolCallCard
              name={message.toolCall.name}
              detail={message.toolCall.detail}
              status={message.toolCall.status}
            />
          )}

          {!isUser && message.code && (
            <CodeBlock lang={message.code.lang} body={message.code.body} />
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ToolCallCard({
  name,
  detail,
  status,
}: {
  name: string;
  detail: string;
  status: "running" | "done";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.18 }}
      className="inline-flex items-center gap-2 px-2.5 py-1.5 text-[11px]"
      style={{
        background: "var(--brand-tint)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-md)",
        color: "var(--text-secondary)",
      }}
    >
      <Wrench size={11} style={{ color: "var(--brand)" }} />
      <span style={{ color: "var(--foreground)" }} className="font-medium">
        {name}
      </span>
      <span className="font-mono truncate max-w-[140px]">{detail}</span>
      {status === "done" && (
        <Check size={11} style={{ color: "var(--brand)" }} />
      )}
    </motion.div>
  );
}

function CodeBlock({ lang, body }: { lang: string; body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.22 }}
      className="overflow-hidden w-full max-w-full"
      style={{
        background: "var(--muted)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-md)",
      }}
    >
      <div
        className="px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider flex items-center gap-1.5"
        style={{
          color: "var(--text-secondary)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <FileCode size={10} />
        {lang}
      </div>
      <pre
        className="px-3 py-2 text-[10px] font-mono overflow-x-auto leading-relaxed"
        style={{ color: "var(--foreground)" }}
      >
        <code>{body}</code>
      </pre>
    </motion.div>
  );
}

function StreamingMessage({ words }: { words: string[] }) {
  const isTyping = words.length === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex justify-start"
    >
      <div className="flex gap-2 max-w-[88%]">
        <div
          className="h-7 w-7 rounded-full shrink-0 flex items-center justify-center mt-auto"
          style={{
            background: "var(--gradient-brand)",
            color: "var(--brand-foreground)",
          }}
        >
          <Sparkles size={12} />
        </div>
        <div
          className="px-3.5 py-2.5 text-[14px] leading-snug"
          style={{
            background: "var(--card)",
            color: "var(--card-foreground)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            borderBottomLeftRadius: "6px",
            boxShadow: "var(--shadow-card)",
            minHeight: "40px",
          }}
        >
          {isTyping ? (
            <TypingDots />
          ) : (
            <span>
              {words.map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: "inline-block", marginRight: "0.25em" }}
                >
                  {w}
                </motion.span>
              ))}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.9, repeat: Infinity }}
                style={{
                  display: "inline-block",
                  width: "2px",
                  height: "1em",
                  verticalAlign: "text-bottom",
                  marginLeft: "1px",
                  background: "var(--brand)",
                }}
              />
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1.5 h-5">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-2 w-2 rounded-full"
          style={{ background: "var(--brand)" }}
          animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function MobileComposer() {
  const [text, setText] = useState("");
  return (
    <div
      className="shrink-0 px-3 pt-3 pb-6 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div
        className="flex items-center gap-2 px-2 py-1.5"
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: "9999px",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <button
          className="h-8 w-8 flex items-center justify-center shrink-0 rounded-full"
          style={{
            background: "var(--brand-tint)",
            color: "var(--brand)",
          }}
        >
          <Plus size={16} />
        </button>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Message..."
          className="flex-1 bg-transparent outline-none text-[14px] py-1 min-w-0"
          style={{ color: "var(--foreground)" }}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          className="h-8 w-8 flex items-center justify-center shrink-0 rounded-full"
          style={{
            background: "var(--gradient-brand)",
            color: "var(--brand-foreground)",
            boxShadow: "var(--shadow-button)",
          }}
          aria-label="Send"
        >
          <ArrowUp size={15} strokeWidth={2.5} />
        </motion.button>
      </div>
    </div>
  );
}
