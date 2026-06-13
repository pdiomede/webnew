  function logoChip(e){
    let chip;
    if(e.logo){
      chip = `<div class="logo-chip white${e.logoFull?' full':''}"><img src="${e.logo}" alt="${e.school||e.company||''}" data-init="${e.initials}" data-color="${e.color}"></div>`;
    } else if(e.domain){
      const cb='https://logo.clearbit.com/'+e.domain;
      const fav='https://www.google.com/s2/favicons?domain='+e.domain+'&sz=128';
      chip = `<div class="logo-chip white"><img src="${cb}" alt="${e.school||e.company||''}" data-fav="${fav}" data-init="${e.initials}" data-color="${e.color}"></div>`;
    } else {
      chip = `<div class="logo-chip" style="background:${e.color}">${e.initials}</div>`;
    }
    return e.url ? `<a class="logo-link" href="${e.url}" target="_blank" rel="noopener" aria-label="${e.school||e.company||''}">${chip}</a>` : chip;
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

  // ---- Education / certifications (placeholders; content to be provided) ----
  const education = [
    {
      era:"2025", eraSub:"", initials:"HBS", color:"#A41034", logo:"images/onlinehbs.jpeg", logoFull:true,
      school:"Harvard Business School Online", url:"https://online.hbs.edu", location:"Online",
      title:"Certificate in Strategy Execution", field:"Business Administration & Management",
      period:"March 2025 – May 2025",
      blurb:"Strategy Execution is an eight-week online certification program from Harvard Business School. Strategy Execution teaches a comprehensive framework for implementing strategy, covering topics including resource allocation and job design, performance measurement, risk management, and strategies for detecting and adapting to change. Participants gain the knowledge and skills needed to execute strategy successfully. Strategy Execution was developed by leading Harvard Business School faculty and is delivered in an active learning environment based on the HBS signature case-based learning method."
    },
    {
      era:"2023", eraSub:"", initials:"HBS", color:"#A41034", logo:"images/onlinehbs.jpeg", logoFull:true,
      school:"Harvard Business School Online", url:"https://online.hbs.edu", location:"Online",
      title:"Certificate in Organizational Leadership", field:"Organizational Leadership",
      period:"May 2023 – July 2023",
      blurb:"Organizational Leadership is a 7-week, 40-hour online certificate program from Harvard Business School. Organizational Leadership equips experienced team leaders with the skills, strategies, and tools to set and communicate direction, influence through other managers, generate organizational alignment, drive innovation, and engineer change. The program was developed by leading Harvard Business School faculty and is delivered in an active learning environment based on the HBS signature case-based learning model."
    },
    {
      era:"2022", eraSub:"", initials:"HBS", color:"#A41034", logo:"images/onlinehbs.jpeg", logoFull:true,
      school:"Harvard Business School Online", url:"https://online.hbs.edu", location:"Online",
      title:"Certificate in Disruptive Strategy", field:"Business Administration & Management",
      period:"January 2022 – March 2022",
      blurb:"Disruptive Strategy is a 6-week, 30-hour online certificate program from Harvard Business School Online. Disruptive Strategy helps students become fluent in disruption theory and gain confidence in articulating complex viewpoints, apply strategic frameworks to assess new opportunities and potential threats, and acquire techniques for executive-level strategy formulation and team management. The program was developed by leading Harvard Business School faculty and is delivered in an active learning environment based on the HBS signature case-based learning model."
    },
    {
      era:"2021", eraSub:"", initials:"HBS", color:"#A41034", logo:"images/onlinehbs.jpeg", logoFull:true,
      school:"Harvard Business School Online", url:"https://online.hbs.edu", location:"Online",
      title:"Certificate in Alternative Investments", field:"Investments & Securities",
      period:"March 2021 – May 2021",
      blurb:"Alternative Investments is a five weeks online certificate program that teaches students how to speak the language of Alternative Investments, identify the defining elements of private equity, private debt, hedge funds, and real estate, assess potential investment opportunities, and understand the skills and strategies necessary for investing in Alternatives. The program was developed by leading Harvard Business School faculty and is delivered in an active learning environment based on the HBS signature case-based learning model."
    },
    {
      era:"2020", eraSub:"– 2021", initials:"HBS", color:"#A41034", logo:"images/onlinehbs.jpeg", logoFull:true,
      school:"Harvard Business School Online", url:"https://online.hbs.edu", location:"Online",
      title:"CORe: Credential of Readiness", field:"Business Administration & Management",
      period:"October 2020 – March 2021",
      blurb:"CORe (Credential of Readiness) is a six-months certificate program on the fundamentals of business from Harvard Business School. CORe is comprised of three courses: Business Analytics, Economics for Managers, and Financial Accounting, developed by leading Harvard Business School faculty and delivered in an active learning environment based on the HBS signature case-based learning model."
    },
    {
      era:"2020", eraSub:"", initials:"HBS", color:"#A41034", logo:"images/onlinehbs.jpeg", logoFull:true,
      school:"Harvard Business School Online", url:"https://online.hbs.edu", location:"Online",
      title:"Certificate in Management Essentials", field:"Business Administration & Management",
      period:"August 2020 – September 2020",
      blurb:"Management Essentials is an 8-weeks certificate program from Harvard Business School with Prof. Joseph Fuller and late Prof. David Garvin. Management Essentials takes a distinctive, hands-on approach to management: participants learn to identify, understand, design, and shape critical organizational and managerial processes as a means of getting the work done. The course focuses on four of the most essential processes for managers: decision-making, implementation, learning, and change. Participants work through real-world challenges faced by managers across a variety of industries, and come away with tangible tools and techniques that they can readily apply in their organizations to create higher quality, more efficient work."
    },
    {
      era:"2020", eraSub:"", initials:"HBS", color:"#A41034", logo:"images/onlinehbs.jpeg", logoFull:true,
      school:"Harvard Business School Online", url:"https://online.hbs.edu", location:"Online",
      title:"Certificate in Negotiation Mastery", field:"Organizational Leadership",
      period:"March 2020 – May 2020",
      blurb:"Negotiation Mastery is an 8-weeks certificate program from Harvard Business School with Prof. Michael A. Wheeler. Negotiation Mastery prepares you to close deals that might otherwise be dead-locked, maximize value creation in agreements you reach, and resolve differences before they escalate into costly conflicts. This program emphasizes an understanding of both analytical tools and interpersonal techniques for dealing effectively with different bargaining styles and tactics."
    },
    {
      era:"2019", eraSub:"", initials:"HBS", color:"#A41034", logo:"images/onlinehbs.jpeg", logoFull:true,
      school:"Harvard Business School Online", url:"https://online.hbs.edu", location:"Online",
      title:"Certificate in Leadership Principles", field:"Organizational Leadership",
      period:"October 2019 – December 2019",
      blurb:"Leadership Principles is an 8-weeks certificate program from Harvard Business School with Prof. Joshua D. Margolis and Prof. Anthony Mayo. Leadership Principles leverages self-assessments, 360° feedback from colleagues, and the perspectives of fellow learners to help participants build greater self-awareness and enhance the versatility of their leadership style and approach. Through multimedia case studies and interviews with experts, participants in this program will experience wide-ranging leadership challenges and develop the skills needed to address different situations capably and authentically."
    },
    {
      era:"1994", eraSub:"– 2000", initials:"UL", color:"#4A5568", logo:"images/univaq.jpg",
      school:"Università degli Studi dell'Aquila", url:"https://www.univaq.it", location:"L'Aquila, Italy",
      title:"MSc in Computer Science", field:"Computer Science",
      period:"1994 – 2000",
      blurb:"Master Degree in Computer Science achieved on April 2000 at the University of L'Aquila. Thesis on Knowledge Management and the Web using XML, completed at Telecom Italia Learning Services."
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

  function renderEducation(e){
    return `
      <div class="side">
        ${logoChip(e)}
        <div class="era">${e.era}<small>${e.eraSub||''}</small></div>
        <div class="loc">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#56687A" style="margin-top:2px"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>
          ${e.location}
        </div>
      </div>
      <div class="main">
        <div class="company">${e.title}</div>
        <div class="role-title">${e.field}</div>
        <div class="period-line">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#56687A" stroke-width="2"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>
          ${e.period} · ${e.url?`<a href="${e.url}" target="_blank" rel="noopener">${e.school}</a>`:e.school}
        </div>
        <p class="blurb">${e.blurb}</p>
      </div>`;
  }

  makeCarousel(education,
    document.getElementById('track'), document.getElementById('dots'),
    document.getElementById('prev'), document.getElementById('next'),
    renderEducation);

  // image fallbacks (CSP-safe: no inline handlers)
  document.querySelectorAll('.avatar img').forEach(function(img){
    img.addEventListener('error',function(){ this.replaceWith(document.createTextNode('PD')); });
  });
