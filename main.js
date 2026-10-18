document.querySelectorAll('.menu-btn').forEach(b=>b.addEventListener('click',()=>{document.querySelector('nav.gnav').classList.toggle('open')}));
document.querySelectorAll('form.form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const n=f.querySelector('.demo-note');if(n)n.style.display='block';}));
const fb=document.querySelectorAll('.filter button');
fb.forEach(b=>b.addEventListener('click',()=>{fb.forEach(x=>x.classList.remove('on'));b.classList.add('on');const k=b.dataset.k;document.querySelectorAll('.work').forEach(w=>{w.style.display=(k==='all'||w.dataset.k===k)?'':'none'})}));
