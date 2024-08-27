const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
ctx.fillStyle = 'red'
const cell = 60
const size = [[0,0]]

function start() {
    ctx.clearRect(0,0,1200,600)
    for(let i of size) {
        ctx.fillRect(i[0],i[1],cell,cell)
    }
}
start()



