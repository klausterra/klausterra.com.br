export function CircuitBackground() {
  return (
    <div className="circuit-bg" aria-hidden="true">
      {/* ========================================================= */}
      {/* AURORA BOREAL LÍQUIDA DO GEMINI (Orbes difusos em deriva) */}
      {/* ========================================================= */}
      <div className="aurora-wrap">
        <div className="aurora-orb orb-emerald" />
        <div className="aurora-orb orb-amber" />
        <div className="aurora-orb orb-cyan" />
      </div>

      {/* ========================================================= */}
      {/* TRILHAS TÉCNICAS DISCRETAS DE CIRCUITO (PCB Traces)       */}
      {/* ========================================================= */}
      <svg
        className="circuit-svg"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMin slice"
      >
        <g className="traces-left">
          <path
            d="M 60 -50 L 60 220 L 110 270 L 110 520 L 80 550 L 80 850"
            className="circuit-path trace-main"
          />
          <path
            d="M 80 180 L 140 240 L 140 460 L 120 480"
            className="circuit-path trace-sub"
          />
          <path
            d="M 30 380 L 80 430 L 80 620 L 130 670"
            className="circuit-path trace-sub"
          />
          <circle cx="60" cy="220" r="3" className="circuit-via" />
          <circle cx="110" cy="270" r="2.5" className="circuit-via" />
          <circle cx="110" cy="520" r="3.5" className="circuit-via" />
          <circle cx="80" cy="550" r="2.5" className="circuit-via" />
          <circle cx="140" cy="460" r="2.5" className="circuit-via" />
          <circle cx="130" cy="670" r="3" className="circuit-via" />
        </g>

        <g className="traces-right">
          <path
            d="M 1380 -50 L 1380 160 L 1330 210 L 1330 440 L 1370 480 L 1370 820"
            className="circuit-path trace-main"
          />
          <path
            d="M 1350 280 L 1310 320 L 1310 580 L 1340 610"
            className="circuit-path trace-sub"
          />
          <path
            d="M 1410 400 L 1370 440 L 1370 690 L 1320 740"
            className="circuit-path trace-sub"
          />
          <circle cx="1380" cy="160" r="3" className="circuit-via" />
          <circle cx="1330" cy="210" r="3.5" className="circuit-via" />
          <circle cx="1330" cy="440" r="2.5" className="circuit-via" />
          <circle cx="1370" cy="480" r="3" className="circuit-via" />
          <circle cx="1310" cy="580" r="2.5" className="circuit-via" />
          <circle cx="1320" cy="740" r="3" className="circuit-via" />
        </g>

        <path
          d="M 110 80 L 420 80 L 460 120 L 980 120 L 1020 80 L 1330 80"
          className="circuit-path trace-top"
        />
        <circle cx="420" cy="80" r="2.5" className="circuit-via" />
        <circle cx="460" cy="120" r="2.5" className="circuit-via" />
        <circle cx="980" cy="120" r="2.5" className="circuit-via" />
        <circle cx="1020" cy="80" r="2.5" className="circuit-via" />

        {/* Pacotes de dados lentos pelas trilhas */}
        <circle r="3.5" className="data-packet packet-1" />
        <circle r="3" className="data-packet packet-2" />
        <circle r="3.5" className="data-packet packet-3" />
      </svg>
    </div>
  )
}
