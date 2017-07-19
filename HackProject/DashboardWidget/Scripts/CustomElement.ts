namespace Tasks {
    export class CustomElement {
        
        constructor(public text: string, public elementType: ElementType = ElementType.text, public nameAlignment: Alignment = Alignment.middle) { }

        remder() {
            return `<div class="${this.aligmentClass()} {0}">${this.text}</div>`.replace("{0}", (this.elementType === ElementType.notification) ? "class=\"notification\"" : "");
        }

        aligmentClass() {
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
        }
    }
    export enum ElementType {
        text,
        notification
    }
    export enum Alignment {
        middle,
        topleft,
        middleLeft,
        bottonLeft,
        bottomRight
    }

}