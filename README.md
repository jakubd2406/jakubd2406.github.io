# Jakub Dysko — Redesigned Portfolio Website

A redesigned, responsive version of the existing personal portfolio. It retains the original five pages and the portfolio's information, photographs, projects, links and downloadable documents.

## View the website

1. Unzip this folder.
2. Open `index.html` in your browser. The pages work locally without installing anything.
3. To publish, upload the **entire** folder's contents to your website host. Keep the folder paths unchanged (`images/`, `style/`, `scripts/`, `docs/`).

If you would rather run a local development server, in this folder run:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## What's changed

- Modern dark/navy header and hero with a teal accent, high-contrast typography, clean white content sections and consistent card layouts.
- Five responsive pages: Home, About, Projects, Experience and Contact.
- Featured project and 4 project cards, original project photos, original project descriptions and project links.
- Sitewide links, interests and core skills retained and presented in a dedicated section.
- Keyboard-accessible mobile navigation, reduced-motion support, visible keyboard focus and a skip link.
- Existing photographs optimised for much smaller file sizes while preserving their appearance.
- Relative asset paths corrected: the HTML now points to the included `style/`, `images/` and `docs/` directories.
- The Experience page's internship documentation link now references the supplied PDF because the original `.docx` target was not included.

All original portfolio wording has been retained, including any spelling or grammar quirks; it has **not** been fact-checked or silently rewritten. The original site's design attribution remains in the footer. No external JavaScript libraries, fonts, APIs, analytics or trackers are required.

## Site structure

```text
index.html                 Home
about.html                 Education, awards, certificates
projects.html              Four projects and their original links
experience.html            Work history and volunteering
contact.html               Contact information
style/style.css            All visual styling and responsive layouts
scripts/main.js            Accessible mobile navigation
images/                    Photos, project graphics and favicon
docs/                      CV and internship documentation PDFs
```
