const inp = document.querySelector('input')
const checkBox = document.querySelector('.checkbox-label')

let currTheme = 'dark'

inp.addEventListener('click', () => {
    if(currTheme === 'light') {
        currTheme = 'dark'
        document.querySelector('body').style.backgroundColor = 'black'
        document.querySelector('.section1').style.color = 'white'
        document.querySelector('.section2').style.color = 'purple'
    } else {
        currTheme = 'light'
        document.querySelector('body').style.backgroundColor = 'white'
        document.querySelector('.section1').style.color = 'black'
        document.querySelector('.section2').style.color = 'orange'
    }
})