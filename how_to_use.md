# 🛠️ How to Use UltraHTML

Welcome, dev! 🎉  
This guide will show you how to drop UltraHTML into your project and get fancy buttons, tabs, chips, and popups — fast.

---

## 📦 1. Include the Files and initialize UltraHTML

No builds, no bundlers — just link the files directly.

```html
<link rel="stylesheet" href="dist/ultra.css" />
<script src="dist/ultra.js" onload="Ultra.init()" defer></script>
````

Make sure `ultra.js` is loaded after the DOM (`defer` or load it at the bottom).

---

## 🖱️ 3. Use Components

### ✅ Buttons

```html
<button class="ultra-button button-wave">Click Me</button>
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

* `.tab-active` = shows as selected
* `.tab-disabled` = unclickable

---

### 🎯 Chips

```html
<div class="ultra-chip">Dismiss Me</div>
<div class="ultra-chip chip-permanent">You Can’t Dismiss Me</div>
```

* Click to dismiss (unless `.chip-permanent`)

---

### 💬 Popup Messages

```html
<button onclick="Ultra.popupmsg('Hello there!')">Toast Me</button>
```

* Dismisses on click or after 10s
* Use `Ultra.popupmsg(html, true)` for rich HTML content

---

## 🎨 4. Customizing Styles

UltraHTML uses **CSS variables**. Change them globally:

```css
:root {
  --btn-default-color: #ff6600;
  --tab-select-color: #ff3333;
}
```

Or override them per-component with custom classes.

---

## 📱 5. Mobile Friendly

UltraHTML adapts for smaller screens out of the box — especially popup and tab elements. No extra config needed.

---

## 🧪 6. Quick Test Page

Create an HTML file like this:

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="dist/ultra.css">
</head>
<body onload="Ultra.init()">

  <button class="ultra-button button-wave">Wave!</button>
  <div class="ultra-chip">Chip!</div>

  <script src="dist/ultra.js" defer></script>
</body>
</html>
```

Open in your browser and boom — you're Ultra.
