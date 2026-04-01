---
layout: default
title: Home
---

<!-- Animated canvas bg -->
<canvas id="bg-canvas"></canvas>

<!-- ═══════════════════════════════════════════════════
     NAV
═══════════════════════════════════════════════════ -->
<nav id="nav">
  <div class="wrap nav-inner">
    <a href="#hero" class="nav-logo"><em>// </em>Arijeet Baruah</a>

    <div class="nav-right">
      <ul class="nav-links">
        <li><a href="#skills">skills</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      <!-- Theme toggle -->
      <button class="theme-toggle" id="theme-toggle" aria-label="Toggle theme"></button>

      <a href="#contact" class="nav-hire">Hire me</a>

      <!-- Mobile hamburger -->
      <div class="hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </div>
    </div>
  </div>
</nav>

<!-- Mobile menu -->
<div class="mobile-menu" id="mobile-menu">
  <a href="#skills">Skills</a>
  <a href="#projects">Projects</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
</div>


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
          <a href="https://github.com/arijeetbaruah" target="_blank" class="social-link">GitHub</a>
          <a href="https://www.linkedin.com/in/arijeet-baruah" target="_blank" class="social-link">LinkedIn</a>
          <a href="https://twitter.com/thegamecreator5" target="_blank" class="social-link">Twitter</a>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════════
     STATS BAR
═══════════════════════════════════════════════════ -->
<!--
<section id="stats">
  <div class="wrap">
    <div class="stats-row reveal">
      <div class="stat-cell">
        <div class="stat-num" data-count="8" data-suffix="+">8+</div>
        <div class="stat-label">// games shipped</div>
      </div>
      <div class="stat-cell">
        <div class="stat-num" data-count="3" data-suffix="+">3+</div>
        <div class="stat-label">// engines used</div>
      </div>
      <div class="stat-cell">
        <div class="stat-num" data-count="300">300</div>
        <div class="stat-label">// largest team size</div>
      </div>
      <div class="stat-cell">
        <div class="stat-num">∞</div>
        <div class="stat-label">// bugs squashed</div>
      </div>
    </div>
  </div>
</section>
-->

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

      <div class="skill-card reveal" data-delay="0">
        <span class="skill-index">[00]</span>
        <div class="skill-glyph">&gt;_</div>
        <div class="skill-name">Unity3D</div>
        <div class="skill-sub">Primary Engine</div>
        <div class="skill-bar"><div class="skill-fill" data-pct="92"></div></div>
      </div>

      <div class="skill-card reveal" data-delay="1">
        <span class="skill-index">[01]</span>
        <div class="skill-glyph">#</div>
        <div class="skill-name">C#</div>
        <div class="skill-sub">Gameplay Scripting</div>
        <div class="skill-bar"><div class="skill-fill" data-pct="88"></div></div>
      </div>

      <div class="skill-card reveal" data-delay="2">
        <span class="skill-index">[02]</span>
        <div class="skill-glyph">++</div>
        <div class="skill-name">C++</div>
        <div class="skill-sub">Engine-level / SFML</div>
        <div class="skill-bar"><div class="skill-fill" data-pct="74"></div></div>
      </div>

      <div class="skill-card reveal" data-delay="3">
        <span class="skill-index">[03]</span>
        <div class="skill-glyph">{ }</div>
        <div class="skill-name">React / JS</div>
        <div class="skill-sub">Frontend Tools</div>
        <div class="skill-bar"><div class="skill-fill" data-pct="66"></div></div>
      </div>

      <div class="skill-card reveal" data-delay="4">
        <span class="skill-index">[04]</span>
        <div class="skill-glyph">Go</div>
        <div class="skill-name">Golang</div>
        <div class="skill-sub">Backend Integration</div>
        <div class="skill-bar"><div class="skill-fill" data-pct="55"></div></div>
      </div>

      <div class="skill-card reveal" data-delay="5">
        <span class="skill-index">[05]</span>
        <div class="skill-glyph">⬡</div>
        <div class="skill-name">Blender</div>
        <div class="skill-sub">3D Modelling</div>
        <div class="skill-bar"><div class="skill-fill" data-pct="40"></div></div>
      </div>

      <div class="skill-card reveal" data-delay="6">
        <span class="skill-index">[06]</span>
        <div class="skill-glyph">☰</div>
        <div class="skill-name">Photoshop</div>
        <div class="skill-sub">UI / Asset Work</div>
        <div class="skill-bar"><div class="skill-fill" data-pct="52"></div></div>
      </div>

      <div class="skill-card reveal" data-delay="7">
        <span class="skill-index">[07]</span>
        <div class="skill-glyph">☕</div>
        <div class="skill-name">Java / VB.net</div>
        <div class="skill-sub">Additional Languages</div>
        <div class="skill-bar"><div class="skill-fill" data-pct="60"></div></div>
      </div>

    </div>
  </div>
</section>


# My Portfolio

## Projects

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
                    <div class="meta-row"><span class="meta-key">role</span><span class="meta-val">Gameplay Programmer</span></div>
                    <div class="meta-row"><span class="meta-key">type</span><span class="meta-val">Commercial Title</span></div>
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
            I'm a <strong>Gameplay and Tools Programmer</strong> based in Guwahati, Assam.
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
            <a href="mailto:arijeetbaruah@gmail.com" class="contact-link">
            <span class="cl-key">[email]</span>
            <span class="cl-val">arijeetbaruah@gmail.com</span>
            <span class="cl-arrow">→</span>
            </a>
            <a href="https://www.linkedin.com/in/arijeet-baruah" target="_blank" class="contact-link">
            <span class="cl-key">[linkedin]</span>
            <span class="cl-val">arijeet-baruah</span>
            <span class="cl-arrow">→</span>
            </a>
            <a href="https://github.com/arijeetbaruah" target="_blank" class="contact-link">
            <span class="cl-key">[github]</span>
            <span class="cl-val">arijeetbaruah</span>
            <span class="cl-arrow">→</span>
            </a>
            <a href="https://twitter.com/thegamecreator5" target="_blank" class="contact-link">
            <span class="cl-key">[twitter]</span>
            <span class="cl-val">@thegamecreator5</span>
            <span class="cl-arrow">→</span>
            </a>
            <a href="assets/cv/arijeet-baruah-cv.pdf" download class="contact-link">
            <span class="cl-key">[cv]</span>
            <span class="cl-val">Download Resume / CV</span>
            <span class="cl-arrow">↓</span>
            </a>
        </div>

        </div>
    </div>
    </section>

    <!-- ═══════════════════════════════════════════════════
        FOOTER
    ═══════════════════════════════════════════════════ -->
    <footer>
    <div class="wrap">
        <div class="footer-inner">
        <div class="footer-copy">© 2025 Arijeet Baruah. Built from scratch — no templates.</div>
        <ul class="footer-links">
            <li><a href="https://github.com/arijeetbaruah" target="_blank">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/arijeet-baruah" target="_blank">LinkedIn</a></li>
            <li><a href="mailto:arijeetbaruah@gmail.com">Email</a></li>
        </ul>
        <div class="footer-status">
            <div class="status-dot"></div>Available for work
        </div>
        </div>
    </div>
    </footer>
