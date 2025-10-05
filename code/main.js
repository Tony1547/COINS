import kaplay from "kaplay"; 

const k = kaplay({
    width: 1280,
    height: 720,

});

k.loadBean();

const player = k.add([k.sprite("bean")]);




