document.addEventListener("DOMContentLoaded", () => {
  /* ---------- 헤더: 스크롤 시 배경 강조 ---------- */
  const header = document.getElementById("site-header");
  const onScroll = () => {
    if (window.scrollY > 8) {
      header.classList.add("shadow-card", "border-ink-100");
    } else {
      header.classList.remove("shadow-card", "border-ink-100");
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- 모바일 메뉴 ---------- */
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconOpen = document.getElementById("menu-icon-open");
  const iconClose = document.getElementById("menu-icon-close");

  const closeMenu = () => {
    mobileMenu.classList.add("hidden");
    menuToggle.setAttribute("aria-expanded", "false");
    iconOpen.classList.remove("hidden");
    iconClose.classList.add("hidden");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("hidden");
    if (isOpen) {
      closeMenu();
    } else {
      mobileMenu.classList.remove("hidden");
      menuToggle.setAttribute("aria-expanded", "true");
      iconOpen.classList.add("hidden");
      iconClose.classList.remove("hidden");
    }
  });

  mobileMenu.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  /* ---------- 스크롤 리빌 애니메이션 ---------- */
  const revealEls = document.querySelectorAll(".reveal:not(.in-view)");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in-view"));
  }

  /* ---------- 취업률 카운터 애니메이션 ---------- */
  const counterEl = document.querySelector("[data-counter]");
  if (counterEl && "IntersectionObserver" in window) {
    const target = parseInt(counterEl.dataset.target, 10) || 0;
    const suffix = counterEl.querySelector("span")?.outerHTML || "";
    let animated = false;

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            animated = true;
            const duration = 1200;
            const start = performance.now();
            const step = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const value = Math.round(target * eased);
              counterEl.innerHTML = value + suffix;
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.5 }
    );
    counterObserver.observe(counterEl);
  }

  /* ---------- 취업률 바 차트 애니메이션 ---------- */
  const barChart = document.getElementById("bar-chart");
  if (barChart && "IntersectionObserver" in window) {
    const barObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll("[data-bar]").forEach((bar) => {
              bar.classList.remove("scale-y-0");
              bar.classList.add("scale-y-100");
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    barObserver.observe(barChart);
  }

  /* ---------- 캠퍼스 탭 전환 ---------- */
  const campusTabs = document.querySelectorAll(".campus-tab");
  const campusPanels = document.querySelectorAll(".campus-panel");

  campusTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.campus;

      campusTabs.forEach((t) => {
        t.classList.remove("is-active", "bg-brand-600", "text-white");
        t.classList.add("bg-white", "text-ink-600", "border", "border-ink-200");
      });
      tab.classList.add("is-active", "bg-brand-600", "text-white");
      tab.classList.remove("bg-white", "text-ink-600", "border", "border-ink-200");

      campusPanels.forEach((panel) => {
        panel.classList.toggle("hidden", panel.id !== `campus-panel-${target}`);
      });
    });
  });

  /* ---------- FAQ 아코디언 (싱글 오픈) ---------- */
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const trigger = item.querySelector(".faq-trigger");
    const panel = item.querySelector(".faq-panel");
    const icon = item.querySelector(".faq-icon");

    trigger.addEventListener("click", () => {
      const isOpen = trigger.getAttribute("aria-expanded") === "true";

      faqItems.forEach((other) => {
        if (other !== item) {
          other.querySelector(".faq-trigger").setAttribute("aria-expanded", "false");
          other.querySelector(".faq-panel").classList.add("hidden");
          other.querySelector(".faq-icon").classList.remove("rotate-180");
        }
      });

      trigger.setAttribute("aria-expanded", String(!isOpen));
      panel.classList.toggle("hidden", isOpen);
      icon.classList.toggle("rotate-180", !isOpen);
    });
  });
});
