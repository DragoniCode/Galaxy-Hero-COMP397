module scenes {
    export class Level2 extends objects.Level {
        // private instance variables
        private _bulletManager: managers.Bullet;
        private _powerUpManager: managers.PowerUps;

        // public properties

        // constructors

        constructor() {
            super();

            this.Start();
        }

        // private methods


        // public methods

        public Main(): void {

            // adds backgrounds to the stage
            for (let count = 0; count < this._backgroundNum; count++) {
                this.addChild(this._backgrounds[count]);
            }

            // adds meteorite to the scene
            this.addChild(this._meteorite);

            // adds player to the stage
            this.addChild(this._player);

            // adds bullets to the scene
            this._bulletManager.Bullets.forEach(bullet => {
                this.addChild(bullet);
            });

            // adds powerUps to the scene
            this._powerUpManager.PowerUps.forEach(powerUp => {
                this.addChild(powerUp);
            });

            // adds planets to the scene
            for (let count = 0; count < this._planetNum; count++) {
                this.addChild(this._planets[count]);
            }

            //adds enemies to the scene
            for (let count = 0; count < this._enemiesNum; count++) {
                this.addChild(this._enemies[count])
            }

            this.addChild(this._boss);

            // adds bullets to the scene
            this._bulletManager.Bullets.forEach(bullet => {
                this.addChild(bullet);
            });

            // this._scoreBoard = new managers.ScoreBoard();
            managers.Game.scoreBoard.AddGameUI(this);
        }
        public Start(): void {
            // managers.Game.scoreBoard.Reset();
            managers.Game.scoreBoard.Level += 1;

            this._planetNum = 1;
            this._backgroundNum = 2;
            this._enemiesNum = 2;

            // instantiates background array
            this._backgrounds = new Array<objects.Background>();
            // creates 2 backgrounds to have an infinte scroller
            for (let count = 0; count < this._backgroundNum; count++) {
                this._backgrounds[count] = new objects.Background("spaceBackground", config.Constants.verticalPlaySpeed);
            }
            // Places the second background in the Reset position instead of the Start position
            this._backgrounds[1].Reset();

            this._meteorite = new objects.Meteorite();
            this._boss = new objects.Boss();

            this._player = new objects.Player();
            managers.Game.player = this._player;


            // must do this to instantiate the array
            this._planets = new Array<objects.Planet>();
            this._enemies = new Array<objects.Enemies>();
            // adds planets to the array
            for (let count = 0; count < this._planetNum; count++) {
                this._planets[count] = new objects.Planet();
            }
            for (let count = 0; count < this._enemiesNum; count++) {
                this._enemies[count] = new objects.Enemies();
            }
            this._engineSound = createjs.Sound.play("spaceship");
            this._engineSound.volume = 0.3;
            this._engineSound.loop = -1;

               // instantiates a new bullet manager
            this._bulletManager = new managers.Bullet();
            managers.Game.bulletManager = this._bulletManager;

            // instantiates a new powerUp manager
            this._powerUpManager = new managers.PowerUps();
            managers.Game.powerUpManager = this._powerUpManager;

            this.SetupInput();

            this.Main();
        }

        public SetupInput(): void {
            this.on("mousedown", managers.Input.OnLeftMouseDown);
            this.addEventListener("keydown", managers.Input.KeyPressed);
            //this.on("keydown", managers.Input.KeyPressed);
        }

        public Update(): void {

            this._player.Update();

            this._meteorite.Update();
            managers.Collision.Check(this._player, this._meteorite);

            this._boss.Update();
            managers.Collision.Check(this._player, this._boss);

            // updates each planet in array
            this._planets.forEach(planet => {
                planet.Update();
                managers.Collision.Check(this._player, planet);
            });
            // updates each enemy in array
            this._enemies.forEach(enemy => {
                enemy.Update();
                managers.Collision.Check(this._player, enemy);
            });

            this._bulletManager.Update();
            this._bulletManager.Bullets.forEach(bullet => {
              managers.Collision.Check(this._player, bullet);
                this._enemies.forEach(enemy => {
                    managers.Collision.Check(bullet, enemy);
                });
            });

            this._powerUpManager.Update();
            this._powerUpManager.PowerUps.forEach(powerUp => {
                managers.Collision.Check(this._player, powerUp);
            });

            // updates background 0
            if (this._backgrounds[1].y >= 0 || this._backgrounds[1].y <= config.Constants.canvasHeight - this._backgrounds[1].Height) {
                this._backgrounds[0].Update();
            }

            // updates background 1
            if (this._backgrounds[0].y >= 0 || this._backgrounds[0].y <= config.Constants.canvasHeight - this._backgrounds[0].Height) {
                this._backgrounds[1].Update();
            }
        }
        public Reset(): void {}

        public Destroy(): void {
            this.removeAllChildren();
            this._engineSound.stop();
            this.off("mousedown",managers.Input.OnLeftMouseDown);
            this.removeEventListener("keydown", managers.Input.KeyPressed);
        }


    }
}