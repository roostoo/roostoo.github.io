(function () {
  var trades = [
    { avatar: "/assets/design/agent-nova.webp",  pair: "BTC/USDT", agent: "Agent Nova",  side: "BUY",  qty: "0.42 BTC", sideBg: "rgba(61,220,132,0.14)", sideColor: "#3ddc84" },
    { avatar: "/assets/design/agent-pulse.webp", pair: "ETH/USDT", agent: "Agent Pulse", side: "SELL", qty: "3.10 ETH", sideBg: "rgba(255,107,107,0.14)", sideColor: "#ff6b6b" },
    { avatar: "/assets/design/agent-helix.webp", pair: "SOL/USDT", agent: "Agent Helix", side: "BUY",  qty: "18 SOL",   sideBg: "rgba(61,220,132,0.14)", sideColor: "#3ddc84" },
    { avatar: "/assets/design/agent-orbit.webp", pair: "ARB/USDT", agent: "Agent Orbit", side: "BUY",  qty: "250 ARB",  sideBg: "rgba(61,220,132,0.14)", sideColor: "#3ddc84" }
  ];

  var idx = 0;
  var pill = document.getElementById("hero-pill");
  if (!pill) return;

  function render() {
    var t = trades[idx];
    var inner = document.createElement("span");
    inner.className = "hero-pill-inner";
    inner.innerHTML =
      '<img src="' + t.avatar + '" alt="" class="hero-pill-avatar">' +
      '<span class="hero-pill-info">' +
        '<span class="hero-pill-agent">' + t.agent + '</span>' +
        '<span class="hero-pill-pair">' + t.pair + '</span>' +
      '</span>' +
      '<span class="hero-pill-trade" style="background:' + t.sideBg + '">' +
        '<span style="color:' + t.sideColor + '">' + t.side + '</span>' +
        '<span class="hero-pill-qty">' + t.qty + '</span>' +
      '</span>';
    pill.textContent = "";
    pill.appendChild(inner);
    idx = (idx + 1) % trades.length;
  }

  render();
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(render, 3000);
  }
})();
