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
  // const campusTabs = document.querySelectorAll(".campus-tab");
  // const campusPanels = document.querySelectorAll(".campus-panel");

  // campusTabs.forEach((tab) => {
  //   tab.addEventListener("click", () => {
  //     const target = tab.dataset.campus;

  //     campusTabs.forEach((t) => {
  //       t.classList.remove("is-active", "bg-brand-600", "text-white");
  //       t.classList.add("bg-white", "text-ink-600", "border", "border-ink-200");
  //     });
  //     tab.classList.add("is-active", "bg-brand-600", "text-white");
  //     tab.classList.remove("bg-white", "text-ink-600", "border", "border-ink-200");

  //     campusPanels.forEach((panel) => {
  //       panel.classList.toggle("hidden", panel.id !== `campus-panel-${target}`);
  //     });
  //   });
  // });
  /* ---------- 캠퍼스 탭·지도 마커 전환 ---------- */
const campusTabs = document.querySelectorAll(".campus-tab");
const campusPanels = document.querySelectorAll(".campus-panel");
const campusMapPoints = document.querySelectorAll(".campus-map-point");

const campusMainImage = document.querySelector("#campus-main-image");

const campusImages = {
  seoul: {
    src: "./assets/images/campus-seoul.jpg",
    alt: "서울 캠퍼스 대표 사진",
  },
  daejeon: {
    src: "./assets/images/campus-daejeon.png",
    alt: "대전 캠퍼스 대표 사진",
    position: "center 70%",

  },
  gwangju: {
    src: "./assets/images/campus-gwangju.jpg",
    alt: "광주 캠퍼스 대표 사진",
  },
  gumi: {
    src: "./assets/images/campus-gumi.jpg",
    alt: "구미 캠퍼스 대표 사진",
    position: "center 70%",

  },
  buulgyeong: {
    src: "./assets/images/campus-buulgyeong.jpg",
    alt: "부울경 캠퍼스 대표 사진",
  },
};

const activateCampus = (target) => {
  campusTabs.forEach((tab) => {
    const isActive = tab.dataset.campus === target;

    tab.classList.toggle("is-active", isActive);
    tab.classList.toggle("bg-brand-600", isActive);
    tab.classList.toggle("text-white", isActive);

    tab.classList.toggle("bg-white", !isActive);
    tab.classList.toggle("text-ink-600", !isActive);
    tab.classList.toggle("border", !isActive);
    tab.classList.toggle("border-ink-200", !isActive);

    tab.setAttribute("aria-pressed", String(isActive));
  });

  campusPanels.forEach((panel) => {
    const isActive = panel.id === `campus-panel-${target}`;
    panel.classList.toggle("hidden", !isActive);
  });

  campusMapPoints.forEach((point) => {
    const isActive = point.dataset.campus === target;

    point.classList.toggle("is-active", isActive);
    point.setAttribute("aria-pressed", String(isActive));
  });

  const nextImage = campusImages[target];

if (campusMainImage && nextImage) {
  campusMainImage.classList.add("opacity-0");

  setTimeout(() => {
    campusMainImage.src = nextImage.src;
    campusMainImage.alt = nextImage.alt;
    campusMainImage.style.objectPosition = nextImage.position;
    campusMainImage.classList.remove("opacity-0");
  }, 150);
}
};

campusTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activateCampus(tab.dataset.campus);
  });
});

