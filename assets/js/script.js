/**
 * AlphaMed Center - Custom JS
 */

document.addEventListener("DOMContentLoaded", () => {
  // --- Header Scroll Effect ---
  const header = document.getElementById("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // --- Mobile Menu Toggle ---
  const mobileToggle = document.getElementById("mobile-toggle");
  const navList = document.querySelector(".nav-list");
  
  // Create overlay dynamically
  const navOverlay = document.createElement("div");
  navOverlay.classList.add("nav-overlay");
  document.body.appendChild(navOverlay);

  const toggleMenu = () => {
    navList.classList.toggle("active");
    navOverlay.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
    
    const icon = mobileToggle.querySelector("i");
    if (navList.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
      mobileToggle.setAttribute("aria-expanded", "true");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
      mobileToggle.setAttribute("aria-expanded", "false");
    }
  };

  mobileToggle.addEventListener("click", toggleMenu);
  navOverlay.addEventListener("click", toggleMenu);

  // Close mobile menu when a link is clicked
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navList.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

  // --- Active Link on Scroll ---
  const sections = document.querySelectorAll("section[id]");

  function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute("id");
      const navLink = document.querySelector(
        ".nav-list a[href*=" + sectionId + "]",
      );

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add("active");
        } else {
          navLink.classList.remove("active");
        }
      }
    });
  }

  window.addEventListener("scroll", scrollActive);

  // --- Simple Scroll Animation (Intersection Observer) ---
  const animatedElements = document.querySelectorAll("[data-aos]");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("aos-animate");
        // Optional: Stop observing once animated if you want it to happen only once
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach((el) => {
    observer.observe(el);
  });

  // --- Form Submission Prevention (Demo purpose) ---
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;

      btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';

      setTimeout(() => {
        btn.innerHTML =
          '<i class="fa-solid fa-check"></i> Solicitação enviada com sucesso!';
        btn.classList.replace("btn-primary", "btn-secondary");
        contactForm.reset();

        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.replace("btn-secondary", "btn-primary");
        }, 3000);
      }, 1500);
    });
  }

  // --- Premium Gallery Slider ---
  const track = document.querySelector('.gallery-track');
  const slides = Array.from(document.querySelectorAll('.gallery-slide'));
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');
  const dotsContainer = document.querySelector('.slider-dots');
  
  if (track && slides.length > 0) {
    let currentIndex = 0;
    let slidesPerView = getSlidesPerView();
    let maxIndex = Math.max(0, slides.length - slidesPerView);
    
    function getSlidesPerView() {
      if (window.innerWidth <= 768) return 1;
      if (window.innerWidth <= 1024) return 2;
      return 3;
    }

    // Create dots
    const updateDots = () => {
      dotsContainer.innerHTML = '';
      for (let i = 0; i <= maxIndex; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
      }
    };
    
    const updateCarousel = () => {
      slidesPerView = getSlidesPerView();
      maxIndex = Math.max(0, slides.length - slidesPerView);
      if (currentIndex > maxIndex) currentIndex = maxIndex;
      
      const slideWidth = slides[0].offsetWidth;
      // getting gap dynamically
      const gapMatch = window.getComputedStyle(track).gap.match(/\d+/);
      const gap = gapMatch ? parseInt(gapMatch[0]) : 0;
      
      track.style.transform = `translateX(-${currentIndex * (slideWidth + gap)}px)`;
      
      Array.from(dotsContainer.children).forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    };
    
    const moveToNext = () => {
      if (currentIndex < maxIndex) {
        currentIndex++;
      } else {
        currentIndex = 0; // loop back
      }
      updateCarousel();
    };
    
    const moveToPrev = () => {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = maxIndex;
      }
      updateCarousel();
    };
    
    const goToSlide = (index) => {
      currentIndex = index;
      updateCarousel();
    };
    
    nextBtn.addEventListener('click', moveToNext);
    prevBtn.addEventListener('click', moveToPrev);
    
    window.addEventListener('resize', () => {
      slidesPerView = getSlidesPerView();
      maxIndex = Math.max(0, slides.length - slidesPerView);
      if (currentIndex > maxIndex) currentIndex = maxIndex;
      updateDots();
      updateCarousel();
    });
    
    updateDots();
    updateCarousel();
  }

  // --- Scroll to Top Button ---
  const scrollTopBtn = document.getElementById('scrollToTop');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
