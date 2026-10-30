# Website test plan

Run on the live GitHub Pages URL from repository Settings > Pages, not Live Preview.

- Live URL: https://36mn32.github.io/portfolio/
- Tester / date / browser version: Codex / 2026-10-29 to 2026-10-30 / Chrome (audit reports Chromium 156.0.0.0), Lighthouse 13.5.0
- Deployed commit at initial test: cbc7e24

Execution status: **12 passed, 0 failed, 0 not run in the current 12-case plan**. Results combine the live checks on October 29 with the completed keyboard, About laptop, and Projects image retests on October 30. The earlier T35 failure is retained in the history below. This shortened plan does not provide complete coverage of every page required by the original assignment.

Phone: 390 × 844. Laptop: 1366 × 768. Use 100% zoom. Repeat layout and keyboard cases in both light and dark mode. No forms or validation exist; valid/invalid form-input testing is not applicable. Skill dropdowns are native HTML; the theme toggle is the JavaScript feature.

| ID | What is being tested | Steps | Expected result | Actual result |
| :-- | :-- | :-- | :-- | :-- |
| T1 | All navigation links on index.html | Open the live index.html. Click Home, About Me, Projects, Skills, Contact, Portfolio, and footer Contact me individually, returning to index.html after each. | The five menu links open index.html, about.html, projects.html, skills.html, contact.html respectively; Portfolio opens index.html; Contact me opens contact.html. No 404; correct current-page highlight. | passed |
| T2 | Phone layout: index.html | Open live index.html at 390 × 844. Scroll fully and use the controls in both themes. | Readable text; usable navigation; no overlap, clipping, or horizontal scrolling. | passed |
| T3 | Laptop layout: index.html | Open live index.html at 1366 × 768. Scroll fully and use the controls in both themes. | Header, content, images, and footer fit and remain readable without overlap. | passed |
| T4 | Keyboard navigation: index.html | Open live index.html. Tab through every control, Shift+Tab backward, and activate links and theme button with Enter; return after navigation. On Skills, open and close all eight summaries with Enter. Repeat in both themes. | Visible focus in logical order; all controls work without a mouse; no keyboard trap. | passed |
| T5 | Lighthouse Accessibility: index.html | Open live index.html in Chrome DevTools Lighthouse. Audit Accessibility separately for Mobile and Desktop in each theme. Save four reports and record scores below. | All four scores are at least 90/100 (project target). Review flagged issues alongside manual keyboard results. | passed |
| T6 | All navigation links on about.html | Open the live about.html. Click Home, About Me, Projects, Skills, Contact, Portfolio, and footer Contact me individually, returning to about.html after each. | The five menu links open index.html, about.html, projects.html, skills.html, contact.html respectively; Portfolio opens index.html; Contact me opens contact.html. No 404; correct current-page highlight. | passed |
| T7 | Phone layout: about.html | Open live about.html at 390 × 844. Scroll fully and use the controls in both themes. | Readable text; usable navigation; no overlap, clipping, or horizontal scrolling. | passed |
| T8 | Laptop layout: about.html | Open live about.html at 1366 × 768. Scroll fully and use the controls in both themes. | Header, content, images, and footer fit and remain readable without overlap. | passed |
| T9 | Keyboard navigation: about.html | Open live about.html. Tab through every control, Shift+Tab backward, and activate links and theme button with Enter; return after navigation. On Skills, open and close all eight summaries with Enter. Repeat in both themes. | Visible focus in logical order; all controls work without a mouse; no keyboard trap. | passed |
| T10 | Lighthouse Accessibility: about.html | Open live about.html in Chrome DevTools Lighthouse. Audit Accessibility separately for Mobile and Desktop in each theme. Save four reports and record scores below. | All four scores are at least 90/100 (project target). Review flagged issues alongside manual keyboard results. | passed |
| T26 | Home content buttons | On live index.html click Learn more about me and Explore my projects; return between clicks. | Open about.html and projects.html respectively. | passed |
| T35 | Project images and alternative text | On live projects.html at both sizes and themes, inspect all three cards, Network image requests, and alt text. | cadproj.png, Percy.png, and cadproj2.png load; images remain usable; alternative text accurately describes each image. | passed |

### Execution history and evidence

The initial live run found inaccurate alternative text for the first two project images: **T35 failed**. Commit `fd4590b` corrected those descriptions. Commit `91caff8` fixed mobile project image sizing and description layout. Early attempts also encountered browser capture, keyboard-control, and report-export limitations; those were testing-tool interruptions, not additional website failures. Report export subsequently worked.

On **2026-10-29**, T1 and T6 passed after clicking all five menu links, the Portfolio wordmark, and the footer Contact me link from each source page and verifying the live destinations. T26 passed for both Home content buttons. T2 and T7 passed after inspecting the full Home and About pages at 390 x 844 in both themes. T3 passed after inspecting Home at 1366 x 768 in both themes, including the header and footer.

On **2026-10-30**, the remaining manual checks were completed on the live GitHub Pages site:

- **T4 and T9 passed:** Home's ten controls and About's eight controls had visible focus in logical order in light and dark mode. Tab and Shift+Tab moved through the controls without a trap. Enter activated the theme buttons and tested navigation links (including Home's Contact me and About's Portfolio link). All eight Skills summaries were individually opened and closed with Enter in both themes, as required by these grouped cases.
- **T8 passed:** completed the About laptop layout check at 1366 x 768, including the dark-mode footer. Combined with the earlier light-mode inspection, content and footer were readable in both themes without overlap.
- **T35 retest passed:** inspected all three live project cards at 390 x 844 and 1366 x 768 in both themes. Images were fully contained and descriptions remained readable. Independent HTTP GET requests to the three live image URLs returned `200`, `image/png`, and nonempty bodies: cadproj.png (180842 bytes), Percy.png (412543 bytes), cadproj2.png (394636 bytes). The live HTML alternative text was checked against the displayed images: angled plate with slot/mounting holes; dimensioned Percy driver reference drawing; stop-base assembly with nuts and screws.

### Lighthouse Accessibility reports

**T5 and T10 passed.** These eight live-site reports were generated on **2026-10-29** and their saved URL, device configuration, and Accessibility score were verified again on **2026-10-30**. They were not newly generated on October 30. Each meets the 90/100 target. Theme names reflect the theme visibly checked during the original audit runs.

| Page | Device | Theme | Accessibility | Saved report |
| :-- | :-- | :-- | :-- | :-- |
| Home | Mobile | Light | 100/100 | [JSON](lighthouse-home-mobile-light.json) |
| Home | Mobile | Dark | 100/100 | [JSON](lighthouse-home-mobile-dark.json) |
| Home | Desktop | Light | 100/100 | [JSON](lighthouse-home-desktop-light.json) |
| Home | Desktop | Dark | 100/100 | [JSON](lighthouse-home-desktop-dark.json) |
| About | Mobile | Light | 100/100 | [JSON](lighthouse-about-mobile-light.json) |
| About | Mobile | Dark | 100/100 | [JSON](lighthouse-about-mobile-dark.json) |
| About | Desktop | Light | 100/100 | [JSON](lighthouse-about-desktop-light.json) |
| About | Desktop | Dark | 100/100 | [JSON](lighthouse-about-desktop-dark.json) |

Lighthouse's automated score does not replace the manual keyboard and layout checks. Projects, Skills, and Contact do not have complete navigation, layout, keyboard, and Lighthouse cases in this current shortened plan; no full-site coverage is claimed.
