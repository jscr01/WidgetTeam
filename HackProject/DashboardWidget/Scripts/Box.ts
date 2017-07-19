namespace Tasks {
    export class Box {
        elements: CustomElement[] = [];
        boxColour: Colours = Colours.standard;
        nameElement: CustomElement;

        constructor(name: string, nameAlignment: Alignment = Alignment.middle) {
            this.elements.push(new CustomElement(name));
        }

        render() {
            return `<div class="box">${this.getElementsMarkup()}</div>`;
        }

        getElementsMarkup() {
            if (this.elements.length > 0) {
                let elementMarkup = "";
                this.elements.forEach((ele) => {
                    elementMarkup += ele.remder();
                });
                return elementMarkup;
            } else {
                return "";
            }
        }
    }

    export enum Colours {
        red,
        amber,
        standard
    }
   
}