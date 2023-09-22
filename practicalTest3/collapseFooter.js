function expandCollapseFooter() {
    const footer = document.querySelector('.footer');
    const footerContent = document.querySelector('.footer-content');
    if (footer.classList.contains('expanded')) {
      footer.classList.remove('expanded');
      footerContent.style.display = 'none';
    } else {
      footer.classList.add('expanded');
      footerContent.style.display = 'block';
    }
  }