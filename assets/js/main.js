/**
* Template Name: Learner - Optimized JS
*/

(function() {
  "use strict";

  /**
   * Header Scroll & Scroll Top Toggle (Combined for better performance)
   */
  const selectBody = document.querySelector('body');
  const selectHeader = document.querySelector('#header');
  const scrollTop = document.querySelector('.scroll-top');

  function handleScrollEvents() {
    const scrollY = window.scrollY;

    // Header scrolled class
    if (selectHeader && (selectHeader.classList.contains('scroll-up-sticky') || selectHeader.classList.contains('sticky-top') || selectHeader.classList.contains('fixed-top'))) {
      scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }

    // Scroll Top Button active class
    if (scrollTop) {
      scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }

  // Use passive listener for butter-smooth scrolling
  document.addEventListener('scroll', handleScrollEvents, { passive: true });
  window.addEventListener('load', handleScrollEvents);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }
  }

  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      if (this.parentNode.nextElementSibling) {
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      }
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top click action
   */
  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  }
  window.addEventListener('load', aosInit);

  /**
   * Safe Initiate Pure Counter
   */
  window.addEventListener('load', () => {
    if (typeof PureCounter !== 'undefined') {
      new PureCounter();
    }
  });

  /**
   * Pricing Toggle
   */
  const pricingContainers = document.querySelectorAll('.pricing-toggle-container');

  pricingContainers.forEach(function(container) {
    const pricingSwitch = container.querySelector('.pricing-toggle input[type="checkbox"]');
    const monthlyText = container.querySelector('.monthly');
    const yearlyText = container.querySelector('.yearly');

    if (pricingSwitch) {
      pricingSwitch.addEventListener('change', function() {
        const pricingItems = container.querySelectorAll('.pricing-item');

        if (this.checked) {
          if (monthlyText) monthlyText.classList.remove('active');
          if (yearlyText) yearlyText.classList.add('active');
          pricingItems.forEach(item => item.classList.add('yearly-active'));
        } else {
          if (monthlyText) monthlyText.classList.add('active');
          if (yearlyText) yearlyText.classList.remove('active');
          pricingItems.forEach(item => item.classList.remove('yearly-active'));
        }
      });
    }
  });

})();
