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

const init = async () => {
  await loadInclude('header', '/components/header.html');
  handleCurrentPage();

  await loadInclude('footer', '/components/footer.html');
};

init();
