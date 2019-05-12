var bankblaster = {};
var centerX=160;
var centerY=240;
var loadFlag=true;
bankblaster.load=function(){};
bankblaster.load.prototype={
    preload: function(){
        console.log("load");
        game.load.image("background",'level1/assets/background.jpg');
        game.load.image("title",'level1/assets/obj_Title.png');
        game.load.image("level1",'level1/assets/txt_lvl1.png')
        game.load.image("levelcleared",'level1/assets/txt_lvl_clr.png')
        game.load.image("levelfailed",'level1/assets/txt_lvl_fail.png')
        game.load.image("sky",'level1/assets/bg_sky_gradient.png');
        game.load.image("mountain",'level1/assets/bg_mountains.png');
        game.load.image("ground",'level1/assets/fg_ground.png');
        game.load.image("anton",'level1/assets/char_Anton.png');
        game.load.image("dinosaur",'level1/assets/char_dino.png');
        game.load.spritesheet('dinowalk', 'level1/assets/dino_walk.png', 66, 60, 3);
        game.load.image("tank",'level1/assets/obj_tank.png');
        game.load.image("right",'level1/assets/btn_right.png');
        game.load.image("left",'level1/assets/btn_left.png');
        game.load.image("fire",'level1/assets/btn_fire.png');
        game.load.image("bank1",'level1/assets/obj_bank1.png');
        game.load.image("bank2",'level1/assets/obj_bank2.png');
        game.load.image("bank3",'level1/assets/obj_bank3.png');
        game.load.image("bullet",'level1/assets/bullet.png');
        game.load.audio("music",'level1/assets/soundtrack.mp3');


    },
    create: function() {
        game.stage.backgroundColor="#dddddd";
        game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        var background=game.add.sprite(centerX,centerY,'background');
        background.anchor.setTo(0.5,0.5);
        var title=game.add.sprite(centerX,100,'title');
        title.anchor.setTo(0.5,0.5);
        title.scale.setTo(0.25,0.25);
        var text = game.add.text(centerX,centerY, "Loading . . .",{
            font: "40px Arial",
            fill: "#ff0044",
            align: "center"
        });
        text.anchor.set(0.5);

    },

    update: function() {
        if(loadFlag){
            loadFlag=true;
            console.log("call menu");
            game.state.start('menu',true,false);
        }
    },

    onPlayClick: function(){

    }
}
