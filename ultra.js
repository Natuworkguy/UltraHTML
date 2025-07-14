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