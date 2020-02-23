---
permalink: /
title: "About Me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a Gameplay and Tool Developer with one year experience in Software Development. I am Eager to learn and a quick study, with experience in Team work and Solo projects. I have made 8 home build games all available on the website.

I Proficient in
======
<ul>
<li>Unity3D using C#</li>
<li>Programming in C, C++, Java, VB.net</li>
<li>Blender(basic)</li>
<li>Photoshop</li>
</ul>

Projects
======
{% for post in site.portfolio %}
  {% include archive-single.html %}
{% endfor %}
