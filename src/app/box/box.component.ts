import { Component } from "@angular/core";

@Component({
  selector: "box",
  templateUrl: "./box.component.html",
  styleUrls: ["./box.component.css"]
})
export class Box {
  colors: Array<string> = ["red", "yellow", "blue", "cyan", "green", "grey"];
  boxTitle: string = "Box";
  boxColor: string = "red";

  onBoxClick() {
    let randomColorIndex: number = Math.random() * (this.colors.length - 1) + 1;

    console.log(randomColorIndex);
    this.boxColor = this.colors[Math.ceil(randomColorIndex)];
  }

  getBoxColor() {
    return this.boxColor;
  }
}
