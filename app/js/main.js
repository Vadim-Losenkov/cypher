class Slider {
  constructor(selector, info) {
    this.$main = document.querySelector(selector)
    this.info = info
    
    this.$items = []
    this.$buttons = []

    this.$line = this.$main.querySelector('[data-slider="activeBar"]')
    
    this.init()
  }
  
  init() {
    this.listener()
  }
  
  listener() {
    this.$items = this.$main.querySelectorAll('[data-slider="item"]')
    this.$buttons = this.$main.querySelectorAll('[data-slider="button"]')
    
    this.$buttons.forEach($el => {
      
      $el.addEventListener('click', event => {
        const $target = event.target.closest('[data-slider="button"]')
        const id = $target.dataset.id
        
        clear(this.$buttons)
        clear(this.$items)

        $target.classList.add('active')
        this.$line.style[this.info[0]] = getComputedStyle($target)[this.info[1]]
        console.log(getComputedStyle($target)[this.info[1]]);
        
        this.$main.querySelector(`[data-slider="item"][data-id="${id}"]`).classList.add('active')
        this.$items.forEach($el => {
          if ($el.dataset.id <= (id - 1)) {
            $el.classList.add('checked')
          }
        })
        for (let i = 0; i < (id - 1); i++) {
          this.$buttons[i].classList.add('checked')
        }
      })
    })
    
  }
}

function clear(arr) {
  arr.forEach($el => {
    $el.classList.remove('checked')
    $el.classList.remove('active')
  })
}

new Slider('.slider__inner', ['width', 'left'])
new Slider('.slider__mobile', ['height', 'top'])

new WOW().init();