import kaplay from "kaplay"; 

const k = kaplay({
    width: 1280,
    height: 720,

});

k.loadBean();
k.setGravity(1000);

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

k.loop(1, () => {
    k.add([
        k.rect(50, 50),
        k.pos(1000, 500),
        k.area(),
        k.body(),
        k.outline,
    ])
})

