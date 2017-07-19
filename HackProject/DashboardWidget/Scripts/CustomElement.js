var Tasks;
(function (Tasks) {
    var CustomElement = (function () {
        function CustomElement(text, elementType, nameAlignment) {
            if (elementType === void 0) { elementType = ElementType.text; }
            if (nameAlignment === void 0) { nameAlignment = Alignment.middle; }
            this.text = text;
            this.elementType = elementType;
            this.nameAlignment = nameAlignment;
        }
        CustomElement.prototype.remder = function () {
            return ("<div class=\"" + this.aligmentClass() + " {0}\">" + this.text + "</div>").replace("{0}", (this.elementType === ElementType.notification) ? "class=\"notification\"" : "");
        };
        CustomElement.prototype.aligmentClass = function () {
            switch (this.nameAlignment) {
                case Alignment.middle:
                    return "middle";
                case Alignment.topleft:
                    return "topleft";
                case Alignment.middleLeft:
                    return "middleLeft";
                case Alignment.bottonLeft:
                    return "bottomLeft";
                case Alignment.bottomRight:
                    return "bottomRight";
            }
        };
        return CustomElement;
    }());
    Tasks.CustomElement = CustomElement;
    var ElementType;
    (function (ElementType) {
        ElementType[ElementType["text"] = 0] = "text";
        ElementType[ElementType["notification"] = 1] = "notification";
    })(ElementType = Tasks.ElementType || (Tasks.ElementType = {}));
    var Alignment;
    (function (Alignment) {
        Alignment[Alignment["middle"] = 0] = "middle";
        Alignment[Alignment["topleft"] = 1] = "topleft";
        Alignment[Alignment["middleLeft"] = 2] = "middleLeft";
        Alignment[Alignment["bottonLeft"] = 3] = "bottonLeft";
        Alignment[Alignment["bottomRight"] = 4] = "bottomRight";
    })(Alignment = Tasks.Alignment || (Tasks.Alignment = {}));
})(Tasks || (Tasks = {}));
