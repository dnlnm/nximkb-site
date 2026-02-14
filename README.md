# NximKB

Welcome to the **NximKB** repository. This is the documentation site for various keyboard projects, primarily focusing on the **NexaPad** macropad and the **NexaHub** companion application.

Built with [Starlight](https://starlight.astro.build) and [Astro](https://astro.build), this site serves as the central hub for specifications, assembly guides, and design information.

## ⌨️ Projects

### NexaPad
A 3D-printed macropad featuring:
- **Layout:** 3x4 keys + Rotary Encoder
- **Display:** 0.91" OLED Screen
- **Core:** RP2040 MCU with MX hot-swap and per-key RGB
- **Mounting:** Sandwich mount with interchangeable magnetic stands (14° or 40°)
- **Firmware:** QMK-based with VIA/Vial support

### NexaHub
A companion application (currently in development) designed to work seamlessly with NexaPad and other custom keyboards.

## 🚀 Project Structure

This project follows the standard Astro/Starlight structure:

```text
.
├── src/
│   ├── assets/           # Images and media
│   ├── content/
│   │   ├── docs/         # Documentation content (Markdown/MDX)
│   │   │   ├── nexapad/  # NexaPad specific guides
│   │   │   └── index.mdx # Homepage
│   └── content.config.ts # Content schema
├── astro.config.mjs      # Configuration for Starlight and integrations
├── wrangler.toml         # Cloudflare Pages configuration
└── package.json          # Dependencies and scripts
```

## 🧞 Commands

All commands are run from the root of the project:

| Command             | Action                                      |
| :------------------ | :------------------------------------------ |
| `npm install`       | Installs dependencies                       |
| `npm run dev`       | Starts local dev server at `localhost:4321` |
| `npm run build`     | Build the production site to `./dist/`      |
| `npm run preview`   | Preview the build locally                   |
| `npm run deploy`    | Deploy to Cloudflare Pages                  |
| `npm run astro ...` | Run Astro CLI commands                      |

## 🌐 Deployment

This project is configured to deploy to **Cloudflare Pages** using the `@astrojs/cloudflare` adapter. 

### Automated Deployment
Deployment is automated via GitHub Actions on every push to the `master` branch (see `.github/workflows/deploy.yml`).

### Manual Deployment
You can also deploy manually using:
```bash
npm run deploy
```

---

*For more information, visit the live site or check the `src/content/docs` directory.*
