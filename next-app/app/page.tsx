"use client"

import Ferrofluid from "@/components/Ferrofluid"

export default function Page() {
  return (
    <main className="ferro-page">
      <div className="ferro-background" aria-hidden="true">
        <Ferrofluid
          colors={["#f4eee2", "#c9922a", "#5b8a87", "#c1554d"]}
          speed={0.28}
          scale={1.35}
          turbulence={1.2}
          fluidity={0.16}
          glow={2.2}
          opacity={0.82}
          mouseStrength={1.35}
          mouseRadius={0.42}
          mouseDampening={0.2}
        />
      </div>
      <iframe
        className="ledger-frame"
        src="/study-ledger.html"
        title="Exam Ledger"
      />
    </main>
  )
}
