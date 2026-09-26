(function () {
  const filters = [...document.querySelectorAll('.filter')];
  const cards = [...document.querySelectorAll('[data-roles]')];
  const roleLinks = [...document.querySelectorAll('[data-role-link]')];

  function applyRole(role, updateUrl = false) {
    const valid = ['all','software','ai','integration','mobile','quality'];
    if (!valid.includes(role)) role = 'all';
    filters.forEach(b => b.classList.toggle('active', b.dataset.filter === role));
    roleLinks.forEach(a => a.classList.toggle('active', a.dataset.roleLink === role));
    cards.forEach(card => {
      const roles = (card.dataset.roles || '').split(' ');
      card.classList.toggle('hidden', role !== 'all' && !roles.includes(role));
    });
    if (updateUrl) {
      const url = new URL(window.location.href);
      if (role === 'all') url.searchParams.delete('role'); else url.searchParams.set('role', role);
      history.replaceState({}, '', `${url.pathname}${url.search}#projects`);
    }
  }

  filters.forEach(button => button.addEventListener('click', () => applyRole(button.dataset.filter, true)));
  const initial = new URLSearchParams(window.location.search).get('role') || 'all';
  applyRole(initial, false);
})();
