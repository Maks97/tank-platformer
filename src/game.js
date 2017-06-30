// FUNDAMENTALS

        var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render:render })
        var player;
        var platform;
        var cursor;

        var score = 0;
        var text;

// PRELOADING (GRAPHICS, SFX ETC.)

        function preload() {
            game.load.image('bgr', "resources/background.png");
            game.load.image('plat', "resources/platform.png");
            game.load.spritesheet('tank', "resources/tank.png", 64, 51); // 64x51 spritesheet (weird I know)

        }
	

// CREATE GAME OBJECTS
        function create() {
                game.physics.startSystem(Phaser.Physics.ARCADE); // use arcade physics engine

		// background
                game.add.sprite(0,0,'bgr');

		// create platforms + enable physics for them
                platform = game.add.group();
                platform.enableBody = true;

		// create the ground
                var ground = platform.create(0, game.world.height-72, 'plat');
                ground.body.immovable = true;
                ground.scale.setTo(2,2);

		// create platforms
                var ledge = platform.create(-150, 250, 'plat');
                ledge.scale.setTo(0.5,0.5);
                ledge.body.immovable = true;

                ledge = platform.create(400,100, 'plat');
                ledge.scale.setTo(0.5,0.5);
                ledge.body.immovable = true;

                ledge = platform.create(600, 300, 'plat');
                ledge.scale.setTo(0.25,0.25);
                ledge.body.immovable = true;

		// create the player + anims
                player = game.add.sprite(32, game.world.height-510, 'tank')
                game.physics.arcade.enable(player) 
                player.body.gravity.y = 500
                player.body.collideWorldBounds = true;

                player.animations.add('still_r', [0], 30, true);
                player.animations.add('still_l',[4], 30, true);
                player.animations.add('jump_r', [2], 30, true);
                player.animations.add('jump_l', [7], 30, true);
                player.animations.add('shoot_r', [1], 30, false);
                player.animations.add('shoot_l', [5], 30, false);                       
                player.animations.add('shoot_jump_r', [3], 30, false);
                player.animations.add('shoot_jump_l', [6], 30, false);
        
}
        // updating game state
        function update() {
                // make player collide w/ platforms
                game.physics.arcade.collide(player,platform);

                 // movement + anims
                var cursor = game.input.keyboard.createCursorKeys(); 
                player.body.velocity.x = 0;

		// animation resets after jumping
                if (player.body.touching.down&&(player.frame==[2]||player.frame==[3])) player.animations.play('still_r') 
                        else if (player.body.touching.down&&(player.frame==[7]||player.frame==[6])) player.animations.play('still_l'); 

                if (cursor.left.isDown)
                        {
                                // left
                                player.body.velocity.x = -150;
                                if(player.body.touching.down) player.animations.play('still_l');
                                        else player.animations.play('jump_l');
                        }
                else if (cursor.right.isDown)
                        {
                                // right
                                player.body.velocity.x = 150;
                                if(player.body.touching.down) player.animations.play('still_r');
                                        else player.animations.play('jump_r');
                        };
                if (cursor.up.isDown && player.body.touching.down)
                        {
                                // jumping
                                player.body.velocity.y = -450;
                                if (player.frame==[4]||player.frame==[5]) player.animations.play('jump_l');
                                else player.animations.play('jump_r');
                        };     



        }

	// RENDERING

        function render() {
	// nothing unusual here so this is blank for now

        };
