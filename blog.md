---
layout: default
title: Blog
permalink: /blog/
hero_image: /assets/images/hero/blog.jpg
hero_title: Blog
hero_subtitle: The current project progress is documented here.
---

<div class="posts posts--list">
  {% for post in site.posts %}
    <a class="card post-row" href="{{ post.url | relative_url }}">
      <!-- LEFT: date + tags -->
      <div class="post-row__meta">
        <span class="badge accent">{{ post.date | date: "%b %d, %Y" }}</span>

        {% if post.tags %}
          <div class="post-row__tags post-row__tags--meta">
            {% for t in post.tags %}
              <span class="badge">{{ t }}</span>
            {% endfor %}
          </div>
        {% endif %}
      </div>

      <!-- MIDDLE: title + excerpt -->
      <div class="post-row__main">
        <h3 class="post-row__title">{{ post.title }}</h3>

        {% if post.excerpt %}
          <p class="muted post-row__excerpt">
            {{ post.excerpt | strip_html | truncate: 160 }}
          </p>
        {% endif %}
      </div>

      <!-- RIGHT: chevron -->
      <!-- <div class="post-row__chev" aria-hidden="true">›</div> -->
    </a>
  {% endfor %}
</div>
