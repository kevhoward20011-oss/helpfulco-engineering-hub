(function () {
  const nav = document.querySelector('.nav-links');
  if (nav && !nav.querySelector('a[href="#challenge"]')) {
    const challengeLink = document.createElement('a');
    challengeLink.href = '#challenge';
    challengeLink.textContent = 'Challenge me';
    nav.appendChild(challengeLink);
  }

  const personalStatement = document.getElementById('personal-statement');
  if (personalStatement && !document.getElementById('challenge')) {
    const challenge = document.createElement('section');
    challenge.id = 'challenge';
    challenge.className = 'role-section';
    challenge.setAttribute('aria-labelledby', 'challenge-title');
    challenge.innerHTML = `
      <div class="container">
        <div class="practice-panel" style="max-width:1040px;margin:0 auto;border-color:rgba(103,201,255,.28);background:linear-gradient(145deg,rgba(103,201,255,.08),rgba(10,24,38,.96) 40%,rgba(7,20,31,.99));">
          <div class="kicker">Hiring challenge · Test my work</div>
          <h2 id="challenge-title" style="margin-top:8px;max-width:860px;">Send me a problem. Let me show you how I solve it.</h2>
          <p style="color:var(--muted);font-size:1.05rem;max-width:900px;">If you are considering me for an AI automation, integration, workflow or software role, send me a genuine, bounded technical problem or a short hiring challenge.</p>
          <p style="color:var(--muted);font-size:1.02rem;max-width:900px;">Give me the requirements, constraints and expected outcome. I will return the approach I took, the assumptions I made, the solution or prototype, the evidence I used to verify it and the limitations I would still want to address.</p>
          <blockquote style="margin:24px 0 18px;padding:20px 22px;border-left:3px solid var(--cyan);background:rgba(255,255,255,.025);border-radius:0 14px 14px 0;font-size:clamp(1.18rem,2.2vw,1.55rem);line-height:1.4;font-weight:800;max-width:900px;">Do not just take my word for it. Judge the work.</blockquote>
          <p style="color:var(--muted);font-size:1rem;max-width:900px;">For an initial assessment, keep the problem reasonably scoped — roughly an hour to investigate, design or prototype. Please do not send credentials, confidential customer data or proprietary production code.</p>
          <div class="hero-actions" style="margin-top:24px;"><a class="btn primary" href="https://www.meet-amara.co.uk/contact">Send a technical challenge →</a><a class="btn ghost" href="#projects">See the evidence first</a></div>
        </div>
      </div>`;
    personalStatement.insertAdjacentElement('afterend', challenge);
  }

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