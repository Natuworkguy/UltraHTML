const Ultra = {
  init() {
    document.querySelectorAll('.ultra-dropdown').forEach(dropdown => {
      const button = dropdown.querySelector('.ultra-dropdown-btn');
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        // Close other dropdowns first
        document.querySelectorAll('.ultra-dropdown').forEach(d => {
          if (d !== dropdown) d.classList.remove('active');
        });
        dropdown.classList.toggle('active');
      });
    });
    document.addEventListener('click', () => {
      document.querySelectorAll('.ultra-dropdown').forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    });
    // Button ripple effect
    document.querySelectorAll('button.ultra-button.button-wave').forEach(button => {
      button.addEventListener('click', function (e) {
        const wave = document.createElement('span');
        wave.className = 'wave-effect';

        const rect = this.getBoundingClientRect();
        const size = Math.max(this.clientWidth, this.clientHeight);
        wave.style.width = wave.style.height = `${size}px`;

        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        wave.style.left = `${x}px`;
        wave.style.top = `${y}px`;

        this.appendChild(wave);
        setTimeout(() => wave.remove(), 600);
      });
    });

    // ultra-href navigation
    document.querySelectorAll('[ultra-href]').forEach(el => {
      if (el.classList.contains('tab-disabled')) return;
      el.addEventListener('click', e => {
        const target = e.currentTarget;
        location.href = target.getAttribute('ultra-href');
      });
    });

    // chip removal
    document.querySelectorAll('.ultra-chip').forEach(el => {
      if (el.classList.contains('chip-permanent')) return;
      el.addEventListener('click', e => {
        const target = e.currentTarget;
        target.remove();
      });
    });
  },

  popupmsg(text = null, allowHTML = false) {
    if (text === null) {
      throw new Error('"text" argument must be supplied');
    }

    const popup = document.createElement('div');
    popup.className = 'ultra-popup';
    if (!allowHTML) {
      popup.textContent = text;
    } else {
      popup.innerHTML = text;
    }

    popup.addEventListener('click', () => {
      popup.classList.add('fade-out');
      setTimeout(() => popup.remove(), 500);
    });

    if (!document.querySelector('.ultra-popup-container')) {
      const container = document.createElement('div');
      container.classList.add('ultra-popup-container');
      document.body.appendChild(container);
    }

    document.querySelector('.ultra-popup-container').appendChild(popup);

    setTimeout(() => {
      popup.classList.add('fade-out');
      setTimeout(() => popup.remove(), 500);
    }, 10000);
  },

  modal({ head = "Modal", text = "" }) {
    const modalOverlay = document.createElement("div");
    modalOverlay.className = "ultra-modal-container";
    Object.assign(modalOverlay.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      background: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "9999"
    });

    const modal = document.createElement("div");
    modal.className = "ultra-modal";
    Object.assign(modal.style, {
      background: "white",
      padding: "30px",
      borderRadius: "10px",
      maxWidth: "90%",
      width: "400px",
      position: "relative",
      boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
      textAlign: "center"
    });

    const modalHead = document.createElement("h2");
    modalHead.className = "ultra-modal-head";
    modalHead.textContent = head;

    const modalText = document.createElement("p");
    modalText.className = "ultra-modal-text";
    modalText.textContent = text;

    const closeBtn = document.createElement("button");
    closeBtn.className = "ultra-modal-close ultra-button button-wave";
    closeBtn.textContent = "Close";
    closeBtn.style.marginTop = "20px";
    closeBtn.onclick = () => modalOverlay.remove();

    modal.appendChild(modalHead);
    modal.appendChild(modalText);
    modal.appendChild(closeBtn);
    modalOverlay.appendChild(modal);
    document.body.appendChild(modalOverlay);
  },

  switch: {
    state(el) {
      return el?.checked === true
    },
    toggle(el) {
      if (el) {
        el.checked = !el.checked;
      }
    }
  }
};
