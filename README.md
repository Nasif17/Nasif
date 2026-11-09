# Nasif Rafidi — Portfolio

A responsive, dependency-free personal portfolio built with **HTML, CSS and JavaScript**.

## View or edit

- Open `dist/index.html` in any browser, or serve `dist/` with a static web server.
- Update page copy in `dist/index.html`.
- Change styles and layout in `dist/styles.css`.
- Update the certificate collection in the `CREDENTIALS` array at the start of `dist/script.js`.
- Certificate thumbnails and original documents are in `dist/assets/certificates/`.

## Features

- Responsive one-page portfolio with accessible navigation
- Animated neural-network canvas with reduced-motion support
- Research and project showcase, experience, awards and contact information
- Certificate gallery with live search and category filters
- Detailed credential modal: original document link, issuer, date, recipient, and available ID
- Downloadable research CV
- No frontend framework or external JavaScript packages

## Accuracy notes

The 15 displayed credentials are based on original documents supplied by Nasif. A document being displayed is **not** a claim that the issuer independently verified it through an online registry.

Items recorded in a CV but lacking an original supporting certificate have not been added to the document-backed gallery. A published research-paper DOI is linked externally.

The site intentionally omits private home address, national-ID information, and personal phone number.

## Optional local certificate asset refresh

The source documents used for this build were downloaded separately from the owner's private collection into the `portfolio_sources/` folder. After restoring those source documents locally, the `build_assets.sh` helper can regenerate web thumbnails and public document copies. The source-document folder is intentionally not included in the Site repository.
