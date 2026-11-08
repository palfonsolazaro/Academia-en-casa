(() => {
  const target=document.querySelector('.hero');
  if(!target)return;
  const c=document.createElement('div');
  c.style.cssText='background:#fff;border:1px solid #e8e4f2;border-radius:20px;padding:24px;margin-top:20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px';
  c.innerHTML='<div><div style="font-size:12px;font-weight:850;letter-spacing:1.2px;color:#7660c3">NUEVO · DIAGNÓSTICO 4.º ESO</div><h2 style="margin:7px 0;font-size:21px">¿Por dónde empezamos a reforzar?</h2><p style="margin:0;color:#788294;font-size:14px">36 preguntas de Lengua, Matemáticas e Historia, con resultados por áreas.</p></div><a style="display:inline-block;background:#6d58c8;color:#fff;padding:13px 18px;border-radius:12px;font-weight:800;text-decoration:none" href="./diagnostico.html">Hacer diagnóstico →</a>';
  target.insertAdjacentElement('afterend',c);
})();
