---
layout: default
title: Home
hero_image: /assets/images/hero/home.jpg
hero_title: Tomáš Hadámek Personal Website
hero_subtitle: Welcome to my personal website where I gather my creative projects. These projects span bike builds, various electronic projects, and more recently music instrument restorations. As a passionate photographer, I also present some of my favorite pictures.
---

<div class="grid">

  <a class="card card-link tile" href="{{ '/projects/' | relative_url }}"
     style="background-image: url('/assets/images/hero/projects-tile.jpg'); background-size: cover; background-position: center;">
    <div class="tile-text">
        <h2>Projects</h2>
        <!-- <p class="muted">What I'm building + current status.</p> -->
        <!-- <span class="muted">Browse projects →</span> -->
    </div>  
  </a>

  <a class="card card-link tile" href="{{ '/gallery/' | relative_url }}"
     style="background-image: url('/assets/images/hero/gallery-tile.jpg'); background-size: cover; background-position: center;">
    <div class="tile-text">
      <h2>Gallery</h2>
      <!-- <p class="muted">Photos and visual updates.</p> -->
      <!-- <span class="muted">View gallery →</span> -->
    </div> 
  </a>

  <a class="card card-link tile" href="{{ '/blog/' | relative_url }}"
  style="background-image: url('/assets/images/hero/blog-tile.jpg'); background-size: cover; background-position: center;">
    <div class="tile-text">
      <h2>Blog</h2>
      <!-- <p class="muted">Development logs and progress posts.</p> -->
      <!-- <span class="muted">Read posts →</span> -->
    </div> 
  </a>

</div>

<hr />

<h2>Latest posts</h2>
<ul>
  {% for post in site.posts limit:5 %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span class="muted">· {{ post.date | date: "%b %d, %Y" }}</span>
    </li>
  {% endfor %}
</ul>
