  const experiences = [
    {
      era:"2026", eraSub:"", company:"Certora", url:"https://www.certora.com", initials:"Ce", color:"#E8543F",
      logo:"images/certora.jpg",
      role:"Technical Account Manager", period:"January 2026 – July 2026",
      blurb:"Worked with major DeFi and Web3 protocols, helping them plan and execute the right security strategy before and after engagement. Guided clients through audits, formal verification, off-chain code reviews, and on-chain monitoring, making sure the work fit their technical goals, timelines, and stakeholder needs. Managed the full customer journey and coordinated closely with auditors and security experts from initial scoping through delivery."
    },
    {
      era:"2025", eraSub:"– 2026", company:"Livepeer", url:"https://livepeer.org", initials:"Lp", color:"#00A66C",
      logo:"images/Livepeer-Logo-Symbol_light_mode.svg",
      location:"Remote", role:"Governance Advisory Board", period:"June 2025 – May 2026",
      blurb:"Served on the Governance Advisory Board, supporting Livepeer's mission to build open, decentralized infrastructure for video and AI. Focused on progressive decentralization, protocol upgrades, treasury management, and governance design, helping shape a resilient, community-owned protocol."
    },
    {
      era:"2025", eraSub:"", company:"The Graph", url:"https://thegraph.com/", initials:"TG", color:"#6F4CFF",
      logo:"images/The_Graph_Logomark_light_mode.png",
      location:"Rome, Italy", group:"The Graph · 1 of 3",
      role:"Ecosystem Analytics & Tooling Lead", period:"May 2025 – December 2025",
      blurb:"Built data and analytics tooling, including the Indexer Score Dashboard, Graph Tools Pro, and the official Graph Control Deck, turning raw protocol data into actionable KPIs that inform governance, delegation decisions, and protocol strategy."
    },
    {
      era:"2023", eraSub:"– 2025", company:"The Graph", url:"https://thegraph.com/", initials:"TG", color:"#6F4CFF",
      logo:"images/The_Graph_Logomark_light_mode.png",
      location:"Rome, Italy", group:"The Graph · 2 of 3",
      role:"Ecosystem Manager, Community", period:"May 2023 – April 2025",
      blurb:"Led regional strategy, community building, and global brand implementation. Launched and scaled 9 international communities, recruited and guided a distributed team of 13 Community Managers and 4 Moderators, and represented the Foundation at global events."
    },
    {
      era:"2022", eraSub:"– 2024", company:"The Graph", url:"https://thegraph.com/", initials:"TG", color:"#6F4CFF",
      logo:"images/The_Graph_Logomark_light_mode.png",
      location:"Remote", group:"The Graph · 3 of 3",
      role:"Co-Founder & Operations Lead, Graph AdvocatesDAO", period:"January 2022 – June 2024",
      blurb:"Co-founded and launched Graph AdvocatesDAO, a community-led DAO supported by The Graph Foundation. Onboarded 300+ newcomers into web3, managed community events with a $300K budget, and oversaw the distribution and review of $500K in Community Grants."
    },
    {
      era:"2021", eraSub:"– 2025", company:"Nemax Tech", url:"https://nemax.tech/", initials:"Nx", color:"#1B9E8F",
      logo:"images/nemax.png",
      location:"Sofia, Bulgaria", role:"Co-Founder & CEO", period:"June 2021 – October 2025",
      blurb:"Co-founded and operated Nemax Tech, advancing the decentralized future through professional validator operations and community-first strategies. Built and managed validator infrastructure across multiple protocols, built blockchain data monitoring tools, and scaled the Live Pioneers community to grow Livepeer's delegator base."
    },
    {
      era:"2021", eraSub:"– 2023", company:"Graphtronauts", url:"https://graphtronauts.app", initials:"Gt", color:"#E0552B",
      domain:"graphtronauts.com",
      location:"Remote", role:"Community Lead", period:"February 2021 – April 2023",
      blurb:"Co-founded and managed Graphtronauts, the largest and fastest-growing independent community of long-term supporters of The Graph protocol. Grew it to 3,000+ members within 12 months across Telegram, X, Medium, Discord, Reddit, YouTube, and Farcaster, and secured $480K in grants."
    },
    {
      era:"2018", eraSub:"– 2023", company:"OpenText", url:"https://www.opentext.com", initials:"OT", color:"#0A66C2",
      domain:"opentext.com",
      location:"Rome Area, Italy", group:"OpenText · 1 of 6",
      role:"Principal Customer Advocate", period:"October 2018 – April 2023",
      blurb:"Led strategic customer advocacy across EMEA, resolving high-impact issues and strengthening executive relationships. Handled 100+ critical escalations yearly at 90% satisfaction, liaised with execs at 20+ Fortune 500 clients, and drove $25M+ in retained revenue."
    },
    {
      era:"2016", eraSub:"– 2018", company:"OpenText", url:"https://www.opentext.com", initials:"OT", color:"#0A66C2",
      domain:"opentext.com",
      location:"Rome Area, Italy", group:"OpenText · 2 of 6",
      role:"Cloud Operations Onboarding Manager", period:"January 2016 – September 2018",
      blurb:"Delivered OpenText Managed Cloud Services across Southern Europe for major public-sector clients. Led onboarding for digital transformation projects in Madrid and Barcelona impacting 25K+ employees, with a 99.8% go-live success rate and 92% onboarding satisfaction."
    },
    {
      era:"2014", eraSub:"– 2015", company:"OpenText", url:"https://www.opentext.com", initials:"OT", color:"#0A66C2",
      domain:"opentext.com",
      location:"Rome Area, Italy", group:"OpenText · 3 of 6",
      role:"Escalation Manager, Customer Support", period:"January 2014 – December 2015",
      blurb:"Managed high-priority customer escalations through cross-functional coordination. Handled 80+ escalations yearly within SLA and cut average resolution time by 25% by introducing a triage system and direct engineer-routing."
    },
    {
      era:"2011", eraSub:"– 2013", company:"OpenText", url:"https://www.opentext.com", initials:"OT", color:"#0A66C2",
      domain:"opentext.com",
      location:"Rome Area, Italy", group:"OpenText · 4 of 6",
      role:"Relationship Manager, Customer Support", period:"May 2011 – December 2013",
      blurb:"Primary contact for key Southern Europe accounts. Owned relationships with 30+ enterprise clients at a 98% renewal rate, recovered $3M in at-risk contracts, and introduced feedback loops that influenced the product roadmap."
    },
    {
      era:"2007", eraSub:"– 2011", company:"OpenText", url:"https://www.opentext.com", initials:"OT", color:"#0A66C2",
      domain:"opentext.com",
      location:"Rome Area, Italy", group:"OpenText · 5 of 6",
      role:"Customer Technical Support Engineer", period:"January 2007 – April 2011",
      blurb:"L3 Support Engineer on the SWAT team, resolving critical EIMS escalations on-site across EMEA. Cut downtime by 40%, resolved 200+ complex cases annually, and partnered with R&D on hotfixes contributing to 3 major product stability improvements."
    },
    {
      era:"2001", eraSub:"– 2006", company:"OpenText", url:"https://www.opentext.com", initials:"OT", color:"#0A66C2",
      domain:"opentext.com",
      location:"Rome Area, Italy", group:"OpenText · 6 of 6",
      role:"Senior Consultant, Global Professional Services", period:"September 2001 – December 2006",
      blurb:"Senior Consultant at Hummingbird (later OpenText), specializing in the ECM product line. Delivered ECM implementations for 20+ clients across Europe, led legacy system migrations, built custom compliance and automation modules, and mentored junior consultants."
    },
    {
      era:"2000", eraSub:"– 2001", company:"Software AG", url:"https://www.softwareag.com/en/", initials:"AG", color:"#2D2D7A",
      domain:"softwareag.com",
      location:"Rome Area, Italy", role:"Technical Presales Engineer", period:"September 2000 – August 2001",
      blurb:"Presales Engineer and Education Specialist for the XML Information Server line. Secured early enterprise clients for Tamino XML Server, localized XML training materials across Southern Europe, and coordinated the launch of the Italian Training division."
    },
    {
      era:"1999", eraSub:"– 2000", company:"Telecom Italia", url:"https://www.tim.it/", initials:"TI", color:"#C8102E",
      domain:"telecomitalia.com",
      location:"L'Aquila Area, Italy", role:"Education Specialist", period:"September 1999 – August 2000",
      blurb:"Education Specialist at Telecom Italia Learning Services, delivering training on emerging web technologies to new hires and middle management. Designed and led XML and next-gen web workshops, and onboarded 200+ new employees with tailored technical training programs."
    },
    {
      era:"1997", eraSub:"", company:"University of L'Aquila", url:"https://www.univaq.it/en/", initials:"UL", color:"#4A5568",
      logo:"images/univaq.jpg",
      location:"L'Aquila Area, Italy", role:"Technical Assistant", period:"January 1997 – December 1997",
      blurb:"Technical Assistant within the University of L'Aquila Computer Science Labs, providing technical support to students and teachers. The first professional role of a long journey."
    }
  ];

  function logoChip(e){
    let chip;
    if(e.logo){
      chip = `<div class="logo-chip white${e.logoFull?' full':''}"><img src="${e.logo}" alt="${e.company}" data-init="${e.initials}" data-color="${e.color}"></div>`;
    } else if(e.domain){
      const fav='https://www.google.com/s2/favicons?domain='+e.domain+'&sz=128';
      chip = `<div class="logo-chip white"><img src="${fav}" alt="${e.company}" data-init="${e.initials}" data-color="${e.color}"></div>`;
    } else {
      chip = `<div class="logo-chip" style="background:${e.color}">${e.initials}</div>`;
    }
    return e.url ? `<a class="logo-link" href="${e.url}" target="_blank" rel="noopener" aria-label="${e.company}">${chip}</a>` : chip;
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
      if(trackEl.closest('[inert]')) return;
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

  function renderExperience(e){
    return `
      <div class="side">
        ${logoChip(e)}
        <div class="era">${e.era}<small>${e.eraSub||''}</small></div>
        ${e.location?`<div class="loc">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#56687A" style="margin-top:2px"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>
          ${e.location}
        </div>`:''}
      </div>
      <div class="main">
        ${e.group?`<span class="chip-tag">${e.group}</span>`:''}
        <div class="company">${e.url?`<a href="${e.url}" target="_blank" rel="noopener">${e.company}</a>`:e.company}</div>
        <div class="role-title">${e.role}</div>
        <div class="period-line">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#56687A" stroke-width="2"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>
          ${e.period}
        </div>
        <p class="blurb">${e.blurb}</p>
      </div>`;
  }

  makeCarousel(experiences,
    document.getElementById('track'), document.getElementById('dots'),
    document.getElementById('prev'), document.getElementById('next'),
    renderExperience);

  // image fallbacks (CSP-safe: no inline handlers)
  document.querySelectorAll('.avatar img').forEach(function(img){
    img.addEventListener('error',function(){ this.replaceWith(document.createTextNode('PD')); });
  });
  var curLogo=document.querySelector('.cur-logo img');
  if(curLogo) curLogo.addEventListener('error',function(){ this.closest('.cur-logo').style.display='none'; });
