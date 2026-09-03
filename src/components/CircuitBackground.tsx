export function CircuitBackground() {
  return (
    <div className="circuit-bg" aria-hidden="true">
      <svg
        className="circuit-svg"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMin slice"
      >
        <defs>
          {/* Névoa de aurora do Gemini */}
          <radialGradient id="gem-nebula" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--signal)" stopOpacity="0.75" />
            <stop offset="30%" stopColor="#2563eb" stopOpacity="0.5" />
            <stop offset="65%" stopColor="var(--ochre)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>

          {/* Superfície translúcida iridescente da gema */}
          <linearGradient id="gem-surface" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4FB6C4" stopOpacity="0.55" />
            <stop offset="35%" stopColor="#2563eb" stopOpacity="0.45" />
            <stop offset="65%" stopColor="#7c3aed" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--ochre)" stopOpacity="0.55" />
          </linearGradient>

          {/* Borda cristalina da gema */}
          <linearGradient id="gem-edge" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--signal)" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--ochre)" stopOpacity="0.95" />
          </linearGradient>

          {/* Facetas internas de reflexão */}
          <linearGradient id="gem-facet" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="var(--signal)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--ochre)" stopOpacity="0.7" />
          </linearGradient>

          <filter id="nebula-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="60" />
          </filter>
        </defs>

        {/* ========================================================= */}
        {/* NÚCLEO CENTRAL: GEMINI GEM (Astroid de 4 pontas com Aurora) */}
        {/* ========================================================= */}
        <g className="gemini-core" transform-origin="720 450">
          {/* Halo de luz difusa (Nebula cósmica ampla) */}
          <circle
            cx="720"
            cy="450"
            r="380"
            fill="url(#gem-nebula)"
            className="gem-halo"
            filter="url(#nebula-blur)"
          />

          {/* Trilha circular técnica ao redor do Gem (PCB ring) */}
          <circle
            cx="720"
            cy="450"
            r="230"
            stroke="var(--rule2)"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            className="gem-orbit-ring"
          />

          {/* Trilhas de conexão do Gemini aos barramentos laterais */}
          <path
            d="M 520 450 L 440 450 L 400 490 L 260 490"
            className="circuit-path gem-bus-left"
          />
          <path
            d="M 920 450 L 1000 450 L 1040 410 L 1180 410"
            className="circuit-path gem-bus-right"
          />
          <circle cx="440" cy="450" r="3" className="circuit-via" />
          <circle cx="400" cy="490" r="2.5" className="circuit-via" />
          <circle cx="1000" cy="450" r="3" className="circuit-via" />
          <circle cx="1040" cy="410" r="2.5" className="circuit-via" />

          {/* Gema Externa (Astroid clássico de 4 pontas do Gemini em escala generosa) */}
          <g className="gem-crystal" transform-origin="720 450">
            <path
              d="M 720 250 C 720 360.457 609.543 450 500 450 C 609.543 450 720 539.543 720 650 C 720 539.543 830.457 450 940 450 C 830.457 450 720 360.457 720 250 Z"
              fill="url(#gem-surface)"
              stroke="url(#gem-edge)"
              strokeWidth="2"
              className="gem-outer-shape"
            />

            {/* Gema Interna (Facetas concêntricas de refração) */}
            <path
              d="M 720 330 C 720 396.274 653.726 450 588 450 C 653.726 450 720 503.726 720 570 C 720 503.726 786.274 450 852 450 C 786.274 450 720 396.274 720 330 Z"
              fill="none"
              stroke="url(#gem-facet)"
              strokeWidth="1.2"
              strokeDasharray="3 4"
              className="gem-inner-facet"
            />

            {/* Linhas de prisma / faceta cruzadas */}
            <line
              x1="720"
              y1="250"
              x2="720"
              y2="650"
              stroke="url(#gem-facet)"
              strokeWidth="1"
              className="gem-facet-line"
            />
            <line
              x1="500"
              y1="450"
              x2="940"
              y2="450"
              stroke="url(#gem-facet)"
              strokeWidth="1"
              className="gem-facet-line"
            />

            {/* Vias elétricas nas 4 pontas da gema */}
            <circle cx="720" cy="250" r="4" className="gem-node node-top" />
            <circle cx="940" cy="450" r="4" className="gem-node node-right" />
            <circle cx="720" cy="650" r="4" className="gem-node node-bottom" />
            <circle cx="500" cy="450" r="4" className="gem-node node-left" />

            {/* Ponto de luz central pulsante (The Spark) */}
            <circle cx="720" cy="450" r="5" className="gem-center-spark" />
          </g>
        </g>

        {/* ========================================================= */}
        {/* TRILHAS DE CIRCUITO IMPRESSO LATERAIS (PCB TRACES)       */}
        {/* ========================================================= */}
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

        {/* Pacotes de dados no circuito */}
        <circle r="3.5" className="data-packet packet-1" />
        <circle r="3" className="data-packet packet-2" />
        <circle r="3.5" className="data-packet packet-3" />
      </svg>
    </div>
  )
}
