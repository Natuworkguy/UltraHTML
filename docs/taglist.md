# UltraHTML CSS & JS Tag List

## 🧑‍🎨 CSS Classes

### 🔘 Buttons
- `.ultra-button` — Base button styling  
- `.button-wave` — Adds ripple wave effect on button clicks  
- `.big-button` — Full-width button modifier  

### 🗂️ Tabs
- `.ultra-tab-container` — Tabs wrapper container  
- `.ultra-tab` — Individual tab element  
- `.tab-active` — Active tab state  
- `.tab-disabled` — Disabled (unclickable) tab state  

### 📦 Sections
- `.ultra-section` — Generic section container  
- `.ultra-section-ul` — Section with underline decoration  
- `.cover-only` — Modifier to style underline `fit-content`  
- `.ctr-ul` — Modifier to center underline  

### 🏷️ Chips
- `.ultra-chip` — Chip container  
- `.chip-permanent` — Makes chip permanent (not dismissible)  
- `.no-hover-animation` — Disables chip hover animation  

### 💬 Popups
- `.ultra-popup-container` — Popup container fixed to viewport  
- `.ultra-popup` — Popup message box  
- `.fade-out` — Fade out animation class  
- `.fade-out-end` — Hides element after fade out  

### 📝 Inputs
- `.ultra-input` — Styled input element  

---

## 🧠 JavaScript API

### `Ultra.init()`
Initializes UltraHTML functionality:
- Adds wave ripple effects on `.ultra-button.button-wave` clicks  
- Enables navigation for elements with `[ultra-href]` attribute (skips disabled)  
- Enables chip dismissal on click (except `.chip-permanent`)  
- Enables toggle class on click using `ultra-toggle-class`
- Enables use of dropdowns

---

### `Ultra.popupmsg(text, allowHTML = false)`
Displays a popup toast message.

> [!IMPORTANT]
> Ultra.popupmsg will throw a TypeError if `text` is not set.

- `text` — String content for the popup  
- `allowHTML` — *(Optional)* If `true`, renders `text` as HTML  

### `Ultra.modalmodal({ head = "Modal", text = "" })`
Displays a full-screen modal.

- `head` — Modal header (Defaults to "Modal")
- `text` — Modal text (Defaults to "")

### `Ultra.switch.state(el)`
Returns the state of the switch (boolean)

- `el` — Switch element (input)

### `Ultra.switch.toggle(el)`
Toggles the switch (el)

- `el` — Switch element (input)

---

## 🏷️ UltraHTML Attributes

- `ultra-href` — Navigate to a URL when clicked  
- `ultra-toggle-class="className"` — Toggles a class ("className") when the element is clicked

---

> [!NOTE]
> 💡 **Pro Tip:** Keep this list handy when using or extending UltraHTML!
