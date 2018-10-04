var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Enemies = /** @class */ (function (_super) {
        __extends(Enemies, _super);
        // constructors
        function Enemies() {
            return _super.call(this, "enemies") || this;
        }
        // private methods
        Enemies.prototype._move = function () {
            this.y += this._verticalSpeed;
            this.x += this._horizontalSpeed;
        };
        Enemies.prototype._checkBounds = function () {
            if (this.y > 480 + this.Height) {
                this.Reset();
            }
        };
        // public methods
        Enemies.prototype.Start = function () {
            this.Reset();
        };
        Enemies.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Enemies.prototype.Reset = function () {
            this._verticalSpeed = Math.floor((Math.random() * 6) + 6); // speed from 5 to 10
            this._horizontalSpeed = Math.floor((Math.random() * 4) - 2); // speed from -2 to 2
            this.y = -this.Height;
            this.x = Math.floor(Math.random() * (640 - this.Width) + this.HalfWidth);
        };
        Enemies.prototype.Destroy = function () {
        };
        return Enemies;
    }(objects.gameObject));
    objects.Enemies = Enemies;
})(objects || (objects = {}));
//# sourceMappingURL=enemies.js.map