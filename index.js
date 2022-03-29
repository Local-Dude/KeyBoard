let btn = document.querySelectorAll('.shifter')
let input = document.querySelector('.input')

document.addEventListener('keyup', function(event){
    
    input.value += event.key
    btn.forEach(item => check(item, event.key))
    
});

function check(item, key) {
    if(item.textContent === key) {
        item.style.backgroundColor = '#d855cd'
        setTimeout(() => item.style.backgroundColor = '#53565a', 100)
    }
}