---
layout: default
title: Home
---

<!-- ═══════════════════════════════════════════════════
     HERO
═══════════════════════════════════════════════════ -->
<section id="hero">
  <div class="wrap">
    <div class="hero-grid">

      <div>
        <div class="hero-eyebrow reveal" data-delay="0">Gameplay Programmer</div>
        <h1 class="hero-name reveal" data-delay="1">
          ARIJEET<br><span class="hi">BARUAH</span>
        </h1>
        <div class="hero-title reveal" data-delay="2">Unity · C++ · C# · Tools</div>
        <p class="hero-desc reveal" data-delay="3">
          I build gameplay systems, tools, and experiences — from arena RPGs
          and rhythm games to puzzle mechanics and survival titles.
          Based in Guwahati, Assam. Open to remote roles globally.
        </p>
        <div class="hero-actions reveal" data-delay="4">
          <a href="#projects" class="btn btn-solid">View Projects</a>
          <a href="assets/cv/arijeet-baruah-cv.pdf" class="btn btn-outline" download>
            ↓ Download CV
          </a>
          <a href="#contact" class="btn btn-outline">Get In Touch</a>
        </div>

        <div class="hero-scroll reveal" data-delay="5">
          <div class="scroll-line"></div>
          <span>scroll</span>
        </div>
      </div>

      <div class="hero-side">
        <div class="hero-status">
          <div class="status-dot"></div>
          Available for work
        </div>
        <div class="hero-socials">
          <a href="https://github.com/{{site.data.social.github}}" target="_blank" class="social-link">GitHub</a>
          <a href="https://www.linkedin.com/in/{{site.data.social.linkedin}}" target="_blank" class="social-link">LinkedIn</a>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════════
     SKILLS
═══════════════════════════════════════════════════ -->
<section id="skills" class="section-pad">
  <div class="wrap">
    <div class="section-header reveal">
      <span class="section-num">01</span>
      <h2 class="section-title">Tech Stack</h2>
      <div class="section-line"></div>
    </div>

    <div class="skills-grid">
      {% for skill in site.data.skills.skills %}
      <div class="skill-card reveal" data-delay="{{ forloop.index }}">
        <span class="skill-index">[0{{ forloop.index }}]</span>
        <div class="skill-glyph">{{ skill.icon }}</div>
        <div class="skill-name">{{ skill.name }}</div>
        <div class="skill-sub">{{ skill.description }}</div>
        <div class="skill-bar"><div class="skill-fill" data-pct="{{ skill.points }}"></div></div>
      </div>
      {% endfor %}

    </div>
  </div>
</section>


<!-- ═══════════════════════════════════════════════════
     PROJECTS
═══════════════════════════════════════════════════ -->
<section id="projects" class="section-pad">
  <div class="wrap">
    <div class="section-header reveal">
      <span class="section-num">02</span>
      <h2 class="section-title">Projects</h2>
      <div class="section-line"></div>
    </div>

    <div class="filter-bar reveal">
      <button class="filter-btn active" data-filter="all">All</button>
      <button class="filter-btn" data-filter="game">Games</button>
      <button class="filter-btn" data-filter="plugin">Plugins</button>
      <button class="filter-btn" data-filter="website">Website</button>
    </div>

    <div class="projects-grid">
    {% for project in site.projects %}
        <div class="project-card reveal" data-type="{{project.category | downcase}}" data-delay="0">
            <div class="project-img-wrap">
                <img class="project-img"
                    src="{{ project.image }}"
                    alt="{{ project.title }} screenshot"
                    loading="lazy" />
                    <span class="project-badge badge-{{project.category | downcase}}">{{project.category}}</span>
                </div>
                <div class="project-body">
                <div class="project-top">
                    <div class="project-name">{{ project.title }}</div>
                    <a href="{{ project.url }}" target="_blank" class="project-arrow">↗</a>
                </div>
                <p class="project-desc">
                    {{ project.description }}
                </p>
                <div class="project-meta">
                    <div class="meta-row"><span class="meta-key">role</span><span class="meta-val">{{ project.role }}</span></div>
                    <div class="meta-row"><span class="meta-key">type</span><span class="meta-val">{{ project.type }}</span></div>
                </div>
                <div class="project-tags">
                    {% for tag in project.tags %}
                    <span class="tag">{{tag}}</span>
                    {% endfor %}
                </div>
            </div>
        </div>
    {% endfor %}
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════════
    ABOUT
