const blocks=[
{title:'Potencias y fracciones',questions:[
['2³ · 2² =',['2⁵ = 32','2⁶ = 64','4⁵ = 1024'],0,'Misma base: sumamos los exponentes. 3 + 2 = 5, luego 2⁵ = 32.'],
['3⁵ / 3³ =',['3² = 9','3⁸ = 6561','1'],0,'Misma base en división: restamos los exponentes. 5 − 3 = 2.'],
['(−2)⁴ =',['−16','16','−8'],1,'El exponente es par, así que el resultado es positivo: 16.'],
['2/3 + 1/6 =',['3/9','5/6','1/2'],1,'Buscamos denominador 6: 2/3 = 4/6; 4/6 + 1/6 = 5/6.'],
['(3/4) ÷ (9/8) =',['2/3','27/32','3/2'],0,'Multiplicamos por la inversa: 3/4 · 8/9 = 24/36 = 2/3.'],
['(2³)² =',['2⁵ = 32','2⁶ = 64','2⁹ = 512'],1,'Potencia de potencia: multiplicamos exponentes, 3 · 2 = 6.']
]},
{title:'Concepto y propiedades de radicales',questions:[
['√81 =',['9','−9','±9'],0,'√81 denota la raíz cuadrada principal, que es 9. La ecuación x²=81 sí tiene soluciones ±9.'],
['∛(−64) =',['4','−4','No existe en ℝ'],1,'(−4)³ = −64. Las raíces de índice impar admiten radicandos negativos.'],
['⁴√16 =',['4','2','8'],1,'2⁴ = 16, por tanto la raíz cuarta principal es 2.'],
['√(−9) en números reales…',['Es −3','Es 3','No existe'],2,'Ningún número real elevado al cuadrado es negativo.'],
['27¹⁄³ =',['9','3','81'],1,'El exponente 1/3 equivale a raíz cúbica: ∛27=3.'],
['√(5²) =',['5','25','10'],0,'√(a²)=|a|. Como a=5 es positivo, el valor es 5.']
]},
{title:'Simplificación, sumas y restas',questions:[
['Simplifica √98',['7√2','49√2','2√7'],0,'98=49·2, así que √98=7√2.'],
['√12 + √27 =',['5√3','√39','3√3'],0,'√12=2√3 y √27=3√3; la suma es 5√3.'],
['4√5 − √20 =',['3√5','2√5','2√10'],1,'√20=2√5; 4√5−2√5=2√5.'],
['Simplifica ∛54',['3∛2','9∛2','2∛3'],0,'54=27·2, por tanto ∛54=3∛2.'],
['√18 / √2 =',['9','3','√16'],1,'√18/√2=√9=3.'],
['√75 − √27 =',['2√3','4√3','√48'],0,'√75=5√3 y √27=3√3; resta: 2√3.']
]},
{title:'Productos, cocientes e índices',questions:[
['√3 · √12 =',['6','√15','3√12'],0,'Igual índice: √(3·12)=√36=6.'],
['∛4 · ∛16 =',['∛20','4','8'],1,'∛(4·16)=∛64=4.'],
['√2 · ∛2 =',['⁶√(2⁵)','⁵√(2⁶)','√4'],0,'Es 2¹⁄²·2¹⁄³=2⁵⁄⁶=⁶√(2⁵).'],
['√(√81) =',['9','3','81'],1,'Primero √81=9 y luego √9=3.'],
['⁴√16 · √9 =',['6','12','18'],0,'La raíz cuarta de 16 es 2 y la cuadrada de 9 es 3: 2·3=6.'],
['(√5)² · √2 =',['5√2','√10','10'],0,'(√5)²=5, luego queda 5√2.']
]},
{title:'Racionalización',questions:[
['Racionaliza 2/√3',['2√3/3','√3/2','2/3'],0,'Multiplica arriba y abajo por √3: 2√3/3.'],
['Racionaliza 1/(2 + √3)',['2 + √3','2 − √3','1/(4 − 3)'],1,'Multiplica por el conjugado 2−√3: el denominador vale 4−3=1.'],
['Racionaliza 3/(√5 − 1)',['3(√5+1)/4','3(√5−1)/4','3√5/5'],0,'Multiplica por √5+1. Abajo: (√5)²−1²=4.'],
['Racionaliza 1/∛4',['∛2/2','∛4/4','∛2'],0,'Multiplicamos por ∛2: ∛2/∛8=∛2/2.'],
['Simplifica 5/(2√5)',['√5/2','5√5/2','2√5'],0,'Multiplica por √5/√5: 5√5/10=√5/2.'],
['Racionaliza 1/(√7 + √2)',['(√7−√2)/5','(√7+√2)/9','√7−√2'],0,'Conjugado: (√7−√2)/(7−2)=(√7−√2)/5.']
]}
];
const $=id=>document.getElementById(id);let current=0,index=0,right=0,answered=false,wrong=[];
function tabs(){ $('tabs').innerHTML=blocks.map((b,i)=>`<button class="tab ${i===current?'active':''}" data-tab="${i}">${i+1}. ${b.title}</button>`).join('');document.querySelectorAll('[data-tab]').forEach(el=>el.onclick=()=>{current=Number(el.dataset.tab);$('welcome').classList.remove('hidden');$('lesson').classList.remove('active');$('summary').classList.add('hidden');$('block-title').textContent=blocks[current].title;tabs()})}
function begin(){index=0;right=0;wrong=[];$('welcome').classList.add('hidden');$('summary').classList.add('hidden');$('lesson').classList.add('active');render()}
function render(){answered=false;const q=blocks[current].questions[index];$('block-label').textContent=blocks[current].title;$('counter').textContent=`Pregunta ${index+1} de 6`;$('bar').style.width=index/6*100+'%';$('question').textContent=q[0];$('choices').innerHTML=q[1].map((c,i)=>`<button class="choice" data-choice="${i}">${'ABC'[i]}. ${c}</button>`).join('');document.querySelectorAll('[data-choice]').forEach(el=>el.onclick=()=>choose(Number(el.dataset.choice)));$('feedback').classList.add('hidden');$('next').disabled=true;$('next').textContent=index===5?'Ver resultado →':'Siguiente →';$('score').textContent=right+' aciertos'}
function choose(selected){if(answered)return;answered=true;const q=blocks[current].questions[index],ok=selected===q[2];academia.record('math1',current*6+index,ok,q[0],q[1][q[2]],q[3]);if(ok)right++;else wrong.push({index,question:q[0],answer:q[1][q[2]]});document.querySelectorAll('[data-choice]').forEach(el=>{const n=Number(el.dataset.choice);el.disabled=true;if(n===q[2])el.classList.add('good');else if(n===selected)el.classList.add('bad')});$('feedback').innerHTML=`<b>${ok?'✅ ¡Correcto!':'🔎 Vamos paso a paso'}</b><p>${q[3]}</p>`;$('feedback').classList.remove('hidden');$('next').disabled=false;$('score').textContent=right+' aciertos'}
function next(){if(!answered)return;index++;if(index<6)return render();$('lesson').classList.remove('active');$('summary').classList.remove('hidden');$('summary-title').textContent=`${right} de 6 aciertos`;$('summary-text').textContent=right===6?'¡Excelente! Puedes pasar al siguiente bloque.':'Buen trabajo. Revisa los ejercicios que han costado más y vuelve a probar.';$('errors').innerHTML=wrong.length?`<h3>Para repasar</h3><ul class="review-list">${wrong.map(w=>`<li>${w.question} → ${w.answer}</li>`).join('')}</ul>`:'';
const key='math-t1-a',all=JSON.parse(localStorage.getItem(key)||'{}');all[current]={score:right,total:6,date:new Date().toISOString(),wrong:wrong.map(w=>w.question)};localStorage.setItem(key,JSON.stringify(all));}
$('begin').onclick=begin;$('next').onclick=next;$('again').onclick=begin;$('block-title').textContent=blocks[0].title;tabs();
document.querySelector('.wrap > .small').textContent='Los resultados de esta unidad se guardan en este navegador. Este módulo es de aprendizaje; no sustituye el diagnóstico general ni el examen del colegio.';
