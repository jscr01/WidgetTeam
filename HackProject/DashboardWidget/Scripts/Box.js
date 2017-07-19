var Tasks;
(function (Tasks) {
    var Box = (function () {
        function Box(name, nameAlignment) {
            if (nameAlignment === void 0) { nameAlignment = Tasks.Alignment.middle; }
            this.elements = [];
            this.boxColour = Colours.standard;
            this.elements.push(new Tasks.CustomElement(name));
        }
        Box.prototype.render = function () {
            return "<div class=\"box\">" + this.getElementsMarkup() + "</div>";
        };
        Box.prototype.getElementsMarkup = function () {
            if (this.elements.length > 0) {
                var elementMarkup_1 = "";
                this.elements.forEach(function (ele) {
                    elementMarkup_1 += ele.remder();
                });
                return elementMarkup_1;
            }
            else {
                return "";
            }
        };
        return Box;
    }());
    Tasks.Box = Box;
    var Colours;
    (function (Colours) {
        Colours[Colours["red"] = 0] = "red";
        Colours[Colours["amber"] = 1] = "amber";
        Colours[Colours["standard"] = 2] = "standard";
    })(Colours = Tasks.Colours || (Tasks.Colours = {}));
})(Tasks || (Tasks = {}));
