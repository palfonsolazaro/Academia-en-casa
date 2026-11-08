(()=>{
  const subjects=document.querySelector('#subjects');if(!subjects)return;
  const css=document.createElement('style');css.textContent=`
  @media(min-width:950px){.subjects{grid-template-columns:repeat(4,minmax(0,1fr))}.subject{padding:20px}.subject h3{font-size:21px}}
  .math-hub{margin-top:19px;background:#eff5f0;border:1px solid #dbe9de;border-radius:21px;padding:24px;scroll-margin-top:16px}
  .math-hub[hidden]{display:none!important}.math-hub-head{display:flex;justify-content:space-between;gap:12px;align-items:flex-start;flex-wrap:wrap}
  .math-hub h3{font-size:25px;margin:7px 0}.math-hub p{color:#677783;line-height:1.55;margin:6px 0 18px}
  .math-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.math-unit{background:white;border:1px solid #e0e9df;border-radius:15px;padding:18px;display:flex;flex-direction:column;gap:8px}
  .math-unit .unit-label{font-size:11px;letter-spacing:1px;color:#42856a;font-weight:850}.math-unit h4{font-size:18px;margin:0;color:#263b46}.math-unit p{font-size:13px;margin:0;flex:1}
  .math-unit a{display:inline-flex;color:#2d785c;font-weight:800;text-decoration:none;margin-top:8px}.math-unit a:hover{text-decoration:underline}
  .math-extra{border-top:1px solid #d6e5d9;margin-top:18px;padding-top:16px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}
  .math-extra button{border:0;background:#287b5c;color:white;border-radius:11px;padding:12px 16px;font-weight:800}
  .math-close{border:0;background:white;color:#5b6e61;border-radius:10px;padding:8px 12px;font-weight:800}
  @media(max-width:690px){.math-list{grid-template-columns:1fr}.math-hub{padding:16px}}
  `;document.head.appendChild(css);
  const hub=document.createElement('section');hub.className='math-hub';hub.id='matematicas-temario';hub.hidden=true;hub.setAttribute('aria-label','Temario de Matemáticas');hub.innerHTML=`
    <div class="math-hub-head"><div><span class="tag">MATEMÁTICAS · 4.º ESO</span><h3>Elige un tema para estudiar</h3><p>Todos los temas juntos, por orden. Cada uno incluye teoría, ejemplos y práctica autocorregible.</p></div><button type="button" class="math-close" id="close-math">Cerrar ✕</button></div>
    <div class="math-list">
      <article class="math-unit"><span class="unit-label">TEMA 01</span><h4>Números reales</h4><p>Potencias, fracciones, radicales y racionalización · 30 ejercicios</p><a href="./matematicas-tema1.html">Estudiar tema 1 →</a></article>
      <article class="math-unit"><span class="unit-label">TEMA 02</span><h4>Proporcionalidad</h4><p>Reglas de tres, porcentajes, interés compuesto y repartos · 25 ejercicios y vídeo</p><a href="./matematicas-temas.html?tema=2">Estudiar tema 2 →</a></article>
      <article class="math-unit"><span class="unit-label">TEMA 03</span><h4>Logaritmos</h4><p>Definición, propiedades y aplicaciones · 25 ejercicios y vídeos</p><a href="./matematicas-temas.html?tema=3">Estudiar tema 3 →</a></article>
      <article class="math-unit"><span class="unit-label">TEMA 04</span><h4>Expresiones algebraicas</h4><p>Factorización, Ruffini y fracciones algebraicas · 25 ejercicios y vídeos</p><a href="./matematicas-temas.html?tema=4">Estudiar tema 4 →</a></article>
    </div>
    <div class="math-extra"><span class="small muted">¿Quieres practicar un poco de todo? También tenemos un test rápido de Matemáticas.</span><button type="button" id="math-quick">Practicar test rápido →</button></div>`;
  subjects.insertAdjacentElement('afterend',hub);
  const toggle=(open)=>{hub.hidden=!open;const btn=subjects.querySelector('[data-subject="math"]');if(btn)btn.setAttribute('aria-expanded',String(open));if(open)hub.scrollIntoView({behavior:'smooth',block:'start'})};
  subjects.addEventListener('click',event=>{const btn=event.target.closest('[data-subject="math"]');if(!btn)return;event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();toggle(hub.hidden)},true);
  hub.querySelector('#close-math').onclick=()=>toggle(false);
  hub.querySelector('#math-quick').onclick=()=>{toggle(false);start('math')};
  const observer=new MutationObserver(()=>{const btn=subjects.querySelector('[data-subject="math"]');if(btn){btn.setAttribute('aria-controls','matematicas-temario');btn.setAttribute('aria-expanded',String(!hub.hidden));const link=btn.querySelector('.link');if(link)link.textContent='Ver los 4 temas y practicar →'}});observer.observe(subjects,{childList:true});
  const btn=subjects.querySelector('[data-subject="math"]');if(btn){btn.setAttribute('aria-controls','matematicas-temario');btn.setAttribute('aria-expanded','false');const link=btn.querySelector('.link');if(link)link.textContent='Ver los 4 temas y practicar →'};
})();
