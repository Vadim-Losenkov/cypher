class Slider {
  constructor(selector) {
    this.$main = document.querySelector(selector)
    
    this.$items = []
    this.$buttons = []
    
    this.init()
  }
  
  init() {
    this.listener()
  }
  
  listener() {
    this.$items = this.$main.querySelectorAll('[data-slider="item"]')
    this.$buttons = this.$main.querySelectorAll('[data-slider="button"]')
    
    this.$buttons.forEach($el => {
      function clear() {
        $el.classList.remove('checked')
        $el.classList.remove('active')
      }
      $el.addEventListener('click', event => {
        const $target = event.target.closest('[data-slider="button"]')
        const id = $target.dataset.id
        
        this.clear()
        
      })
    })
    
    clear() {
      this.$buttons.forEach($el => {
        $el.classList.remove('.checked')
        $el.classList.remove('.active')
      })
    }
    
  }
}

new Slider('.slider__inner')
