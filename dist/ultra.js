const Ultra = {
  init() {
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
      document.querySelectorAll('[ultra-href]').forEach(el => {
          if (el.classList.contains('tab-disabled')) {
              return;
          }
          el.addEventListener('click', e => {
              const target = e.currentTarget;
              location.href = target.getAttribute('ultra-href');
          });
      });

      document.querySelectorAll('.ultra-chip').forEach(el => {
          if (el.classList.contains('chip-permanent')) {
              return;
          }
          el.addEventListener('click', e => {
              const target = e.currentTarget;
              target.remove();
          });
      });
  },
  popupmsg(text = null, allowHTML = false) {
    if (text === null) {
        throw new Error('"text" argument must be supplied')
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
      setTimeout(() => {
        popup.remove();
      }, 500);
    });
    if (!document.querySelector('.ultra-popup-container')) {
        let el = document.createElement('div')
        el.classList.add('ultra-popup-container')
        document.body.appendChild(el)
    }
    document.querySelector('.ultra-popup-container').appendChild(popup);
    setTimeout(() => {
      popup.classList.add('fade-out')
      setTimeout(() => {
        popup.remove();
      }, 500);
    }, 10000);
  }
};

Ultra.modal = function ({ head = "Modal", text = "" }) {
  const modalOverlay = document.createElement("div");
  modalOverlay.className = "ultra-modal-container";
  modalOverlay.style.position = "fixed";
  modalOverlay.style.top = "0";
  modalOverlay.style.left = "0";
  modalOverlay.style.width = "100vw";
  modalOverlay.style.height = "100vh";
  modalOverlay.style.background = "rgba(0, 0, 0, 0.5)";
  modalOverlay.style.display = "flex";
  modalOverlay.style.justifyContent = "center";
  modalOverlay.style.alignItems = "center";
  modalOverlay.style.zIndex = "9999";

  const modal = document.createElement("div");
  modal.className = "ultra-modal";
  modal.style.background = "white";
  modal.style.padding = "30px";
  modal.style.borderRadius = "10px";
  modal.style.maxWidth = "90%";
  modal.style.width = "400px";
  modal.style.position = "relative";
  modal.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
  modal.style.textAlign = "center";

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
  closeBtn.onclick = () => modalOverlay.remove()

  modal.appendChild(modalHead);
  modal.appendChild(modalText);
  modal.appendChild(closeBtn);
  modalOverlay.appendChild(modal);
  document.body.appendChild(modalOverlay);
};
