(function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const project = (window.HUB_PROJECTS || {})[id];
  const root = document.getElementById('project-root');
  if (!project) {
    document.title = 'Project not found | HelpfulCo Engineering Hub';
    root.innerHTML = '<section class="case-hero"><div class="container"><div class="kicker">Project not found</div><h1 class="case-title">That case study is not available.</h1><div class="hero-actions"><a class="btn primary" href="index.html#projects">Back to projects</a></div></div></section>';
    return;
  }

  document.title = `${project.title} | HelpfulCo Engineering Hub`;
  document.querySelector('meta[name="description"]').setAttribute('content', project.intro);
  document.getElementById('top-status').textContent = project.status;

  const status = `<div class="status ${project.statusClass || 'recheck'}">● ${project.status}</div>`;
  const problems = project.problems.map((p, i) => `<article class="problem"><div class="num">0${i+1}</div><h3>${p.title}</h3><p>${p.body}</p><div class="evidence-note"><strong>Evidence:</strong> ${p.evidence}</div></article>`).join('');
  const refs = (project.references || []).map(r => `<tr><td>${r[0]}</td><td><code>${r[1]}</code></td><td>${r[2]}</td></tr>`).join('');
  const limits = (project.limitations || []).map(l => `<div class="limit-card"><p>${l}</p></div>`).join('');
  const links = (project.liveLinks || []).map(l => `<a class="btn ghost external" target="_blank" rel="noopener noreferrer" href="${l.url}">${l.label} ↗</a>`).join('');

  root.innerHTML = `
    <section class="case-hero"><div class="container">
      <div class="breadcrumb"><a href="index.html">Engineering Hub</a> / ${project.title}</div>
      <div class="kicker" style="margin-top:22px">${project.strap}</div>
      <h1 class="case-title">${project.title}</h1>
      <p class="case-subtitle">${project.intro}</p>
      <div class="case-status-row">${status}<span class="evidence-date">${project.evidenceDate}</span></div>
      <div class="hero-actions">${links}<a class="btn ghost" href="#problems">See the engineering problems ↓</a></div>
    </div></section>

    <section id="problems"><div class="container">
      <div class="section-head"><div><div class="kicker">Three engineering problems</div><h2>What this build demonstrates.</h2></div><p>The point is not a feature list. It is the judgement used when cost, reliability, safety, lifecycle or data constraints mattered.</p></div>
      <div class="problem-grid">${problems}</div>
    </div></section>

    <section id="evidence"><div class="container">
      <div class="section-head"><div><div class="kicker">Evidence map</div><h2>Where the story is grounded.</h2></div><p>References are intentionally concise. Private repositories remain private; public wording should never outrun the underlying evidence.</p></div>
      <div class="table-wrap"><table class="evidence-table"><thead><tr><th>Concern</th><th>Evidence reference</th><th>What it supports</th></tr></thead><tbody>${refs}</tbody></table></div>
    </div></section>

    <section><div class="container">
      <div class="section-head"><div><div class="kicker">Limitations</div><h2>The edge of the evidence stays visible.</h2></div><p>A limitation is part of the engineering record, not something to hide from a technical interviewer.</p></div>
      <div class="limits compact">${limits}</div>
      <div class="hero-actions" style="margin-top:28px"><a class="btn primary" href="index.html#projects">← Back to project set</a></div>
    </div></section>`;
})();
