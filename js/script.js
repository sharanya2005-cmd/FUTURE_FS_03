document.addEventListener('DOMContentLoaded',function(){
  // mobile nav
  var navToggle=document.getElementById('nav-toggle');
  var siteNav=document.getElementById('site-nav');
  if(navToggle && siteNav){
    navToggle.addEventListener('click',function(){
      siteNav.classList.toggle('open');
    });
  }

  // gallery filter (works on pages with .filters)
  document.querySelectorAll('.filters').forEach(function(f){
    f.addEventListener('click',function(e){
      var btn=e.target.closest('button');
      if(!btn) return;
      var filter=btn.getAttribute('data-filter');
      f.querySelectorAll('button').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      var gallery=f.nextElementSibling;
      if(!gallery) return;
      gallery.querySelectorAll('figure').forEach(function(fig){
        var cat=fig.getAttribute('data-category');
        if(filter==='all' || filter===cat) fig.style.display='block'; else fig.style.display='none';
      });
    });
  });

  // smooth anchor scroll
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      var href=a.getAttribute('href');
      if(href.length>1){
        var el=document.querySelector(href);
        if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'}); }
      }
    });
  });
});
