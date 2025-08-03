const tabs = document.querySelectorAll('[role="tab"]');
const tabList = document.querySelector('[role="tablist"]');
const panels = document.querySelectorAll('.tab-panel');

let tabFocus = 0;

// タブとパネルの切り替え処理
const activateTab = (selectedTab) => {
  tabs.forEach((tab, index) => {
    const isSelected = tab === selectedTab;
    tab.setAttribute('aria-selected', isSelected);
    tab.setAttribute('tabindex', isSelected ? '0' : '-1');
    tab.classList.toggle('is-current', isSelected);
    if (isSelected) tabFocus = index;
  });

  const selectedId = selectedTab.dataset.tab;
  panels.forEach(panel =>
    panel.classList.toggle('hidden', panel.id !== selectedId)
  );
};

// クリックによるタブ切り替え
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabFocus = index;
    activateTab(tab);
  });
});

// キーボード操作によるタブ切り替え
tabList.addEventListener("keydown", (e) => {
  const keys = ['ArrowLeft', 'ArrowRight', 'Enter', ' '];
  if (!keys.includes(e.key)) return;

  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    tabs[tabFocus].setAttribute('tabindex', -1);

    tabFocus = e.key === 'ArrowRight' ? (tabFocus + 1) % tabs.length : (tabFocus - 1 + tabs.length) % tabs.length;

    tabs[tabFocus].setAttribute('tabindex', 0);
    tabs[tabFocus].focus();
  }

  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    activateTab(tabs[tabFocus]);
  }
});
