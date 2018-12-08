module scenes{
    export class Instructions extends objects.Scene{
        // private instance variables
        
        private _background:objects.Background;
        private _backButton:objects.Button;

        private _playerlbl:objects.Label;
        private _bomblbl:objects.Label;
        private _enemylbl:objects.Label;
        private _meteorlbl:objects.Label;

        private _player:objects.GameObject;
        private _bullet:objects.GameObject;
        private _bomb:objects.GameObject;
        private _enemy1:objects.GameObject;
        private _enemy2:objects.GameObject;
        private _enemy3:objects.GameObject;
        private _meteor1:objects.GameObject;
        private _meteor2:objects.GameObject;


        // public properties

        // constructors

        constructor() {
            super();

            this.Start();
        }

        // private methods


        // public methods

        public Main(): void {
            
            this.addChild(this._background);

            this.addChild(this._player);
            this.addChild(this._playerlbl);

            this.addChild(this._bullet);
            this.addChild(this._enemy1);
            this.addChild(this._enemy2);
            this.addChild(this._enemy3);
            this.addChild(this._enemylbl);

            this.addChild(this._bomb);
            this.addChild(this._bomblbl);
            
            this.addChild(this._meteor1);
            this.addChild(this._meteor2);
            this.addChild(this._meteorlbl);

            // adds ocean to the stage
            this.addChild(this._backButton);


            // event listeners

            // starts the play scene
            this._backButton.on("click", ()=>{
                managers.Game.currentState = config.Scene.START;
            })
        }        
        public Start(): void {
            // Instantiates objects
            // TODO Change string when back button added
            this._backButton = new objects.Button("startButton", 320, 440, true);
            this._background = new objects.Background("instructionsBackground");

            this._player = new objects.GameObject("player");
            this._player.x = 20;
            this._player.y = 20;
            this._playerlbl = new objects.Label("Use your mouse to move your ship and left click to shoot", "20px", "Consolas", "#FFFF00", 80, 40, false, 350);

            this._bullet = new objects.GameObject("bullet");
            this._bullet.x = 50;
            this._bullet.y = 190;
            this._enemy1 = new objects.GameObject("enemyLvl01_01");
            this._enemy1.x = 100;
            this._enemy1.y = 160;
            this._enemy2 = new objects.GameObject("enemies");
            this._enemy2.x = 110;
            this._enemy2.y = 110;
            this._enemy3 = new objects.GameObject("enemyLvl03_01");
            this._enemy3.x = 30;
            this._enemy3.y = 110;
            this._enemylbl = new objects.Label("Colliding with enemies and bullets makes you lose a life", "20px", "Consolas", "#FFFF00", 170, 130, false, 350);

            this._bomb = new objects.GameObject("bomb");
            this._bomb.x = 40;
            this._bomb.y = 240;
            this._bomblbl = new objects.Label("Press B to use your bomb. Use your bomb to destroy enemy bullets.", "20px", "Consolas", "#FFFF00", 80, 230, false, 350);
            
            this._meteor1 = new objects.GameObject("meteorite");
            this._meteor1.x = 30;
            this._meteor1.y = 300;
            this._meteor2 = new objects.GameObject("water");
            this._meteor2.x = 130;
            this._meteor2.y = 300;
            this._meteorlbl = new objects.Label("Collect meteors and water to gain lives and points", "20px", "Consolas", "#FFFF00", 280, 330, false, 350);
            
            this.Main();
        }
        public Update(): void {

        }
        public Reset(): void {
            
        }
        public Destroy(): void {
            this.removeAllChildren();
        }


    }
}