---
layout: default
title: Projects
permalink: /projects/
hero_image: /assets/images/hero/projects.jpg
hero_title: Projects
hero_subtitle: Welcome to my project page. Both ongoing and finished projects are listed.
---

<div class="projects">
  <div class="grid">
    {% assign ordered = site.projects | where_exp: "p", "p.order" | sort: "order" %}
    {% assign unordered = site.projects | where_exp: "p", "p.order == nil" %}
    {% assign sorted = ordered | concat: unordered %}
    {% for p in sorted %}
      <a class="card project-card" href="{{ p.url | relative_url }}">
        {% if p.cover %}
          <img class="responsive" src="{{ p.cover | relative_url }}" alt="{{ p.title }} cover" style="margin-bottom:12px;">
        {% endif %}

        <h3 class="project-title-link">{{ p.title }}</h3>
        <p class="muted">{{ p.summary }}</p>

        <p class="project-badges">
          {% assign status_lc = p.status | downcase %}
          {% if status_lc == "finished" %}
            <span class="badge finished">{{ p.status }}</span>
          {% elsif status_lc == "delivered" %}
            <span class="badge delivered">{{ p.status }}</span>
          {% elsif p.status %}
            <span class="badge accent">{{ p.status }}</span>
          {% endif %}

          {% if p.stack %}
            {% assign stacks = p.stack | split: "," %}
            {% for s in stacks %}
              <span class="badge">{{ s | strip }}</span>
            {% endfor %}
          {% endif %}
        </p>
      </a>
    {% endfor %}
  </div>
</div>
