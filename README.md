# umeh.me — Personal Portfolio

Personal portfolio site for Umar Syarif, built with Astro 5 and Tailwind CSS v4.

## Stack

- **[Astro 5](https://astro.build)** — static site generator with zero JS by default
- **[Tailwind CSS v4](https://tailwindcss.com)** — utility-first CSS with CSS custom properties
- **[astro-icon](https://github.com/natemoo-re/astro-icon)** + Lucide icons
- Deployed on **Cloudflare Pages**

## Project Structure

```
src/
  components/     # Section components (Hero, About, Experience, Skills, Projects, Achievements, Contact)
  data/
    portfolio.ts  # Single source of truth for all CV and portfolio content
  layouts/
    Layout.astro  # Base HTML layout
  pages/
    index.astro   # Composes all sections
  styles/
    global.css    # Tailwind theme, tokens, and utilities
public/
  screenshots/    # Project screenshot images (drop PNG/JPG/WebP here to replace placeholders)
```

## Content

All personal data lives in `src/data/portfolio.ts`. Edit that file to update:

- Bio, location, and contact links
- Work experience and highlights
- Skills and technologies
- Achievements and certifications
- Languages

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build → dist/
npm run preview   # preview production build locally
```

## Screenshots

Project screenshots live in `public/screenshots/`. Drop your actual images there using the same filenames to replace the placeholders:

| File | Project | Feature |
|------|---------|---------|
| `finance-wallets.svg` | Personal Finance Tracker | Wallet management |
| `finance-transactions.svg` | Personal Finance Tracker | Transaction tracking |
| `finance-dashboard.svg` | Personal Finance Tracker | Smart dashboards |
| `finance-pwa.svg` | Personal Finance Tracker | Installable PWA |
| `whatsapp-chat.svg` | WhatsApp Financial AI | Chat parsing |
| `whatsapp-ledger.svg` | WhatsApp Financial AI | Structured ledger |
| `whatsapp-summary.svg` | WhatsApp Financial AI | Weekly summaries |
| `topik-test.svg` | TOPIK Practice App | Practice test |
| `topik-scores.svg` | TOPIK Practice App | Score tracking |
| `topik-packages.svg` | TOPIK Practice App | Practice packages |

## License

Personal use only.
