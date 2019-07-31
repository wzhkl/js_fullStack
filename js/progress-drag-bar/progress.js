class Progress {
  constructor(selector, options) {
    this.parentDom = document.querySelector(selector);
    this.options = options;
    this.initDom();
  }
  initDom() {
    this.parentDom.innerHTML = `
    <div class="progress-bar">
      <div class="progress"></div>
      <div class="progress-button"></div>
    </div>
    `
    this.progressBraDom = document.querySelector('.progress-bar');
    this.progressDom = document.querySelector('.progress');
    this.progressBtnDom = document.querySelector('.progress-button');
    this.initProgress();
    this.initEvent();
  }
  initProgress() {
    const { progress = 0 } = this.options;
    this.progressBraDomWidth = this.progressBraDom.offsetWidth;
    this.progressDom.style.width = `${progress * 100}%`;
    this.progressBtnDom.style.left = `${progress * this.progressBraDomWidth}px`;
  }
  initEvent() {
    const { disableDrag = false, onDragStart, onDrag } = this.options;
    if (disableDrag) return false;
    let downX = 0;
    let btnLeft = 0;
    this.progressBtnDom.addEventListener('touchstart', (e) => {
      const touch = e.touches[0];
      downX = touch.clientX;
      console.log(downX)
      btnLeft = parseInt(touch.target.style.left);
      if (onDragStart) onDragStart();
    })
    this.progressBtnDom.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const diffx = touch.clientX - downX;
      // console.log(diffx);
      const newBtnLeft = diffx + btnLeft;
      if (newBtnLeft > this.progressBraDomWidth) {
        newBtnLeft = this.progressBraDomWidth;
      } else if (newBtnLeft < 0) {
        newBtnLeft = 0;
      }
      this.progressDom.style.width = `${newBtnLeft / this.progressBraDomWidth * 100}%`;
      this.progressBtnDom.style.left = `${newBtnLeft}px`
      if (onDrag) onDrag(newBtnLeft / this.progressBraDomWidth * 100);
    })
    this.progressBtnDom.addEventListener('touchend', () => {
      const { onDragEnd } = this.options;
      if (onDragEnd) onDragEnd()
    })
  }
}

export default Progress;