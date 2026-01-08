---
layout: default
title: Blog
permalink: /blog/
hero_image: /assets/images/hero/blog.jpg
hero_title: Blog
hero_subtitle: The current project progress is documented here. 
---

{% for post in site.posts %}
  <div class="card" style="margin-bottom:16px;">
    <div class="badge accent">{{ post.date | date: "%b %d, %Y" }}</div>
    <h2 style="margin:10px 0 6px 0;">
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </h2>
    <p class="muted">{{ post.excerpt | strip_html | truncate: 180 }}</p>
    {% if post.project %}
      <div class="muted">Project: <span class="badge">{{ post.project }}</span></div>
    {% endif %}
  </div>
{% endfor %}
