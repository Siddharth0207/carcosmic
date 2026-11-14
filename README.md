# CarCosmic Training Academy — Production Deployment & Developer Handoff

> High-performance, pixel-perfect production build for **CarCosmic Training Academy**.
> Includes the complete interactive website, 60fps animations, Lenis smooth scrolling, CSS marquee physics, and the Developer Design System & Handoff Dashboard.

---

## 📁 Clean Deployment Structure

```
carcosmic-academy-deploy/
├── index.html            # Main Production Page (Live Website)
├── handoff.html          # Interactive Developer Design System & Motion Specs Dashboard
├── vercel.json           # Vercel Production Cache & Clean URL Configuration
├── README.md             # This handoff and deployment guide
│
├── css/
│   ├── custom.css        # Custom overrides (5-service layout, responsive breakpoints, marquee physics)
│   ├── site.css          # Core Webflow styling & responsive framework
│   ├── lenis.css         # Lenis smooth inertia scrolling styles
│   └── shared.css        # Base resets and utility tokens
│
├── js/
│   ├── main.js           # Lenis scroll runtime & accordion interactions
│   ├── chunk671.js       # Webflow IX2 timeline and interaction engine
│   ├── jquery.min.js     # Runtime dependency for Webflow interactions
│   └── lenis.min.js      # Lenis v1.0 smooth scrolling engine
│
└── assets/
    └── images/
        ├── certs/        # Student certification photos (3:2 horizontal landscape)
        │   ├── cert_0635.jpg
        │   ├── cert_0694.jpg
        │   ├── cert_0790.jpg
        │   ├── cert_0971.jpg
        │   ├── cert_8368.jpg
        │   └── cert_9759.jpg
        ├── brands/       # Monochrome brand partner logos (Bosch, 3M, Rupes, etc.)
        │   └── bosch.svg # Solid monochrome black (#000000)
        ├── curriculum_correction.jpg
        ├── curriculum_coating.jpg
        ├── curriculum_ppf.jpg
        ├── curriculum_studio.jpg
        ├── curriculum_sales.jpg   # 5th Service: Sales & Business Development
        └── ...
```

---

## 🚀 How to Deploy to Vercel (100% Free, Zero Config)

### Method 1: Web Dashboard Drag & Drop (Easiest — No Terminal Needed)
1. Go to [vercel.com](https://vercel.com) and log in (or create a free account).
2. Click **Add New…** → **Project** (or visit [vercel.com/new](https://vercel.com/new)).
3. Simply drag and drop this entire `carcosmic-academy-deploy` folder into the browser window.
4. Click **Deploy**. In under 15 seconds, Vercel gives you a live, permanent public URL (e.g. `carcosmic-academy.vercel.app`).
5. Share this URL with your developer!

### Method 2: Terminal Deployment via NPX
Open PowerShell or Terminal inside this folder:
```bash
npx vercel
```
- Set up and deploy? `Y`
- Which scope? Select your personal account.
- Link to existing project? `N`
- What’s your project’s name? `carcosmic-academy`
- In which directory is your code located? `./`
- Want to modify settings? `N`

Your live production URL is generated instantly.

---

## 💻 How to Run Locally

If you or your developer want to inspect the site locally:

### Option A: Python (Built-in)
```bash
python -m http.server 8080
```
Open [http://localhost:8080](http://localhost:8080) in your browser.

### Option B: Node.js Serve
```bash
npx serve .
```

---

## 🎨 Key Features & Architecture Specifications

### 1. Curriculum Services Section (`#curriculum`)
- **5 Complete Services**:
  - `[01]` Paint Correction
  - `[02]` Ceramic Coating
  - `[03]` PPF Installation
  - `[04]` Studio Setup
  - `[05]` Sales and Business Development (New module with `curriculum_sales.jpg`)
- **Desktop Viewport (`>= 992px`)**:
  - Interactive hover state: Titles turn red (`#DE322D`), red indicator expands, and floating preview popover appears on the right.
  - Modules `[04]` & `[05]` anchor to `bottom: 20px` to prevent clipping inside the canvas.
- **Tablet & Mobile Viewports (`<= 991px`)**:
  - Fully stacked, non-overlapping responsive card architecture.
  - Image and details are set to `position: static; opacity: 1 !important;` so touchscreen visitors see all content cleanly without hover.
  - Typography scales with `clamp()` for perfect line breaks.

### 2. IDA Master Trainer & Certification Gallery (`#trainer`)
- **2-Column Responsive Layout**:
  - Left: IDA Master Trainer Raj Deshmukh spotlight card, biography, and credentials.
  - Right: Pure student certification photo marquee (`.cert-gallery-container`).
- **50-Second Smooth Marquee**:
  - Completely decoupled from Webflow's fast 12-second JS loop.
  - Uses hardware-accelerated CSS `animation: cert-gallery-scroll 50s linear infinite` with pause-on-hover.
  - All certification photos cropped to uniform 3:2 horizontal landscape format.

### 3. Partner Brand Marquee
- Official Training Partner logos.
- Bosch logo updated to 100% monochrome solid black (`#000000`).

### 4. Interactive Design System (`handoff.html`)
- Open `handoff.html` in any browser to inspect:
  - Color Tokens (`--cc-red`, `--cc-ink`, `--cc-surface`, etc.)
  - Typography Scale (Geist Display & Geist Mono)
  - 8px Spacing Grid
  - Motion Curves & Easing Parameters
