module objects{
    export class Background extends objects.GameObject{
        
        // private instance variables
        private _verticalSpeed:number;

        // public properties

        // constructor
        /**
         *Creates an instance of Background.
         * @param {string} imageString
         * @param {number} [verticalSpeed=0]
         * @memberof Background
         */
        constructor(imageString:string, verticalSpeed:number = 0) {
            super(imageString);           
            this._verticalSpeed = verticalSpeed;
        }

        // private methods

        private _checkBounds():void {
            if(this.y >= config.Constants.canvasHeight){
                this.Reset();
            }
        }

        private _move():void {
            this.y += this._verticalSpeed;
        }

        // public methods

        public Start(): void {
            this.y = -this.Height + config.Constants.canvasHeight;
        }
        public Update(): void {
            this._move();      
            this._checkBounds();
        }
        public Reset(): void {
            this.y = -this.Height;
        }
        public Destroy(): void {

        }
    }
}