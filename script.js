// Optional: smooth scroll for nav links (nice UX, not required for design)
document.querySelectorAll('.main-menu .nav-link[href^="#"]').forEach((link) => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (!targetId || targetId === '#') return;

    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 80, 
        behavior: 'smooth'
      });
    }
  });
});


 function handleBooking() {
            alert('¡Gracias por tu interés! Un representante se pondrá en contacto contigo pronto.');
            // Add your booking logic here
        }