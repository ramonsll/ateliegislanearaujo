(function(){
var $=function(i){return document.getElementById(i)},C=window.CAT;
var nv=document.querySelector('nav');function nh(){document.documentElement.style.setProperty('--nh',nv.offsetHeight+'px')}nh();addEventListener('resize',nh);
var pg=$('prog');addEventListener('scroll',function(){pg.style.transform='scaleX('+(scrollY/(document.documentElement.scrollHeight-innerHeight||1))+')'},{passive:true});
var io=new IntersectionObserver(function(es){es.forEach(function(e,j){if(e.isIntersecting){setTimeout(function(){e.target.classList.add('in')},j*90);io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll('.pc').forEach(function(x){io.observe(x)});
document.querySelectorAll('.card').forEach(function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;c.style.setProperty('--ry',(x-.5)*14+'deg');c.style.setProperty('--rx',(.5-y)*14+'deg');c.style.setProperty('--mx',x*100+'%');c.style.setProperty('--my',y*100+'%')});c.addEventListener('pointerleave',function(){c.style.removeProperty('--rx');c.style.removeProperty('--ry')});
c.addEventListener('click',function(){S.p=+c.dataset.p;up();$('criar').scrollIntoView({behavior:'smooth'})})});
var T=[{n:'Rosa',a:'#e0607f',b:'#fff1f5',c:'#8a2f52'},{n:'Azul bebê',a:'#7fa6d6',b:'#eaf2fb',c:'#3f6aa0'},{n:'Verde sálvia',a:'#8fa882',b:'#eef3e8',c:'#4f6b45'},{n:'Caramelo',a:'#c98a5e',b:'#fbeee3',c:'#7a4a2c'},{n:'Lilás',a:'#a58bd0',b:'#f2ecfa',c:'#5b4690'},{n:'Amarelo',a:'#e8b93c',b:'#fff6dc',c:'#8a6410'}];
var S={p:0,name:'',theme:0,qty:10};
C.items.forEach(function(t,k){var b=document.createElement('button');b.type='button';b.className='fc';b.textContent=t;b.dataset.g='p';b.dataset.k=k;b.addEventListener('click',function(){S.p=k;up()});$('g-prod').appendChild(b)});
T.forEach(function(o,k){var b=document.createElement('button');b.type='button';b.style.background=o.a;b.setAttribute('aria-label',o.n);b.dataset.g='theme';b.dataset.k=k;b.addEventListener('click',function(){S.theme=k;up()});$('sw').appendChild(b)});
function up(){var o=T[S.theme],pv=$('pv');
document.querySelectorAll('[data-g]').forEach(function(b){b.setAttribute('aria-pressed',String(S[b.dataset.g])===b.dataset.k)});
pv.style.setProperty('--pb',o.b);pv.style.setProperty('--pa',o.a);pv.style.setProperty('--pc',o.c);
$('pn2').textContent=S.name.trim()||'Seu nome';$('pp').textContent=C.items[S.p]+' · '+S.qty+' un.';$('qv').textContent=S.qty}
$('nm').addEventListener('input',function(){S.name=this.value;up()});
$('qm').addEventListener('click',function(){S.qty=Math.max(1,S.qty-1);up()});$('qp').addEventListener('click',function(){S.qty=Math.min(999,S.qty+1);up()});
$('rnd').addEventListener('click',function(){S.theme=Math.floor(Math.random()*T.length);up()});
up();
$('go').addEventListener('click',function(){var v=S.name.trim(),msg='Olá, Gislane! Quero '+S.qty+' unidade(s) de '+C.items[S.p].toLowerCase()+(v?' com o nome "'+v+'"':'')+', tema '+T[S.theme].n+'.';
window.open('https://wa.me/558399049690?text='+encodeURIComponent(msg),'_blank','noopener')});
var root=document.documentElement,tb=$('theme');
function setTheme(t,s){root.setAttribute('data-theme',t);var d=t==='dark';tb.setAttribute('aria-pressed',d);tb.setAttribute('aria-label',d?'Ativar modo claro':'Ativar modo escuro');var m=document.querySelector('meta[name=theme-color]');if(m)m.setAttribute('content',d?'#241219':'#ffffff');if(s){try{localStorage.setItem('tema',t)}catch(e){}}}
setTheme(root.getAttribute('data-theme')||'light',false);
tb.addEventListener('click',function(){setTheme(root.getAttribute('data-theme')==='dark'?'light':'dark',true)});
})();
