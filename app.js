(function () {
  const filters = [...document.querySelectorAll('.filter')];
  const cards = [...document.querySelectorAll('[data-roles]')];
  const roleLinks = [...document.querySelectorAll('[data-role-link]')];

  const howIWorkHeading = [...document.querySelectorAll('#personal-statement h2')]
    .find(heading => heading.textContent.includes('Architect the problem'));
  const howIWorkPanel = howIWorkHeading?.closest('.practice-panel');
  if (howIWorkPanel && !document.getElementById('parallel-projects-note')) {
    const toolParagraph = [...howIWorkPanel.querySelectorAll('p')]
      .find(p => p.textContent.includes('ChatGPT') && p.textContent.includes('OpenRouter'));
    if (toolParagraph) {
      const parallelNote = document.createElement('p');
      parallelNote.id = 'parallel-projects-note';
      parallelNote.style.cssText = 'color:var(--muted);font-size:1.02rem;max-width:900px;';
      parallelNote.innerHTML = '<strong style="color:var(--text);">Working with AI this way also lets me keep several projects moving in parallel.</strong> One project can be testing or under review while I research, debug or design another, with each project kept in its own context and evidence trail. The gain is throughput, not lower standards: I still own the priorities, the architecture and the verification.';
      toolParagraph.insertAdjacentElement('afterend', parallelNote);
    }
  }

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
