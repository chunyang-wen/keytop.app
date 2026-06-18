document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const purchaseSuccess = document.querySelector('[data-purchase-success]');
  const licenseWrapper = document.querySelector('[data-license-wrapper]');
  const licenseKey = document.querySelector('[data-license-key]');

  if (params.get('purchase') === 'success' && purchaseSuccess) {
    purchaseSuccess.hidden = false;
    document.querySelector('#download')?.scrollIntoView({ block: 'start' });

    const key = params.get('license_key');
    if (key && licenseWrapper && licenseKey) {
      licenseKey.textContent = key;
      licenseWrapper.hidden = false;
    }
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
  });
});
