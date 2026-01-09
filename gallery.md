---
layout: default
title: Gallery
permalink: /gallery/
hero_image: /assets/images/hero/gallery.jpg
hero_title: Photo Gallery
hero_subtitle: My main passion as a hobby photographer has been macro, detail and landscape photography. 
---

{% assign base = 'assets/images/gallery/' %}

{% for album in site.data.albums %}
  <!-- <h2>{{ album.title }}</h2> -->

  {% assign folder_path = base | append: album.folder | append: '/' %}

  {% assign images = site.static_files
    | where_exp: "f", "f.path contains folder_path"
    | where_exp: "f", "f.extname"
  %}

  {% assign images_sorted = images | sort: "name" %}

  <div class="grid gallery-grid">
    {% for f in images_sorted %}
      {% assign ext = f.extname | downcase %}
      {% if ext == '.jpg' or ext == '.jpeg' or ext == '.png' or ext == '.webp' %}
        <a class="gallery-item lightbox-link"
          href="{{ f.path | relative_url }}"
          data-lightbox="album-{{ album.folder }}">
          <img class="responsive" src="{{ f.path | relative_url }}" alt="{{ f.name }}">
        </a>
      {% endif %}
    {% endfor %}
  </div>

  <hr>
{% endfor %}