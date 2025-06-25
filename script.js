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

     const basePrice = 4800000;
    let totalPrice = basePrice;
    const priceDisplay = document.getElementById('price');
    const addons = document.querySelectorAll('.addon');

    addons.forEach(addon => {
      addon.addEventListener('click', () => {
        const price = parseInt(addon.dataset.price);
        addon.classList.toggle('active');

        if (addon.classList.contains('active')) {
          totalPrice += price;
        } else {
          totalPrice -= price;
        }

        priceDisplay.textContent = `$${totalPrice.toLocaleString('es-AR')}`;
      });
    });