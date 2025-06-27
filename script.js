 var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


  document.querySelectorAll('.pricing-card').forEach(card => {
    const basePrice = parseInt(card.dataset.basePrice);
    let totalPrice = basePrice;

    const priceDisplay = card.querySelector('.price');
    const addons = card.querySelectorAll('.addon');

    priceDisplay.textContent = `$${totalPrice.toLocaleString('es-AR')}`;

    addons.forEach(addon => {
      addon.addEventListener('click', () => {
        const price = parseInt(addon.dataset.price);
        addon.classList.toggle('active');

        totalPrice += addon.classList.contains('active') ? price : -price;

        priceDisplay.textContent = `$${totalPrice.toLocaleString('es-AR')}`;
      });
    });
  });
