game.module(
    'game.main'
)

.require(
    'plugin.spine'
)

.body(function() {
    
game.addAsset('skeleton.atlas');
game.addAsset('skeleton.json');

game.createScene('Main', {
    init: function() {
        this.player = new game.Spine('skeleton.json');
        this.player.position.x = game.width / 2;
        this.player.position.y = game.height / 2;
        
        this.player.scale.x = 0.5;
        this.player.scale.y = 0.5;
        
        this.player.play('animation', true);
        
        this.player.addTo (this.stage);
    }
});



});
