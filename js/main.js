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
    if (href === currentPath) {
      link.classList.add('header-link-current');
    }
  });
}

const toggleHeaderMenu = () => {
  const header = document.getElementById('header');
  header.classList.toggle('is-open');
  document.body.classList.toggle('is-fixed')
}

const init = async () => {
  await loadInclude('header', '/components/header.html');
  handleCurrentPage();
  const hamburgerIcon = document.querySelector('.js-toggle-header-menu');
  if(hamburgerIcon) {
    hamburgerIcon.addEventListener('click', () => {
      toggleHeaderMenu()
    })
  }

  await loadInclude('footer', '/components/footer.html');
};

init();
