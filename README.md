# Rainbow Hunt — website

The site for [rainbowhunt.app](https://rainbowhunt.app): landing page, privacy policy,
terms and imprint, and support. The App Store listing links to the privacy and support pages.

Static HTML and CSS, no build step. Every page carries English and German side by side
(`data-lang="en"` / `data-lang="de"`); `assets/lang.js` picks one (`?lang=de`, the visitor's
earlier choice, or the browser language) and `assets/site.css` hides the other.

| Path | What |
|---|---|
| `index.html` | Landing page |
| `privacy.html` | Privacy policy (App Store: Privacy Policy URL) |
| `support.html` | Support and troubleshooting (App Store: Support URL) |
| `terms.html` | Terms of use and imprint (§ 5 ECG) |
| `404.html` | Served by GitHub Pages for unknown paths (absolute asset paths) |
| `assets/screens/` | Simulator screenshots, 600 px wide |

The app itself lives in the private `WorldColorPicker` repo. Screenshots there come from the
UI tests' attachments.

## Deploy

GitHub Pages from this public repo, with the workflow in `.github/workflows/pages.yml`
(Settings → Pages → Source: GitHub Actions). Every push to `main` deploys.

Custom domain: `CNAME` contains `rainbowhunt.app`. At Porkbun, point the apex at GitHub Pages
(A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, AAAA
`2606:50c0:8000::153` … `8003::153`) and `www` as a CNAME to `andrey-kolmogorov.github.io`.
Then tick **Enforce HTTPS** in Settings → Pages once the certificate is issued.

The email addresses on the site (`hello@`, `support@`, `privacy@rainbowhunt.app`) need
email forwarding set up at Porkbun.

## Local preview

```sh
python3 -m http.server 4000
```

Then open http://localhost:4000 (add `?lang=de` for German).
