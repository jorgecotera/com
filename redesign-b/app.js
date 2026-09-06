const menuButton=document.querySelector('.menu');
const nav=document.querySelector('.top nav');
const topBar=document.querySelector('.top');
const mainContent=document.querySelector('main');
const MOBILE_NAV_MAX=1080;

// Acceso directo al contenido principal para navegación por teclado.
if(mainContent){
  if(!mainContent.id)mainContent.id='contenido-principal';
  if(!mainContent.hasAttribute('tabindex'))mainContent.setAttribute('tabindex','-1');
  if(!document.querySelector('.skip-link')){
    const skipLink=document.createElement('a');
    skipLink.className='skip-link';
    skipLink.href=`#${mainContent.id}`;
    skipLink.textContent='Saltar al contenido';
    skipLink.addEventListener('click',()=>{
      requestAnimationFrame(()=>mainContent.focus({preventScroll:true}));
    });
    document.body.insertBefore(skipLink,document.body.firstChild);
  }
}

// Marca visual y semánticamente la sección actual cuando la página no lo trae ya definido.
if(nav&&!nav.querySelector('[aria-current="page"]')){
  const currentPage=location.pathname.split('/').pop()||'index.html';
  nav.querySelectorAll('a[href]').forEach(link=>{
    const url=new URL(link.getAttribute('href'),location.href);
    const linkedPage=url.pathname.split('/').pop()||'index.html';
    if(!url.hash&&linkedPage===currentPage)link.setAttribute('aria-current','page');
  });
}

function setMenuState(open){
  menuButton?.setAttribute('aria-expanded',String(open));
  menuButton?.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');
}

function closeMenu({restoreFocus=false}={}){
  if(!nav)return;
  const wasOpen=nav.classList.contains('open');
  nav.classList.remove('open');
  setMenuState(false);
  if(restoreFocus&&wasOpen)menuButton?.focus();
}

if(menuButton&&nav){
  if(!nav.id)nav.id='site-navigation';
  menuButton.setAttribute('aria-controls',nav.id);
  setMenuState(false);
  menuButton.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    setMenuState(open);
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>closeMenu()));

  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&nav.classList.contains('open')){
      event.preventDefault();
      closeMenu({restoreFocus:true});
    }
  });

  document.addEventListener('pointerdown',event=>{
    if(!nav.classList.contains('open'))return;
    if(topBar?.contains(event.target))return;
    closeMenu();
  });

  window.addEventListener('resize',()=>{
    if(window.innerWidth>MOBILE_NAV_MAX)closeMenu();
  });
}

// Acceso global al buscador sin recargar ni duplicar la navegación de cada sección.
const onSearchPage=/buscar\.html$/i.test(location.pathname);
if(topBar&&!onSearchPage&&!topBar.querySelector('.header-search')){
  const searchLink=document.createElement('a');
  searchLink.className='header-search';
  searchLink.href='buscar.html';
  searchLink.textContent='Buscar';
  searchLink.setAttribute('aria-label','Buscar en todo el sitio');
  searchLink.title='Buscar en todo el sitio (/ o Ctrl+K)';
  topBar.classList.add('has-search');
  if(menuButton)topBar.insertBefore(searchLink,menuButton);
  else if(nav)topBar.insertBefore(searchLink,nav);
  else topBar.appendChild(searchLink);
}

// Atajo de teclado: / o Ctrl/Cmd + K abre la búsqueda. En la propia página, enfoca el campo.
document.addEventListener('keydown',event=>{
  const target=event.target;
  const typing=target instanceof HTMLInputElement||target instanceof HTMLTextAreaElement||target instanceof HTMLSelectElement||target?.isContentEditable;
  const shortcut=(!typing&&!event.altKey&&!event.ctrlKey&&!event.metaKey&&event.key==='/')||((event.ctrlKey||event.metaKey)&&!event.altKey&&event.key.toLowerCase()==='k');
  if(!shortcut)return;
  event.preventDefault();
  if(onSearchPage)document.querySelector('#site-search-input')?.focus();
  else location.href='buscar.html';
});

const content=window.siteContent||{slides:[],articles:[]};

// Galería de bienvenida: se alimenta desde content.js para actualizar fotos sin tocar la estructura.
const slidesRoot=document.querySelector('#welcome-slides');
const dotsRoot=document.querySelector('#slide-dots');
const caption=document.querySelector('#slide-caption');
const photoStage=document.querySelector('.photo-stage');
const reducedMotion=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches===true;
let slideIndex=0;
let slideTimer=null;
let touchStartX=null;
let touchStartY=null;

