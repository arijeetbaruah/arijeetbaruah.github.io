---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* BTech in Computer Engineering, Bharati Vidyapeeth (Deemed to be University) College of Engineering, 2017
* Diploma in Network Security, Bharati Vidyapeeth (Deemed to be University) College of Engineering, 2016

Work experience
======
* Intern PHP Developer
  * Webonise Labs
  * Duties included: Wordpress and PHP backend development
* Software Developer
  * Webonise Labs
  * Duties included: backend and frontend development
  * Languages: PHP, Javascript and Golang Developer
  
Skills
======
* C
* C++
* Unity
* GoLang
* PHP

Portfolio
======
{% for post in site.portfolio %}
  {% include archive-single.html %}
{% endfor %}
