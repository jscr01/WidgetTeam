var Tasks;
(function (Tasks) {
    var Screens = (function () {
        function Screens(name) {
            if (name === void 0) { name = ""; }
            this.baseName = "Tasks";
            this.boxes = [];
            this.name = name;
        }
        Screens.prototype.getName = function () {
            return this.baseName + " " + this.name;
        };
        Screens.prototype.getBoxes = function () {
            if (this.boxes.length > 0) {
                var boxMarkup_1 = "";
                this.boxes.forEach(function (box) {
                    boxMarkup_1 += box.render();
                });
                return boxMarkup_1;
            }
            else {
                return "";
            }
        };
        Screens.prototype.render = function () {
            return "<div>\n                <h1> " + this.getName() + "</h1>\n            </div>\n            <div>\n                " + this.getBoxes() + "\n            </div>";
        };
        return Screens;
    }());
    Tasks.Screens = Screens;
})(Tasks || (Tasks = {}));