if(caption)caption.setAttribute('aria-live','polite');

if(slidesRoot&&content.slides.length){
  content.slides.forEach((item,index)=>{
    const slide=document.createElement('figure');
    slide.className=`slide${index===0?' active':''}`;
    slide.setAttribute('aria-hidden',String(index!==0));
    slide.innerHTML=`<img src="${item.src}" alt="${item.alt}" loading="${index===0?'eager':'lazy'}">`;
    slidesRoot.appendChild(slide);

    const dot=document.createElement('button');
    dot.type='button';
    dot.className=`slide-dot${index===0?' active':''}`;
    dot.setAttribute('aria-label',`Ver fotografía ${index+1} de ${content.slides.length}`);
    dot.setAttribute('aria-current',index===0?'true':'false');
    dot.addEventListener('click',()=>showSlide(index,true));
    dotsRoot?.appendChild(dot);
  });
  showSlide(0);
  startSlides();
}

function showSlide(index,restart=false){
  const allSlides=[...document.querySelectorAll('.slide')];
  const allDots=[...document.querySelectorAll('.slide-dot')];
  if(!allSlides.length)return;
  slideIndex=(index+allSlides.length)%allSlides.length;
  allSlides.forEach((el,i)=>{
    const active=i===slideIndex;
    el.classList.toggle('active',active);
    el.setAttribute('aria-hidden',String(!active));
  });
  allDots.forEach((el,i)=>{
    const active=i===slideIndex;
    el.classList.toggle('active',active);
    el.setAttribute('aria-current',active?'true':'false');
  });
  if(caption)caption.textContent=content.slides[slideIndex]?.caption||'';
  if(restart)startSlides();
}

function stopSlides(){
  clearInterval(slideTimer);
  slideTimer=null;
}

function startSlides(){
  stopSlides();
  if(document.hidden)return;
  if(!reducedMotion&&content.slides.length>1){
    slideTimer=setInterval(()=>showSlide(slideIndex+1),5500);
  }
}

document.querySelector('#prev-slide')?.addEventListener('click',()=>showSlide(slideIndex-1,true));
document.querySelector('#next-slide')?.addEventListener('click',()=>showSlide(slideIndex+1,true));
photoStage?.addEventListener('mouseenter',stopSlides);
photoStage?.addEventListener('mouseleave',startSlides);
photoStage?.addEventListener('focusin',stopSlides);
photoStage?.addEventListener('focusout',event=>{
  if(!photoStage.contains(event.relatedTarget))startSlides();
});

// Deslizamiento táctil horizontal sin interferir con el desplazamiento vertical de la página.
photoStage?.addEventListener('touchstart',event=>{
  const point=event.touches[0];
  if(!point)return;
  touchStartX=point.clientX;
  touchStartY=point.clientY;
  stopSlides();
},{passive:true});
photoStage?.addEventListener('touchend',event=>{
  if(touchStartX===null||touchStartY===null)return;
  const point=event.changedTouches[0];
  const dx=point.clientX-touchStartX;
  const dy=point.clientY-touchStartY;
  touchStartX=null;
  touchStartY=null;
  if(Math.abs(dx)>=45&&Math.abs(dx)>Math.abs(dy)*1.2){
    showSlide(slideIndex+(dx<0?1:-1),true);
  }else{
    startSlides();
  }
},{passive:true});

document.addEventListener('visibilitychange',()=>{
  if(document.hidden)stopSlides();
  else startSlides();
});

// Publicaciones: el orden utiliza la precisión real disponible en la fuente.
function compareArticles(a,b){
  const keyA=a.sortKey||a.date||'0000';
  const keyB=b.sortKey||b.date||'0000';
  const byKey=keyB.localeCompare(keyA,'en');
  return byKey||((b.sourceOrder||0)-(a.sourceOrder||0));
}

