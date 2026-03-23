"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface LaunchPageProps {
  onLaunch: () => void;
}

export default function LaunchPage({ onLaunch }: LaunchPageProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const safeCountdown = countdown ?? 0;
  const [showParticles, setShowParticles] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (countdown === null) return;

    // if (countdown === 0) {
    //   const timeout = setTimeout(() => {
    //     window.location.replace("https://www.innovatup.me/");
    //   }, 900);

    if (countdown === 0) {
      setShowParticles(true); // ensure particles explode

      const timeout = setTimeout(() => {
        window.location.replace("https://www.innovatup.me/");
      }, 1300); // IMPORTANT: give time for blast

      return () => clearTimeout(timeout);
    }
    //   return () => clearTimeout(timeout);
    // }

    const timer = setTimeout(() => {
      setCountdown((prev) => (prev !== null ? prev - 1 : null));
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        // Only reset when coming from back/forward cache
        setCountdown(null);
        setIsAnimating(false);
        setShowParticles(false);
      }
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);
  useEffect(() => {
    setCountdown(null);
    setIsAnimating(false);
    setShowParticles(false);
  }, []);

  const handleLaunch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsAnimating(true);
    setShowParticles(true);
    setTimeout(() => {
      setCountdown(5);
    }, 300);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-black to-slate-900">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(255,0,0,.05) 25%, rgba(255,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(255,0,0,.05) 75%, rgba(255,0,0,.05) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(255,0,0,.05) 25%, rgba(255,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(255,0,0,.05) 75%, rgba(255,0,0,.05) 76%, transparent 77%, transparent)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Particles */}
      {showParticles && (
        <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${1 + Math.random() * 1.5}s ease-out forwards`,
                opacity: 0.8,
              }}
            />
          ))}
        </div>
      )}

      {/* Curtain Left */}
      <div
        suppressHydrationWarning
        className={`absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-slate-950 via-slate-900 to-transparent transition-all duration-1000 ease-in-out z-20 ${
          isAnimating ? "-translate-x-full" : "translate-x-0"
        } ${!isAnimating ? "pointer-events-auto" : "pointer-events-none"}`}
        style={{
          boxShadow: isAnimating
            ? "none"
            : "inset -30px 0 60px rgba(0,0,0,0.8), inset -80px 0 120px rgba(0,0,0,0.6)",
        }}
      />

      {/* Curtain Right */}
      <div
        suppressHydrationWarning
        className={`absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-slate-950 via-slate-900 to-transparent transition-all duration-1000 ease-in-out z-20 ${
          isAnimating ? "translate-x-full" : "translate-x-0"
        } ${!isAnimating ? "pointer-events-auto" : "pointer-events-none"}`}
        style={{
          boxShadow: isAnimating
            ? "none"
            : "inset 30px 0 60px rgba(0,0,0,0.8), inset 80px 0 120px rgba(0,0,0,0.6)",
        }}
      />

      {/* Center Content */}
      <div
        suppressHydrationWarning
        className="relative w-full h-full flex flex-col items-center justify-center z-50"
      >
        {/* Main Content */}
        {!isAnimating ? (
          <div className="text-center px-4 max-w-2xl animate-fade-in">
            {/* Logo/Icon */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-white/50 rounded-full blur-3xl" />
                <div className="relative w-28 h-28 md:w-36 md:h-36 bg-white rounded-full flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 text-balance leading-tight">
              Where Ideas{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Become Reality
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-300 mb-12 text-balance leading-relaxed">
              Welcome to INNOVATUP — Empowering the next generation of builders
              and founders
            </p>

            {/* Launch Button */}
            <button
              onClick={handleLaunch}
              className="relative group text-lg px-10 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95 shadow-lg hover:shadow-cyan-500/50"
            >
              <span className="relative z-10 block">Launch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
            </button>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
        ) : (
          // safeCountdown Display
          <div suppressHydrationWarning className="text-center z-20">
            {safeCountdown === 0 && (
              <div className="absolute inset-0 bg-white animate-flash z-[999]" />
            )}
            <div className="relative inline-block">
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle
                  cx="112"
                  cy="112"
                  r="100"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="4"
                  fill="none"
                />
                <circle
                  cx="112"
                  cy="112"
                  r="100"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray={628}
                  strokeDashoffset={628 * (safeCountdown / 5)}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-linear"
                />
                <defs>
                  <linearGradient id="gradient">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>
              {/* Accelerating glow intensity - gets faster as safeCountdown decreases */}
              <div
                suppressHydrationWarning
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-3xl"
                style={{
                  animation: `pulse-glow ${Math.max(0.4, 2 - (5 - safeCountdown) * 0.3)}s ease-in-out infinite`,
                  opacity: Math.min(1, 0.4 + (5 - safeCountdown) * 0.15),
                }}
              />

              {/* Second ring with accelerating animation */}
              <div
                suppressHydrationWarning
                className="absolute inset-4 bg-gradient-to-r from-cyan-500/30 to-purple-600/30 rounded-full blur-2xl"
                style={{
                  animation: `pulse-glow ${Math.max(0.5, 2.5 - (5 - safeCountdown) * 0.35)}s ease-in-out infinite`,
                  opacity: Math.min(1, 0.3 + (5 - safeCountdown) * 0.12),
                }}
              />

              {/* Main safeCountdown circle with dynamic shadow */}
              <div
                suppressHydrationWarning
                className="relative w-56 h-56 rounded-full border-4 flex items-center justify-center bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl"
                style={{
                  borderColor: `rgba(34, 211, 238, ${Math.min(1, 0.5 + (5 - safeCountdown) * 0.1)})`,
                  boxShadow: `0 0 ${40 + (5 - safeCountdown) * 20}px rgba(34, 211, 238, ${Math.min(0.8, 0.4 + (5 - safeCountdown) * 0.1)}), inset 0 0 60px rgba(34, 211, 238, ${Math.min(0.3, 0.1 + (5 - safeCountdown) * 0.05)})`,
                }}
              >
                <div className="text-center">
                  <p className="text-cyan-300 text-xs mb-4 uppercase tracking-widest font-bold text-shadow">
                    Opening Gates In
                  </p>
                  <p
                    className="text-8xl font-black bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    style={{
                      textShadow: `0 0 ${30 + (5 - safeCountdown) * 15}px rgba(34, 211, 238, ${Math.min(1, 0.5 + (5 - safeCountdown) * 0.12)})`,
                      animation: `pulse ${Math.max(0.3, 1 - (5 - safeCountdown) * 0.15)}s ease-in-out infinite`,
                    }}
                  >
                    {safeCountdown}
                  </p>
                </div>
              </div>

              {/* Pulsing rings that grow outward - speed increases */}
              {[...Array(3)].map((_, ringIndex) => (
                <div
                  suppressHydrationWarning
                  key={ringIndex}
                  className="absolute rounded-full border border-cyan-400"
                  style={{
                    width: `${224 + ringIndex * 40}px`,
                    height: `${224 + ringIndex * 40}px`,
                    top: `50%`,
                    left: `50%`,
                    transform: `translate(-50%, -50%)`,
                    opacity: Math.max(0, 0.4 - ringIndex * 0.1),
                    animation: `ring-pulse ${Math.max(0.8, 3 - (5 - safeCountdown) * 0.5)}s ease-out infinite`,
                    animationDelay: `${ringIndex * -0.3}s`,
                  }}
                />
              ))}
            </div>

            {/* Animated line underneath */}
            <div
              suppressHydrationWarning
              className="mt-16 flex justify-center gap-2"
            >
              {[...Array(5)].map((_, i) => (
                <div
                  suppressHydrationWarning
                  key={i}
                  className="h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full transition-all"
                  style={{
                    width: `${safeCountdown <= i ? "4px" : "20px"}`,
                    opacity: safeCountdown <= i ? 0.3 : 0.8,
                    transitionDuration: `${Math.max(0.1, 0.3 - (5 - safeCountdown) * 0.05)}s`,
                  }}
                />
              ))}
            </div>

            {/* Dynamic intensity text */}
            <p
              suppressHydrationWarning
              className="text-slate-300 mt-12 text-lg font-semibold"
              // style={{
              //   animation: `pulse ${Math.max(0.3, 0.8 - (5 - safeCountdown) * 0.1)}s ease-in-out infinite`,
              // }}
              style={{
                transform: `scale(${1 + (5 - safeCountdown) * 0.08})`,
                transition: "transform 0.3s ease",
                animation:
                  safeCountdown <= 2
                    ? "shake 0.3s infinite"
                    : `pulse ${Math.max(0.3, 1 - (5 - safeCountdown) * 0.15)}s ease-in-out infinite`,
              }}
            >
              {safeCountdown === 1
                ? "⚡ GATES OPENING! ⚡"
                : "Buckle up, the gates are opening..."}
            </p>
          </div>
        )}
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-cyan-500/5 to-transparent" />
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-100px) scale(0);
          }
        }
        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow:
              0 0 20px rgba(34, 211, 238, 0.5),
              0 0 40px rgba(168, 85, 247, 0.3);
          }
          50% {
            box-shadow:
              0 0 40px rgba(34, 211, 238, 0.8),
              0 0 80px rgba(168, 85, 247, 0.6);
          }
        }
        @keyframes ring-pulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.4);
            opacity: 0;
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }
        :global(.animate-fade-in) {
          animation: fade-in 0.8s ease-out;
        }
        :global(.animate-pulse-glow) {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        @keyframes shake {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(2px, -2px);
          }
          50% {
            transform: translate(-2px, 2px);
          }
          75% {
            transform: translate(2px, 2px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
        @keyframes flash {
          0% {
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        :global(.animate-flash) {
          animation: flash 0.7s ease-out;
        }
      `}</style>
    </div>
  );
}
