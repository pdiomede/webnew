  function logoChip(e){
    let chip;
    if(e.logo){
      chip = `<div class="logo-chip white${e.logoFull?' full':''}"><img src="${e.logo}" alt="${e.name||''}" data-init="${e.initials}" data-color="${e.color}"></div>`;
    } else if(e.domain){
      const cb='https://logo.clearbit.com/'+e.domain;
      const fav='https://www.google.com/s2/favicons?domain='+e.domain+'&sz=128';
      chip = `<div class="logo-chip white"><img src="${cb}" alt="${e.name||''}" data-fav="${fav}" data-init="${e.initials}" data-color="${e.color}"></div>`;
    } else {
      chip = `<div class="logo-chip" style="background:${e.color}">${e.initials}</div>`;
    }
    return e.url ? `<a class="logo-link" href="${e.url}" target="_blank" rel="noopener" aria-label="${e.name||''}">${chip}</a>` : chip;
  }
  function onLogoError(){
    const img=this;
    if(img.dataset.fav && !img.dataset.tried){ img.dataset.tried='1'; img.src=img.dataset.fav; return; }
    chipMono(img, img.dataset.init, img.dataset.color);
  }
  function chipMono(img, init, color){
    const chip=img.parentElement;
    chip.classList.remove('white');
    chip.style.background=color;
    chip.textContent=init;
  }

  // ---- Projects ----
  const projects = [
    {
      initials:"UR", color:"#0A1A2F", logo:"images/urlreporter.png", logoFull:true,
      name:"Url Reporter", url:"https://urlreporter.com",
      tagline:"Know what your URL leaks. Without touching it.",
      category:"Security · Web Tool",
      blurb:"Paste a public URL. We run 12 passive security scanners in parallel and return one graded report with live progress, top recommendations, and HTML or Markdown export."
    },
    {
      initials:"Mg", color:"#0E1626", logo:"images/magellan.jpg", logoFull:true,
      name:"Magellan", url:"https://magellan.money/",
      tagline:"Automated SOL/USDC Scalping Grid Trader on Solana, Powered by Jupiter",
      category:"Solana · Trading Bot",
      blurb:"An automated grid trading bot for fast-moving Solana markets. It places staggered buy orders to capture short-term price swings, with circuit breakers, stop-losses, daily loss limits, gas checks, and principal protection. A live dashboard tracks positions, P&L, and trades, while Telegram alerts enable remote monitoring and shutdown. Paper Mode tests strategies using live prices, simulated fees, and slippage before launch."
    },
    {
      initials:"HV", color:"#0E1F3D", logo:"images/homevaultlogo.jpg", logoFull:true,
      name:"HomeVault", url:"https://homevault.pro",
      tagline:"DeFi, Bitcoin, Fiat. One dashboard.",
      category:"Portfolio · Net Worth Tracker",
      blurb:"HomeVault tracks DeFi positions across 8 chains (EVM + Solana), native Bitcoin holdings, stablecoin balances at centralised exchanges, and traditional cash, stocks, and bonds, all from one self-hosted database. Deposits and withdrawals are tracked separately, so you always know exactly what you own and what is pure yield."
    },
    {
      initials:"GT", color:"#0A0E1F", logo:"images/graphtoolspro.jpg", logoFull:true,
      name:"Graph Tools Pro", url:"https://graphtools.pro/",
      tagline:"Useful dashboards for The Graph ecosystem",
      category:"Analytics · The Graph",
      blurb:"A suite of dashboards and analytics tools for The Graph ecosystem. Monitor network activity and indexer performance, track delegation and curation earnings, analyze query fees, review disputes, manage vesting, and discover subgraphs from one hub. Built for ecosystem participants, these tools turn complex onchain data into clear, actionable insights."
    }
  ];

  function makeCarousel(items, trackEl, dotsEl, prevBtn, nextBtn, renderFn){
    items.forEach((e,i)=>{
      const slide = document.createElement('article');
      slide.className = 'slide';
      slide.innerHTML = renderFn(e);
      slide.querySelectorAll('.logo-chip img').forEach(img=>img.addEventListener('error',onLogoError));
      trackEl.appendChild(slide);
      const d = document.createElement('button');
      d.className = 'dot' + (i===0?' active':'');
      d.setAttribute('aria-label','Go to slide '+(i+1));
      d.addEventListener('click',()=>scrollToSlide(i));
      dotsEl.appendChild(d);
    });
    const slides = Array.from(trackEl.children);
    const dotEls = Array.from(dotsEl.children);
    function currentIndex(){ return Math.round(trackEl.scrollLeft / (slides[0].offsetWidth + 22)); }
    function scrollToSlide(i){ trackEl.scrollTo({left:i*(slides[0].offsetWidth + 22), behavior:'smooth'}); }
    function update(){
      const i = currentIndex();
      dotEls.forEach((d,k)=>d.classList.toggle('active',k===i));
      prevBtn.disabled = trackEl.scrollLeft <= 4;
      nextBtn.disabled = trackEl.scrollLeft + trackEl.clientWidth >= trackEl.scrollWidth - 4;
    }
    prevBtn.addEventListener('click',()=>scrollToSlide(Math.max(0,currentIndex()-1)));
    nextBtn.addEventListener('click',()=>scrollToSlide(currentIndex()+1));
    trackEl.addEventListener('scroll',()=>window.requestAnimationFrame(update));
    window.addEventListener('resize',update);
    document.addEventListener('keydown',e=>{
      if(e.key!=='ArrowLeft'&&e.key!=='ArrowRight') return;
      if(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey) return;
      const a=document.activeElement;
      if(a&&(/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)||a.isContentEditable)) return;
      e.preventDefault();
      const i=e.key==='ArrowRight'?currentIndex()+1:Math.max(0,currentIndex()-1);
      const r=trackEl.getBoundingClientRect();
      if(r.bottom<0||r.top>window.innerHeight){
        trackEl.scrollLeft=i*(slides[0].offsetWidth+22);
        trackEl.scrollIntoView({behavior:'smooth',block:'nearest'});
      } else scrollToSlide(i);
    });
    update();
  }

  function renderProject(e){
    return `
      <div class="side">
        ${logoChip(e)}
        ${e.era?`<div class="era">${e.era}<small>${e.eraSub||''}</small></div>`:''}
        ${e.category?`<div class="loc">${e.category}</div>`:''}
      </div>
      <div class="main">
        <div class="company">${e.url?`<a href="${e.url}" target="_blank" rel="noopener" title="Opens in a new tab">${e.name}<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="margin-left:7px;vertical-align:1px;opacity:.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>`:e.name}</div>
        <div class="role-title">${e.tagline}</div>
        ${e.period?`<div class="period-line">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#56687A" stroke-width="2"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>
          ${e.period}
        </div>`:''}
        <p class="blurb">${e.blurb}</p>
      </div>`;
  }

  makeCarousel(projects,
    document.getElementById('track'), document.getElementById('dots'),
    document.getElementById('prev'), document.getElementById('next'),
    renderProject);

  // image fallbacks (CSP-safe: no inline handlers)
  document.querySelectorAll('.avatar img').forEach(function(img){
    img.addEventListener('error',function(){ this.replaceWith(document.createTextNode('PD')); });
  });
