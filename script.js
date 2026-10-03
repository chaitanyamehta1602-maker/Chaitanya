const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('visible')})
},{threshold:.12});
document.querySelectorAll('.card,.project-card,.stats,.broker-table,.hero-card').forEach(el=>{
  el.classList.add('reveal'); observer.observe(el);
});
