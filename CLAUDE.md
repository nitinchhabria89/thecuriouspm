# CLAUDE.md — Project Memory for thecuriouspm.com

## Owner
- **Name:** Nitin Chhabria
- **Email:** chhabria.nitin@gmail.com
- **LinkedIn:** linkedin.com/in/chhabrianitin
- **Site:** https://thecuriouspm.com
- **Blog:** https://technlogical.com
- **Side project:** https://whatsthepoint.club

---

## Server Setup (DigitalOcean Droplet)

> ⚠️ IMPORTANT: nginx runs INSIDE Docker — do NOT use systemctl or nginx -s reload directly. Always use docker exec.
- **Web server:** nginx running inside Docker container named `n8n-nginx`
- **Docker setup:** 3 containers — `n8n-nginx` (port 80/443), `n8n` (port 5678), `n8n-postgres`
- **Site root:** `/var/www/html/` (volume-mounted into the container)
- **Git pull:** `cd /var/www/html && git pull origin main`
- **Reload nginx:** `docker exec n8n-nginx nginx -s reload`
- **Full deploy sequence:**
  ```bash
  cd /var/www/html
  git pull origin main
  docker exec n8n-nginx nginx -s reload
  ```

---

## GitHub Repo
- **Remote:** https://github.com/nitinchhabria89/thecuriouspm.git
- **Branch:** `main`
- **Local path:** `/Users/Nika/CPM/`

---

## Project Stack
- Plain HTML / CSS / JS — no build step, no npm required
- `index.html` — all markup
- `style.css` — all styles
- `main.js` — all data (EXPERIENCES, SKILLS, EDUCATION, CONSULTING, ADVENTURE) + render functions
- Images in `/images/` folder
- **No React, no Vite, no TypeScript in use** (importmap + index.tsx references in HTML are legacy/unused — they cause console errors but don't break the site)

---

## Dev Server (Local Preview)
- Uses `npx serve` via `.claude/launch.json`
- Start: `npx serve -l 3000 .` from `/Users/Nika/CPM/`
- Port: 3000

---

## Images
| Filename | Used where |
|---|---|
| `NitinChhabria_Main.png` | Hero section (main portrait) |
| `nitin-paris.jpg` | About section (lifestyle/sticky column) |
| `nitin-chhabria.jpeg` | OLD hero image — no longer referenced |
| `nitin-chhabria.png` | OLD about image — no longer referenced |
| `nitin-driving-ferrari.jpg` | Adventure grid — "Love for Speed" |
| `image3.jpg` | Adventure — Bungee Jumping |
| `image4.jpg` | Adventure — Paragliding |
| `image5.jpg` | Adventure — Scuba Diving |
| `image6.jpg` | Adventure — Winter Thrills |
| `image7.jpg` | Adventure — Skydiving |
| `image8.jpg` | Unused |

---

## Key Rules — DO NOT BREAK
- **Never change CSS, colors, fonts, layout, or design**
- **Never remove existing sections** without explicit user confirmation
- **Never rename or move image files**
- **Preserve all existing classes, IDs, and data attributes**
- **Always ask before removing sections** — user will be explicit
- **The site is plain HTML** — no build step needed after edits

---

## Content: Source of Truth
- **Hero title:** `NITIN CHHABRIA` (NITIN in dark, CHHABRIA in accent/blue)
- **Nav logo text:** `NITIN CHHABRIA`
- **Quote author:** `Nitin Chhabria`
- **Copyright:** `© [year] Nitin Chhabria. All rights reserved.` (year is dynamic via JS)
- **Nav logo href:** `https://thecuriouspm.com`
- **Footer brand href:** `https://thecuriouspm.com`
- **Adventure tags:** Bungee Jumping, Sky Diving, Scuba Diving, Paragliding, Bike Riding (Adventure Trekking was removed)

---

## Section Order (index.html)
1. `<nav>` — Navbar
2. `.mobile-menu` — Mobile nav drawer
3. `.hero` — Hero with NITIN CHHABRIA title + NitinChhabria_Main.png
4. `#about` — About / Bio with nitin-paris.jpg
5. `#experience` — Experience Timeline (JS-rendered via `renderExperience()`)
6. `.consulting` — Consulting & Advisory (JS-rendered via `renderServices()`)
7. `.building` — Currently Building (whatsthepoint.club + technlogical.com)
8. `#skills` — Expertise (Toolkit left col) + Background/Foundation (right col) — both JS-rendered
9. `.training` — Training & Knowledge Sharing (Community)
10. `.adventure` — The Adventurous Side (JS-rendered via `renderAdventure()`)
11. `.cta-section` — Bottom CTA
12. `<footer>` — Footer

---

## JS Render Functions (main.js)
| Function | Populates | Data source |
|---|---|---|
| `renderExperience()` | `#experience-list` | `DATA.EXPERIENCES` |
| `renderServices()` | `#services-list` | `DATA.CONSULTING` |
| `renderSkills()` | `#skills-list` | `DATA.SKILLS` |
| `renderEducation()` | `#education-list` | `DATA.EDUCATION` |
| `renderAdventure()` | `#adventure-summary`, `#adventure-tags`, `#adventure-photos` | `DATA.ADVENTURE` |

---

## Experience Timeline — Expand/Collapse Feature
- Each entry has a `summary` (always visible gist) and `highlights` (expandable bullets)
- Toggle button: "Show N highlights ↓" → "Show less ↑"
- CSS classes: `.highlights-collapse`, `.highlights-collapse.open`, `.expand-toggle`, `.toggle-arrow`
- Added in commit `dc8b78d`

---

## Mobile Fix
- `.about-sticky` and `.timeline-meta` set to `position: static` at `≤1024px` breakpoint
- Fixes image overlapping content while scrolling on mobile
- Added in commit `a5ce16a`

---

## Commit History (significant)
| Hash | Description |
|---|---|
| `fde1edb` | Initial commit |
| `5250ce5` | Add README |
| `a5ce16a` | LinkedIn content sync + new sections + mobile fix |
| `df6a753` | Remove $3M revenue figure from all visible copy |
| `024f79b` | Minimal fixes: name order, nav/footer links, photos, remove tag |
| `83db1af` | Add NitinChhabria_Main.png + nitin-paris.jpg images |

---

## Common Mistakes to Avoid
1. **Do NOT use nginx commands** — server runs Apache2
2. **Do NOT remove sections** without explicit instruction — always confirm first
3. **Do NOT hard reset** without user approval — use rollback carefully
4. **Do NOT change the name order** — it's always `NITIN CHHABRIA` (first last)
5. **Do NOT reference $3M revenue** anywhere on the site — user has removed this intentionally
6. **Do NOT run `npm run dev`** — there is no package.json, use `npx serve` instead
