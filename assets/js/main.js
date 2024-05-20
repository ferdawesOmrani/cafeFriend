document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Mobile nav toggle
   */

  const mobileNavToogleButton = document.querySelector('.mobile-nav-toggle');

  if (mobileNavToogleButton) {
    mobileNavToogleButton.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    });
  }

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToogleButton.classList.toggle('bi-list');
    mobileNavToogleButton.classList.toggle('bi-x');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Hero Slider
   */
  var swiper = new Swiper(".sliderFeaturedPosts", {
    spaceBetween: 0,
    speed: 500,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".custom-swiper-button-next",
      prevEl: ".custom-swiper-button-prev",
    },
  });

  /**
   * Open and close the search form.
   */
  const searchOpen = document.querySelector('.js-search-open');
  const searchClose = document.querySelector('.js-search-close');
  const searchWrap = document.querySelector(".js-search-form-wrap");

  searchOpen.addEventListener("click", (e) => {
    e.preventDefault();
    searchWrap.classList.add("active");
  });

  searchClose.addEventListener("click", (e) => {
    e.preventDefault();
    searchWrap.classList.remove("active");
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});



// function addToCart(productName) {
//   // Récupérer les produits dans le localStorage
//   let cart = JSON.parse(localStorage.getItem('cart')) || [];

//   // Ajouter le produit au panier
//   cart.push(productName);

//   // Mettre à jour le localStorage
//   localStorage.setItem('cart', JSON.stringify(cart));

//   alert(`${productName} a été ajouté au panier.`);
// }


// function addToCart(productName) {
//   const product = document.querySelector('.product');
//   const productClone = product.cloneNode(true);
//   const addButton = productClone.querySelector('.btns button:first-child');
//   addButton.remove();

//   const productData = {
//       html: productClone.innerHTML
//   };

//   let cart = localStorage.getItem('cart');
//   cart = cart ? JSON.parse(cart) : [];
//   cart.push(productData);
//   localStorage.setItem('cart', JSON.stringify(cart));
// }



// document.addEventListener('DOMContentLoaded', function() {
//   // Récupérer les produits du localStorage
//   let cart = JSON.parse(localStorage.getItem('cart')) || [];

//   // Afficher les produits dans le panier
//   let cartItemsContainer = document.getElementById('cart-items');
//   if (cart.length === 0) {
//       cartItemsContainer.innerHTML = '<p>Votre panier est vide.</p><i class="fa-solid fa-face-sad-tear"></i>';
//   } else {
//       cart.forEach(product => {
//           let productElement = document.createElement('div');
//           productElement.textContent = product;
//           cartItemsContainer.appendChild(productElement);
//       });
//   }
// });


// document.addEventListener('DOMContentLoaded', function () {
//   let cart = localStorage.getItem('cart');
//   cart = cart ? JSON.parse(cart) : [];

//   const cartContainer = document.getElementById('cart');
//   if (cart.length === 0) {
//           cartContainer.innerHTML = '<p>Votre panier est vide.</p><i class="fa-solid fa-face-sad-tear"></i>';
//   }else {
//   cart.forEach(item => {
//       const productDiv = document.createElement('div');
//       productDiv.classList.add('product');
//       productDiv.innerHTML = item.html;
//       cartContainer.appendChild(productDiv);
//   });}
// });




document.addEventListener('DOMContentLoaded', function() {
  // Fonction pour ajouter un produit au panier
  function addToCart(product) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${product.name} a été ajouté au panier.`);
  }

  // Sélectionner tous les boutons "Ajouter au panier"
  const addToCartButtons = document.querySelectorAll('.addToCartBtn');

  addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
          const productElement = this.closest('.product');
          const product = {
              name: productElement.getAttribute('data-name'),
              description: productElement.getAttribute('data-description'),
              price: productElement.getAttribute('data-price'),
              image: productElement.getAttribute('data-image')
          };
          addToCart(product);
      });
  });
});



document.addEventListener('DOMContentLoaded', function() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let cartItemsContainer = document.getElementById('cart-items');

  function displayCart() {
      cartItemsContainer.innerHTML = '';
      if (cart.length === 0) {
          cartItemsContainer.innerHTML = '<p>Votre panier est vide.</p>';
      } else {
          cart.forEach(product => {
            let user =  document.createElement('div');
            let userName = document.createElement('label');
            userName.textContent = 'Name :';
            let input = document.createElement('input');
            user.appendChild(userName);
            user.appendChild(input);

            let productElement = document.createElement('div');
            productElement.classList.add('product');

            let productDesc = document.createElement('div');
            productDesc.classList.add('productDesc');
            let productName = document.createElement('h3');
            productName.textContent = product.name;
            productName.classList.add('productName');
            productDesc.appendChild(productName);

            let productSales = document.createElement('div');
            productSales.classList.add('productSales');
            let productPrice = document.createElement('h3');
            productPrice.textContent = product.price + 'DT';
            productPrice.classList.add('price');
            productSales.appendChild(productPrice);
            productElement.appendChild(productSales);

            let btn = document.createElement('button');
            btn.textContent = 'valider';

            cartItemsContainer.appendChild(productElement);
          });
      }
  }

  displayCart();

  window.addToCart = function(name, description, image, price) {
      cart.push({ name, description, image, price });
      localStorage.setItem('cart', JSON.stringify(cart));
      displayCart();
  }

  window.sendCart = function() {
      fetch('orders.php', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(cart)
      })
      .then(response => response.text())
      .then(data => {
          console.log('Success:', data);
          alert('Commande envoyée avec succès');
          localStorage.removeItem('cart');
          cart = [];
          displayCart();
      })
      .catch((error) => {
          console.error('Error:', error);
      });
  }
});
