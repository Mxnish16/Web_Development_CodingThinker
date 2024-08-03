const imgArr = ['https://cdn.pixabay.com/photo/2023/05/23/15/42/bengal-tiger-8013012_640.jpg','https://cdn.pixabay.com/photo/2023/03/14/12/04/flowers-7852194_640.jpg','https://cdn.pixabay.com/photo/2012/02/29/15/52/track-19217_640.jpg','https://cdn.pixabay.com/photo/2022/11/22/20/25/ball-7610545_640.jpg']

let images = document.querySelector('img')
images.style.height='500px'
images.style.width='800px'

let num = 0

setInterval(function() {
    images.setAttribute('src',imgArr[num])
    num = (num + 1) % imgArr.length
},1200) 
