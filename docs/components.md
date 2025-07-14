# Components Overview

UltraHTML offers the following UI components out of the box:

---

## Buttons

- **Class:** `.ultra-button`
- **Modifiers:** `.button-wave` (adds ripple wave effect on click)
- **Usage:**

```html
<button class="ultra-button button-wave">Click Me</button>
````

* **Features:**

  * Smooth background color transitions on hover/active.
  * Ripple wave effect for interactive feedback.

---

## Tabs

* **Class:** `.ultra-tab` inside `.ultra-tab-container`
* **States:**

  * `.tab-active` — currently active tab
  * `.tab-disabled` — disabled, unclickable tab
* **Usage:**

```html
<div class="ultra-tab-container">
  <div class="ultra-tab tab-active">Tab 1</div>
  <div class="ultra-tab">Tab 2</div>
</div>
```

* **Features:**

  * Smooth color transitions.
  * Disabled and active states visually distinct.

---

## Chips

* **Class:** `.ultra-chip`
* **Modifiers:** `.chip-permanent` (prevents dismissal)
* **Usage:**

```html
<div class="ultra-chip">I'm a chip</div>
```

* **Features:**

  * Click to dismiss (unless `.chip-permanent`).
  * Hover color changes.

---

## Popup Messages

* Created dynamically via JS: `Ultra.popupmsg(text, allowHTML = false)`
* Click or timeout to dismiss.
* Example:

```js
Ultra.popupmsg("Hello world!");
```

---

For all interactive components, remember to initialize UltraHTML in your JS:

```js
Ultra.init();
```

````

---

### 3. `docs/customization.md` — CSS Variables & Theming

```markdown
# Customization Guide

UltraHTML uses CSS variables (`--var-name`) for easy theming and style overrides.

---

## Default CSS Variables

```css
:root {
  --underline-default-color: red;

  --btn-default-color: #0bf00b;

  --tab-default-color: #2196f3;
  --tab-select-color: red;
  --tab-active-color: rgba(255, 0, 0, 0.1);
  --tab-disabled-color: lightgrey;

  --chip-color: lightgrey;
  --chip-text-color: grey;
  --chip-hover-color: lightblue;
}
````

---

## How to Override

Add your own CSS after including UltraHTML styles:

```css
:root {
  --btn-default-color: #ff6600; /* Change button color */
  --tab-select-color: #00ff00;  /* Change selected tab color */
}
```

---

## Responsive Behavior

UltraHTML is mobile-first and adjusts popup containers and other UI elements automatically for smaller screens.

---

## Adding New Variables

To extend UltraHTML, add new CSS variables following the same pattern and update your CSS accordingly.
