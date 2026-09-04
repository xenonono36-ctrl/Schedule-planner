"use client"

import { useEffect, useRef, useState } from "react"

import Ferrofluid from "@/components/Ferrofluid"
import { GridScan } from "@/components/GridScan"
import Lightfall from "@/components/Lightfall"

export default function Page() {
  const [theme, setTheme] = useState<
    "lightfall" | "ferrofluid" | "gridscan"
  >("lightfall")
  const ledgerFrameRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    ledgerFrameRef.current?.contentWindow?.postMessage(
      { type: "background-theme", theme },
      "*",
    )
  }, [theme])

  return (
    <main className="ferro-page" data-theme={theme}>
      <div
        key={theme}
        className={`ferro-background ferro-background-${theme}`}
        aria-hidden="true"
      >
        {theme === "lightfall" ? (
          <Lightfall
            colors={["#A6C8FF", "#5227FF", "#FF9FFC"]}
            backgroundColor="#0A29FF"
            speed={0.5}
            streakCount={2}
            streakWidth={1}
            streakLength={1}
            glow={1}
            density={0.6}
            twinkle={1}
            zoom={3}
            backgroundGlow={0.5}
            opacity={1}
            mouseInteraction
            mouseStrength={0.5}
            mouseRadius={1}
            mouseDampening={0.15}
          />
        ) : theme === "ferrofluid" ? (
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
        ) : (
          <GridScan
            lineThickness={2.2}
            linesColor="#6fa9a5"
            scanColor="#b78cff"
            scanOpacity={0.9}
            gridScale={0.22}
            lineJitter={0.04}
            scanDirection="pingpong"
            scanDuration={2.6}
            scanDelay={1.2}
            scanGlow={1.2}
            scanSoftness={1.6}
            bloomIntensity={0.18}
            bloomThreshold={0.05}
            bloomSmoothing={0.35}
            noiseIntensity={0.004}
            enablePost
            enableWebcam={false}
            enableGyro={false}
            scanOnClick={false}
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
        <button
          type="button"
          className={theme === "gridscan" ? "active" : ""}
          aria-pressed={theme === "gridscan"}
          onClick={() => setTheme("gridscan")}
        >
          GridScan
        </button>
      </div>
      <iframe
        ref={ledgerFrameRef}
        className="ledger-frame"
        src="/study-ledger.html"
        title="Exam Ledger"
        onLoad={(event) =>
          event.currentTarget.contentWindow?.postMessage(
            { type: "background-theme", theme },
            "*",
          )
        }
      />
    </main>
  )
}
