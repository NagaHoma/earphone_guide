
const list = document.getElementById('paginationList');
const page = list.dataset.page;
const isRecruit = page === 'recruit'
const pageSize = isRecruit ? 9 : 10;
let currentPage = 1;

const allItems = Array.from(list.querySelectorAll('.js-pagination-item'));
const paginationControls = document.getElementById('pagination');

const renderPage = (page) => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  allItems.forEach((item, index) => {
    item.style.display = (index >= start && index < end) ? '' : 'none';

    // 最終行のみ下線なし
    if(index === end - 1) {
      item.style.borderBottom = 'none'
    }
  });

}

const renderPagination = () => {
  if (!paginationControls) return;

  paginationControls.innerHTML = '';
  const totalPages = Math.ceil(allItems.length / pageSize);

  const createButton = (label = '', page = null, disabled = false, isCurrent = false, isPrev = false, isNext = false) => {
    const btn = document.createElement('button');
    btn.textContent = label;
    btn.disabled = disabled;
    btn.classList.add('pagination-button', 'button-ghost');
    if (isCurrent) btn.classList.add('pagination-current');
    if (isPrev) btn.classList.add('pagination-prev');
    if (isNext) btn.classList.add('pagination-next');
    if (page !== null) {
      btn.addEventListener('click', () => {
        currentPage = page;
        renderPage(currentPage);
        renderPagination();
      });
    }
    return btn;
  };

  // 「前へ」
  paginationControls.appendChild(createButton('', currentPage - 1, currentPage === 1, false, true, false));

  const pages = [];

  // 必ず表示するページ：先頭・末尾・現在の前後
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      pages.push(i);
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      pages.push('...');
    }
  }

  // 重複排除
  const dedupedPages = [];
  for (let i = 0; i < pages.length; i++) {
    if (pages[i] !== '...' || dedupedPages[dedupedPages.length - 1] !== '...') {
      dedupedPages.push(pages[i]);
    }
  }

  // ボタン作成
  dedupedPages.forEach(p => {
    if (p === '...') {
      const span = document.createElement('span');
      span.textContent = '...';
      span.classList.add('pagination-ellipsis');
      paginationControls.appendChild(span);
    } else {
      paginationControls.appendChild(createButton(p, p, false, p === currentPage, false, false));
    }
  });

  // 「次へ」
  paginationControls.appendChild(createButton('', currentPage + 1, currentPage === totalPages, false, false, true));
};


renderPage(currentPage);
renderPagination();
