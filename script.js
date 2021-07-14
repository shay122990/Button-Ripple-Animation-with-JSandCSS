const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    const xPosition = e.clientX
    const yPosition = e.clientY

    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft

    const xInside = xPosition - buttonLeft
    const yInside = yPosition - buttonTop

    const circle = document.createElement('span')

    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'
    
    this.appendChild(circle)
    setTimeout(()=>circle.remove(),500)
  })
})