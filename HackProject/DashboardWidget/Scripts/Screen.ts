namespace Tasks {
    export class Screens {
        name: string;
        baseName: string = "Tasks";
        boxes: Box[] = [];

        constructor(name: string = "") {
            this.name = name;
        }

        getName() {
            return this.baseName + " " + this.name;
        }
        getBoxes() {
            
            if (this.boxes.length > 0) {
                let boxMarkup = "";
                this.boxes.forEach((box) => {
                    boxMarkup += box.render(); 
                })
                return boxMarkup;
            } else {
                return "";
            }
        }

        render() {
            return `<div>
                <h1> ${this.getName()}</h1>
            </div>
            <div>
                ${this.getBoxes()}
            </div>`;
        }


    }
}