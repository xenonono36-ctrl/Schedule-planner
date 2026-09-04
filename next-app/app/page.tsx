"use client"

import { useState } from "react"

import Ferrofluid from "@/components/Ferrofluid"
import Lightfall from "@/components/Lightfall"

export default function Page() {
  const [theme, setTheme] = useState<"lightfall" | "ferrofluid">("lightfall")

  return (
    <main className="ferro-page" data-theme={theme}>
      <div className="ferro-background" aria-hidden="true">
        {theme === "lightfall" ? (
          <Lightfall
            colors={["#f4eee2", "#c9922a", "#5b8a87", "#c1554d"]}
            backgroundColor="#0d1114"
            speed={0.35}
            streakCount={4}
            streakWidth={1.2}
            streakLength={1.4}
            glow={1.35}
            density={0.8}
            twinkle={0.7}
            zoom={3.2}
            backgroundGlow={0.35}
            opacity={0.82}
            mouseStrength={0.8}
            mouseRadius={0.7}
            mouseDampening={0.2}
          />
        ) : (
          <Ferrofluid
            colors={["#f4eee2", "#c9922a", "#5b8a87", "#c1554d"]}
            speed={0.28}
            scale={1.35}
            turbulence={1.2}
            fluidity={0.16}
            glow={3.2}
            opacity={1}
            mouseStrength={1.35}
            mouseRadius={0.42}
            mouseDampening={0.2}
          />
        )}
      </div>
      <div className="theme-switcher" role="group" aria-label="Background theme">
        <button
          type="button"
          className={theme === "lightfall" ? "active" : ""}
          aria-pressed={theme === "lightfall"}
          onClick={() => setTheme("lightfall")}
        >
          Lightfall
        </button>
        <button
          type="button"
          className={theme === "ferrofluid" ? "active" : ""}
          aria-pressed={theme === "ferrofluid"}
          onClick={() => setTheme("ferrofluid")}
        >
          Ferrofluid
        </button>
      </div>
      <iframe
        className="ledger-frame"
        src="/study-ledger.html"
        title="Exam Ledger"
      />
    </main>
  )
}
