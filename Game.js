const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let player = {
    x: 400,
    y: 300,
    size: 30,
    speed: 5,
    hp: 100
}

let bullets = []

let keys = {}

document.addEventListener("keydown", e => keys[e.key] = true)
document.addEventListener("keyup", e => keys[e.key] = false)

document.addEventListener("click", shoot)

function shoot(){
    bullets.push({
        x: player.x,
        y: player.y,
        dx: 8,
        dy: 0
    })
}

function update(){

    if(keys["w"]) player.y -= player.speed
    if(keys["s"]) player.y += player.speed
    if(keys["a"]) player.x -= player.speed
    if(keys["d"]) player.x += player.speed

    bullets.forEach(b => {
        b.x += b.dx
        b.y += b.dy
    })
}

function draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height)

    ctx.fillStyle = "blue"
    ctx.fillRect(player.x, player.y, player.size, player.size)

    ctx.fillStyle = "yellow"
    bullets.forEach(b=>{
        ctx.fillRect(b.x,b.y,10,5)
    })
}

function gameLoop(){
    update()
    draw()
    requestAnimationFrame(gameLoop)
}

gameLoop()