const articles=[...content.articles].sort(compareArticles);
const latest=articles[0];
const latestRoot=document.querySelector('#latest-article');
if(latestRoot&&latest){
  latestRoot.innerHTML=`
    <div class="latest-image"><img src="${latest.image}" alt="Imagen del archivo visual del sitio"><span class="latest-badge">ÚLTIMA PUBLICACIÓN</span></div>
    <div class="latest-copy">
      <div class="article-meta">${latest.displayDate} · ${latest.category}</div>
      <h3>${latest.title}</h3>
      ${latest.subtitle?`<p class="subtitle">${latest.subtitle}</p>`:''}
      ${latest.excerpt?`<p class="excerpt">${latest.excerpt}</p>`:''}
      <a class="read-link" href="${latest.href}">Leer artículo completo ↗</a>
    </div>`;
}

const recentRoot=document.querySelector('#recent-articles');
if(recentRoot){
  articles.slice(1,4).forEach((article,index)=>{
    const card=document.createElement('article');
    card.className='recent-card';
    card.innerHTML=`
      <span class="article-number">0${index+2}</span>
      <div class="article-meta">${article.displayDate}</div>
      <h4>${article.title}</h4>
      ${article.subtitle?`<p>${article.subtitle}</p>`:''}
      <a class="read-link" href="${article.href}">Leer →</a>`;
    recentRoot.appendChild(card);
  });
}

// Archivo general: hace visibles páginas históricas auxiliares que antes solo eran alcanzables por rutas internas.
const archivePreserveNote=/archivo\.html$/i.test(location.pathname)?document.querySelector('.preserve-note'):null;
if(archivePreserveNote&&!document.querySelector('#legacy-aux-pages')){
  const section=document.createElement('section');
  section.className='utility-section';
  section.id='legacy-aux-pages';
  section.innerHTML=`
    <header>
      <div><p class="eyebrow">PÁGINAS AUXILIARES HISTÓRICAS</p><h2>Materiales conservados fuera de la navegación principal.</h2></div>
      <p>Estas páginas forman parte del archivo original y ahora también pueden localizarse desde el mapa general y el buscador.</p>
    </header>
    <div class="utility-grid">
      <a class="utility-card" href="../E.htm"><small>Evaluación y política educativa</small><strong>Día E e Índice Sintético</strong><span>Reflexión histórica sobre evaluación externa y calidad educativa.</span><b>Abrir ↗</b></a>
      <a class="utility-card" href="../Pica%20Pica.htm"><small>Experiencia institucional</small><strong>Pica-Pica Nuevo</strong><span>Ruta de la Calidad, caracterización y trabajo institucional en Montelíbano.</span><b>Abrir ↗</b></a>
      <a class="utility-card" href="../Matematicas%202.htm"><small>Curso histórico</small><strong>Matemáticas 2020</strong><span>Números reales, documentos de consulta, taller y videos de apoyo.</span><b>Abrir ↗</b></a>
      <a class="utility-card" href="../Porta1%20Exposiciones.htm"><small>P.E.I.</small><strong>Exposiciones P.E.I.</strong><span>Pensamiento crítico latinoamericano, bases epistemológicas y modelos pedagógicos.</span><b>Abrir ↗</b></a>
      <a class="utility-card" href="../Porta3%20Acompa%C3%B1amiento.htm"><small>Evaluación</small><strong>Acompañamiento de evaluación</strong><span>Sistema institucional, diseño de pruebas e información histórica de Wayra System.</span><b>Abrir ↗</b></a>
      <a class="utility-card" href="../Porta3%20Exposiciones.htm"><small>Evaluación</small><strong>Exposiciones sobre evaluación</strong><span>El Cuerpo de la Evaluación, competencias y otros materiales expositivos.</span><b>Abrir ↗</b></a>
      <a class="utility-card" href="../Instruciones.htm"><small>Pruebas 2021</small><strong>Instrucciones de pruebas</strong><span>Láminas e indicaciones históricas de los tipos de prueba aplicados en abril de 2021.</span><b>Abrir ↗</b></a>
      <a class="utility-card" href="../Saber11%20-%20Respaldo.htm"><small>Preparación</small><strong>Saber 11 · respaldo</strong><span>Versión de respaldo de la antigua orientación con clases, actividades y documentos.</span><b>Abrir ↗</b></a>
    </div>`;
  archivePreserveNote.before(section);
}

// Tras publicar el rediseño, el archivo conserva un acceso real a la portada original.
if(/archivo\.html$/i.test(location.pathname)){
  const historicalHome=document.querySelector('a.utility-card[href="../index.htm"]');
  if(historicalHome)historicalHome.href='../index-historico.htm';
}
