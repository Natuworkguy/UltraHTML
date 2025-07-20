# 🛠️ How to Use UltraHTML

Welcome, dev! 🎉
This guide shows how to drop UltraHTML into your project and get fancy buttons, tabs, chips, dropdowns, modals, switches, and popups — fast.

---

## 📦 1. Include the Files & Initialize UltraHTML

No builds. No bundlers. Just drop and go:

```html
<link rel="stylesheet" href="dist/ultra.css" />
<script src="dist/ultra.js" onload="Ultra.init()" defer></script>
```

Make sure the JS loads after the DOM (`defer` or place it at the end of `<body>`).

---

## 🧪 2. Quick Test Page

Save this to `test.html` and open it in your browser:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="dist/ultra.css" />
  </head>
  <body>
    <button class="ultra-button button-wave">Wave!</button>
    <div class="ultra-chip">Chip!</div>

    <script src="dist/ultra.js" onload="Ultra.init()" defer></script>
  </body>
</html>
```

Boom 💥 — you're Ultra now.

---

## 🖱️ 3. Use Components

### ✅ Buttons

```html
<button class="ultra-button button-wave">Click Me</button>
<button class="ultra-button big-button">Big Button</button>
```

* `.button-wave` = animated ripple
* `.big-button` = full width

---

### 📑 Tabs

```html
<div class="ultra-tab-container">
  <div class="ultra-tab tab-active">Tab 1</div>
  <div class="ultra-tab">Tab 2</div>
  <div class="ultra-tab tab-disabled">Disabled</div>
</div>
```

* `.tab-active` = currently selected tab
* `.tab-disabled` = unclickable

---

### 🎯 Chips

```html
<div class="ultra-chip">Dismiss Me</div>
<div class="ultra-chip chip-permanent">Can't Dismiss</div>
```

* Click to dismiss (unless it has `.chip-permanent`)

---

### 💬 Popups

```html
<button onclick="Ultra.popupmsg('Hello there!')">Toast Me</button>
```

* Auto-dismisses after 10s
* Use `Ultra.popupmsg(html, true)` for HTML content

---

### 🪟 Modals

```html
<button onclick="Ultra.modal({ head: 'Modal Title', text: 'Important info here' })">
  Show Modal
</button>
```

* Modal with a title + text
* More advanced options coming soon™️

---

### 🧠 Context Menu

```html
<div class="ultra-context-menu">
  <div class="item" onclick="alert('📝 Edit clicked')">📝 Edit</div>
  <div class="item" onclick="alert('❌ Delete clicked')">❌ Delete</div>
  <div class="item" onclick="alert('🔗 Copy Link clicked')">🔗 Copy Link</div>
</div>
```

* Appears on right-click (automatically)
* Add your custom items using `.item`

---

### 🪜 Sections

```html
<section class="ultra-section">This is a section</section>
```

* Auto-styled container
* Great for grouping UI

---

### 🔽 Dropdowns

```html
<div class="ultra-dropdown">
  <button class="ultra-dropdown-btn">Choose Option</button>
  <div class="ultra-dropdown-content">
    <a href="#">Option A</a>
    <a href="#">Option B</a>
  </div>
</div>
```

* Styled dropdowns that just work™

---

### 🔘 Switches

```html
<label class="ultra-switch">
  <input type="checkbox" class="ultra-switch-input" />
  <span class="ultra-switch-slider"></span>
</label>
```

* Disabled version:

```html
<label class="ultra-switch" disabled>
  <input type="checkbox" class="ultra-switch-input" disabled />
  <span class="ultra-switch-slider"></span>
</label>
```

---

## 🎨 4. Customizing Styles

UltraHTML uses CSS variables for full theme control:

```css
:root {
  --btn-default-color: #ff6600;
  --tab-select-color: #ff3333;
  --chip-default-bg: #eee;
}
```

Override globally with `:root` or per-element with custom classes.

---

## 📱 5. Mobile-Friendly

UltraHTML is responsive out of the box:
✔️ Tabs, modals, popups, and dropdowns scale smoothly
✔️ No extra config needed

---

## 🧠 Final Tips

* Use `defer` or `onload="Ultra.init()"` to avoid race conditions
* Mix and match components freely
* Minimal dependencies = maximal performance
* Style it your way with CSS vars