═══════════════════════════════════════════════════ -->
<section id="about" class="section-pad">
  <div class="wrap">
    <div class="section-header reveal">
    <span class="section-num">03</span>
    <h2 class="section-title">About</h2>
    <div class="section-line"></div>
  </div>

  <div class="about-grid">

  <div class="about-text reveal">
      <p>
        I'm a <strong>Gameplay and Tools Programmer</strong> from Guwahati, Assam.
        I love building the systems that make games feel good — the satisfying crunch
        of combat, the flow of a well-tuned puzzle, the way a character snaps to input.
      </p>
      <p>
        My experience spans <strong>commercial Unity titles</strong> (Champions Ascension,
        Vineyard Valley) alongside personal projects built entirely from scratch in C++.
        I care about clean architecture, reusable systems, and code that other developers
        can actually read and extend.
      </p>
      <p>
        I've worked in teams as small as 5 and as large as 300 — comfortable switching between
        deep solo technical work and cross-team coordination. Currently open to
        <strong>full-time and contract game developer roles</strong>, remote-friendly.
      </p>
      <div class="about-cta">
        <a href="assets/cv/arijeet-baruah-cv.pdf" class="btn btn-solid" download>↓ Download CV</a>
        <a href="https://github.com/arijeetbaruah" target="_blank" class="btn btn-outline">GitHub Profile ↗</a>
      </div>
    </div>

    <div class="terminal reveal reveal-delay-2">
      <div class="terminal-bar">
        <div class="t-dot"></div>
        <div class="t-dot"></div>
        <div class="t-dot"></div>
        <div class="t-title">arijeet@dev ~ zsh</div>
      </div>
      <div class="terminal-body">
        <div class="t-line"><span class="t-prompt">~$</span><span class="t-cmd"> whoami</span></div>
        <div class="t-out">arijeet_baruah</div>
        <br>
        <div class="t-line"><span class="t-prompt">~$</span><span class="t-cmd"> cat location.txt</span></div>
        <div class="t-out">Guwahati, Assam, India</div>
        <br>
        <div class="t-line"><span class="t-prompt">~$</span><span class="t-cmd"> cat stack.txt</span></div>
        <div class="t-out">unity3d  c#  c++  sfml</div>
        <div class="t-out">reactjs  golang  java</div>
        <div class="t-out">blender  photoshop  git</div>
        <br>
        <div class="t-line"><span class="t-prompt">~$</span><span class="t-cmd"> cat status.txt</span></div>
        <div class="t-out ok">OPEN TO WORK — remote friendly</div>
        <br>
        <div class="t-line"><span class="t-prompt">~$</span><span class="t-cmd"> ping arijeetbaruah@gmail.com</span></div>
        <div class="t-out">64 bytes: icmp_seq=1 ttl=64</div>
        <br>
        <div class="t-line"><span class="t-prompt">~$</span>&nbsp;<span class="t-cursor"></span></div>
      </div>
    </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════════
    CONTACT
═══════════════════════════════════════════════════ -->
<section id="contact" class="section-pad">
  <div class="wrap">
    <div class="section-header reveal">
      <span class="section-num">04</span>
      <h2 class="section-title">Contact</h2>
      <div class="section-line"></div>
  </div>

  <div class="contact-grid">

  <div class="reveal">
      <div class="contact-headline">
      LET'S<br>BUILD<br><span class="hi">GAMES.</span>
      </div>
      <p class="contact-sub">
      Open to gameplay programming, tools engineering, and game-adjacent
      engineering roles. Remote-friendly. Fast responder.
      </p>
  </div>

  <div class="contact-links reveal reveal-delay-2">
      <a href="mailto:{{site.data.social.email}}" class="contact-link">
      <span class="cl-key">[email]</span>
      <span class="cl-val">{{site.data.social.email}}</span>
      <span class="cl-arrow">→</span>
      </a>
      <a href="https://www.linkedin.com/in/{{site.data.social.linkedin}}" target="_blank" class="contact-link">
      <span class="cl-key">[linkedin]</span>
      <span class="cl-val">{{site.data.social.linkedin}}</span>
      <span class="cl-arrow">→</span>
      </a>
      <a href="https://github.com/{{site.data.social.github}}" target="_blank" class="contact-link">
      <span class="cl-key">[github]</span>
      <span class="cl-val">{{site.data.social.github}}</span>
      <span class="cl-arrow">→</span>
      </a>
      {% assign twitter = site.data.social.twitter | strip %}
      {% if twitter == "-" or twitter == "" %}
      {% assign show_twitter = 1 %}
      {% else %}
      {% assign show_twitter = 0 %}
      {% endif %}
      {% if show_twitter == 0 %}
      <a href="https://twitter.com/{{twitter}}" target="_blank" class="contact-link">
      <span class="cl-key">[twitter]</span>
      <span class="cl-val">@{{twitter}}</span>
      <span class="cl-arrow">→</span>
      </a>
      {% endif %}
      <a href="assets/cv/arijeet-baruah-cv.pdf" download class="contact-link">
      <span class="cl-key">[cv]</span>
      <span class="cl-val">Download Resume / CV</span>
      <span class="cl-arrow">↓</span>
      </a>
  </div>

</div>
  </div>
</section>
