# Website test plan

Run on the live GitHub Pages URL from repository Settings > Pages, not Live Preview.

- Live URL: https://36mn32.github.io/portfolio/
- Tester / date / browser version: Codex / 2026-10-29 / Chrome (audit reports Chromium 156.0.0.0), Lighthouse 13.5.0
- Deployed commit at initial test: cbc7e24

Execution status: **In progress**. Only observed outcomes are marked passed or failed; incomplete cases remain Not run. For grouped steps, every check must pass. Retain failed attempts and record the fix and retest below.

Phone: 390 × 844. Laptop: 1366 × 768. Use 100% zoom. Repeat layout and keyboard cases in both light and dark mode. No forms or validation exist; valid/invalid form-input testing is not applicable. Skill dropdowns are native HTML; the theme toggle is the JavaScript feature.

| ID | What is being tested | Steps | Expected result | Actual result |
| :-- | :-- | :-- | :-- | :-- |
| T1 | All navigation links on index.html | Open the live index.html. Click Home, About Me, Projects, Skills, Contact, Portfolio, and footer Contact me individually, returning to index.html after each. | The five menu links open index.html, about.html, projects.html, skills.html, contact.html respectively; Portfolio opens index.html; Contact me opens contact.html. No 404; correct current-page highlight. | Not run |
| T2 | Phone layout: index.html | Open live index.html at 390 × 844. Scroll fully and use the controls in both themes. | Readable text; usable navigation; no overlap, clipping, or horizontal scrolling. | Not run |
| T3 | Laptop layout: index.html | Open live index.html at 1366 × 768. Scroll fully and use the controls in both themes. | Header, content, images, and footer fit and remain readable without overlap. | Not run |
| T4 | Keyboard navigation: index.html | Open live index.html. Tab through every control, Shift+Tab backward, and activate links and theme button with Enter; return after navigation. On Skills, open and close all eight summaries with Enter. Repeat in both themes. | Visible focus in logical order; all controls work without a mouse; no keyboard trap. | Not run |
| T5 | Lighthouse Accessibility: index.html | Open live index.html in Chrome DevTools Lighthouse. Audit Accessibility separately for Mobile and Desktop in each theme. Save four reports and record scores below. | All four scores are at least 90/100 (project target). Review flagged issues alongside manual keyboard results. | Not run |
| T6 | All navigation links on about.html | Open the live about.html. Click Home, About Me, Projects, Skills, Contact, Portfolio, and footer Contact me individually, returning to about.html after each. | The five menu links open index.html, about.html, projects.html, skills.html, contact.html respectively; Portfolio opens index.html; Contact me opens contact.html. No 404; correct current-page highlight. | Not run |
| T7 | Phone layout: about.html | Open live about.html at 390 × 844. Scroll fully and use the controls in both themes. | Readable text; usable navigation; no overlap, clipping, or horizontal scrolling. | Not run |
| T8 | Laptop layout: about.html | Open live about.html at 1366 × 768. Scroll fully and use the controls in both themes. | Header, content, images, and footer fit and remain readable without overlap. | Not run |
| T9 | Keyboard navigation: about.html | Open live about.html. Tab through every control, Shift+Tab backward, and activate links and theme button with Enter; return after navigation. On Skills, open and close all eight summaries with Enter. Repeat in both themes. | Visible focus in logical order; all controls work without a mouse; no keyboard trap. | Not run |
| T10 | Lighthouse Accessibility: about.html | Open live about.html in Chrome DevTools Lighthouse. Audit Accessibility separately for Mobile and Desktop in each theme. Save four reports and record scores below. | All four scores are at least 90/100 (project target). Review flagged issues alongside manual keyboard results. | Not run |
| T11 | All navigation links on projects.html | Open the live projects.html. Click Home, About Me, Projects, Skills, Contact, Portfolio, and footer Contact me individually, returning to projects.html after each. | The five menu links open index.html, about.html, projects.html, skills.html, contact.html respectively; Portfolio opens index.html; Contact me opens contact.html. No 404; correct current-page highlight. | Not run |
| T12 | Phone layout: projects.html | Open live projects.html at 390 × 844. Scroll fully and use the controls in both themes. | Readable text; usable navigation; no overlap, clipping, or horizontal scrolling. | Not run |
| T13 | Laptop layout: projects.html | Open live projects.html at 1366 × 768. Scroll fully and use the controls in both themes. | Header, content, images, and footer fit and remain readable without overlap. | Not run |
| T14 | Keyboard navigation: projects.html | Open live projects.html. Tab through every control, Shift+Tab backward, and activate links and theme button with Enter; return after navigation. On Skills, open and close all eight summaries with Enter. Repeat in both themes. | Visible focus in logical order; all controls work without a mouse; no keyboard trap. | Not run |
| T15 | Lighthouse Accessibility: projects.html | Open live projects.html in Chrome DevTools Lighthouse. Audit Accessibility separately for Mobile and Desktop in each theme. Save four reports and record scores below. | All four scores are at least 90/100 (project target). Review flagged issues alongside manual keyboard results. | Not run |
| T16 | All navigation links on skills.html | Open the live skills.html. Click Home, About Me, Projects, Skills, Contact, Portfolio, and footer Contact me individually, returning to skills.html after each. | The five menu links open index.html, about.html, projects.html, skills.html, contact.html respectively; Portfolio opens index.html; Contact me opens contact.html. No 404; correct current-page highlight. | Not run |
| T17 | Phone layout: skills.html | Open live skills.html at 390 × 844. Scroll fully and use the controls in both themes. | Readable text; usable navigation; no overlap, clipping, or horizontal scrolling. | Not run |
| T18 | Laptop layout: skills.html | Open live skills.html at 1366 × 768. Scroll fully and use the controls in both themes. | Header, content, images, and footer fit and remain readable without overlap. | Not run |
| T19 | Keyboard navigation: skills.html | Open live skills.html. Tab through every control, Shift+Tab backward, and activate links and theme button with Enter; return after navigation. On Skills, open and close all eight summaries with Enter. Repeat in both themes. | Visible focus in logical order; all controls work without a mouse; no keyboard trap. | Not run |
| T20 | Lighthouse Accessibility: skills.html | Open live skills.html in Chrome DevTools Lighthouse. Audit Accessibility separately for Mobile and Desktop in each theme. Save four reports and record scores below. | All four scores are at least 90/100 (project target). Review flagged issues alongside manual keyboard results. | Not run |
| T21 | All navigation links on contact.html | Open the live contact.html. Click Home, About Me, Projects, Skills, Contact, Portfolio, and footer Contact me individually, returning to contact.html after each. | The five menu links open index.html, about.html, projects.html, skills.html, contact.html respectively; Portfolio opens index.html; Contact me opens contact.html. No 404; correct current-page highlight. | Not run |
| T22 | Phone layout: contact.html | Open live contact.html at 390 × 844. Scroll fully and use the controls in both themes. | Readable text; usable navigation; no overlap, clipping, or horizontal scrolling. | Not run |
| T23 | Laptop layout: contact.html | Open live contact.html at 1366 × 768. Scroll fully and use the controls in both themes. | Header, content, images, and footer fit and remain readable without overlap. | Not run |
| T24 | Keyboard navigation: contact.html | Open live contact.html. Tab through every control, Shift+Tab backward, and activate links and theme button with Enter; return after navigation. On Skills, open and close all eight summaries with Enter. Repeat in both themes. | Visible focus in logical order; all controls work without a mouse; no keyboard trap. | Not run |
| T25 | Lighthouse Accessibility: contact.html | Open live contact.html in Chrome DevTools Lighthouse. Audit Accessibility separately for Mobile and Desktop in each theme. Save four reports and record scores below. | All four scores are at least 90/100 (project target). Review flagged issues alongside manual keyboard results. | Not run |
| T26 | Home content buttons | On live index.html click Learn more about me and Explore my projects; return between clicks. | Open about.html and projects.html respectively. | passed |
| T27 | Theme switching on every page | On all five live pages, start in light mode, click Dark mode twice. | Backgrounds, text, cards, header, and footer change to readable dark colors then return to light; no console errors. | Not run |
| T28 | Saved theme across pages and reloads | Select dark mode; visit and reload every live page. Select light mode and repeat. | Selected theme persists across navigation and reloads. | Not run |
| T29 | Saved theme after reopening | Select dark mode; close and reopen the live site in the same browser profile. Repeat for light mode. | Last selected theme is restored when storage is available. | Not run |
| T30 | Theme keyboard and accessible state | On every live page inspect the button in the Accessibility panel. Activate with Enter and Space. | Accessible name is Dark mode; pressed state is true in dark mode and false in light mode; both keys work. | Not run |
| T31 | Missing and invalid theme preference | On the live origin delete portfolio-theme in DevTools Local Storage and reload. Set it to invalid and reload. Then toggle. | Both missing and invalid values default to light; toggling still works and saves a valid value. | Not run |
| T32 | Storage blocked | In a profile that blocks site storage, verify localStorage access is denied; reload every live page and toggle twice. Restore permissions afterward. | Pages load and toggle works without uncaught errors; persistence is not required while storage is denied. | Not run |
| T33 | JavaScript disabled | Disable JavaScript on the live site; reload every page. Try links and skill dropdowns. Restore JavaScript afterward. | Pages remain readable in light mode; navigation and native dropdowns work; theme button is hidden. | Not run |
| T34 | Eight skill dropdowns | On live skills.html at both viewport sizes, click each summary to open and close it. Open several together. | Each reveals its matching paragraph, arrow changes, closing hides content, and no overlap occurs. | Not run |
| T35 | Project images and alternative text | On live projects.html at both sizes and themes, inspect all three cards, Network image requests, and alt text. | cadproj.png, Percy.png, and cadproj2.png load; images remain usable; alternative text accurately describes each image. | failed |
| T36 | Contact details | Inspect live contact.html in both sizes and themes. | Email is readable in its obfuscated form; phone placeholder is recognizable; no nonworking form is shown. | Not run |

