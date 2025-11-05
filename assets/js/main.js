/**
 * Awesome Indie Games Collection - Optimized JavaScript
 * 功能：返回顶部、平滑滚动、基础交互
 */

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 返回顶部按钮
  initBackToTop();
  // 平滑滚动
  initSmoothScroll();
  // 外部链接处理
  initExternalLinks();
});

/**
 * 返回顶部功能
 */
function initBackToTop() {
  const backToTopButton = document.getElementById('back-to-top');
  if (!backToTopButton) return;

  window.addEventListener('scroll', debounce(function() {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.remove('d-none');
    } else {
      backToTopButton.classList.add('d-none');
    }
  }, 100));

  backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/**
 * 平滑滚动
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/**
 * 外部链接处理
 */
function initExternalLinks() {
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.href.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener');
    }
  });
}

/**
 * 防抖函数
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
