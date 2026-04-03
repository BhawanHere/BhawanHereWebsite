// ── NAV ───────────────────────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 60;
  document.getElementById('nav').classList.toggle('scrolled', scrolled);
  // Back to top button
  const btt = document.getElementById('back-top');
  if(btt) btt.classList.toggle('visible', window.scrollY > 400);
});
function openMenu() {
  document.getElementById('menu-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  document.getElementById('menu-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ── STAR CANVAS (hero background) ────────────────────────────────────────────
(function() {
  const canvas = document.getElementById('star-canvas');
  const ctx = canvas.getContext('2d');
  let W, H;
  function resize() { W = canvas.width = canvas.parentElement.offsetWidth||window.innerWidth; H = canvas.height = canvas.parentElement.offsetHeight||window.innerHeight; }
  resize(); window.addEventListener('resize', resize);
  const stars = Array.from({length:220}, () => ({
    x:Math.random(),y:Math.random(),r:Math.random()*1.3+0.2,
    op:Math.random()*0.7+0.15,tw:Math.random()*Math.PI*2,sp:Math.random()*0.4+0.15
  }));
  const meteors = Array.from({length:4},(_,i)=>({
    a:(i/4)*Math.PI*2+Math.random(),sp:0.0004+Math.random()*0.0005,sz:Math.random()*2+1
  }));
  // Small distant planets

  let t = 0;
  function loop() {
    requestAnimationFrame(loop); t += 0.016;
    ctx.clearRect(0, 0, W, H);
    // Stars
    stars.forEach(s => {
      const tw = Math.sin(t*s.sp+s.tw)*0.25+0.75;
      ctx.beginPath(); ctx.arc(s.x*W,s.y*H,s.r*tw,0,Math.PI*2);
      ctx.fillStyle=`rgba(255,255,255,${s.op*tw})`; ctx.fill();
    });
    // Distant planets
    
    // Meteors
    meteors.forEach(m => {
      m.a += m.sp;
      const oA=Math.min(W,H)*0.55, oB=Math.min(W,H)*0.08;
      const mx=W*0.5+Math.cos(m.a)*oA, my=H*0.5-Math.sin(m.a)*oB;
      for(let j=7;j>0;j--){
        const ta=m.a-j*0.04;
        ctx.beginPath(); ctx.arc(W*0.5+Math.cos(ta)*oA,H*0.5-Math.sin(ta)*oB,Math.max(0.3,m.sz-j*0.18),0,Math.PI*2);
        ctx.fillStyle=`rgba(200,185,255,${0.45-j*0.06})`; ctx.fill();
      }
      ctx.beginPath(); ctx.arc(mx,my,m.sz,0,Math.PI*2);
      ctx.fillStyle='rgba(230,225,255,0.9)'; ctx.fill();
    });
  }
  loop();
})();

// ── 3D CAROUSEL ──────────────────────────────────────────────────────────────
(function() {
  const stage = document.getElementById('proj-stage');
  const dotsEl = document.getElementById('c-dots');
  if(!stage || !dotsEl) return;
  let cur = 0;
  const N = PROJECTS.length;

  function buildDots() {
    dotsEl.innerHTML = '';
    PROJECTS.forEach(function(_,i) {
      const d = document.createElement('div');
      d.className = 'c-dot' + (i===cur?' active':'');
      d.onclick = (function(idx){ return function(){ cur=idx; render(); }; })(i);
      dotsEl.appendChild(d);
    });
  }

  function render() {
    stage.innerHTML = '';
    for(var offset = -2; offset <= 2; offset++) {
      var i = ((cur+offset)%N+N)%N;
      var p = PROJECTS[i];
      var card = document.createElement('div');
      var isCenter = offset === 0;
      var absOff = Math.abs(offset);
      card.className = 'proj-card-3d' + (isCenter ? ' center-card' : '');

      var tx = offset * 200;
      var tz = -absOff * 150;
      var ry = offset * -12;
      var sc = absOff === 0 ? 1 : absOff === 1 ? 0.82 : 0.65;
      var op = absOff === 0 ? 1 : absOff === 1 ? 0.65 : 0.32;
      var zi = 10 - absOff * 3;

      card.style.cssText = 'transform:translateX('+tx+'px) translateZ('+tz+'px) rotateY('+ry+'deg) scale('+sc+');opacity:'+op+';z-index:'+zi+';';
      card.innerHTML = '<div class="proj-emoji">'+p.emoji+'</div><h3>'+p.title+'</h3><p>'+p.desc+'</p><div class="proj-tags">'+p.tags.map(function(t){return '<span class="proj-tag">'+t+'</span>';}).join('')+'</div>'+(isCenter?'<button class="proj-open-btn">View Project ↗</button>':'');

      if(!isCenter) {
        card.onclick = (function(idx){ return function(){ cur=idx; render(); buildDots(); }; })(i);
      }
      stage.appendChild(card);
    }
    document.querySelectorAll('.c-dot').forEach(function(d,i){ d.classList.toggle('active',i===cur); });
  }

  buildDots();
  render();

  document.getElementById('c-prev').onclick = function(){ cur=(cur-1+N)%N; render(); buildDots(); };
  document.getElementById('c-next').onclick = function(){ cur=(cur+1)%N; render(); buildDots(); };

  window.addEventListener('keydown', function(e) {
    if(e.key==='ArrowLeft'){cur=(cur-1+N)%N;render();buildDots();}
    if(e.key==='ArrowRight'){cur=(cur+1)%N;render();buildDots();}
  });
})();


// ── BUILD EXPERIENCE ──────────────────────────────────────────────────────────
(function() {
  const list = document.getElementById('exp-list');
  EXPERIENCE.forEach(e => {
    const item = document.createElement('div');
    item.className = 'exp-item reveal';
    item.innerHTML = `
      <div class="exp-period">${e.period}</div>
      <div class="exp-role">${e.title}</div>
      <div class="exp-org">${e.org}</div>
      <ul class="exp-bullets">${e.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
    `;
    list.appendChild(item);
  });
})();

// ── BUILD SKILLS ──────────────────────────────────────────────────────────────
(function() {
  const groups = {
    'Languages': ['Python','JavaScript','C#','PHP','SQL'],
    'Frameworks & Tools': ['React','Node.js','MongoDB','MySQL','REST API','JWT','Git','Figma'],
    'Networking & ML': ['Cisco','IDS/IPS','SDN','Netmiko','scikit-learn','Machine Learning','Pandas','Agile','Scrum']
  };
  const container = document.getElementById('skills-groups');
  Object.entries(groups).forEach(([label, items]) => {
    const col = document.createElement('div');
    col.innerHTML = `
      <div class="skill-group-label">${label}</div>
      <div class="skill-group-items">${items.map(s => `<div class="skill-item">${s}</div>`).join('')}</div>
    `;
    container.appendChild(col);
  });
})();

// ── SCROLL REVEAL ─────────────────────────────────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, {threshold: 0.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── CONTACT FORM ──────────────────────────────────────────────────────────────
function handleForm(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type=submit]');
  const data = new FormData(form);
  btn.textContent = 'Sending...'; btn.disabled = true;

  fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  })
  .then(res => {
    if(res.ok) {
      btn.textContent = '✓ Message sent!';
      btn.style.background = '#16a34a'; btn.style.color = '#fff';
      form.reset();
      setTimeout(() => {
        btn.textContent = 'Send Message →';
        btn.style.background = ''; btn.style.color = '';
        btn.disabled = false;
      }, 3000);
    } else {
      btn.textContent = 'Error — try again';
      btn.style.background = '#c0392b'; btn.style.color = '#fff';
      setTimeout(() => {
        btn.textContent = 'Send Message →';
        btn.style.background = ''; btn.style.color = '';
        btn.disabled = false;
      }, 3000);
    }
  })
  .catch(() => {
    btn.textContent = 'Error — try again';
    btn.style.background = '#c0392b'; btn.style.color = '#fff';
    setTimeout(() => {
      btn.textContent = 'Send Message →';
      btn.style.background = ''; btn.style.color = '';
      btn.disabled = false;
    }, 3000);
  });
}

// ── TAB BAR ───────────────────────────────────────────────────────────────────
function scrollToSection(id) {
  const el = document.getElementById(id);
  if(!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 111;
  window.scrollTo({top, behavior:'smooth'});
}
const tabSections = ['about','projects','experience','skills','contact'];
function updateActiveTabs() {
  let current = tabSections[0];
  tabSections.forEach(id => {
    const el = document.getElementById(id);
    if(!el) return;
    if(el.getBoundingClientRect().top - 140 <= 0) current = id;
  });
  document.querySelectorAll('.tab').forEach(tab => {
    const m = tab.getAttribute('onclick').match(/'(\w+)'/);
    if(m) tab.classList.toggle('active', m[1] === current);
  });
}
window.addEventListener('scroll', updateActiveTabs, {passive:true});