## Evidence and failure/retest log

For each Lighthouse case record Mobile light, Desktop light, Mobile dark, Desktop dark scores and saved report paths. For failures keep the initial Fail, describe the fix, deploy it, rerun on the live site, and record the new Pass or Fail.

| Test ID | Date / browser / viewport / theme | Initial result and evidence | Fix / deployed commit | Retest result and evidence |
| :-- | :-- | :-- | :-- | :-- |
| — | — | Not run | — | Not run |

| T26 | 2026-10-29 / Chrome / live site | passed: both homepage content buttons opened the correct About Me and Projects pages. | None | Not required |
| T35 | 2026-10-29 / Chrome / live Projects page | failed: first two image descriptions refer to old placeholders rather than the CAD plate and Percy drawing; all images rendered. | Corrected alt text; retest pending. | Not run |
| T15 | 2026-10-29 / Chrome / Mobile light / Lighthouse 13.5.0 | Partial: Accessibility 100/100. Other device/theme combinations pending. | None | Not run |

### Execution limitation

Live testing resumed successfully in Chrome. T26 passed and T35 failed on the initial deployment. The Projects mobile/light Lighthouse audit reported Accessibility 100/100; the full T15 case is incomplete because the other three combinations were not run. Report export opened a Save As dialog, but the computer-use input API repeatedly rejected the freshly observed filename control as unavailable. Keyboard focus also could not be reliably moved. No exported report was saved. Remaining cases stay Not run; these are incomplete tests, not website failures. The image-description correction was pushed in fd4590b, but a live retest is still required before recording a pass for T35.