campusMapPoints.forEach((point) => {
  point.addEventListener("click", () => {
    activateCampus(point.dataset.campus);
  });

  point.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      activateCampus(point.dataset.campus);
    }
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

  /* ---------- 챗봇 위젯 ---------- */
  const chatbot = document.getElementById("chatbot");
  if (chatbot) {
    const toggleBtn = document.getElementById("chatbot-toggle");
    const closeBtn = document.getElementById("chatbot-close");
    const panel = document.getElementById("chatbot-panel");
    const messages = document.getElementById("chatbot-messages");
    const quick = document.getElementById("chatbot-quick");
    const iconOpen = document.getElementById("chatbot-icon-open");
    const iconClose = document.getElementById("chatbot-icon-close");

    // 대화 흐름 정의 (선택형)
    const flow = {
      root: {
        bot: "안녕하세요! SSAFY 안내 봇이에요 🙂\n궁금한 주제를 선택해 주세요.",
        options: [
          { label: "모집 자격 관련", goto: "eligibility" },
          { label: "AI 커리큘럼 관련", goto: "curriculum" },
          { label: "취업 정보·사이트 안내", goto: "career" },
          { label: "캠퍼스·교육 장소", goto: "campus" },
          { label: "지원 혜택", goto: "benefit" },
        ],
      },
      eligibility: {
        bot: "SSAFY 지원 자격은 다음과 같아요.\n• 만 29세 이하 미취업자\n• 4년제 대학 졸업(예정)자 · 전공 무관\n• 병역필 또는 면제자",
        options: [
          { label: "모집 일정 보기", href: "#recruit-info" },
          { label: "선발 절차가 궁금해요", goto: "process" },
          { label: "처음으로", goto: "root", subtle: true },
        ],
      },
      process: {
        bot: "선발은 이 순서로 진행돼요.\n지원서 접수 → SW 적성진단 → 인터뷰 → 입과",
        options: [
          { label: "지원하러 가기", href: "https://www.ssafy.com", external: true },
          { label: "처음으로", goto: "root", subtle: true },
        ],
      },
      curriculum: {
        bot: "AI 커리큘럼은 기초부터 실무까지 이어져요.\n• 1학기 : 기초 → 심화 (알고리즘·AI 강의)\n• 2학기 : 실전 프로젝트 (공통·특화·자율)",
        options: [
          { label: "커리큘럼 자세히 보기", href: "#curriculum" },
          { label: "나 같은 배경도 가능할까?", href: "#target" },
          { label: "처음으로", goto: "root", subtle: true },
        ],
      },
      career: {
        bot: "SSAFY 취업 성과예요.\n• 취업률 85%\n• 채용 우대기업 170여 개\n수료 이후 취업할 때까지 지원이 이어져요.",
        options: [
          { label: "취업지원 보러가기", href: "#career" },
          { label: "취업사례 보기", href: "#story" },
          { label: "SSAFY 공식 사이트", href: "https://www.ssafy.com", external: true },
          { label: "처음으로", goto: "root", subtle: true },
        ],
      },
      campus: {
        bot: "전국 5개 캠퍼스에서 동일한 수준의 교육을 운영해요.\n서울·대전·광주·구미·부울경 (지역 캠퍼스 셔틀버스 운영)",
        options: [
          { label: "캠퍼스 보러가기", href: "#campus" },
          { label: "처음으로", goto: "root", subtle: true },
        ],
      },
      benefit: {
        bot: "교육에 집중할 수 있도록 지원해요.\n• 교육지원금 월 100만원 (지역 최대 140만원)\n• GPU 인프라 · AI 전문 강사진",
        options: [
          { label: "혜택 자세히 보기", href: "#benefit" },
          { label: "처음으로", goto: "root", subtle: true },
        ],
      },
    };

    let started = false;

    const scrollToBottom = () => {
      messages.scrollTop = messages.scrollHeight;
    };

    const addBubble = (text, sender) => {
      const bubble = document.createElement("div");
      const base =
        "chatbot-bubble max-w-[85%] px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line rounded-2xl";
      if (sender === "user") {
        bubble.className =
          base + " self-end bg-brand-600 text-white rounded-br-sm";
      } else {
        bubble.className =
          base + " self-start bg-white text-ink-700 border border-ink-100 rounded-bl-sm shadow-sm";
      }
      bubble.textContent = text;
      messages.appendChild(bubble);
      scrollToBottom();
    };

    const renderOptions = (node) => {
      quick.innerHTML = "";
      node.options.forEach((opt) => {
        const chip = document.createElement("button");
        chip.type = "button";
        const subtle = opt.subtle
          ? "border-ink-200 text-ink-500 bg-white hover:bg-ink-50"
          : "border-brand-200 text-brand-700 bg-brand-50 hover:bg-brand-100";
        chip.className =
          "inline-flex items-center gap-1 text-xs font-bold px-3 py-2 rounded-full border transition-colors " +
          subtle;
        chip.innerHTML =
          opt.label +
          (opt.external
            ? ' <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>'
            : "");
        chip.addEventListener("click", () => handleOption(opt));
        quick.appendChild(chip);
      });
    };

    const goToNode = (key) => {
      const node = flow[key];
      if (!node) return;
      // 봇 응답은 살짝 지연시켜 자연스럽게
      setTimeout(() => {
        addBubble(node.bot, "bot");
        renderOptions(node);
      }, 250);
    };

    const handleOption = (opt) => {
      addBubble(opt.label, "user");
      if (opt.goto) {
        goToNode(opt.goto);
        return;
      }
      if (opt.href) {
        if (opt.external) {
          window.open(opt.href, "_blank", "noopener");
          setTimeout(() => {
            addBubble("새 창에서 열었어요. 더 궁금한 점이 있으면 선택해 주세요!", "bot");
            renderOptions(flow.root);
          }, 250);
        } else {
          // 페이지 내 섹션 이동
          const target = document.querySelector(opt.href);
          setTimeout(() => {
            closePanel();
            if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 200);
        }
      }
    };

    const openPanel = () => {
      panel.classList.remove("is-closed");
      panel.setAttribute("aria-hidden", "false");
      toggleBtn.setAttribute("aria-expanded", "true");
      iconOpen.classList.add("hidden");
      iconClose.classList.remove("hidden");
      if (!started) {
        started = true;
        goToNode("root");
      }
    };

    const closePanel = () => {
      panel.classList.add("is-closed");
      panel.setAttribute("aria-hidden", "true");
      toggleBtn.setAttribute("aria-expanded", "false");
      iconOpen.classList.remove("hidden");
      iconClose.classList.add("hidden");
    };

    toggleBtn.addEventListener("click", () => {
      if (panel.classList.contains("is-closed")) openPanel();
      else closePanel();
    });
    closeBtn.addEventListener("click", closePanel);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !panel.classList.contains("is-closed")) closePanel();
    });
  }
});