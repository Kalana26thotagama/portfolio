// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');
  const yearEl = document.getElementById('year');

  if(yearEl) yearEl.textContent = new Date().getFullYear();

  if(navToggle && siteNav){
    navToggle.addEventListener('click', function(){
      siteNav.classList.toggle('show');
      const expanded = siteNav.classList.contains('show');
      navToggle.setAttribute('aria-expanded', expanded);
    });
  }

  // Simple contact form handling (not sending anywhere)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const fd = new FormData(form);
      const name = fd.get('name')?.toString().trim();
      const email = fd.get('email')?.toString().trim();
      const message = fd.get('message')?.toString().trim();

      if(!name || !email || !message){
        status.textContent = 'Please complete all fields.';
        status.style.color = 'crimson';
        return;
      }

      // Fake submit: clear and show success
      form.reset();
      status.style.color = '';
      status.textContent = 'Thanks — your message was received (demo).';
    });
  }
});
