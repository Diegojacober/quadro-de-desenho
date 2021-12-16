let currentColor =  'black'

let screen = document.getElementById('tela')
let cntx = screen.getContext('2d')
let canDraw = false
let mouseX = 0
let mouseY = 0

document.querySelectorAll('.colorArea .color').forEach(item =>{
    item.addEventListener('click',colorClickEvent)
})

screen.addEventListener('mousedown',mouseDownEvent)
screen.addEventListener('mousemove',mouseMoveEvent)
screen.addEventListener('mouseup',mouseUpEvent)


function colorClickEvent(e){
    let color = e.target.getAttribute('data-color')
    currentColor = color

    document.querySelector('.color.active').classList.remove('active')
    e.target.classList.add('active')

}

function mouseDownEvent(e){
    canDraw = true
    mouseX = e.pageX - screen.offsetLeft
    mouseY = e.pageY - screen.offsetTop
}

function mouseMoveEvent(e){
    if(canDraw)
    {
        Draw(e.pageX,e.pageY)
    }
}

function mouseUpEvent(){
    canDraw = false
}
function Draw(x,y)
{
    let pointX = x - screen.offsetLeft
    let pointY = y - screen.offsetTop

    cntx.beginPath()
    cntx.lineWidth = 8
    cntx.lineJoin = 'round'
    cntx.moveTo(mouseX,mouseY)
    cntx.lineTo(pointX,pointY)
    cntx.closePath()
    cntx.strokeStyle = currentColor
    cntx.stroke()
    //desenhar
    mouseX = pointX
    mouseY = pointY

}

function clearScreen(){
    cntx.setTransform(1,0,0,1,0,0)
    cntx.clearRect(0, 0, cntx.canvas.width, cntx.canvas.height)

}
