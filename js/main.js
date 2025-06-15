// ヘッダーフッターの呼び出し
const loadInclude = async (id, file) => {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

// currentページの判定
const handleCurrentPage = () => {
  const currentPath = location.pathname;
  const headerLinks = document.querySelectorAll('.js-handle-current-page a')
  headerLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.includes(href)) {
      link.classList.add('header-link-current');
    }
  });
}

const toggleHeaderMenu = (target) => {
  const header = document.getElementById('header');
  header.classList.toggle('is-open');
  document.body.classList.toggle('is-fixed');

  const isOpen = header.classList.contains('is-open');
  target.innerHTML = `
    <span class="material-symbols-outlined">${isOpen ? 'close' : 'menu'}</span>
  `;
}

const init = async () => {
  await loadInclude('header', '/components/header.html');
  handleCurrentPage();
  const hamburgerIcon = document.querySelector('.js-toggle-header-menu');
  if(hamburgerIcon) {
    hamburgerIcon.addEventListener('click', (e) => {
      toggleHeaderMenu(e.currentTarget)
    })
  }

  await loadInclude('footer', '/components/footer.html');
};

init();
