# 🌐 UltraHTML

**Ultra-light UI library for beautiful buttons, tabs, chips, and popups — inspired by Materialize CSS, built from scratch.**

> ⚡ Designed for speed.  
> 🎨 Styled with love.  
> 💾 Zero dependencies.

---

## 🚀 Getting Started

### 1. Add UltraHTML to Your Project

#### ✅ Option A: Clone or Download

```bash
git clone https://github.com/Natuworkguy/UltraHTML.git
````

Then include the files:

```html
<link rel="stylesheet" href="dist/ultra.css">
<script src="dist/ultra.js" defer></script>
```

#### 🌐 Option B: CDN (Coming Soon)

UltraHTML will soon be available via jsDelivr/UNPKG!

---

### 2. Use the Components

Here’s a quick taste of what UltraHTML gives you:

```html
<button class="ultra-button button-wave">Click Me</button>

<section class="ultra-section ultra-section-ul cover-only ctr-ul">
  Hello, UltraHTML World!
</section>

<div class="ultra-chip">I'm a chip</div>
```

Then in JS:

```html
<script>
  Ultra.init(); // Enables wave effects, chip removal, tab clicks, etc.
</script>
```

---

## ✨ Features

* 💥 **Wave Button Effects**
* 📑 **Tabbed Navigation**
* 🎯 **Chips w/ Click-to-Dismiss**
* 💬 **Popup Toast Messages**
* 📱 **Responsive Design (Mobile-First)**
* 🎨 **Fully Customizable via CSS Variables**

---

## 🧪 Demo

Check out the `/demo/` folder or [visit the live playground (coming soon)](#).

---

## 🧠 Why UltraHTML?

* No frameworks, no nonsense.
* Plug-and-play components.
* Built with performance and developer joy in mind.
* You can read the whole code in one sitting. And *understand* it.

---

## 🙌 Inspired By

UltraHTML is proudly inspired by the visual beauty and simplicity of [Materialize CSS](https://materializecss.com/).
We're taking that same vibe — clean UI, intuitive interactions — and boiling it down to **pure CSS + JS**, no frameworks required.

---

## 📂 File Structure

```
UltraHTML/
├── dist/        # Ready-to-use CSS and JS files (not minified)
├── src/         # Source CSS and JS files
├── demo/        # Demo page
├── docs/        # Documentation
├── tests/       # (Optional) JS tests
├── LICENSE
└── README.md
```

---

## 🔧 Customization

All key styles are controlled with CSS variables. Example:

```css
:root {
  --btn-default-color: #0bf00b;
  --tab-default-color: #2196f3;
  --chip-color: lightgrey;
}
```

---

## 📜 License

UltraHTML is licensed under the [MIT License](LICENSE).

---

## 🧑‍💻 Author

Made with ❤️ by **[Natuworkguy](https://github.com/Natuworkguy)**

> *“The UI game needs more love. I’m just here to make it pretty.”*

---

## 🤝 Contributing

Wanna add new components, fix bugs, or expand features? Go wild. PRs welcome!
