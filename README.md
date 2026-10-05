# Alana's portfolio

A static portfolio in English, using local HTML, CSS and JavaScript. No installation, build step or external styling dependencies required.

## Preview

From this folder run `python3 -m http.server 8000`, then open http://localhost:8000. The pages also work when opened directly.

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
