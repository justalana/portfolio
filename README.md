# Alana's portfolio

A static portfolio in English, using local HTML, CSS and JavaScript. No installation or build step required. Styling and the PDF viewer dependencies are included locally.

## Preview

From this folder run `python3 -m http.server 8000`, then open http://localhost:8000. The ordinary pages also work when opened directly, but the PDF book needs Live Server or another local HTTP server.

## Add your own images

The illustrations on `index.html`, `projects.html`, `offri.html` and `wardrobe.html` are deliberately labelled placeholders, not screenshots of the actual products.

1. Put your images in `images/`, e.g. `offri-editor.png` and `wardrobe-home.png`.
2. Replace the appropriate `<figure class="visual placeholder ...">...</figure>` with:

```html
<figure class="visual real-visual">
  <img src="images/offri-editor.png" alt="Offri editor showing my block styling controls">
  <figcaption>Briefly explain what is shown and what you contributed.</figcaption>
</figure>
```

3. For evidence blocks, replace `<div aria-hidden="true">＋</div>` with an image, add `real` to the figure's class, and update the caption. Remove the `ADD YOUR OWN IMAGE` label.
4. Replace the corresponding placeholders on the home and project overview pages too. Keep overview captions short.

Useful evidence: colour picker and workspace palette; before/after block styling; approved review feedback or PDF output; anonymised survey/interview findings; wardrobe screens; declutter flow; monthly wear chart.

Project descriptions are draft summaries based on previously shared project details. Review exact contribution wording, dates and outcomes before using the portfolio in applications. The minor is explicitly described as work in progress. No quantitative impact or user-test results have been invented.

## Content and styling

- `offri.html`: third-year Slik internship / Offri case study.
- `wardrobe.html`: PLE wardrobe app case study.
- `about.html`: background, tools, interests, writing minor and internship search.
- `index.html`: personal introduction and two featured projects.
- `projects.html`: both new projects and all five earlier projects.
- `styles/style.css`: colours, responsive layouts and placeholder illustrations.
- `js/site.js`: current-page navigation indication.

Navigation and footer are written directly into each HTML file so they remain available without JavaScript or a server. Update them on every page when changing links. The original legacy scripts and components are retained but no longer loaded by the updated pages.

## Visual direction

Personal creative notebook styling: cream paper, blue ink, purple and yellow accents, graph-paper project placeholders, taped photo details and handwritten annotations. All decorative artwork is CSS, so no extra image assets are needed. The portrait is your existing photo. Reduced-motion preferences are respected.

## Internship report as a book

The Offri page now contains a book-style report section, also linked from the homepage. The report itself has not been provided yet. Until it is added, visitors see an honest “preview coming soon” spread, with disabled navigation.

To activate it:
1. Put your PDF in `documents/` and name it `stageverslag.pdf`.
2. Open the website through VS Code Live Server or `python3 -m http.server 8000`.
3. The viewer automatically loads the PDF. No HTML change needed.

On desktop it shows a cover on the right followed by two-page spreads, with a spine, page shadows and a short turning transition. On mobile it shows one page at a time so the report remains readable. Use the buttons or focus the book and press the left/right arrow keys. An original-PDF link is available when loading succeeds, for full-size reading and selectable text. Reduced-motion preferences disable the transition. All PDF.js code, its worker, fonts and character maps are shipped in `vendor/pdfjs/`, with its licence.

No sample report or fabricated internship pages are included. The exact appearance depends on your PDF page sizes and artwork. Once supplied, the real report needs a browser check for page rendering, cover placement and readability.

## Expanded field notes

`offri.html` now covers the product context, stakeholder conversations, sketches and Figma variants, the expandable palette decision, review feedback, data planning, implementation and reflection. `wardrobe.html` covers the survey and two interviews, change in focus, interaction decisions, declutter flow, data and tests. Additional evidence slots are ready for original research material. No participant quotes, survey percentages or outcome metrics have been invented. The research question is a portfolio framing of the project, rather than a recovered verbatim question from the report.

## Included journal (current version)

The real 38-page “The Developer’s Journey” report is now included. The book uses page previews in `images/journal/` to load one spread at a time, rather than downloading the entire original 92 MB report. `documents/stageverslag.pdf` is a lighter website copy; the uploaded original was left unchanged. Visitors can open this copy using the original-PDF link. The homepage now includes the real cover, and the “coming soon” state has been removed.

The current image-backed book also works when opened directly, without a server. If you replace the report, regenerate the JPEG pages and update `data-page-count` in `offri.html`. To use a new PDF directly without generated previews, remove the `data-page-count` and `data-page-images` attributes; that fallback requires Live Server. PDF.js remains bundled for that fallback.

## Supplied project evidence

All 12 supplied screenshots are included in `images/closet/` and `images/slik/`, with safe filenames. The previously unnamed Expo screenshot is `images/closet/declutter-basket.jpg`. The project pages and homepage previews now use these real images. Select an image to open the full screenshot in a new tab; the gallery preserves the complete screen without cropping.

The early Closet declutter screen and early session summary still display the doubt option. Their captions explicitly identify them as earlier iterations. The later basket is labelled separately. The outfit screen is described as a supporting feature, while the main case study remains focused on wardrobe overview and decluttering.

Unfilled evidence slots for survey charts, interviews, sketches, review extracts and test screenshots have been removed. The written research and implementation context remains. The real internship journal book remains on the Offri page.
