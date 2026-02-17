(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,42924,e=>{"use strict";var t=e.i(43476),i=e.i(71645),a=e.i(57688);e.s(["default",0,()=>{let e=(0,i.useRef)(null),s=(0,i.useRef)([]);return(0,i.useEffect)(()=>{let t,i=e.current;if(!i)return;let a=e=>{let t=(window.innerWidth/2-e.pageX)/25,a=(window.innerHeight/2-e.pageY)/25;i.style.transform=`rotateX(${55+a/2}deg) rotateZ(${-25+t/2}deg)`,s.current.forEach((e,i)=>{e&&(e.style.transform=`translateZ(${(i+1)*15}px) translate(${t*(i+1)*.2}px, ${a*(i+1)*.2}px)`)})};i.style.opacity="0",i.style.transform="rotateX(90deg) rotateZ(0deg) scale(0.8)";let r=setTimeout(()=>{i.style.transition="all 2.5s cubic-bezier(0.16, 1, 0.3, 1)",i.style.opacity="1",i.style.transform="rotateX(55deg) rotateZ(-25deg) scale(1)"},300);if("ontouchstart"in window||navigator.maxTouchPoints>0){let e=setTimeout(()=>{i.style.transition="none";let e=()=>{let a=Date.now()/1e3,r=8*Math.sin(.8*a)+4*Math.sin(1.3*a),n=6*Math.cos(.6*a)+3*Math.cos(1.1*a);i.style.transform=`rotateX(${55+n/2}deg) rotateZ(${-25+r/2}deg)`,s.current.forEach((e,t)=>{e&&(e.style.transform=`translateZ(${(t+1)*15}px) translate(${r*(t+1)*.2}px, ${n*(t+1)*.2}px)`)}),t=requestAnimationFrame(e)};e()},2800);return()=>{clearTimeout(r),clearTimeout(e),t&&cancelAnimationFrame(t)}}return window.addEventListener("mousemove",a),()=>{window.removeEventListener("mousemove",a),clearTimeout(r)}},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        :root {
          --bg: #0a0a0a;
          --silver: #e0e0e0;
          --accent: #ff3c00;
          --grain-opacity: 0.15;
        }

        .halide-body {
          position: relative;
          background-color: var(--bg);
          color: var(--silver);
          font-family: var(--font-syncopate), 'Syncopate', sans-serif;
          overflow: hidden;
          height: 100%;
          width: 100%;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .halide-grain {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none;
          z-index: 100;
          opacity: var(--grain-opacity);
        }

        .viewport {
          perspective: 2000px;
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
        }

        .canvas-3d {
          position: relative;
          width: min(800px, 90vw); height: min(500px, 60vh);
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .layer {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(224, 224, 224, 0.1);
          background-size: cover;
          background-position: center;
          transition: transform 0.5s ease;
        }

        .layer-1 { background-image: url('/bgimg.webp'); filter: grayscale(1) contrast(1.2) brightness(0.5); }
        .layer-2 { background-image: url('/bgimg.webp'); filter: grayscale(1) contrast(1.1) brightness(0.7); opacity: 0.6; mix-blend-mode: screen; }
        .layer-3 { background-image: url('/bgimg.webp'); filter: grayscale(1) contrast(1.3) brightness(0.8); opacity: 0.4; mix-blend-mode: overlay; }

        .contours {
          position: absolute;
          width: 200%; height: 200%;
          top: -50%; left: -50%;
          background-image: repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 40px, rgba(255,255,255,0.05) 41px, transparent 42px);
          transform: translateZ(120px);
          pointer-events: none;
        }

        .interface-grid {
          position: absolute;
          inset: 0;
          padding: 4rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto 1fr auto;
          z-index: 10;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .interface-grid {
            padding: 1.5rem;
          }
          .hero-bottom {
            flex-direction: column !important;
            gap: 1rem !important;
            align-items: flex-start !important;
          }
          .hero-bottom .cta-button {
            font-size: 0.85rem !important;
            padding: 0.75rem 1.5rem !important;
          }
        }

        .hero-title {
          grid-column: 1 / -1;
          align-self: center;
          mix-blend-mode: difference;
          max-width: 700px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          font-family: var(--font-display), var(--font-inter), sans-serif;
        }

        .hero-title .hero-headline {
          font-size: clamp(1.5rem, 3.5vw, 2.8rem);
          line-height: 1.15;
          font-weight: 700;
          letter-spacing: -0.03em;
          font-family: var(--font-display), sans-serif;
          margin: 0;
        }

        .hero-title .hero-sub {
          font-size: clamp(0.9rem, 1.5vw, 1.1rem);
          line-height: 1.7;
          font-weight: 400;
          opacity: 0.75;
          margin: 0;
        }

        .hero-points {
          display: flex;
          gap: 2rem;
          margin-top: 0.5rem;
        }

        .hero-point {
          flex: 1;
        }

        .hero-point-title {
          font-size: clamp(0.75rem, 1vw, 0.85rem);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin: 0 0 0.35rem;
          color: #ff3c00;
        }

        .hero-point-text {
          font-size: clamp(0.7rem, 0.9vw, 0.82rem);
          line-height: 1.55;
          opacity: 0.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .hero-points {
            flex-direction: column;
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .interface-grid {
            padding: 1rem;
          }
          .hero-title .hero-headline {
            font-size: 1.3rem;
          }
          .hero-title .hero-sub {
            font-size: 0.85rem;
          }
        }

        .scroll-hint {
          position: absolute;
          bottom: 2rem; left: 50%;
          width: 1px; height: 60px;
          background: linear-gradient(to bottom, var(--silver), transparent);
          animation: flow 2s infinite ease-in-out;
        }

        @keyframes flow {
          0%, 100% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
        }

        .cta-button:focus-visible {
          outline: 2px solid #ff6a33;
          outline-offset: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
          .canvas-3d { transition: none !important; }
          .layer { transition: none !important; }
          .scroll-hint { animation: none; }
        }
      `}),(0,t.jsxs)("div",{className:"halide-body",children:[(0,t.jsx)("svg",{style:{position:"absolute",width:0,height:0},children:(0,t.jsxs)("filter",{id:"grain",children:[(0,t.jsx)("feTurbulence",{type:"fractalNoise",baseFrequency:"0.65",numOctaves:"3"}),(0,t.jsx)("feColorMatrix",{type:"saturate",values:"0"})]})}),(0,t.jsx)("div",{className:"halide-grain",style:{filter:"url(#grain)"}}),(0,t.jsxs)("div",{className:"interface-grid",children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[(0,t.jsx)(a.default,{src:"/roostoo_icon.svg",alt:"Roostoo",width:44,height:44,className:"brand-icon"}),(0,t.jsx)("span",{className:"brand-wordmark",children:"ROOSTOO"})]}),(0,t.jsxs)("div",{style:{textAlign:"right",fontFamily:"monospace",color:"var(--accent)",fontSize:"0.7rem"},children:[(0,t.jsx)("div",{children:"AGENT x HUMAN"}),(0,t.jsx)("div",{children:"TRADING ARENA"})]}),(0,t.jsxs)("div",{className:"hero-title",children:[(0,t.jsxs)("p",{className:"hero-headline",children:[(0,t.jsx)("span",{style:{color:"#ff6a33"},children:"AI trading agents"})," are powerful – but only a few can build and deploy them safely."]}),(0,t.jsxs)("p",{className:"hero-sub",children:[(0,t.jsx)("span",{style:{color:"#ffffff"},children:"Roostoo"})," is the Agent × Human ",(0,t.jsx)("span",{style:{color:"#ff6a33"},children:"Trading Arena"})," – where humans and AI agents compete, learn, and earn together."]}),(0,t.jsxs)("div",{className:"hero-points",children:[(0,t.jsxs)("div",{className:"hero-point",children:[(0,t.jsx)("p",{className:"hero-point-title",children:"Agent access"}),(0,t.jsx)("p",{className:"hero-point-text",children:"Deploy custom AI agents without code. Earn when they outperform."})]}),(0,t.jsxs)("div",{className:"hero-point",children:[(0,t.jsx)("p",{className:"hero-point-title",children:"Zero risk start"}),(0,t.jsx)("p",{className:"hero-point-text",children:"Train in our real-time simulator before any capital is deployed."})]}),(0,t.jsxs)("div",{className:"hero-point",children:[(0,t.jsx)("p",{className:"hero-point-title",children:"Reputation"}),(0,t.jsx)("p",{className:"hero-point-text",children:"Level up XP, earn badges, unlock upside as your reputation grows."})]})]})]}),(0,t.jsxs)("div",{className:"hero-bottom",style:{gridColumn:"1 / -1",display:"flex",justifyContent:"space-between",alignItems:"flex-end"},children:[(0,t.jsx)("div",{style:{fontFamily:"var(--font-inter), sans-serif",fontSize:"0.85rem",maxWidth:"420px",lineHeight:1.6,opacity:.7},children:(0,t.jsx)("p",{children:"Where humans and AI agents compete, learn, and earn together."})}),(0,t.jsx)("a",{href:"#waitlist",className:"cta-button",style:{pointerEvents:"auto",background:"var(--silver)",color:"var(--bg)",padding:"1rem 2rem",textDecoration:"none",fontWeight:700,clipPath:"polygon(0 0, 100% 0, 100% 70%, 85% 100%, 0 100%)",transition:"0.3s"},children:"JOIN WAITLIST"})]})]}),(0,t.jsx)("div",{className:"viewport",children:(0,t.jsxs)("div",{className:"canvas-3d",ref:e,children:[(0,t.jsx)("div",{className:"layer layer-1",ref:e=>{e&&(s.current[0]=e)}}),(0,t.jsx)("div",{className:"layer layer-2",ref:e=>{e&&(s.current[1]=e)}}),(0,t.jsx)("div",{className:"layer layer-3",ref:e=>{e&&(s.current[2]=e)}}),(0,t.jsx)("div",{className:"contours"})]})}),(0,t.jsx)("div",{className:"scroll-hint"})]})]})}])},58236,e=>{"use strict";var t=e.i(43476),i=e.i(57688);let a=[{src:"/logos/bitget.webp",alt:"Bitget"},{src:"/logos/Jane_Street_Capital_Logo.svg.webp",alt:"Jane Street Capital"},{src:"/logos/UPbit_Logo.svg.webp",alt:"UPbit"},{src:"/logos/Flow_Traders_Logo.webp",alt:"Flow Traders"},{src:"/logos/HSBC_logo_(2018).svg.webp",alt:"HSBC"},{src:"/logos/f81c05_c9e7422bdf1d422f8e18d8835332fa0d~mv2.webp",alt:"HashKey Exchange"},{src:"/logos/university-of-southern-california-usc-vector-logo.webp",alt:"USC"},{src:"/logos/IEEE_logo.webp",alt:"IEEE"},{src:"/logos/Logo_for_Imperial_College_London.svg.webp",alt:"Imperial College London"},{src:"/logos/iit-delhi.webp",alt:"IIT Delhi"}];e.s(["default",0,()=>{let e=[...a,...a];return(0,t.jsxs)("section",{className:"logo-section",children:[(0,t.jsx)("div",{className:"logo-section-inner",children:(0,t.jsxs)("h2",{className:"logo-section-title",children:["Backed by ",(0,t.jsx)("span",{style:{color:"#ff6a33"},children:"300+"})," partners powering"," ",(0,t.jsx)("span",{style:{color:"#ffffff"},children:"trading competitions"})]})}),(0,t.jsx)("div",{className:"logo-track-wrapper",children:(0,t.jsx)("div",{className:"logo-track",children:e.map((e,a)=>(0,t.jsx)("div",{className:"logo-card",children:(0,t.jsx)(i.default,{src:e.src,alt:e.alt,className:"logo-card-img",width:160,height:40,loading:"lazy"})},a))})})]})}])},83485,e=>{"use strict";var t=e.i(43476);e.s(["default",0,()=>(0,t.jsx)("section",{className:"waitlist-section",id:"waitlist",children:(0,t.jsxs)("div",{className:"waitlist-inner",children:[(0,t.jsx)("span",{className:"waitlist-label",children:"Early access"}),(0,t.jsx)("h2",{className:"waitlist-title",children:"Join the Agents Waitlist"}),(0,t.jsxs)("p",{className:"waitlist-copy",children:["Priority access to new ",(0,t.jsx)("span",{style:{color:"#ffffff"},children:"Agent releases"})," and live trading ",(0,t.jsx)("span",{style:{color:"#ffffff"},children:"Agent competitions"})," featuring stablecoin prize pools. ",(0,t.jsx)("span",{style:{color:"#ffffff"},children:"Reserve your Agent now."})]}),(0,t.jsxs)("form",{action:"https://gmail.us16.list-manage.com/subscribe/post?u=8c7e9b9d6e1e7d5bb21fb0f8e&id=5e8ec9568e&f_id=00be20e1f0",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:"waitlist-form",target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)("label",{htmlFor:"waitlist-email",className:"visually-hidden",children:"Email address"}),(0,t.jsxs)("div",{className:"waitlist-name-row",children:[(0,t.jsx)("label",{htmlFor:"waitlist-fname",className:"visually-hidden",children:"Name"}),(0,t.jsx)("input",{type:"text",name:"FNAME",id:"waitlist-fname",className:"waitlist-input waitlist-input-half",placeholder:"Name",autoComplete:"name",style:{width:"100%"}})]}),(0,t.jsxs)("div",{className:"waitlist-input-group",children:[(0,t.jsx)("input",{type:"email",name:"EMAIL",id:"waitlist-email",className:"waitlist-input",placeholder:"you@domain.com",required:!0,autoComplete:"email"}),(0,t.jsx)("button",{type:"submit",name:"subscribe",className:"waitlist-submit",children:"Notify Me"})]}),(0,t.jsx)("div",{className:"waitlist-honeypot","aria-hidden":"true",children:(0,t.jsx)("input",{type:"text",name:"b_8c7e9b9d6e1e7d5bb21fb0f8e_5e8ec9568e",tabIndex:-1,defaultValue:""})})]}),(0,t.jsx)("p",{className:"waitlist-hint",children:"No spam—just launches and invites."})]})})])}]);