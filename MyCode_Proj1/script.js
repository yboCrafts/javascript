let animation = 'front';
window.addEventListener('keydown', ev => {
    const f = ev.keyCode;

    if (f == 38 || f == 87 || f == 40 || f == 83 || f == 37 || f == 65 || f == 39 || f == 68) {
        animation = 
            (f == 38 || f == 87) ? 'back' :
            (f == 40 || f == 83) ? 'front' :
            (f == 37 || f == 65) ? 'left' :
            (f == 39 || f == 68) ? 'right' :
            '';
    }
});



const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 400;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'human_sprite.png';
const spriteWidth = 400.25;
const spriteHeight = 600;

let gameFrame = 0;
let staggerFrames = 10;
let frameY = 0;
const spriteAnimations = [];
const animationStates = [
    {
        name: 'front',
        frames: 4,
    },
    {
        name: 'back',
        frames: 4,
    },
    {
        name: 'left',
        frames: 4,
    },
    {
        name: 'right',
        frames: 4,
    },
];

animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for(let i = 0; i < state.frames; i++) {
        let positionX = i * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
});

console.log(spriteAnimations);

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);

    position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[animation].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[animation].loc[position].y;
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    
    gameFrame++;
    requestAnimationFrame(animate);
}

animate();

