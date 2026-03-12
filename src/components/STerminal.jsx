import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { useState, useEffect, useRef } from "react";
import { Input } from "./ui/input";

const STerminal = () => {
  const [input, setInput] = useState("");
  const [executionHistory, setExecutionHistory] = useState([
    <TypingAnimation key={"welcome"} className="font-semibold">
      $ Type 'ls' for more info
    </TypingAnimation>,
  ]);

  const terminalRef = useRef(null);

  const handleCommand = (cmd) => {
    // Add typed command to history
    setExecutionHistory((prev) => [
      ...prev,
      <TypingAnimation key={`cmd-${Date.now()}`}>{cmd}</TypingAnimation>,
    ]);

    // Command responses with timeout
    setTimeout(() => {
      switch (cmd.toLowerCase().trim()) {
        case "ls":
          setExecutionHistory((prev) => [
            ...prev,
            <AnimatedSpan key="ls1" delay={100}>
              whoami
            </AnimatedSpan>,
            <AnimatedSpan key="ls2" delay={200}>
              skills
            </AnimatedSpan>,
            <AnimatedSpan key="ls3" delay={300}>
              projects
            </AnimatedSpan>,
            <AnimatedSpan key="ls4" delay={400}>
              contact
            </AnimatedSpan>,
            <AnimatedSpan key="ls5" delay={400}>
              whoareyou
            </AnimatedSpan>,
          ]);
          break;

        case "whoami":
          setExecutionHistory((prev) => [
            ...prev,
            <AnimatedSpan key="whoami">
              Rohit Singh Negi - Full Stack Developer 🚀
            </AnimatedSpan>,
          ]);
          break;

        case "skills":
          setExecutionHistory((prev) => [
            ...prev,
            // Frontend
            <AnimatedSpan
              key="html"
              delay={100}
              className="flex items-center gap-2"
            >
              <span className="text-orange-400 text-lg">⟐</span>
              <span>html</span>
            </AnimatedSpan>,

            <AnimatedSpan
              key="css"
              delay={200}
              className="flex items-center gap-2"
            >
              <span className="text-blue-400 text-lg">◇</span>
              <span>css</span>
            </AnimatedSpan>,

            <AnimatedSpan
              key="tailwind"
              delay={300}
              className="flex items-center gap-2"
            >
              <span className="text-teal-400 text-lg">💨</span>
              <span>tailwind css</span>
            </AnimatedSpan>,

            <AnimatedSpan
              key="shadcn"
              delay={400}
              className="flex items-center gap-2"
            >
              <span className="text-slate-300 text-lg">⚡</span>
              <span>shadcn/ui</span>
            </AnimatedSpan>,

            <AnimatedSpan
              key="react"
              delay={500}
              className="flex items-center gap-2"
            >
              <span className="text-cyan-400 text-lg">⚛️</span>
              <span>react</span>
            </AnimatedSpan>,

            // Backend
            <AnimatedSpan
              key="nodejs"
              delay={600}
              className="flex items-center gap-2"
            >
              <span className="text-green-400 text-lg">🟢</span>
              <span>nodejs</span>
            </AnimatedSpan>,

            <AnimatedSpan
              key="express"
              delay={700}
              className="flex items-center gap-2"
            >
              <span className="text-gray-300 text-lg">🚀</span>
              <span>express</span>
            </AnimatedSpan>,

            // Database
            <AnimatedSpan
              key="postgresql"
              delay={800}
              className="flex items-center gap-2"
            >
              <span className="text-blue-600 text-lg">🐘</span>
              <span>postgresql</span>
            </AnimatedSpan>,

            <AnimatedSpan
              key="mongodb"
              delay={900}
              className="flex items-center gap-2"
            >
              <span className="text-green-600 text-lg">🟢</span>
              <span>mongodb</span>
            </AnimatedSpan>,

            // DevOps
            <AnimatedSpan
              key="docker"
              delay={1000}
              className="flex items-center gap-2"
            >
              <span className="text-blue-500 text-lg">🐳</span>
              <span>docker</span>
            </AnimatedSpan>,

            <AnimatedSpan
              key="git"
              delay={1100}
              className="flex items-center gap-2"
            >
              <span className="text-orange-500 text-lg">🐙</span>
              <span>git/github</span>
            </AnimatedSpan>,

            <AnimatedSpan
              key="vercel"
              delay={1200}
              className="flex items-center gap-2"
            >
              <span className="text-slate-200 text-lg">⚡</span>
              <span>vercel</span>
            </AnimatedSpan>,
          ]);
          break;

        case "projects":
          setExecutionHistory((prev) => [
            ...prev,
            <AnimatedSpan key="project1">📁 Nova Designs Ltd</AnimatedSpan>,
            <AnimatedSpan key="project2">📁 URL Shortener</AnimatedSpan>,
            <AnimatedSpan key="project3">📁 Portfolio v2</AnimatedSpan>,
          ]);
          break;

        case "whoareyou":
          setExecutionHistory((prev)=>[
            ...prev,
            <AnimatedSpan key="iam">You are a awesome human being ❤️. Do check out my porfolio please.</AnimatedSpan>
          ]);
          break;
        
        case "contact":
          setExecutionHistory((prev)=>[
            ...prev,
            <AnimatedSpan key={'mobileno'}>+91 7668266134</AnimatedSpan>,
            <AnimatedSpan key={'email'}>developmentbyrohit@gmail.com</AnimatedSpan>,
            <AnimatedSpan key={'insta'}>@rohitsinghwho - instagram</AnimatedSpan>,
          ]);
          break;
        default:
          setExecutionHistory((prev) => [
            ...prev,
            <AnimatedSpan key={`error-${Date.now()}`}>
              sh: {cmd}: command not found
            </AnimatedSpan>,
          ]);
      }
    }, 500);

    setInput("");
  };

  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  }, [executionHistory]);

  return (
    <div className="w-full">
      <Terminal ref={terminalRef} className="overflow-y-scroll">
        {executionHistory}

        {/* Input Prompt */}
        <div className="flex items-center  pt-2">
          {"$"}
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && input.trim() && handleCommand(input)
            }
            className="flex-1 bg-transparent border-none h-6 py-0 text-emerald-400 font-mono text-sm focus-visible:ring-0 shadow-none"
          />
        </div>
      </Terminal>
    </div>
  );
};

export default STerminal;
