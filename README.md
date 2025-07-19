# 🌐 UltraHTML
![MIT License](https://img.shields.io/badge/license-MIT-green)
![GitHub stars](https://img.shields.io/github/stars/Natuworkguy/UltraHTML)
![GitHub issues](https://img.shields.io/github/issues/Natuworkguy/UltraHTML)
![GitHub last commit](https://img.shields.io/github/last-commit/Natuworkguy/UltraHTML)

**Ultra-light UI library for beautiful buttons, tabs, chips, popups, dropdowns, switches, and more — inspired by Materialize CSS, built from scratch.**

> ⚡ Designed for speed.  
> 🎨 Styled with love.  
> 💾 Zero dependencies.

---

## 🚀 Getting Started

### 1. Add UltraHTML to Your Project

```bash
git clone https://github.com/Natuworkguy/UltraHTML.git
````

Then include the files:

```html
<link rel="stylesheet" href="dist/ultra.css">
<script src="dist/ultra.js" onload="Ultra.init()"></script>
```
---

### 2. Use the Components

Here’s a quick taste of what UltraHTML gives you:

```html
<section class="ultra-section ultra-section-ul cover-only ctr-ul">
  Hello, UltraHTML World!
  <button class="ultra-button button-wave">Click Me</button>
</section>

<div class="ultra-chip">I'm a chip</div>
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

Click [here](https://natuworkguy.github.io/UltraHTML/demo/) to view the demo.

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
├── demo/        # Demo page
├── docs/        # Documentation
├── LICENSE
├── how_to_use.md
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
