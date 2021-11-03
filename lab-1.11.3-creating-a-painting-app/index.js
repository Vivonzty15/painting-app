const painting = document.querySelector('.painting')
const palette = document.querySelectorAll('.palette')
let blue = document.getElementById('blue')
let red = document.getElementById('red')
let yellow = document.getElementById('yellow')
let green = document.getElementById('green')

let selectedColor = 'blue'
blue.addEventListener('click', function(e){
    painting.addEventListener('click', function(e){
        e.target.style.backgroundColor = selectedColor
    })
})
let selectedColor2 = 'red'
red.addEventListener('click', function(e){
    painting.addEventListener('click', function(e){
        e.target.style.backgroundColor = selectedColor2
    })
})
let selectedColor3 = 'yellow'
yellow.addEventListener('click', function(e){
    painting.addEventListener('click', function(e){
        e.target.style.backgroundColor = selectedColor3
    })
})
let selectedColor4 = 'green'
green.addEventListener('click', function(e){
    painting.addEventListener('click', function(e){
        e.target.style.backgroundColor = selectedColor4
    })
})