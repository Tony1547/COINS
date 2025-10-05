import kaplay from "kaplay"; 

const k = kaplay({
    width: 1280,
    height: 720,

});

k.loadBean();
k.setGravity(1800);

//Button Press = jump
player.onKeyPress("space", () => {
    if (player.isGrounded) {player.jump();
    }
});

//Player Character Made
const player = k.add([
    k.sprite("bean"),
    k.pos(k.center()),
    k.area(),
    k.body(),
]);

//Box
k.add([
    k.rect(k.width(), 300), 
    k.pos(0, 500), 
    k.area(),
    k.outline(3), 
    k.body({ isStatic: true})
]);

//speed
k.loop(1, () => {
    const speeds = [300, 500, 800];
    const currentSpeed = speeds[Math.floor(Math.random() * speeds.length)]

    k.add([
        k.rect(50, 50),
        k.pos(1000, 500),
        k.area(),
        k.body(),
        k.outline(3),
        k.move(k.vec2(-1,0), Math.random()),

    ])
})

